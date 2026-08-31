import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific cyber security packages from CYBEROCO, covering financial services, healthcare, e-commerce, SaaS, hospitality, manufacturing and education.",
  alternates: { canonical: "/industries" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Don't see your industry listed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are the sectors we work with most, but our methodology isn't limited to them. Get in touch and we'll scope an engagement around your specific regulatory and business context.",
      },
    },
    {
      "@type": "Question",
      name: "Can a package be combined with a specific service, like a web app pentest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Industry packages set the compliance context and frameworks we test against — the underlying engagement is usually built from our Cyber Security Services, such as a web & API pentest or a risk assessment.",
      },
    },
  ],
};

export default function IndustriesPage() {
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
        <p className="text-label c-gray-999 mb-10">Industries</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="ind-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Security built around
            </span>
            <span
              className="ind-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              your sector.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Industry Packages</p>
          <h2 className="text-headline max-w-2xl">
            Every sector has a different threat model. So should your testing.
          </h2>
        </div>

        <Reveal
          variant="fadeUp"
          stagger={0.06}
          start="top 85%"
          className="industry-grid"
        >
          <Link href="/industries/financial-services" className="industry-card">
            <h3>Financial Services</h3>
            <p>
              SOC 2, ISO 27001, PCI DSS, SWIFT CSP, operational resilience and
              threat-led testing for banks, fintech and payment institutions.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link href="/industries/healthcare" className="industry-card">
            <h3>Healthcare</h3>
            <p>
              DSPT, ISO 27001, GDPR for special category data, ransomware
              preparedness for NHS bodies and HealthTech.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link href="/industries/ecommerce-retail" className="industry-card">
            <h3>E-commerce & Retail</h3>
            <p>
              PCI DSS, Magecart defence, web app and API testing, GDPR.
              Scheduled around your trading calendar.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link href="/industries/saas-technology" className="industry-card">
            <h3>SaaS & Technology</h3>
            <p>
              SOC 2 and ISO 27001 evidence reuse, continuous pentesting, cloud
              security, enterprise procurement support.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link href="/industries/hospitality" className="industry-card">
            <h3>Hospitality</h3>
            <p>
              PCI DSS for multi-property estates, POS and PMS testing, network
              segmentation, GDPR for guest data.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link
            href="/industries/manufacturing-industrial"
            className="industry-card"
          >
            <h3>Manufacturing & Industrial</h3>
            <p>
              IT pentesting, safe OT/ICS assessment, IEC 62443-aligned
              methodology, NIS Regulations readiness.
            </p>
            <span className="industry-link">View package →</span>
          </Link>

          <Link
            href="/industries/education-research"
            className="industry-card"
          >
            <h3>Education & Research</h3>
            <p>
              Jisc-aligned pentesting, GDPR for student data, research IP
              protection, ISO 27001 for commercial activity.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
        </Reveal>
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
            <p className="faq-q">Don't see your industry listed?</p>
            <p className="faq-a">
              These are the sectors we work with most, but our methodology
              isn't limited to them. Get in touch and we'll scope an engagement
              around your specific regulatory and business context.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Can a package be combined with a specific service, like a web app
              pentest?
            </p>
            <p className="faq-a">
              Yes. Industry packages set the compliance context and frameworks
              we test against — the underlying engagement is usually built from
              our Cyber Security Services, such as a web & API pentest or a
              risk assessment.
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
              Let's scope a package for your sector.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Get in touch →
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