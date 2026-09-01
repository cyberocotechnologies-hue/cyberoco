import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "SaaS & Technology Cyber Security",
  description:
    "SOC 2 and ISO 27001-aligned continuous pentesting and cloud security for SaaS and technology companies.",
  alternates: { canonical: "/industries/saas-technology" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can we reuse one pentest report across multiple enterprise deals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most of our SaaS clients run one annual or continuous engagement and reuse the resulting report across procurement cycles, rather than re-testing per deal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you review our cloud infrastructure, not just the app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cloud configuration and architecture review is a standard part of engagements for SaaS and technology clients.",
      },
    },
  ],
};

export default function SaasTechnologyPage() {
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
        <p className="text-label c-gray-999 mb-10">SaaS & Technology</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Ship fast.
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Prove it's secure.
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
                Enterprise buyers now expect security evidence before they'll
                sign — SOC 2 and ISO 27001 reports, recent pentest results, and
                a credible answer to their security questionnaire.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> SaaS products, platforms, and
              technology companies moving through enterprise procurement.
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
              SOC 2
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              ISO 27001
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Cloud security (AWS / GCP / Azure)
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
              Continuous / recurring penetration testing for evidence reuse
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Cloud configuration & architecture review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              SOC 2 and ISO 27001 evidence-ready reporting
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Security questionnaire & enterprise procurement support
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
            href="/services/api-penetration-testing"
            className="engagement-item"
          >
            <h3>API Penetration Testing</h3>
            <p>Focused testing of REST, GraphQL and internal APIs.</p>
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
              Can we reuse one pentest report across multiple enterprise deals?
            </p>
            <p className="faq-a">
              Yes — most of our SaaS clients run one annual or continuous
              engagement and reuse the resulting report across procurement
              cycles, rather than re-testing per deal.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Do you review our cloud infrastructure, not just the app?
            </p>
            <p className="faq-a">
              Yes. Cloud configuration and architecture review is a standard
              part of engagements for SaaS and technology clients.
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
              Let's scope your SaaS engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about SaaS & Technology →
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