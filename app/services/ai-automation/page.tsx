import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Secure, governed AI automation from CYBEROCO — workflow audits, LLM integration, RAG and agent pipelines, governance and ongoing monitoring retainers.",
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    title: "AI Automation Services",
    description:
      "Secure, governed AI automation from CYBEROCO — workflow audits, LLM integration, RAG and agent pipelines, governance and ongoing monitoring retainers.",
    type: "website",
  },
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

const SUB_SERVICES = [
  {
    id: "workflow-audit-automation-mapping",
    title: "Workflow Audit & Automation Mapping",
    lead: "We map your workflow end-to-end before automating it.",
    body: "We map your existing workflow end-to-end before automating any of it, so we're not automating the wrong process faster. The audit identifies where the friction actually sits and which steps are worth automating. Only once that map is agreed do we start designing the automation itself.",
  },
  {
    id: "llm-integration-prompt-engineering",
    title: "LLM Integration & Prompt Engineering",
    lead: "LLMs wired into your tools, governed from the start.",
    body: "Large language models integrated with your existing tools — CRMs, ticketing systems, data warehouses and internal tools — with governance and access control built in from the start, not added later. Guardrails, confidence thresholds and human-in-the-loop checkpoints cover anything customer-facing or business-critical. Feasibility with your stack is confirmed during scoping.",
  },
  {
    id: "rag-ai-agent-pipelines",
    title: "RAG & AI Agent Pipelines",
    lead: "Custom RAG, agents and internal tool pipelines.",
    body: "Custom retrieval-augmented generation, agent and internal-tool pipelines built around how your team actually works — operations, reporting, internal tools and customer-facing workflows. Each pipeline is designed for a specific job rather than bolted on generically. And because it handles your data, we test the automation for misuse as well as function.",
  },
  {
    id: "secure-data-pipelines",
    title: "Secure Data Pipelines",
    lead: "Secure ingestion, normalisation and storage.",
    body: "Secure data ingestion, normalisation and storage underpin every automation we build. The pipeline is scoped, monitored and governed like any other system that handles your data. What the automation can reach, and what stays out of bounds, is defined up front rather than discovered later.",
  },
  {
    id: "ai-governance-access-controls",
    title: "AI Governance & Access Controls",
    lead: "Strict data boundaries — your data never trains models.",
    body: "Every pipeline is designed with strict data boundaries: your data is used to power your workflow, not to train third-party models. Access controls and data governance define who and what can reach which data, designed in from the start rather than retrofitted. The result is an automation your team can trust with sensitive workflows — and one that stands up to review.",
  },
  {
    id: "monitoring-logging-iteration",
    title: "Monitoring, Logging & Iteration",
    lead: "Ongoing monitoring retainers as requirements evolve.",
    body: "We stay engaged after launch with monitoring and iteration retainers, so the automation keeps working as your data and requirements change. Ongoing monitoring and logging catch issues as usage evolves, and the pipeline is iterated with the same guardrails and human-in-the-loop checkpoints it launched with. Where requirements grow, the automation grows with them.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  description:
    "Secure, governed AI workflow automation from CYBEROCO: workflow audits and automation mapping, LLM integration and prompt engineering, custom RAG and AI agent pipelines, secure data pipelines, AI governance and access controls, and ongoing monitoring and iteration.",
  provider: {
    "@type": "Organization",
    name: "CYBEROCO",
    url: site.url,
  },
  areaServed: "Middle East and North Africa (MENA)",
  serviceType: "AI Automation",
};

export default function AiAutomationPage() {
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

      {SUB_SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "section bg-gray-light" : "section"}
        >
          <div className="max-w-3xl">
            <Reveal
              variant="fadeUp"
              start="top 85%"
              className="flex flex-col gap-5"
            >
              <h2 className="text-headline">{service.title}</h2>
              <p className="text-subheading leading-relaxed c-gray-333">
                {service.lead}
              </p>
              <p className="text-sm leading-relaxed c-gray-555">{service.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}