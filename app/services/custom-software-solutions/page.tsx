import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "Custom Software Solutions",
  description:
    "Custom software development for MENA's regulated institutions — enterprise web platforms, backend systems, and government-grade compliance infrastructure from CYBEROCO.",
  alternates: { canonical: "/services/custom-software-solutions" },
};

const MARQUEE_ITEMS = [
  "REST & GraphQL",
  "Microservices",
  "AES-256 Encryption",
  "Arabic & RTL",
  "Legacy Integration",
  "Audit Trails",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you integrate with our existing on-premise systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We start with an audit of your existing ERPs and legacy databases, then bridge them to modern infrastructure incrementally, without downtime or data loss.",
      },
    },
    {
      "@type": "Question",
      name: "How is data residency handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectures are designed around your applicable regional data residency requirements and sector mandates from the outset, not retrofitted afterward.",
      },
    },
    {
      "@type": "Question",
      name: "Is security testing part of the build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development and penetration testing are separate engagements designed to pair together \u2014 many institutions build with us and then run a full security assessment through our Cyber Security Services before go-live.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support Arabic and RTL interfaces natively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Right-to-left layout, bidirectional text and Arabic-first UX are built in from day one, not added on as a translation layer.",
      },
    },
  ],
};

export default function CustomSoftwareSolutionsPage() {
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
        <p className="text-label c-gray-999 mb-10">Custom Software Solutions</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Mission-critical.
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              By design.
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
                Software for MENA's most regulated institutions.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="srv-detail-line">
              We architect, deploy, and modernise mission-critical digital
              infrastructure for the region's most regulated institutions — from
              highly concurrent workflow engines to sovereign, government-grade
              compliance platforms. Our engineering teams are built to deliver
              absolute deployment certainty.
            </p>
            <p className="srv-detail-line">
              <strong>Ideal for:</strong> ministries, hospital clusters, and
              public-sector bodies that need to bridge legacy infrastructure with
              modern systems, without risking operational disruption.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-4">Capabilities</p>
        <h2 className="text-headline max-w-2xl mb-12">Architectural capabilities.</h2>
        <Reveal variant="fadeUp" stagger={0.06} start="top 85%" className="cap-grid">
          <div className="cap-item">
            <h3>Enterprise Web Platforms</h3>
            <p>
              Multi-tenant SaaS platforms, admin dashboards, and institutional
              portals with role-based access, immutable audit trails, and automated
              compliance reporting.
            </p>
          </div>
          <div className="cap-item">
            <h3>Backend Systems & APIs</h3>
            <p>
              Scalable RESTful and GraphQL APIs, microservices architectures,
              event-driven systems, and real-time data processing pipelines.
            </p>
          </div>
          <div className="cap-item">
            <h3>Database Design & Migration</h3>
            <p>
              Complex schema design, legacy system data modelling, and zero-loss
              migrations optimised for high-throughput institutional workloads.
            </p>
          </div>
          <div className="cap-item">
            <h3>Workflow Automation</h3>
            <p>
              Custom rule engines, multi-tier approval chains, and secure document
              management automation for large-scale public-sector operations.
            </p>
          </div>
          <div className="cap-item">
            <h3>Compliance & Security</h3>
            <p>
              Healthcare and government-grade security architectures — AES-256
              encryption at rest and in transit, rigorous penetration testing, and
              centralised audit logging.
            </p>
          </div>
          <div className="cap-item">
            <h3>Native Arabic & RTL Support</h3>
            <p>
              Built from the ground up for MENA. Flawless right-to-left interfaces,
              bidirectional text rendering, and culturally appropriate UX mapping.
            </p>
          </div>
        </Reveal>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={24} />

      <section className="section">
        <p className="text-label c-gray-999 mb-4">Benefits</p>
        <h2 className="text-headline max-w-2xl mb-4">
          Why ministries & enterprises rely on CYBEROCO.
        </h2>
        <p className="text-sm c-gray-555 max-w-2xl mb-12">
          We do not build lightweight applications. We engineer sovereign
          infrastructure designed to eliminate operational risk.
        </p>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 85%"
          className="benefit-grid"
        >
          <div className="benefit-item">
            <span className="benefit-line" />
            <h3>Sovereign data & compliance</h3>
            <p>
              Every architecture is engineered to adhere to the strictest regional
              data residency laws and global healthcare and educational mandates.
              Your data remains under your absolute control.
            </p>
          </div>
          <div className="benefit-item">
            <span className="benefit-line" />
            <h3>Zero-downtime legacy integration</h3>
            <p>
              We seamlessly bridge modern cloud infrastructure with your existing
              on-premise ERPs and legacy databases, without risking data loss or
              operational disruption.
            </p>
          </div>
          <div className="benefit-item">
            <span className="benefit-line" />
            <h3>Uncompromising scale & concurrency</h3>
            <p>
              Built for national stress tests. Our cloud-native microservices
              architectures are designed to handle millions of concurrent queries
              during peak institutional load.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">Our process</p>
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
                <strong>Discovery & scoping.</strong> Stakeholder interviews,
                requirements gathering, technical feasibility assessment, and
                project roadmap creation.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Architecture & design.</strong> System architecture,
                database design, UI/UX wireframes, and technical specification
                documents.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Agile development.</strong> Two-week sprint cycles with
                continuous delivery, code reviews, automated testing, and
                stakeholder demos.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Launch & support.</strong> Deployment, performance tuning,
                training, documentation, and ongoing maintenance with SLA-backed
                support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-4">Scale</p>
        <h2 className="text-headline max-w-2xl mb-12">
          Regulated sectors, deployed at scale.
        </h2>
        <div className="sector-grid">
          <div className="industry-card">
            <h3>Education</h3>
            <p>Ministries & national assessment systems.</p>
          </div>
          <div className="industry-card">
            <h3>Healthcare</h3>
            <p>Hospital clusters & waste compliance systems.</p>
          </div>
          <div className="industry-card">
            <h3>Government</h3>
            <p>Public-sector regulatory backbones.</p>
          </div>
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
            <p className="faq-q">Can you integrate with our existing on-premise systems?</p>
            <p className="faq-a">
              Yes. We start with an audit of your existing ERPs and legacy
              databases, then bridge them to modern infrastructure incrementally,
              without downtime or data loss.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">How is data residency handled?</p>
            <p className="faq-a">
              Architectures are designed around your applicable regional data
              residency requirements and sector mandates from the outset, not
              retrofitted afterward.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Is security testing part of the build?</p>
            <p className="faq-a">
              Development and penetration testing are separate engagements designed
              to pair together — many institutions build with us and then run a
              full security assessment through our Cyber Security Services before
              go-live.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do you support Arabic and RTL interfaces natively?</p>
            <p className="faq-a">
              Yes. Right-to-left layout, bidirectional text and Arabic-first UX are
              built in from day one, not added on as a translation layer.
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
            <h2 className="text-headline max-w-lg">Let's scope your infrastructure.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Custom Software Solutions →
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