import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactSchema, GENERAL_ENQUIRY } from "@/lib/contact-schema";
import { servicesNav } from "@/content/site";

/**
 * POST /api/contact — real contact-form endpoint (replaces the legacy fake form).
 *
 * Order of defence: Content-Type check -> JSON parse -> honeypot -> rate
 * limit -> zod validation -> Resend send. Dev mode (no RESEND_API_KEY) logs
 * the payload and returns ok so the form flow stays testable locally; a
 * production deploy without the key fails loudly instead of silently
 * dropping enquiries.
 */

const RATE_LIMIT_MAX = 5; // requests…
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // …per hour, per IP (sliding window)

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

function serviceLabel(slug: string): string {
  if (slug === GENERAL_ENQUIRY) return "General enquiry";
  return servicesNav.find((s) => s.slug === slug)?.label ?? slug;
}

export async function POST(request: NextRequest) {
  try {
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

    // Honeypot tripped: pretend success so bots learn nothing, send nothing.
    if (
      body !== null &&
      typeof body === "object" &&
      typeof (body as Record<string, unknown>).company === "string" &&
      ((body as Record<string, unknown>).company as string).trim() !== ""
    ) {
      return NextResponse.json({ ok: true });
    }

    const { limited, retryAfterSeconds } = rateLimit(clientIp(request), Date.now());
    if (limited) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const { fieldErrors } = z.flattenError(parsed.error);
      return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400 });
    }

    const data = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      if (process.env.NODE_ENV === "production") {
        // Missing key in production is a deploy error — fail loudly rather
        // than silently logging (and dropping) every enquiry.
        console.error("[contact] RESEND_API_KEY missing in production");
        return NextResponse.json({ ok: false }, { status: 500 });
      }
      // Dev mode: no key configured — log and succeed so the flow is testable.
      console.log(
        "[contact] dev-mode submission (no RESEND_API_KEY):",
        JSON.stringify(data),
      );
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM ?? "CYBEROCO Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "info@cyberoco.tech",
      replyTo: data.email,
      subject: `New enquiry: ${serviceLabel(data.service)} — ${data.name}`,
      text: [
        `New enquiry from the CYBEROCO website`,
        ``,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Service: ${serviceLabel(data.service)}`,
        `Budget: ${data.budget || "Not specified"}`,
        ``,
        `Message:`,
        data.message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    // Unexpected failure: generic 500, never leak internals.
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
