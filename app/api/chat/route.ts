import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  APICallError,
  RetryError,
  createTextStreamResponse,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type TextStreamPart,
  type ToolSet,
} from "ai";
import { createGoogle } from "@ai-sdk/google";
import { buildSystemPrompt } from "@/lib/chat-system-prompt";

/**
 * POST /api/chat — streaming endpoint for ARIA, the CYBEROCO website
 * assistant.
 *
 * Order of defence mirrors /api/contact: Content-Type check -> JSON parse ->
 * rate limit -> zod validation -> provider call. Dev mode (no
 * GEMINI_API_KEY) returns a canned text stream so the UI stays testable
 * locally; production without the key fails loudly instead.
 *
 * Streaming error strategy: the response is held back until the provider has
 * either produced content or failed, so pre-flight provider failures (429
 * rate limit, quota, auth) surface as JSON errors with a proper status code
 * rather than a 200 stream that dies mid-flight. Errors that occur after the
 * first content chunk are masked to a generic message — provider messages
 * and stack traces never reach the client.
 */

export const maxDuration = 30;

const RATE_LIMIT_MAX = 30; // requests…
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // …per hour, per IP (sliding window)

const MAX_MESSAGES = 12;
const DEFAULT_MODEL = "gemini-2.5-flash-lite";

const chatRequestSchema = z
  .object({
    messages: z
      .array(
        z.object({
          role: z.enum(["user", "assistant"], "Invalid message role."),
          content: z
            .string()
            .min(1, "Message content is required.")
            .max(800, "Message content must be 800 characters or fewer."),
        }),
      )
      .min(1, "At least one message is required.")
      .max(MAX_MESSAGES, "Too many messages."),
  })
  .refine((data) => data.messages[data.messages.length - 1]?.role === "user", {
    message: "The last message must be from the user.",
    path: ["messages"],
  });

const hits = new Map<string, number[]>();
let lastSweep = 0;

function clientIp(request: NextRequest): string {
  // Rate-limit key derived from the RIGHTMOST x-forwarded-for entry: a trusted
  // reverse proxy appends the real client IP, so the rightmost value is
  // proxy-controlled and cannot be spoofed by the client (leftmost entries are
  // client-supplied on append-mode proxies). Vercel overwrites the header
  // entirely, so the single entry it sets is the real client IP.
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded?.split(",").pop()?.trim() || "unknown").slice(0, 45);
}

function rateLimit(
  ip: string,
  now: number,
): { limited: boolean; retryAfterSeconds: number } {
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    // Seconds until the oldest timestamp still inside the window expires.
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((recent[0] + RATE_LIMIT_WINDOW_MS - now) / 1000),
    );
    return { limited: true, retryAfterSeconds };
  }

  recent.push(now);
  hits.set(ip, recent);

  // Periodic sweep of stale entries (at most once per window) so the Map
  // cannot grow unbounded in a long-lived process.
  if (now - lastSweep > RATE_LIMIT_WINDOW_MS) {
    lastSweep = now;
    for (const [key, timestamps] of hits) {
      if (!timestamps.some((t) => t > windowStart)) hits.delete(key);
    }
  }

  return { limited: false, retryAfterSeconds: 0 };
}

/**
 * Whether a provider failure means "busy" (rate limit / quota) rather than a
 * genuine server fault. streamText retries internally, so the failure is
 * usually wrapped in a RetryError once retries are exhausted.
 */
function isProviderBusyError(error: unknown): boolean {
  const cause = RetryError.isInstance(error) ? error.lastError : error;
  return (
    APICallError.isInstance(cause) &&
    (cause.statusCode === 429 || cause.statusCode === 402)
  );
}

