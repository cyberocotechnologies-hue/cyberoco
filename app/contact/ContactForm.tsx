"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Reveal from "@/components/motion/Reveal";
import { servicesNav, site } from "@/content/site";
import {
  BUDGET_OPTIONS,
  GENERAL_ENQUIRY,
  contactSchema,
  type ContactInput,
} from "@/lib/contact-schema";

type FormStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submittedName, setSubmittedName] = useState("");
  const successRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      service: GENERAL_ENQUIRY,
      budget: "",
      message: "",
      company: "",
    },
  });

  const budget = useWatch({ control, name: "budget" });

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const onSubmit = async (values: ContactInput) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`Contact submission failed: ${response.status}`);
      }
      setSubmittedName(values.name);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="contact-success"
        role="status"
        aria-live="polite"
        ref={successRef}
        tabIndex={-1}
      >
        <div style={{ width: "2.5rem", height: "1px", background: "var(--black)" }} />
        <p className="text-label c-gray-999">Message received</p>
        <h2 className="text-headline">Thank you, {submittedName}.</h2>
        <p className="text-sm c-gray-666 max-w-sm leading-relaxed">
          We&rsquo;ve received your brief and will be in touch within 24 hours.
          Expect a thoughtful response &mdash; not a template.
        </p>
      </div>
    );
  }

  return (
    <form id="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Reveal variant="fadeUp" stagger={0.08}>
        <div className="contact-field field" style={{ marginBottom: "2.5rem" }}>
          <label htmlFor="name">Full name *</label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <span className="field-error" id="name-error" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="contact-field field" style={{ marginBottom: "2.5rem" }}>
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <span className="field-error" id="email-error" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="contact-field field" style={{ marginBottom: "2.5rem" }}>
          <label htmlFor="service">Service you&rsquo;re interested in</label>
          <select id="service" {...register("service")}>
            <option value={GENERAL_ENQUIRY}>General enquiry</option>
            {servicesNav.map(({ slug, label }) => (
              <option key={slug} value={slug}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-field field" style={{ marginBottom: "2.5rem" }}>
          <label id="budget-label">Estimated budget</label>
          <div
            className="pill-group"
            id="budget-group"
            role="group"
            aria-labelledby="budget-label"
          >
            {BUDGET_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={budget === option ? "pill-btn active" : "pill-btn"}
                aria-pressed={budget === option}
                onClick={() => setValue("budget", option, { shouldValidate: true })}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="contact-field field" style={{ marginBottom: "2rem" }}>
          <label htmlFor="message">Tell us about your project *</label>
          <textarea
            id="message"
            rows={6}
            placeholder="What are you building? What's the challenge? What does success look like?"
            aria-required="true"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <span className="field-error" id="message-error" role="alert">
              {errors.message.message}
            </span>
          )}
        </div>
      </Reveal>

      {/* Honeypot: hidden from humans, filled by bots. Server rejects silently. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="btn-fill"
          id="submit-btn"
          disabled={isSubmitting}
          style={{ alignSelf: "flex-start" }}
        >
          {isSubmitting ? "Sending\u2026" : "Send message \u2192"}
        </button>
        {status === "error" && (
          <p className="text-xs" id="form-error-msg" role="alert">
            Something went wrong. Please email us directly at{" "}
            <a
              href={`mailto:${site.email}`}
              style={{ textDecoration: "underline" }}
            >
              {site.email}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}