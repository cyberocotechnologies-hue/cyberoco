import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Hospitality Cyber Security",
  description:
    "PCI DSS for multi-property estates, POS/PMS testing and GDPR support for hospitality businesses.",
  alternates: { canonical: "/industries/hospitality" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you test across multiple properties in one engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Multi-property estates are common in hospitality — we scope testing across sites and consolidate findings into a single report with per-property detail.",
      },
    },
    {
      "@type": "Question",
      name: "Do you review network segmentation between guest and back-office systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is a core part of hospitality engagements given how often guest and payment systems share infrastructure with back-office networks.",
      },
    },
  ],
};

export default function HospitalityPage() {
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
        <p className="text-label c-gray-999 mb-10">Hospitality</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Guest data.
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Guarded everywhere.
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
                Multi-property hospitality estates run POS and PMS systems
                across dozens of sites — every one of them a potential entry
                point, and every one of them in scope.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> hotel groups, multi-property estates,
              and hospitality businesses handling guest payment and personal
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
              PCI DSS — multi-property estates
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Network segmentation
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR — guest data
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
              POS & PMS system testing across properties
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Network segmentation review & validation
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              PCI DSS-aligned assessment for multi-site estates
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR gap assessment for guest data handling
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
            <p className="faq-q">
              Can you test across multiple properties in one engagement?
            </p>
            <p className="faq-a">
              Yes. Multi-property estates are common in hospitality — we scope
              testing across sites and consolidate findings into a single
              report with per-property detail.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Do you review network segmentation between guest and back-office
              systems?
            </p>
            <p className="faq-a">
              Yes, this is a core part of hospitality engagements given how
              often guest and payment systems share infrastructure with
              back-office networks.
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
              Let's scope your hospitality engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Hospitality →
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