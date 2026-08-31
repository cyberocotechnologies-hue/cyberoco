import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Cyber Security",
  description:
    "IEC 62443-aligned IT and safe OT/ICS security assessment for manufacturing and industrial businesses.",
  alternates: { canonical: "/industries/manufacturing-industrial" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is OT/ICS testing safe to run on live production lines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our OT/ICS assessments use a non-disruptive methodology specifically because uptime matters — we agree scope and testing windows carefully before touching anything live.",
      },
    },
    {
      "@type": "Question",
      name: "Are you familiar with NIS Regulations requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our reporting can be mapped to NIS Regulations readiness alongside IEC 62443-aligned findings.",
      },
    },
  ],
};

export default function ManufacturingIndustrialPage() {
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
        <p className="text-label c-gray-999 mb-10">Manufacturing & Industrial</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              IT and OT,
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              tested safely.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Overview</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 ind-detail-line">
                Industrial environments can't tolerate the downtime a standard
                pentest risks — OT and ICS assessment needs a methodology built
                for uptime, not just coverage.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> manufacturers and industrial
              businesses running IT and OT/ICS environments side by side.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">Frameworks & standards</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            start="top 87%"
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              IEC 62443-aligned methodology
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              NIS Regulations readiness
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">What's included</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            start="top 87%"
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              IT network penetration testing
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Safe, non-disruptive OT/ICS security assessment
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              IEC 62443-aligned methodology & reporting
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              NIS Regulations readiness review
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Related services</p>
          <h2 className="text-headline max-w-2xl">Ways we typically start.</h2>
        </div>
        <div className="engagement-grid">
          <Link
            href="/services/threat-risk-assessment"
            className="engagement-item"
          >
            <h3>Risk Assessments</h3>
            <p>
              Structured evaluation of your threat landscape, mapped to
              business impact.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/cyber-security-services#vulnerability-assessment"
            className="engagement-item"
          >
            <h3>Vulnerability Assessments</h3>
            <p>
              Broad, verified scanning to surface and prioritise exploitable
              weaknesses.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/cyber-security-services#web-api-pentest"
            className="engagement-item"
          >
            <h3>Web & API Penetration Test</h3>
            <p>
              Manual, methodology-led testing of your web application and its
              APIs.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
        </div>
      </section>

      <section
        className="container"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-12">Common questions</p>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 85%"
          className="max-w-3xl"
        >
          <div className="faq-item">
            <p className="faq-q">
              Is OT/ICS testing safe to run on live production lines?
            </p>
            <p className="faq-a">
              Our OT/ICS assessments use a non-disruptive methodology
              specifically because uptime matters — we agree scope and testing
              windows carefully before touching anything live.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Are you familiar with NIS Regulations requirements?
            </p>
            <p className="faq-a">
              Yes, our reporting can be mapped to NIS Regulations readiness
              alongside IEC 62443-aligned findings.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready?</p>
            <h2 className="text-headline max-w-lg">
              Let's scope your manufacturing engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Manufacturing & Industrial →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}