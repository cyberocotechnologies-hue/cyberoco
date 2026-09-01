import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Penetration Testing",
  description:
    "CREST-accredited, senior-led penetration testing across web, API, network, mobile and cloud — with exploit chaining, evidence-backed reporting and a free retest.",
  alternates: { canonical: "/services/penetration-testing" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of penetration testing do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We test web applications, APIs, internal and external networks, mobile applications (iOS and Android), and cloud environments — scoped individually or combined depending on your attack surface.",
      },
    },
    {
      "@type": "Question",
      name: "Are your testers CREST-accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every engagement is led by a CREST-accredited senior consultant, not a junior tester working from a template.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a vulnerability scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A scan is automated and flags what's already known. A penetration test is manual — our consultants actively exploit findings, chain them together, and confirm real-world impact rather than just listing potential issues.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a retest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a full remediation retest is included at no extra cost, so your final report reflects what's actually been fixed, not just what was originally found.",
      },
    },
    {
      "@type": "Question",
      name: "Will the report satisfy our customers or auditors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every report includes an executive summary for non-technical stakeholders and a technical section mapped to the frameworks your auditors expect, such as ISO 27001, SOC 2 and PCI DSS.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically within 1–2 weeks of an agreed scope, depending on current engagement load and how quickly access and testing windows can be arranged on your side.",
      },
    },
  ],
};

