import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "Cyber Security Services",
  description:
    "CREST-accredited penetration testing, vulnerability assessments and risk assessments from CYBEROCO.",
  alternates: { canonical: "/services/cyber-security-services" },
};

const MARQUEE_ITEMS = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Risk Assessment",
  "Mobile Testing",
  "API Testing",
  "Compliance",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between a vulnerability scan and a penetration test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A scan is automated and flags potential issues. A penetration test is manual \u2014 our consultants actively try to exploit those issues to confirm what's real, what's exploitable, and what's just noise.",
      },
    },
    {
      "@type": "Question",
      name: "Will testing disrupt our production environment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We agree testing windows, rules of engagement, and any out-of-scope systems with you upfront. Disruptive tests are scheduled and communicated in advance, never sprung on you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you test against staging or production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Either, depending on what best reflects real-world risk for your business. Many clients prefer production testing since staging environments don't always mirror live configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work to a specific compliance deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tell us your audit or renewal date during scoping and we'll build the engagement and reporting timeline around it.",
      },
    },
  ],
};

export default function CyberSecurityServicesPage() {
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
        <p className="text-label c-gray-999 mb-10">Cyber Security Services</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Offensive testing.
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Defensive assurance.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Overview</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 srv-detail-line">
                We help regulated and high-growth businesses find their weaknesses
                before attackers do.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="srv-detail-line">
              Our consultants are CREST-accredited and QSA-led, delivering manual,
              methodology-driven testing — not automated scans with a logo on the
              cover page. Every engagement produces a report your auditors, your
              board, and your engineering team can all actually use.
            </p>
            <p className="srv-detail-line">
              <strong>Ideal for:</strong> regulated industries, SaaS, fintech,
              healthcare, retail, and any business preparing for a compliance audit
              or an enterprise procurement review.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
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
              Scoping call & threat-informed methodology
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Manual, OWASP-aligned testing — not automated-only scanning
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Web, API, mobile, network and cloud coverage
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Risk-rated findings mapped to business impact
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Compliance-ready reporting (ISO 27001, SOC 2, PCI DSS)
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Retest included on critical & high findings
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Debrief call with your engineering team
            </li>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={24} />

      <section className="section" id="engagements">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Popular engagements</p>
          <h2 className="text-headline max-w-2xl">Clear, scoped ways to start.</h2>
        </div>
        <Reveal variant="scale" start="top 85%" className="engagement-grid">
          <Link
            href="/services/penetration-testing"
            className="engagement-item"
            id="web-api-pentest"
          >
            <h3>Web & API Penetration Test</h3>
            <p>
              Manual, methodology-led testing of your web application and its APIs,
              mapped to the OWASP Top 10 and OWASP API Top 10.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/vulnerability-assessment"
            className="engagement-item"
            id="vulnerability-assessment"
          >
            <h3>Vulnerability Assessments</h3>
            <p>
              Broad, automated and manually-verified scanning across your estate to
              surface and prioritise exploitable weaknesses.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/threat-risk-assessment"
            className="engagement-item"
            id="risk-assessment"
          >
            <h3>Risk Assessments</h3>
            <p>
              Structured evaluation of your threat landscape, mapped to business
              impact, to guide where security investment goes next.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/mobile-application-testing"
            className="engagement-item"
            id="mobile-app-testing"
          >
            <h3>Mobile Application Testing</h3>
            <p>
              iOS and Android testing covering client logic, local storage, API
              communication and platform-specific attack paths.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/api-penetration-testing"
            className="engagement-item"
            id="api-pentest"
          >
            <h3>API Penetration Testing</h3>
            <p>
              Focused testing of REST, GraphQL and internal APIs for
              authentication, authorisation and business-logic flaws.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">Our approach</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.1}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Scope & threat model.</strong> We start with a scoping call
                to understand your architecture, your regulatory obligations, and
                what "success" looks like for this engagement.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Manual testing.</strong> Our consultants test manually
                against your specific environment, not just running a scanner and
                packaging the output.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Risk-rated reporting.</strong> Findings are rated by real
                business impact, with clear remediation guidance your engineering
                team can act on immediately.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Retest & sign-off.</strong> We retest critical and high
                findings at no extra cost, so your final report reflects where you
                actually stand.
              </p>
            </div>
          </Reveal>
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
        <Reveal variant="fadeUp" stagger={0.08} start="top 85%" className="max-w-3xl">
          <div className="faq-item">
            <p className="faq-q">
              What's the difference between a vulnerability scan and a penetration
              test?
            </p>
            <p className="faq-a">
              A scan is automated and flags potential issues. A penetration test is
              manual — our consultants actively try to exploit those issues to
              confirm what's real, what's exploitable, and what's just noise.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Will testing disrupt our production environment?</p>
            <p className="faq-a">
              We agree testing windows, rules of engagement, and any out-of-scope
              systems with you upfront. Disruptive tests are scheduled and
              communicated in advance, never sprung on you.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you test against staging or production?</p>
            <p className="faq-a">
              Either, depending on what best reflects real-world risk for your
              business. Many clients prefer production testing since staging
              environments don't always mirror live configuration.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Can you work to a specific compliance deadline?</p>
            <p className="faq-a">
              Yes. Tell us your audit or renewal date during scoping and we'll
              build the engagement and reporting timeline around it.
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
            <h2 className="text-headline max-w-lg">Let's scope your penetration test.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Cyber Security Services →
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