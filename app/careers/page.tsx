import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CYBEROCO — open roles in penetration testing, compliance, secure development and AI automation.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section
        className="container"
        style={{
          paddingTop: "9rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-10">Careers</p>
        <h1 className="max-w-5xl">
          <Reveal variant="lines">
            <div className="reveal-line mb-1">
              <span
                className="careers-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Work on problems
              </span>
            </div>
            <div className="reveal-line">
              <span
                className="careers-hero-line text-display c-gray-ccc"
                style={{ display: "block", lineHeight: 1 }}
              >
                that actually matter.
              </span>
            </div>
          </Reveal>
        </h1>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Why CYBEROCO</p>
            <p className="text-subheading leading-relaxed c-gray-333">
              We’re a small, independent team — every consultant here does real
              testing, not just report review.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555">
            <p>
              You’ll work directly with clients across financial services,
              healthcare, SaaS and more, on engagements that get read by boards
              and auditors, not filed and forgotten.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">What it’s like here</p>
        <Reveal variant="scale" className="value-grid">
          <div className="value-item">
            <span className="text-label c-gray-ccc">01</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Autonomy
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              You own your engagements end to end — scoping conversations,
              testing, and the client debrief. No layers of handoff between you
              and the work.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">02</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Continuous learning
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Certification costs and study time are covered. We expect you to
              keep learning, and we back that with budget and time, not just
              encouragement.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">03</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Flexibility
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Remote-friendly by default. We care about the quality of the work
              and how you treat clients, not which hours you’re logged in.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">04</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Real impact
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Small team, direct client contact. Your findings shape real
              remediation work, not a report that sits in a compliance folder.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="roles">
        <p className="text-label c-gray-999 mb-12">Open roles</p>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 82%"
          className="flex flex-col"
        >
          <Link href="/contact" className="service-row job-row">
            <div className="service-row-left">
              <span className="text-label service-num">01</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Penetration Tester — Web &amp; API
              </h3>
            </div>
            <p className="service-desc">Remote (EU/UK) · Full-time</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row job-row">
            <div className="service-row-left">
              <span className="text-label service-num">02</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Senior Security Consultant
              </h3>
            </div>
            <p className="service-desc">Remote (EU/UK) · Full-time</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row job-row">
            <div className="service-row-left">
              <span className="text-label service-num">03</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                QSA / Compliance Lead
              </h3>
            </div>
            <p className="service-desc">Remote (EU/UK) · Full-time</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row job-row">
            <div className="service-row-left">
              <span className="text-label service-num">04</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                AI Automation Engineer
              </h3>
            </div>
            <p className="service-desc">Remote (EU/UK) · Full-time</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row job-row">
            <div className="service-row-left">
              <span className="text-label service-num">05</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Full-Stack Developer — Secure Development
              </h3>
            </div>
            <p className="service-desc">Remote (EU/UK) · Full-time</p>
            <span className="service-arrow">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">Benefits</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Certification &amp; training budget (OSCP, CREST, etc.)
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Remote-friendly, flexible working hours
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Competitive compensation, reviewed annually
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Conference &amp; community attendance covered
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Direct client exposure from day one
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section bg-black no-border" id="careers-cta">
        <Reveal variant="fadeUp" stagger={0}>
          <div
            className="careers-cta-content flex flex-col md-flex-row items-center justify-between"
            style={{ gap: "2.5rem" }}
          >
            <div>
              <p className="text-label mb-4" style={{ color: "#999" }}>
                Don’t see the right role?
              </p>
              <h2 className="text-headline c-white max-w-xl">
                Get in touch anyway.
              </h2>
            </div>
            <Link
              href="/contact"
              className="btn-outline shrink-0"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Get in touch →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