export default function PenetrationTestingPage() {
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
        <p className="text-label c-gray-999 mb-10">Penetration Testing</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="pt-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Tested by hand.
            </span>
            <span
              className="pt-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Proven with evidence.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Where testing falls short</p>
          <h2 className="text-headline max-w-2xl mb-3">
            Why most penetration tests disappoint
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            A weak test gives false comfort. These are the gaps that let real
            issues slip through, and what our testing does differently.
          </p>
        </div>
        <Reveal variant="scale" start="top 85%" className="value-grid">
          <div className="value-item">
            <span className="text-label c-gray-ccc">01</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Scan dressed up as a test
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              An automated scan relabelled as a penetration test, missing the
              business-logic and chained attacks that actually cause breaches.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">02</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Surface-only coverage
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Testing the login page but never the API behind it, where
              authorisation and access-control flaws really live.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">03</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Unreadable reports
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              A raw tool dump with no severity, no proof and no remediation
              steps, so nothing gets fixed.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">04</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              No exploit chaining
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Findings listed in isolation, missing the chain of low-risk issues
              that combine into a critical compromise.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">05</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Junior or offshore delivery
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Sold by seniors, delivered by juniors, with no real depth when it
              matters.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">06</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              No retest
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Issues reported but never verified as fixed, so you cannot prove
              remediation to customers or auditors.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">What we deliver</p>
          <h2 className="text-headline max-w-2xl mb-3">
            What you get from a CYBEROCO test
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            A test run by senior, CREST-accredited consultants, and a report
            both your board and your engineers can use.
          </p>
        </div>
        <div style={{ maxWidth: "42rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            start="top 87%"
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Scoping workshop to agree targets, depth and rules of engagement
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Manual, intelligence-led testing across web, API, network, mobile
              and cloud
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Business-logic and auth testing the flaws scanners cannot find
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Exploit chaining to show real-world impact, not just isolated bugs
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Severity-rated findings, each with evidence and business impact
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Clear remediation guidance — specific steps your engineers can
              follow
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Executive and technical report written for both audiences
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Free remediation retest to verify and evidence that fixes hold
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">How we work</p>
          <h2 className="text-headline max-w-2xl mb-3">
            Our penetration testing process
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            A senior tester leads you from scope to a verified, evidenced
            result.
          </p>
        </div>
        <div style={{ maxWidth: "42rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Scope.</strong> We agree targets, depth and rules of
                engagement with you.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Recon.</strong> We map the attack surface the way an
                adversary would.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Test.</strong> We manually test and exploit, chaining
                issues for real impact.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Report.</strong> We deliver severity-rated findings with
                evidence and fixes.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">05</span>
              <p className="process-text">
                <strong>Debrief.</strong> We walk your team through findings and
                remediation.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">06</span>
              <p className="process-text">
                <strong>Retest.</strong> We re-test fixed issues and confirm
                they are closed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Make the right choice</p>
          <h2 className="text-headline max-w-2xl">
            Commodity scan vs senior-led penetration test
          </h2>
        </div>
        <Reveal variant="fadeUp" stagger={0}>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">Commodity scan</th>
                  <th scope="col" className="col-highlight">
                    CYBEROCO (CREST-accredited)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Method</th>
                  <td>Automated, templated</td>
                  <td className="col-highlight">Manual, intelligence-led</td>
                </tr>
                <tr>
                  <th scope="row">Business logic</th>
                  <td>Missed</td>
                  <td className="col-highlight">Tested in depth</td>
                </tr>
                <tr>
                  <th scope="row">API & authorisation</th>
                  <td>Often skipped</td>
                  <td className="col-highlight">Core focus</td>
                </tr>
                <tr>
                  <th scope="row">Exploit chaining</th>
                  <td>Not done</td>
                  <td className="col-highlight">Demonstrated end to end</td>
                </tr>
                <tr>
                  <th scope="row">Report</th>
                  <td>Raw tool output</td>
                  <td className="col-highlight">
                    Executive + technical, prioritised
                  </td>
                </tr>
                <tr>
                  <th scope="row">Delivered by</th>
                  <td>Junior/offshore</td>
                  <td className="col-highlight">Senior CREST testers</td>
                </tr>
                <tr>
                  <th scope="row">Retest</th>
                  <td>Extra cost</td>
                  <td className="col-highlight">Included</td>
                </tr>
                <tr>
                  <th scope="row">Fees</th>
                  <td>Open-ended</td>
                  <td className="col-highlight">Fixed, scope-bound</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <p className="text-label c-gray-999 mb-2">Questions</p>
        <h2 className="text-headline max-w-2xl mb-12">
          Penetration testing, answered
        </h2>
        <Reveal variant="fadeUp" stagger={0.08} start="top 85%" className="max-w-3xl">
          <div className="faq-item">
            <p className="faq-q">
              What types of penetration testing do you offer?
            </p>
            <p className="faq-a">
              We test web applications, APIs, internal and external networks,
              mobile applications (iOS and Android), and cloud environments —
              scoped individually or combined depending on your attack surface.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Are your testers CREST-accredited?</p>
            <p className="faq-a">
              Yes. Every engagement is led by a CREST-accredited senior
              consultant, not a junior tester working from a template.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              How is this different from a vulnerability scan?
            </p>
            <p className="faq-a">
              A scan is automated and flags what's already known. A penetration
              test is manual — our consultants actively exploit findings, chain
              them together, and confirm real-world impact rather than just
              listing potential issues.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you provide a retest?</p>
            <p className="faq-a">
              Yes, a full remediation retest is included at no extra cost, so
              your final report reflects what's actually been fixed, not just
              what was originally found.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">
              Will the report satisfy our customers or auditors?
            </p>
            <p className="faq-a">
              Yes. Every report includes an executive summary for non-technical
              stakeholders and a technical section mapped to the frameworks your
              auditors expect, such as ISO 27001, SOC 2 and PCI DSS.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">How quickly can you start?</p>
            <p className="faq-a">
              Typically within 1–2 weeks of an agreed scope, depending on
              current engagement load and how quickly access and testing windows
              can be arranged on your side.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Related services</p>
          <h2 className="text-headline max-w-2xl">
            Explore related CYBEROCO services
          </h2>
        </div>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 85%"
          className="engagement-grid"
        >
          <Link
            href="/services/vulnerability-assessment"
            className="engagement-item"
          >
            <h3>Vulnerability Assessment</h3>
            <p>
              Broad, automated and manually-verified scanning across your estate
              to surface and prioritise exploitable weaknesses.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/cybersecurity-services"
            className="engagement-item"
          >
            <h3>Red Team Assessments</h3>
            <p>
              Objective-led, adversary-simulation testing across people, process
              and technology to measure real detection and response.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/web-application-development"
            className="engagement-item"
          >
            <h3>Secure Code Review</h3>
            <p>
              Manual and tool-assisted review of your source code to catch the
              flaws that only surface by reading the logic itself.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
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
              Let's scope your penetration test.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Penetration Testing →
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