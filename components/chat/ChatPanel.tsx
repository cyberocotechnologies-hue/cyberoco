"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type TextUIPart, type UIMessage } from "ai";

const INTRO_MESSAGE: UIMessage = {
  id: "aria-intro",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi, I'm ARIA, CYBEROCO's assistant. Ask me about our services — or anything cyber.",
    },
  ],
};

const MAX_HISTORY = 10;

function textOfMessage(message: UIMessage): string {
  return message.parts
    .filter((part): part is TextUIPart => part.type === "text")
    .map((part) => part.text)
    .join("");
}

function toApiMessages(messages: UIMessage[]) {
  return messages
    .map((message) => ({ role: message.role, content: textOfMessage(message) }))
    .filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") && message.content.length > 0,
    )
    .slice(-MAX_HISTORY);
}

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        prepareSendMessagesRequest: ({ messages }) => ({
          body: { messages: toApiMessages(messages) },
        }),
      }),
    [],
  );

  const { messages, sendMessage, stop, status, error, clearError } = useChat({
    messages: [INTRO_MESSAGE],
    transport,
  });

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const streaming = status === "submitted" || status === "streaming";
  const failed = status === "error" && error !== undefined;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
  }, [messages, failed]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || streaming) return;
    if (status === "error") clearError();
    setInput("");
    void sendMessage({ text });
  }

  return (
    <section className="chat-panel" aria-label="Chat with ARIA">
      <header className="chat-panel-header">
        <span>ARIA — CYBEROCO assistant</span>
        <button
          type="button"
          className="chat-panel-close"
          aria-label="Close chat"
          onClick={onClose}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>
      <div className="chat-panel-body" role="log" aria-live="polite">
        {messages.map((message) => {
          const text = textOfMessage(message);
          if (!text) return null;
          return (
            <p key={message.id} className={message.role === "user" ? "chat-msg user" : "chat-msg"}>
              {text}
            </p>
          );
        })}
        {failed && (
          <p className="chat-msg">
            Chat is unavailable right now. Email{" "}
            <a href="mailto:info@cyberoco.tech">info@cyberoco.tech</a> and we'll reply within a day.
          </p>
        )}
        <div ref={endRef} aria-hidden="true" />
      </div>
      <form className="chat-panel-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="chat-input"
          type="text"
          value={input}
          maxLength={800}
          aria-label="Message"
          placeholder="Ask about our services…"
          autoComplete="off"
          onChange={(event) => setInput(event.target.value)}
          disabled={streaming}
        />
        {streaming ? (
          <button
            type="button"
            className="chat-stop"
            aria-label="Stop generating"
            onClick={() => {
              void stop();
            }}
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            className="btn-fill chat-send"
            aria-label="Send"
            disabled={!input.trim()}
          >
            Send
          </button>
        )}
      </form>
      <p className="chat-panel-note">
        AI assistant — answers may be imperfect. For engagements, use our contact form.
      </p>
    </section>
  );
}
