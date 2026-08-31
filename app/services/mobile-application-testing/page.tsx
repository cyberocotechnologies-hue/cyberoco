import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Mobile Application Testing",
  description:
    "CREST-aligned iOS and Android penetration testing from CYBEROCO — OWASP MASVS/MASTG methodology covering the app binary, local storage, and the API backend.",
  alternates: { canonical: "/services/mobile-application-testing" },
};

export default function MobileApplicationTestingPage() {
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
        <p className="text-label c-gray-999 mb-10">Mobile Application Testing</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="mob-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Tested like an attacker.
            </span>
            <span
              className="mob-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Fixed like an engineer.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">Who this is for</p>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 85%"
          className="engagement-grid"
        >
          <div className="engagement-item" style={{ cursor: "default" }}>
            <span className="text-label c-gray-ccc">01</span>
            <h3>Banking & fintech apps</h3>
            <p>
              Mobile apps handling payments, banking, or sensitive customer
              data on iOS and Android.
            </p>
          </div>
          <div className="engagement-item" style={{ cursor: "default" }}>
            <span className="text-label c-gray-ccc">02</span>
            <h3>Health & wellness apps</h3>
            <p>Apps storing PHI or operating in regulated healthcare contexts.</p>
          </div>
          <div className="engagement-item" style={{ cursor: "default" }}>
            <span className="text-label c-gray-ccc">03</span>
            <h3>App store reviews</h3>
            <p>
              Apps needing security evidence to satisfy Apple or Google app
              store security review processes.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="stats-bar">
        <Reveal variant="fadeUp" stagger={0.1} className="stats-grid">
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              iOS & Android
            </span>
            <span className="stat-label">Both platforms</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              OWASP Mobile
            </span>
            <span className="stat-label">Top 10 coverage</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              CREST
            </span>
            <span className="stat-label">Certified testers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              5–10 days
            </span>
            <span className="stat-label">Typical engagement</span>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">
              What is mobile app penetration testing?
            </p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 mob-detail-line">
                The structured assessment of iOS and Android applications for
                exploitable security weaknesses.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="mob-detail-line">
              It combines static analysis of the application binary, dynamic
              analysis of the running application (instrumented via Frida or
              similar), local storage and IPC review, and network traffic
              analysis against the API backend.
            </p>
          </Reveal>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <p className="text-label c-gray-999 mb-5">
            OWASP Mobile Top 10 (M1–M10)
          </p>
          <Reveal
            variant="fadeIn"
            stagger={0.03}
            start="top 87%"
            className="flex flex-wrap gap-3"
          >
            <span className="cs-metric-pill owasp-pill">
              Improper credential usage
            </span>
            <span className="cs-metric-pill owasp-pill">
              Inadequate supply chain security
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insecure authentication
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insufficient input/output validation
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insecure communication
            </span>
            <span className="cs-metric-pill owasp-pill">
              Inadequate privacy controls
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insufficient binary protections
            </span>
            <span className="cs-metric-pill owasp-pill">
              Security misconfiguration
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insecure data storage
            </span>
            <span className="cs-metric-pill owasp-pill">
              Insufficient cryptography
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">
          What mobile testing delivers
        </p>
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
              OWASP Mobile Top 10 coverage across iOS and Android
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Static and dynamic binary analysis
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Local storage and keychain security review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Certificate pinning and TLS implementation review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              API backend testing for the mobile-specific attack surface
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Remediation guidance directly actionable by mobile devs
            </li>
          </Reveal>
        </div>
        <blockquote
          className="article-pullquote"
          style={{ maxWidth: "42rem", marginTop: "2.5rem" }}
        >
          Modern mobile testing must cover both the on-device application and
          the API backend — testing one without the other misses most
          exploitable issues.
        </blockquote>
      </section>

      <section className="section">
        <div className="mb-10">
          <p className="text-label c-gray-999 mb-2">
            Why mobile testing matters
          </p>
        </div>
        <div
          className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555 max-w-2xl"
          style={{ marginBottom: "2.5rem" }}
        >
          <p>
            Mobile apps now carry an outsized share of customer interaction and
            sensitive data flow for many organisations. They handle
            authentication credentials, payment tokens, personal health
            information, and direct API access to backend systems — all on
            devices that attackers can root, jailbreak, instrument, and
            decompile.
          </p>
          <p>
            Mobile security weaknesses regularly enable serious incidents:
            stolen API tokens enabling account takeover, hardcoded secrets in
            shipped binaries, bypassable certificate pinning enabling MITM,
            weak local encryption exposing offline data. These issues are
            findable with proper testing and fixable with proper guidance.
          </p>
        </div>
        <p className="text-label c-gray-999 mb-6">
          Common consequences of weak mobile security
        </p>
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
              API tokens stolen from insecure local storage
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Hardcoded API keys and secrets in shipped binaries
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Bypassed certificate pinning enabling MITM attacks
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Sensitive data exposure in offline storage
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Authentication bypass via local manipulation
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Compliance failures across PCI DSS and HIPAA
            </li>
          </Reveal>
        </div>
        <blockquote
          className="article-pullquote"
          style={{ maxWidth: "42rem", marginTop: "2.5rem" }}
        >
          Mobile testing is essential for any customer-facing app handling
          sensitive data — the attack scenarios are real and the fixes are
          tractable.
        </blockquote>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-6">
          Who needs mobile app testing?
        </p>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginBottom: "2.5rem" }}
        >
          Any organisation shipping iOS or Android apps that handle sensitive
          data, payments, or authentication should test regularly:
        </p>
        <div style={{ marginBottom: "2.5rem" }}>
          <Reveal variant="fadeUp" stagger={0.04} className="clients-grid">
            <p className="client-name">Banking & fintech mobile apps</p>
            <p className="client-name">Payment & wallet apps</p>
            <p className="client-name">HealthTech & telemedicine</p>
            <p className="client-name">E-commerce & retail apps</p>
            <p className="client-name">Enterprise SaaS mobile clients</p>
            <p className="client-name">Social & consumer apps</p>
            <p className="client-name">Streaming & content apps</p>
            <p className="client-name">Government & defence apps</p>
          </Reveal>
        </div>
        <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
          Apple and Google app store review processes do not constitute
          security testing — they check policy compliance, not exploitable
          vulnerabilities. Dedicated mobile pentesting is the only meaningful
          pre-release security gate.
        </p>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">How we work</p>
          <h2 className="text-headline max-w-2xl mb-3">
            Our Mobile Testing Methodology
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            CREST-aligned methodology aligned to OWASP MASVS (Mobile
            Application Security Verification Standard) and MASTG (Mobile
            Application Security Testing Guide).
          </p>
        </div>
        <div style={{ maxWidth: "44rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.06}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Scoping & Build Acquisition.</strong> We agree the
                in-scope app (iOS, Android, or both), test build availability
                (development or production binaries), test accounts, and any
                out-of-scope features.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Static Binary Analysis.</strong> Decompilation and
                static analysis of the app binary, hunting for hardcoded
                secrets, weak cryptography, insecure dependencies, and
                code-level vulnerabilities.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Local Storage Review.</strong> Examination of all
                on-device data — keychain entries, shared preferences, SQLite
                databases, files, IPC mechanisms — looking for sensitive data
                exposure.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Runtime Instrumentation.</strong> Dynamic analysis
                using Frida, Objection, or similar, testing runtime behaviour,
                bypassing client-side controls, examining function calls and
                crypto operations.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">05</span>
              <p className="process-text">
                <strong>Certificate Pinning & TLS.</strong> Testing certificate
                pinning effectiveness, TLS configuration, and the attack
                scenarios that bypass typical pinning implementations.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">06</span>
              <p className="process-text">
                <strong>API Backend Testing.</strong> Testing the API backend
                the app communicates with — typically where most exploitable
                issues live — with the mobile app as a useful client for
                exploration.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">07</span>
              <p className="process-text">
                <strong>Reporting & Developer Walk-Through.</strong> Detailed
                findings with iOS/Android-specific reproduction steps,
                code-level remediation guidance, and live walk-through with
                your mobile team.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">08</span>
              <p className="process-text">
                <strong>Remediation Retest.</strong> Critical and high findings
                re-tested in a new build after remediation, with documented
                validation for compliance evidence.
              </p>
            </div>
          </Reveal>
        </div>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginTop: "2.5rem" }}
        >
          Typical engagement: 5–8 days for a single platform (iOS or Android),
          10–15 days for combined iOS + Android testing with shared backend.
        </p>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-2">What you receive</p>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginBottom: "2rem" }}
        >
          Every mobile testing engagement with CYBEROCO includes:
        </p>
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
              Scoping document and signed rules of engagement
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Executive summary for board and management consumption
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Detailed technical findings with platform-specific reproduction
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              CVSS plus exploitability prioritisation
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Code-level remediation guidance for iOS and Android
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              OWASP MASVS compliance mapping
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Developer walk-through with mobile engineering team
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Remediation retest of critical and high findings
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">Industries We Serve</p>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginBottom: "2rem" }}
        >
          We deliver this service across these industries:
        </p>
        <Reveal variant="fadeUp" stagger={0.04} className="clients-grid">
          <p className="client-name">Financial Services</p>
          <p className="client-name">Healthcare</p>
          <p className="client-name">SaaS & Technology</p>
          <p className="client-name">E-commerce & Retail</p>
          <p className="client-name">Defence & Government</p>
          <p className="client-name">Cloud & Managed Services</p>
          <p className="client-name">Education</p>
          <p className="client-name">Professional Services</p>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
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
            href="/services/penetration-testing"
            className="engagement-item"
          >
            <h3>Penetration Testing</h3>
            <p>
              Manual, methodology-led testing that exploits and chains findings
              to prove real-world impact, not just list them.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/api-penetration-testing"
            className="engagement-item"
          >
            <h3>API Penetration Testing</h3>
            <p>
              Focused testing of REST, GraphQL and internal APIs for
              authentication, authorisation and business-logic flaws.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/vulnerability-assessment"
            className="engagement-item"
          >
            <h3>Vulnerability Assessment</h3>
            <p>
              Continuous, CREST-aligned scanning and manual validation across
              your wider estate.
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
              Let's scope your mobile app test.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Mobile Application Testing →
          </Link>
        </div>
      </section>
    </>
  );
}