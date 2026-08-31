import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "API Penetration Testing",
  description:
    "CREST-aligned API penetration testing from CYBEROCO — OWASP API Security Top 10 coverage across REST, GraphQL, SOAP and gRPC.",
  alternates: { canonical: "/services/api-penetration-testing" },
};

export default function ApiPenetrationTestingPage() {
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
        <p className="text-label c-gray-999 mb-10">API Penetration Testing</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="api-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Beyond the UI.
            </span>
            <span
              className="api-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Into the API.
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
            <h3>API-first products</h3>
            <p>
              Companies whose API IS the product — developer tools, B2B SaaS,
              fintech infrastructure.
            </p>
          </div>
          <div className="engagement-item" style={{ cursor: "default" }}>
            <span className="text-label c-gray-ccc">02</span>
            <h3>Microservice architectures</h3>
            <p>
              Engineering teams with REST/GraphQL/gRPC services that need
              authorisation and rate-limit validation.
            </p>
          </div>
          <div className="engagement-item" style={{ cursor: "default" }}>
            <span className="text-label c-gray-ccc">03</span>
            <h3>Payment / sensitive data APIs</h3>
            <p>
              APIs that handle cardholder data, PHI, PII, or financial
              transactions where API breaks have regulatory weight.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="stats-bar">
        <Reveal variant="fadeUp" stagger={0.1} className="stats-grid">
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              OWASP API
            </span>
            <span className="stat-label">Top 10 coverage</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              REST/GraphQL
            </span>
            <span className="stat-label">Multi-protocol testing</span>
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
              What is API penetration testing?
            </p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 api-detail-line">
                The targeted, predominantly manual assessment of API endpoints
                for exploitable security weaknesses.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="api-detail-line">
              Modern APIs use a range of protocols (REST, GraphQL, SOAP, gRPC)
              and authentication schemes (OAuth 2.0, JWT, API keys, mTLS), each
              with characteristic weakness patterns testers must understand to
              assess effectively.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">The threat landscape</p>
          <h2 className="text-headline max-w-2xl">
            OWASP API Security Top 10
          </h2>
        </div>
        <Reveal variant="scale" start="top 88%" className="value-grid">
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">01</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Broken Object-Level Authorisation
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              BOLA — the #1 API risk.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">02</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Broken Authentication
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Weaknesses in how identity is verified and sessions are managed.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">03</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Broken Object Property-Level Authorisation
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Mass assignment — unintended properties written or exposed.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">04</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Unrestricted Resource Consumption
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Rate limiting and denial-of-service exposure.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">05</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Broken Function-Level Authorisation
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Endpoints reachable by roles that shouldn't be able to call them.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">06</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Server-Side Request Forgery
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              APIs tricked into making unintended internal or external requests.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">07</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Security Misconfiguration
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Insecure defaults, verbose errors, and missing hardening.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">08</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Lack of Protection from Automated Threats
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Insufficient defence against scripted abuse and scraping.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">09</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Improper Inventory Management
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Undocumented, deprecated or shadow API versions left exposed.
            </p>
          </div>
          <div className="value-item owasp-box">
            <span className="text-label c-gray-ccc">10</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.05rem" }}
            >
              Unsafe Consumption of APIs
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Trusting third-party API data and responses without validation.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">
          What API testing delivers
        </p>
        <Reveal
          variant="fadeUp"
          stagger={0.06}
          start="top 85%"
          className="industry-grid"
        >
          <div className="industry-card deliver-card">
            <h3>OWASP Top 10 coverage</h3>
            <p>OWASP API Security Top 10 coverage across all endpoints.</p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Authorisation matrix testing</h3>
            <p>Systematic testing across roles and objects, not spot checks.</p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Mass assignment & data exposure</h3>
            <p>
              Identification of unintended property writes and excessive data
              exposure.
            </p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Rate limiting & abuse testing</h3>
            <p>Rate limiting and abuse vector testing against scripted attacks.</p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Authentication & token handling</h3>
            <p>Validation of authentication flows and token handling end to end.</p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Business logic testing</h3>
            <p>
              Manual testing of API workflows for logic flaws automated tools
              miss.
            </p>
          </div>
        </Reveal>
        <blockquote
          className="article-pullquote"
          style={{ maxWidth: "42rem", marginTop: "2.5rem" }}
        >
          API testing has become as important as traditional web application
          testing — and arguably more important for organisations whose APIs
          back mobile apps, B2B partners, or microservice architectures.
        </blockquote>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-10">
          <p className="text-label c-gray-999 mb-2">
            Why API security testing matters
          </p>
        </div>
        <div
          className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555 max-w-2xl"
          style={{ marginBottom: "2.5rem" }}
        >
          <p>
            APIs are now the dominant attack surface for many organisations.
            Mobile apps, single-page web apps, B2B integrations, and
            microservice architectures all expose far more API surface than
            traditional web pages, and developers consistently apply weaker
            authorisation logic to API endpoints than to UI-fronted
            equivalents, on the assumption that "no one will call the API
            directly." They will.
          </p>
          <p>
            Major breaches in 2024 and 2025 have repeatedly traced back to
            API-level vulnerabilities: BOLA in mobile app backends exposing
            customer records, mass assignment in admin APIs enabling privilege
            escalation, weak rate limiting enabling credential stuffing at
            scale.
          </p>
        </div>
        <p className="text-label c-gray-999 mb-6">
          Common consequences of weak API security
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
              Customer record exposure via BOLA in mobile/SPA backends
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Privilege escalation via mass assignment in admin APIs
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Credential stuffing at scale due to weak rate limiting
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Sensitive data exposure via verbose API responses
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Account takeover via authentication weaknesses
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Compliance failures across PCI DSS and SOC 2
            </li>
          </Reveal>
        </div>
        <blockquote
          className="article-pullquote"
          style={{ maxWidth: "42rem", marginTop: "2.5rem" }}
        >
          APIs deserve at least the same testing depth as the UI surfaces they
          back — often more, given they typically have weaker authorisation
          enforcement.
        </blockquote>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-6">Who needs API testing?</p>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginBottom: "2.5rem" }}
        >
          Any organisation operating APIs — internal microservices, mobile app
          backends, public APIs, B2B integrations — needs regular testing:
        </p>
        <div style={{ marginBottom: "2.5rem" }}>
          <Reveal variant="fadeUp" stagger={0.04} className="clients-grid">
            <p className="client-name">SaaS with mobile & SPA frontends</p>
            <p className="client-name">Mobile-first companies</p>
            <p className="client-name">Open banking & PSD2 APIs</p>
            <p className="client-name">Payment platforms</p>
            <p className="client-name">AI/ML platforms with API surfaces</p>
            <p className="client-name">Microservice architectures</p>
            <p className="client-name">B2B platforms with partner APIs</p>
            <p className="client-name">HealthTech with FHIR APIs</p>
          </Reveal>
        </div>
        <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
          If your API powers a mobile app, a B2B integration, or a microservice
          architecture handling sensitive data, dedicated API testing is
          essential — generic web application testing rarely covers API security
          depth.
        </p>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">How we work</p>
          <h2 className="text-headline max-w-2xl mb-3">
            Our API Testing Methodology
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            CREST-aligned methodology combining OWASP API Security Top 10 with
            hands-on protocol-specific testing across REST, GraphQL, SOAP, and
            gRPC.
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
                <strong>Scoping & API Documentation Review.</strong> We agree
                the in-scope API endpoints (typically working from
                OpenAPI/Swagger, GraphQL schema, or Postman collections), user
                roles, authentication schemes, and test credentials.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Endpoint Enumeration & Mapping.</strong> Complete
                mapping of every endpoint, method, parameter, and response
                shape, building the full attack surface before testing begins.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Authentication & Token Testing.</strong> Detailed
                testing of authentication mechanisms — JWT validation, OAuth
                flow integrity, token refresh logic, session fixation, brute
                force resistance.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Authorisation Matrix Testing.</strong> Systematic testing
                of object-level and function-level authorisation across every
                user role pair — the highest-value work in any API engagement.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">05</span>
              <p className="process-text">
                <strong>Mass Assignment & Data Exposure.</strong> Testing for
                mass assignment (unintended property writes), excessive data
                exposure (verbose responses leaking sensitive data), and
                improper input filtering.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">06</span>
              <p className="process-text">
                <strong>Rate Limiting & Abuse Testing.</strong> Testing of rate
                limiting, account lockout, and abuse vectors that enable
                credential stuffing or data scraping at scale.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">07</span>
              <p className="process-text">
                <strong>Business Logic & Workflow Testing.</strong> Manual
                exploration of business workflows for parameter tampering, race
                conditions, and logic flaws that automated tools cannot find.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">08</span>
              <p className="process-text">
                <strong>Reporting & Developer Walk-Through.</strong> Detailed
                findings with reproduction steps via curl/Postman, code-level
                remediation guidance, and live walk-through with your
                engineering team.
              </p>
            </div>
          </Reveal>
        </div>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginTop: "2.5rem" }}
        >
          Typical engagement: 5–10 days for mid-complexity APIs (under 50
          endpoints), 10–15 days for larger APIs (50–150 endpoints), longer for
          major platforms.
        </p>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-2">What you receive</p>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-2xl"
          style={{ marginBottom: "2rem" }}
        >
          Every API testing engagement with CYBEROCO includes:
        </p>
        <Reveal
          variant="fadeUp"
          stagger={0.06}
          start="top 85%"
          className="industry-grid"
        >
          <div className="industry-card receive-card">
            <h3>Scoping document</h3>
            <p>Full endpoint inventory agreed before testing begins.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Executive summary</h3>
            <p>Written for board and management consumption.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Technical findings</h3>
            <p>Detailed, with curl/Postman reproduction steps.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Exploitability prioritisation</h3>
            <p>CVSS scoring plus real-world exploitability context.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Remediation guidance</h3>
            <p>Code-level, with worked examples for your engineers.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Authorisation matrix report</h3>
            <p>Full test coverage across every role and object.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>OWASP compliance mapping</h3>
            <p>Findings mapped to the OWASP API Security Top 10.</p>
          </div>
          <div className="industry-card receive-card">
            <h3>Remediation retest</h3>
            <p>Critical and high findings re-verified at no extra cost.</p>
          </div>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
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
            href="/services/penetration-testing"
            className="engagement-item"
          >
            <h3>Penetration Testing</h3>
            <p>
              Manual, methodology-led testing that exploits and chains findings
              to prove real-world impact.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/mobile-application-testing"
            className="engagement-item"
          >
            <h3>Mobile Application Testing</h3>
            <p>
              iOS and Android testing covering the on-device app and the API
              backend it talks to.
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
            <h2 className="text-headline max-w-lg">Let's scope your API test.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about API Penetration Testing →
          </Link>
        </div>
      </section>
    </>
  );
}