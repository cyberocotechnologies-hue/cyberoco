import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/content/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CYBEROCO. Tell us about your engagement and we'll reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="container"
        style={{
          paddingTop: "9rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-10">Get in touch</p>
        <h1 className="max-w-4xl">
          <Reveal variant="lines">
            <div className="reveal-line mb-1">
              <span
                className="contact-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Let&rsquo;s talk
              </span>
            </div>
            <div className="reveal-line">
              <span
                className="contact-hero-line text-display c-gray-ccc"
                style={{ display: "block", lineHeight: 1 }}
              >
                about your idea.
              </span>
            </div>
          </Reveal>
        </h1>
      </section>

      {/* ── Form + Info ── */}
      <section className="section">
        <div className="contact-grid">
          {/* ── Form column ── */}
          <div className="contact-form-col">
            <ContactForm />
          </div>

          {/* ── Info column ── */}
          <Reveal variant="fadeIn" stagger={0.1} className="contact-info-col">
            <div className="contact-info-block flex flex-col gap-2">
              <p className="text-label c-gray-999">Email</p>
              <a href={`mailto:${site.email}`} className="nav-link text-sm">
                {site.email}
              </a>
            </div>

            <div className="contact-info-block flex flex-col gap-2">
              <p className="text-label c-gray-999">Response time</p>
              <p className="text-sm c-gray-444">
                We reply to all enquiries within 24 hours — usually much faster.
              </p>
            </div>

            <div className="contact-info-block flex flex-col gap-4">
              <p className="text-label c-gray-999">Our process</p>
              <div className="process-step">
                <span className="text-label process-num">01</span>
                <p className="process-text">We review your brief carefully.</p>
              </div>
              <div className="process-step">
                <span className="text-label process-num">02</span>
                <p className="process-text">30-minute discovery call — no pitch.</p>
              </div>
              <div className="process-step">
                <span className="text-label process-num">03</span>
                <p className="process-text">Detailed proposal &amp; timeline.</p>
              </div>
              <div className="process-step">
                <span className="text-label process-num">04</span>
                <p className="process-text">Kickoff. We get to work.</p>
              </div>
            </div>

            <div className="contact-info-block divider-thin"></div>

            <div className="contact-info-block flex flex-col gap-2">
              <p className="text-label c-gray-999">Availability</p>
              <div className="flex items-center gap-2">
                <span className="availability-dot" aria-hidden="true"></span>
                <p className="text-sm c-gray-333">Accepting projects for Q4 2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}