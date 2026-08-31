import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pulse AI Platform",
  description: "Automating operations intelligence for a Series A startup.",
  alternates: { canonical: "/work/pulse-ai" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cyberoco.tech/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Work",
      item: "https://www.cyberoco.tech/work",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pulse AI Platform",
      item: "https://www.cyberoco.tech/work/pulse-ai",
    },
  ],
};

const SCOPE_ITEMS = [
  "Workflow Audit",
  "LLM Pipeline",
  "Data Engineering",
  "Dashboard Design",
  "Monitoring",
];

export default function PulseAiPage() {
  return (
    <>
      <section
        className="container"
        style={{
          paddingTop: "9rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <div className="proj-breadcrumb">
          <Link href="/work" className="text-label c-gray-999 nav-link">
            ← Work
          </Link>
          <span className="sep">/</span>
          <span className="text-label c-gray-999">AI Automation</span>
          <span className="sep">/</span>
          <span className="text-label c-gray-ccc">2024</span>
        </div>
        <h1>
          <Reveal variant="lines">
            <div className="reveal-line">
              <span
                className="proj-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Pulse AI Platform
              </span>
            </div>
          </Reveal>
        </h1>
      </section>

      <section
        className="container"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <div className="grid md-grid-12" style={{ gap: "3rem" }}>
          <div className="md-col-span-7">
            <Reveal variant="fadeUp" stagger={0}>
              <p className="proj-tagline">
                Automating operations intelligence for a Series A startup.
              </p>
            </Reveal>
          </div>
          <div className="md-col-span-5">
            <p className="text-label c-gray-999 mb-5">Project scope</p>
            <Reveal
              variant="fadeIn"
              stagger={0.05}
              as="ul"
              className="proj-scope-list"
            >
              {SCOPE_ITEMS.map((item) => (
                <li key={item} className="proj-scope-item">
                  <span
                    style={{
                      width: "1.25rem",
                      height: "1px",
                      background: "var(--black)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <div className="proj-visual" aria-hidden="true">
        <span className="num">04</span>
      </div>

      <section
        className="container"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-6">Overview</p>
        <Reveal variant="fadeUp" stagger={0}>
          <p
            className="proj-overview text-sm c-gray-444 leading-relaxed"
            style={{ fontSize: "1.0625rem", maxWidth: "48rem" }}
          >
            Pulse had 12 data sources, 4 dashboards, and no single source of
            truth. Their ops team spent 14 hours per week compiling reports
            that were outdated by Monday.
          </p>
        </Reveal>
      </section>

      <div className="proj-visual-detail" aria-hidden="true">
        <div className="sq" />
        <div className="sq" />
        <div className="sq" />
      </div>

      <section
        className="container"
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <Reveal
          variant="fadeUp"
          stagger={0.1}
          start="top 80%"
          className="proj-pso-grid"
        >
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Problem</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              Manual reporting was error-prone, slow, and consumed the most
              expensive hours of the ops team&apos;s week. Reports reached
              leadership 72 hours stale.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Solution</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              We built a custom AI pipeline ingesting all 12 sources,
              normalised the schema, and surfaced weekly operational summaries
              via a fine-tuned LLM. Output: one minimal dashboard with
              natural-language summaries and anomaly alerts.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Outcome</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              14 hours of manual work reduced to 20 minutes of review. The
              system flagged an inventory anomaly in week three. The pipeline
              scales automatically as new sources are added.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        <Link href="/work/forma-studio" className="proj-next">
          <div>
            <p className="text-label proj-next-label">Next project</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
            >
              Forma Studio
            </h3>
            <p className="proj-next-meta">Web Development · 2023</p>
          </div>
          <span className="proj-next-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
    </>
  );
}