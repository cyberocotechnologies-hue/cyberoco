import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Threat & Risk Assessment",
  description:
    "Structured Threat and Risk Assessments from CYBEROCO — identify, prioritise, and treat the risks that matter most, with compliance-ready reporting and board-level outputs.",
  alternates: { canonical: "/services/threat-risk-assessment" },
};

export default function ThreatRiskAssessmentPage() {
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
        <p className="text-label c-gray-999 mb-10">Threat & Risk Assessment</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="tra-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Know your risk.
            </span>
            <span
              className="tra-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Act before it acts on you.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="stats-bar">
        <Reveal variant="fadeUp" stagger={0.1} className="stats-grid">
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              Structured
            </span>
            <span className="stat-label">Methodical & adaptive</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              Tailored
            </span>
            <span className="stat-label">No generic reports</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              Compliance
            </span>
            <span className="stat-label">GDPR, ISO 27001, NIST & more</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ fontSize: "1.5rem" }}>
              Board-ready
            </span>
            <span className="stat-label">Executive outputs included</span>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">
              What is a Threat and Risk Assessment?
            </p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 tra-detail-line">
                A structured process that identifies, analyses, and evaluates
                the risks posed to your organisation's digital environment.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="tra-detail-line">
              Unlike traditional audits, a TRA goes deeper by assessing the
              threat landscape, vulnerabilities, and potential business impacts
              — helping you make smarter security and investment decisions.
            </p>
            <p className="tra-detail-line">
              Our Threat, Vulnerability & Risk Assessment service ensures your
              organisation is not only compliant but also resilient against
              complex cyber threats.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">
            Why risk assessment isn't optional anymore
          </p>
          <h2 className="text-headline max-w-2xl mb-3">
            With cyberattacks growing in scale and sophistication, risk
            assessments are no longer a box-ticking exercise — they're a
            business survival requirement.
          </h2>
        </div>
        <Reveal variant="scale" start="top 85%" className="industry-grid">
          <div className="industry-card why-card">
            <h3>Proactive Risk Management</h3>
            <p>Identify risks before they become incidents.</p>
          </div>
          <div className="industry-card why-card">
            <h3>Compliance & Regulatory Requirements</h3>
            <p>Meet standards like GDPR, HIPAA, ISO 27001 and PCI-DSS.</p>
          </div>
          <div className="industry-card why-card">
            <h3>Protection of Critical Assets</h3>
            <p>
              Safeguard sensitive data, intellectual property, and financial
              systems.
            </p>
          </div>
          <div className="industry-card why-card">
            <h3>Enhanced Decision-Making</h3>
            <p>Prioritise security investments effectively.</p>
          </div>
          <div className="industry-card why-card">
            <h3>Continuous Improvement</h3>
            <p>Stay ahead of evolving threats with regular reviews.</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Our approach</p>
          <h2 className="text-headline max-w-2xl mb-3">
            A methodical yet adaptive approach to TRAs
          </h2>
          <p className="text-sm c-gray-555 leading-relaxed max-w-2xl">
            Every engagement is tailored to your environment. This holistic
            framework allows your organisation to evaluate threat exposure,
            close security gaps, and optimise security investments.
          </p>
        </div>
        <div style={{ maxWidth: "44rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.06}
            start="top 85%"
            className="flex flex-col"
          >
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">01</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Identify Assets
                </p>
                <p className="process-text">
                  Pinpoint critical business systems, applications, and data.
                </p>
              </div>
            </div>
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">02</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Identify Threats
                </p>
                <p className="process-text">
                  Map out both internal and external threat vectors.
                </p>
              </div>
            </div>
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">03</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Identify Vulnerabilities
                </p>
                <p className="process-text">
                  Uncover weaknesses in processes, people, and technology.
                </p>
              </div>
            </div>
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">04</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Determine Impact
                </p>
                <p className="process-text">
                  Assess the potential business damage if threats exploit
                  vulnerabilities.
                </p>
              </div>
            </div>
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">05</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Determine Risk
                </p>
                <p className="process-text">
                  Quantify and rank risks based on likelihood and severity.
                </p>
              </div>
            </div>
            <div
              className="process-step"
              style={{
                padding: "1.75rem 0",
                borderTop: "1px solid var(--gray-200)",
                borderBottom: "1px solid var(--gray-200)",
              }}
            >
              <span className="text-label process-num">06</span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ marginBottom: "0.35rem" }}
                >
                  Risk Treatment & Mitigation
                </p>
                <p className="process-text">
                  Develop practical, cost-effective strategies to reduce risk
                  exposure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">What you gain</p>
          <h2 className="text-headline max-w-2xl">
            A CYBEROCO TRA brings tangible business benefits.
          </h2>
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
              Improve the effectiveness of your existing controls
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Demonstrate cyber competency to clients, partners, and regulators
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Enhance decision-making with actionable risk insights
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Optimise your security programme for cost-efficiency and
              performance
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Enable continuous improvement through ongoing monitoring and
              support
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">The CYBEROCO difference</p>
          <h2 className="text-headline max-w-2xl">
            Why leading organisations choose us.
          </h2>
        </div>
        <Reveal variant="scale" start="top 85%" className="value-grid">
          <div className="value-item diff-item">
            <span className="text-label c-gray-ccc">01</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Real-world Expertise
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Senior cyber talent with hands-on experience combating complex
              threats across regulated industries.
            </p>
          </div>
          <div className="value-item diff-item">
            <span className="text-label c-gray-ccc">02</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Accredited & Certified
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Certified by leading bodies in cybersecurity and risk management.
            </p>
          </div>
          <div className="value-item diff-item">
            <span className="text-label c-gray-ccc">03</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Deep-Dive Consultation
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              One-on-one sessions to understand your unique environment before
              any assessment begins.
            </p>
          </div>
          <div className="value-item diff-item">
            <span className="text-label c-gray-ccc">04</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Tailored Risk Mitigation
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              No generic reports — only customised strategies designed around
              your business, sector, and risk appetite.
            </p>
          </div>
          <div className="value-item diff-item">
            <span className="text-label c-gray-ccc">05</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.15rem" }}
            >
              Continuous Threat Monitoring
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed">
              Beyond assessment, we provide ongoing support to strengthen your
              defence posture over time.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">
            Specialised services we offer
          </p>
          <h2 className="text-headline max-w-2xl mb-3">
            Every organisation has unique risk challenges.
          </h2>
        </div>
        <Reveal
          variant="fadeUp"
          stagger={0.06}
          start="top 85%"
          className="industry-grid"
        >
          <div className="industry-card deliver-card">
            <h3>Comprehensive Cyber Risk Assessments</h3>
            <p>
              End-to-end evaluation of threats, vulnerabilities, and risks
              across your entire estate.
            </p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Regulatory & Compliance Assessments</h3>
            <p>
              Align with NIST, ISO 27001, COBIT, GDPR, HIPAA, and more — mapped
              to your specific obligations.
            </p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Continuous Monitoring & Improvement</h3>
            <p>
              Ongoing assessments to stay ahead of evolving threats with
              regular programme reviews.
            </p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Virtual CISO (vCISO) Services</h3>
            <p>
              Access senior cyber talent and strategic security leadership
              without full-time overhead.
            </p>
          </div>
          <div className="industry-card deliver-card">
            <h3>Customised TRA Frameworks</h3>
            <p>
              Tailored TRA frameworks built around industries like finance,
              healthcare, government, and retail.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">
            Deliverables you receive
          </p>
          <h2 className="text-headline max-w-2xl">
            With every engagement, clear and actionable outputs.
          </h2>
        </div>
        <div
          className="grid grid-2"
          style={{ gap: "3rem 5rem", alignItems: "start" }}
        >
          <div
            className="flex flex-col"
            style={{ gap: "1px", background: "var(--black)" }}
          >
            <div
              style={{ background: "var(--white)", padding: "1.75rem 2rem" }}
            >
              <p
                className="text-label c-gray-ccc"
                style={{ marginBottom: "0.75rem" }}
              >
                Document
              </p>
              <p className="font-semibold" style={{ fontSize: "1.05rem" }}>
                Comprehensive Risk Assessment Report
              </p>
            </div>
            <div
              style={{ background: "var(--white)", padding: "1.75rem 2rem" }}
            >
              <p
                className="text-label c-gray-ccc"
                style={{ marginBottom: "0.75rem" }}
              >
                Categorisation
              </p>
              <div
                className="flex flex-wrap"
                style={{ gap: "0.5rem", marginTop: "0.25rem" }}
              >
                <span
                  className="cs-metric-pill"
                  style={{ borderColor: "#c0392b", color: "#c0392b" }}
                >
                  High
                </span>
                <span
                  className="cs-metric-pill"
                  style={{ borderColor: "#e67e22", color: "#e67e22" }}
                >
                  Medium
                </span>
                <span className="cs-metric-pill">Low</span>
              </div>
            </div>
            <div
              style={{ background: "var(--white)", padding: "1.75rem 2rem" }}
            >
              <p
                className="text-label c-gray-ccc"
                style={{ marginBottom: "0.75rem" }}
              >
                Compliance
              </p>
              <p className="text-sm c-gray-555 leading-relaxed">
                Gap analysis mapped to GDPR, HIPAA, ISO 27001, NIST, PCI-DSS,
                and other applicable frameworks.
              </p>
            </div>
            <div
              style={{ background: "var(--white)", padding: "1.75rem 2rem" }}
            >
              <p
                className="text-label c-gray-ccc"
                style={{ marginBottom: "0.75rem" }}
              >
                Treatment plan
              </p>
              <p className="text-sm c-gray-555 leading-relaxed">
                Prioritised recommendations with practical mitigation steps your
                team can act on.
              </p>
            </div>
            <div
              style={{ background: "var(--white)", padding: "1.75rem 2rem" }}
            >
              <p
                className="text-label c-gray-ccc"
                style={{ marginBottom: "0.75rem" }}
              >
                Executive summary
              </p>
              <p className="text-sm c-gray-555 leading-relaxed">
                Board-level narrative for decision-making and stakeholder
                communication.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{ gap: "1.25rem", paddingTop: "0.5rem" }}
          >
            <blockquote className="article-pullquote" style={{ margin: 0 }}>
              A strong TRA doesn't just find problems — it tells you which ones
              to fix first, and gives you the language to explain why to your
              board.
            </blockquote>
            <p className="text-sm c-gray-555 leading-relaxed">
              Every deliverable is written in two registers: technical detail
              for the engineers remediating, and plain language for the
              executives funding the programme.
            </p>
            <Link
              href="/contact"
              className="btn-fill"
              style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
            >
              Start your TRA →
            </Link>
          </div>
        </div>
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
            href="/services/vulnerability-assessment"
            className="engagement-item"
          >
            <h3>Vulnerability Assessment</h3>
            <p>
              Continuous, CREST-aligned scanning and manual validation across
              your estate.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/penetration-testing"
            className="engagement-item"
          >
            <h3>Penetration Testing</h3>
            <p>
              Manual testing that exploits and chains findings to prove
              real-world impact.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link
            href="/services/cybersecurity-services"
            className="engagement-item"
          >
            <h3>Cyber Security Services</h3>
            <p>
              See the full range of testing, assessment and compliance-led
              engagements we offer.
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
              Let's assess your threat and risk exposure.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Threat & Risk Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}