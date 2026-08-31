import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Secure, governed AI workflow automation from CYBEROCO — LLM integration, custom pipelines and monitoring.",
  alternates: { canonical: "/services/ai-automation-services" },
};

const MARQUEE_ITEMS = [
  "LLM Integration",
  "Workflow Automation",
  "RAG",
  "Data Pipelines",
  "Governance",
  "Monitoring",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is our data used to train any external models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We design pipelines with strict data boundaries \u2014 your data is used to power your workflow, not to train third-party models.",
      },
    },
    {
      "@type": "Question",
      name: "Can this integrate with our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. We work with common CRMs, ticketing systems, data warehouses and internal tools, and will confirm feasibility during scoping.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle AI errors in critical workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build in guardrails, confidence thresholds and human-in-the-loop checkpoints for anything customer-facing or business-critical, rather than letting the model run unchecked.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer monitoring and iteration retainers so the automation keeps working as your data and requirements change.",
      },
    },
  ],
};

export default function AiAutomationServicesPage() {
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
        <p className="text-label c-gray-999 mb-10">AI Automation Services</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Automation,
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              without the risk.
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
                We design AI-powered workflows that remove friction, without
                opening a new attack surface.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="srv-detail-line">
              Every automation we build is scoped, monitored, and governed the same
              way we'd expect from any system handling your data — because that's
              exactly what it is.
            </p>
            <p className="srv-detail-line">
              <strong>Ideal for:</strong> operations, reporting, internal tools,
              and customer-facing workflows where speed matters but data handling
              can't be an afterthought.
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
              Workflow audit & automation mapping
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              LLM integration & prompt engineering
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Custom pipelines (RAG, agents, internal tools)
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Secure data ingestion, normalisation & storage
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Access controls & data governance
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Monitoring, logging & iteration
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Team training & documentation
            </li>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={24} />

      <section className="section">
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
                <strong>Audit & map.</strong> We map your existing workflow
                end-to-end before automating any of it, so we're not automating the
                wrong process faster.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Design & build.</strong> Custom integration and pipeline
                design with governance and access control built in from the start,
                not added later.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Test & harden.</strong> We test the automation the way we'd
                test any system handling your data — not just for function, but for
                misuse.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Monitor & iterate.</strong> Ongoing monitoring, logging and
                iteration as usage and requirements evolve.
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
            <p className="faq-q">Is our data used to train any external models?</p>
            <p className="faq-a">
              No. We design pipelines with strict data boundaries — your data is
              used to power your workflow, not to train third-party models.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Can this integrate with our existing tools?</p>
            <p className="faq-a">
              In most cases, yes. We work with common CRMs, ticketing systems, data
              warehouses and internal tools, and will confirm feasibility during
              scoping.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">How do you handle AI errors in critical workflows?</p>
            <p className="faq-a">
              We build in guardrails, confidence thresholds and human-in-the-loop
              checkpoints for anything customer-facing or business-critical, rather
              than letting the model run unchecked.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you offer ongoing support after launch?</p>
            <p className="faq-a">
              Yes. We offer monitoring and iteration retainers so the automation
              keeps working as your data and requirements change.
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
            <h2 className="text-headline max-w-lg">Let's scope your automation.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about AI Automation →
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