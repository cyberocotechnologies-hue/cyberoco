import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "E-commerce & Retail Cyber Security",
  description:
    "PCI DSS, Magecart defence and web app testing for e-commerce and retail, scheduled around your trading calendar.",
  alternates: { canonical: "/industries/ecommerce-retail" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can testing be scheduled around peak trading (e.g. Black Friday)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of the most common requests we get from retail clients, and we plan engagements around your calendar by default.",
      },
    },
    {
      "@type": "Question",
      name: "Do you check for checkout skimming (Magecart-style attacks)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is a standard part of our e-commerce testing scope alongside general web app and API testing.",
      },
    },
  ],
};

export default function EcommerceRetailPage() {
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
        <p className="text-label c-gray-999 mb-10">E-commerce & Retail</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Trading securely,
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              every season.
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
                Retail and e-commerce platforms are a constant target for
                card-skimming and checkout attacks — and testing has to work
                around your trading calendar, not against it.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="ind-detail-line">
              <strong>Ideal for:</strong> online retailers, marketplaces, and
              any business processing card payments at scale.
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
              PCI DSS
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Magecart / e-skimming defence
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              GDPR
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
              PCI DSS-aligned penetration testing & ASV scanning support
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Magecart / checkout skimming detection review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Web app & API testing across storefront and checkout
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Engagements scheduled around peak trading periods
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
            href="/services/mobile-application-testing"
            className="engagement-item"
          >
            <h3>Mobile Application Testing</h3>
            <p>
              iOS and Android testing covering client logic and API
              communication.
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
              Can testing be scheduled around peak trading (e.g. Black Friday)?
            </p>
            <p className="faq-a">
              Yes — this is one of the most common requests we get from retail
              clients, and we plan engagements around your calendar by default.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Do you check for checkout skimming (Magecart-style attacks)?
            </p>
            <p className="faq-a">
              Yes, this is a standard part of our e-commerce testing scope
              alongside general web app and API testing.
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
              Let's scope your e-commerce engagement.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about E-commerce & Retail →
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