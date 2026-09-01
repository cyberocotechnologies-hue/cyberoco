import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Healthcare Cyber Security",
  description:
    "DSPT, ISO 27001 and GDPR-aligned cyber security and ransomware preparedness for NHS bodies and HealthTech.",
  alternates: { canonical: "/industries/healthcare" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you support a DSPT submission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We map findings and evidence directly to DSPT assertions so they drop straight into your submission.",
      },
    },
    {
      "@type": "Question",
      name: "Do you test clinical systems without disrupting patient care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We agree testing windows and any out-of-scope clinical systems with you upfront, and can test against non-production environments where patient safety requires it.",
      },
    },
  ],
};

export default function HealthcarePage() {
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
        <p className="text-label c-gray-999 mb-10">Healthcare</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Patient data.
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Protected properly.
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
                Healthcare organisations hold some of the most sensitive data
                there is, on infrastructure that can't afford downtime — which
                makes ransomware preparedness as important as any single test.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> NHS bodies, HealthTech companies,
              clinics, and any organisation handling special category health
              data.
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
              DSPT (Data Security & Protection Toolkit)
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              ISO 27001
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR — special category data
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Ransomware preparedness
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
              DSPT-aligned assessment & evidence support
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Ransomware readiness review & incident playbooks
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Clinical system & patient portal penetration testing
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR gap assessment for special category data
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
            href="/services/cybersecurity-services#web-api-pentest"
            className="engagement-item"
          >
            <h3>Web & API Penetration Test</h3>
            <p>
              Manual, methodology-led testing of your web application and its
              APIs.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/cybersecurity-services#vulnerability-assessment"
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
            <p className="faq-q">Can you support a DSPT submission?</p>
            <p className="faq-a">
              Yes. We map findings and evidence directly to DSPT assertions so
              they drop straight into your submission.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Do you test clinical systems without disrupting patient care?
            </p>
            <p className="faq-a">
              Yes. We agree testing windows and any out-of-scope clinical
              systems with you upfront, and can test against non-production
              environments where patient safety requires it.
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
              Let's scope your healthcare engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Healthcare →
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