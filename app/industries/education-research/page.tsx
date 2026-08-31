import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Education & Research Cyber Security",
  description:
    "Jisc-aligned pentesting, GDPR and ISO 27001-aligned cyber security for education and research institutions.",
  alternates: { canonical: "/industries/education-research" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you follow Jisc-aligned testing methodology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our penetration testing methodology for education clients is aligned with Jisc expectations, alongside general OWASP-based coverage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help protect research IP specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — research IP protection is a distinct part of scoping for education and research clients, separate from standard student data protection.",
      },
    },
  ],
};

export default function EducationResearchPage() {
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
        <p className="text-label c-gray-999 mb-10">Education & Research</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Research protected.
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Data respected.
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
                Universities and research institutions hold valuable IP and
                vast amounts of student data, often across sprawling,
                decentralised networks — a genuinely different risk profile
                from a typical enterprise.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> universities, research institutions,
              and education providers with commercial or research-facing
              activity.
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
              Jisc-aligned pentesting
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR — student data
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              ISO 27001 — commercial activity
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
              Jisc-aligned penetration testing methodology
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Research IP protection review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR gap assessment for student data
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              ISO 27001-aligned assessment for commercial/spin-out activity
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
            <p className="faq-q">Do you follow Jisc-aligned testing methodology?</p>
            <p className="faq-a">
              Yes, our penetration testing methodology for education clients is
              aligned with Jisc expectations, alongside general OWASP-based
              coverage.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Can you help protect research IP specifically?</p>
            <p className="faq-a">
              Yes — research IP protection is a distinct part of scoping for
              education and research clients, separate from standard student
              data protection.
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
              Let's scope your education & research engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Education & Research →
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