/** Dev-mode stand-in stream so the chat UI works without a GEMINI_API_KEY. */
function devCannedStream(): Response {
  const stream = new ReadableStream<string>({
    start(controller) {
      controller.enqueue(
        "Hello! I'm ARIA, the CYBEROCO assistant. Chat is running in development mode without a GEMINI_API_KEY, so this is a canned reply. Ask me about our cyber security, secure development or AI automation services - or email info@cyberoco.tech.",
      );
      controller.close();
    },
  });
  return createTextStreamResponse({ stream });
}

export async function POST(request: NextRequest) {
  try {
    if (process.env.CHAT_DISABLED === "1") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Chat is temporarily unavailable. Please email info@cyberoco.tech.",
        },
        { status: 503 },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.split(";")[0]?.trim().toLowerCase() !== "application/json") {
      return NextResponse.json(
        { ok: false, error: "Content-Type must be application/json." },
        { status: 400 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const { limited, retryAfterSeconds } = rateLimit(
      clientIp(request),
      Date.now(),
    );
    if (limited) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
      );
    }

    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) {
      const { fieldErrors } = z.flattenError(parsed.error);
      return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      if (process.env.NODE_ENV === "production") {
        // Missing key in production is a deploy error — fail loudly rather
        // than silently serving a broken chat.
        console.error("[chat] GEMINI_API_KEY missing in production");
        return NextResponse.json({ ok: false }, { status: 500 });
      }
      // Dev mode: no key configured — stream a canned reply so the chat
      // flow stays testable locally.
      console.log("[chat] dev-mode request (no GEMINI_API_KEY): canned stream");
      return devCannedStream();
    }

    // The default `google` instance reads GOOGLE_GENERATIVE_AI_API_KEY; this
    // deployment standardises on GEMINI_API_KEY, so build the provider with
    // the key passed explicitly.
    const provider = createGoogle({ apiKey });

    const result = streamText({
      model: provider.chat(process.env.CHAT_MODEL ?? DEFAULT_MODEL),
      instructions: buildSystemPrompt(),
      messages: parsed.data.messages,
      maxOutputTokens: 350,
      temperature: 0.3,
      onError: (error) => {
        // Server-side log only; the client never sees provider details.
        console.error("[chat] streaming error:", error);
      },
    });

    // Hold the response until the provider produces content or fails, so
    // pre-flight failures can still be answered with a real status code.
    const reader = result.stream.getReader();
    const buffered: Array<TextStreamPart<ToolSet>> = [];
    let streamError: unknown;
    let failed = false;

    for (;;) {
      let part: TextStreamPart<ToolSet>;
      try {
        const { value, done } = await reader.read();
        if (done) break;
        part = value;
      } catch (error) {
        streamError = error;
        failed = true;
        break;
      }
      buffered.push(part);
      if (part.type === "error") {
        streamError = part.error;
        failed = true;
        break;
      }
      // Any generated content proves the provider call itself succeeded.
      if (part.type === "text-delta" || part.type === "reasoning-delta") {
        break;
      }
    }

    if (failed) {
      if (isProviderBusyError(streamError)) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Chat is busy right now - please try again shortly or email info@cyberoco.tech.",
          },
          { status: 503 },
        );
      }
      console.error("[chat] provider call failed before any content was generated");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    // Replay the parts consumed while probing, then forward everything still
    // queued behind the same reader.
    const replay = new ReadableStream<TextStreamPart<ToolSet>>({
      start(controller) {
        for (const part of buffered) controller.enqueue(part);
      },
      async pull(controller) {
        try {
          const { done, value } = await reader.read();
          if (done) controller.close();
          else controller.enqueue(value);
        } catch (error) {
          controller.error(error);
        }
      },
    });

    const uiStream = toUIMessageStream({
      stream: replay,
      // Gemini is a thinking model: keep its internal reasoning server-side.
      sendReasoning: false,
      // Mask mid-stream failures — never forward provider messages.
      onError: () =>
        "Sorry - something went wrong. Please try again or email info@cyberoco.tech.",
    });

    return createUIMessageStreamResponse({ stream: uiStream });
  } catch {
    // Unexpected failure: generic 500, never leak internals.
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}