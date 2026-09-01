import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cyber Security Services, Web & App Development Services, and AI Automation Services from CYBEROCO.",
  alternates: { canonical: "/services" },
};

const MARQUEE_ITEMS = [
  "Cyber Security",
  "Web & App Development",
  "AI Automation",
  "Compliance",
  "Penetration Testing",
  "Risk Management",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a penetration test take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused web or API pentest typically runs 1\u20132 weeks. Broader engagements covering multiple applications, networks, or mobile apps usually run 3\u20136 weeks depending on scope. We'll confirm exact timing after a short scoping call.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with early-stage startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the fit is right. We work with founders who have a clear problem and trust the process \u2014 whether that's a first pentest ahead of an enterprise deal or a secure-by-design build from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing retainers or incident response?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer part and full incident response retainers with senior responders on standby, plus continuous testing and monitoring retainers for clients who need year-round assurance rather than a once-a-year report.",
      },
    },
    {
      "@type": "Question",
      name: "Are your reports compliance-ready?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our reporting is mapped to the frameworks your auditors expect \u2014 ISO 27001, SOC 2, PCI DSS, and others depending on your sector \u2014 so findings and evidence drop straight into your compliance program.",
      },
    },
  ],
};

export default function ServicesPage() {
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
        <p className="text-label c-gray-999 mb-10">Services</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Three disciplines.
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              One standard.
            </span>
          </Reveal>
        </div>
      </section>

      <Reveal variant="fadeUp" stagger={0} start="top 82%">
        <section className="srv-block" id="cyber-security">
          <div className="srv-block-grid">
            <div className="srv-left">
              <span className="text-label c-gray-ccc">01</span>
              <h2
                className="font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)" }}
              >
                Cyber Security Services
              </h2>
              <p className="text-sm italic c-gray-999 leading-relaxed">
                Offensive testing. Defensive assurance.
              </p>
              <div className="divider-thin" style={{ marginTop: "0.5rem" }} />
              <div>
                <p className="text-label c-gray-ccc" style={{ marginBottom: "0.375rem" }}>
                  Ideal for
                </p>
                <p className="text-xs c-gray-666 leading-relaxed">
                  Regulated industries, SaaS, fintech, healthcare, retail
                </p>
              </div>
            </div>
            <div className="srv-right">
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.125rem)", lineHeight: 1.7 }}
                className="c-gray-444"
              >
                CREST-accredited, QSA-led penetration testing, vulnerability
                assessments and risk assessments that hold up to auditors and
                attackers alike. We map every engagement to the standards your
                compliance program actually needs.
              </p>
              <div>
                <p className="text-label c-gray-999 mb-5">Highlights</p>
                <Reveal
                  variant="fadeIn"
                  stagger={0.04}
                  start="top 87%"
                  as="ul"
                  className="srv-deliverables"
                >
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Web & API penetration testing
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Vulnerability & risk assessments
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Mobile application testing
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Compliance-aligned reporting (ISO 27001, SOC 2, PCI DSS)
                  </li>
                </Reveal>
              </div>
              <Link
                href="/services/cyber-security-services"
                className="btn-outline"
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Explore Cyber Security Services →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="fadeUp" stagger={0} start="top 82%">
        <section className="srv-block" id="web-app-dev">
          <div className="srv-block-grid">
            <div className="srv-left">
              <span className="text-label c-gray-ccc">02</span>
              <h2
                className="font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)" }}
              >
                Web & App Development Services
              </h2>
              <p className="text-sm italic c-gray-999 leading-relaxed">
                Secure by design, fast by default.
              </p>
              <div className="divider-thin" style={{ marginTop: "0.5rem" }} />
              <div>
                <p className="text-label c-gray-ccc" style={{ marginBottom: "0.375rem" }}>
                  Ideal for
                </p>
                <p className="text-xs c-gray-666 leading-relaxed">
                  SaaS products, client portals, marketing sites, internal tools
                </p>
              </div>
            </div>
            <div className="srv-right">
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.125rem)", lineHeight: 1.7 }}
                className="c-gray-444"
              >
                Secure-by-design websites and applications, engineered for
                performance without cutting corners on security. Our developers
                work alongside our security consultants, not after them.
              </p>
              <div>
                <p className="text-label c-gray-999 mb-5">Highlights</p>
                <Reveal
                  variant="fadeIn"
                  stagger={0.04}
                  start="top 87%"
                  as="ul"
                  className="srv-deliverables"
                >
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Secure architecture & code review
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Modern web & mobile app builds
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Performance & accessibility engineering
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Post-launch hardening & support
                  </li>
                </Reveal>
              </div>
              <Link
                href="/services/web-application-development"
                className="btn-outline"
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Explore Web & App Development Services →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="fadeUp" stagger={0} start="top 82%">
        <section className="srv-block" id="ai-automation">
          <div className="srv-block-grid">
            <div className="srv-left">
              <span className="text-label c-gray-ccc">03</span>
              <h2
                className="font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)" }}
              >
                AI Automation Services
              </h2>
              <p className="text-sm italic c-gray-999 leading-relaxed">
                Intelligence, governed.
              </p>
              <div className="divider-thin" style={{ marginTop: "0.5rem" }} />
              <div>
                <p className="text-label c-gray-ccc" style={{ marginBottom: "0.375rem" }}>
                  Ideal for
                </p>
                <p className="text-xs c-gray-666 leading-relaxed">
                  Operations, reporting, internal tools, customer support
                </p>
              </div>
            </div>
            <div className="srv-right">
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.125rem)", lineHeight: 1.7 }}
                className="c-gray-444"
              >
                Intelligent workflow automation with security and governance
                built in from day one, not bolted on after. We design AI systems
                that remove friction without introducing new risk.
              </p>
              <div>
                <p className="text-label c-gray-999 mb-5">Highlights</p>
                <Reveal
                  variant="fadeIn"
                  stagger={0.04}
                  start="top 87%"
                  as="ul"
                  className="srv-deliverables"
                >
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Workflow audit & automation mapping
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    LLM integration & custom pipelines
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Secure data ingestion & storage
                  </li>
                  <li className="srv-deliverable">
                    <span className="srv-tick" />
                    Monitoring, logging & governance
                  </li>
                </Reveal>
              </div>
              <Link
                href="/services/ai-automation-services"
                className="btn-outline"
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Explore AI Automation Services →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Marquee items={MARQUEE_ITEMS} speed={20} inverted />

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
            <p className="faq-q">How long does a penetration test take?</p>
            <p className="faq-a">
              A focused web or API pentest typically runs 1–2 weeks. Broader
              engagements covering multiple applications, networks, or mobile apps
              usually run 3–6 weeks depending on scope. We'll confirm exact timing
              after a short scoping call.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you work with early-stage startups?</p>
            <p className="faq-a">
              Yes, if the fit is right. We work with founders who have a clear
              problem and trust the process — whether that's a first pentest ahead
              of an enterprise deal or a secure-by-design build from day one.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you offer ongoing retainers or incident response?</p>
            <p className="faq-a">
              Yes. We offer part and full incident response retainers with senior
              responders on standby, plus continuous testing and monitoring
              retainers for clients who need year-round assurance rather than a
              once-a-year report.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Are your reports compliance-ready?</p>
            <p className="faq-a">
              Yes. Our reporting is mapped to the frameworks your auditors expect —
              ISO 27001, SOC 2, PCI DSS, and others depending on your sector — so
              findings and evidence drop straight into your compliance program.
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
            <h2 className="text-headline max-w-lg">Let's scope your engagement.</h2>
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