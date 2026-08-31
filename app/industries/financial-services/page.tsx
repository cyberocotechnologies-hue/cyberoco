import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Financial Services Cyber Security",
  description:
    "SOC 2, ISO 27001, PCI DSS and SWIFT CSP-aligned cyber security for banks, fintech and payment institutions.",
  alternates: { canonical: "/industries/financial-services" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you test against SWIFT CSP requirements specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our methodology maps directly to SWIFT Customer Security Programme controls, alongside SOC 2, ISO 27001 and PCI DSS where relevant.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work around our regulatory reporting deadlines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tell us your audit or attestation date during scoping and we'll build the engagement and reporting timeline around it.",
      },
    },
  ],
};

export default function FinancialServicesPage() {
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
        <p className="text-label c-gray-999 mb-10">Financial Services</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Regulated by design.
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Trusted by default.
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
                Banks, fintech and payment institutions carry regulatory
                obligations most businesses never touch — and a breach doesn't
                just cost money, it costs licences.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> banks, fintech, payment institutions,
              and any business handling regulated financial data or
              transactions.
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
              PCI DSS
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              SWIFT CSP
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Operational resilience & threat-led testing
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
              Threat-led penetration testing mapped to your regulatory
              obligations
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              SWIFT CSP and payment infrastructure assessment
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Operational resilience testing & scenario planning
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Compliance-ready reporting for regulators and auditors
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
            href="/services/api-penetration-testing"
            className="engagement-item"
          >
            <h3>API Penetration Testing</h3>
            <p>Focused testing of REST, GraphQL and internal APIs.</p>
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
              Can you test against SWIFT CSP requirements specifically?
            </p>
            <p className="faq-a">
              Yes. Our methodology maps directly to SWIFT Customer Security
              Programme controls, alongside SOC 2, ISO 27001 and PCI DSS where
              relevant.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Do you work around our regulatory reporting deadlines?
            </p>
            <p className="faq-a">
              Yes. Tell us your audit or attestation date during scoping and
              we'll build the engagement and reporting timeline around it.
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
              Let's scope your financial services engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Financial Services →
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