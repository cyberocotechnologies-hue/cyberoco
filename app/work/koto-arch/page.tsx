import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Koto Architecture",
  description:
    "A global design system and brand portal for a studio operating across 12 countries.",
  alternates: { canonical: "/work/koto-arch" },
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
      name: "Koto Architecture",
      item: "https://www.cyberoco.tech/work/koto-arch",
    },
  ],
};

const SCOPE_ITEMS = [
  "Design Systems",
  "Brand Audit",
  "Component Library",
  "Documentation",
  "Governance",
];

export default function KotoArchPage() {
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
          <span className="text-label c-gray-999">UI/UX Design</span>
          <span className="sep">/</span>
          <span className="text-label c-gray-ccc">2023</span>
        </div>
        <h1>
          <Reveal variant="lines">
            <div className="reveal-line">
              <span
                className="proj-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Koto Architecture
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
                A global design system and brand portal for a studio operating
                across 12 countries.
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
        <span className="num">06</span>
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
            Koto Architecture needed a unified design system serving internal
            teams across 12 countries with consistent brand expression and
            zero ambiguity.
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
              With studios in 12 countries and no central design authority,
              brand expression had fragmented. 14 different logo variations
              were in active use. Pitch decks looked like different companies.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Solution</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              We audited every touchpoint, established a canonical brand
              language, and built a full design system in Figma with 300+
              components. A brand portal was shipped so any team could find
              approved assets and templates instantly.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Outcome</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              Brand consistency score rose from 41% to 94% within six months.
              Design time per pitch deck dropped 60%. The system is now the
              single source of truth for a global team of 200+.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        {/* Source pointed this Next project link at a nonexistent Orbital CRM page — loops to the first project instead. */}
        <Link href="/work/realestateapp" className="proj-next">
          <div>
            <p className="text-label proj-next-label">Next project</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
            >
              Orbital CRM
            </h3>
            <p className="proj-next-meta">UI/UX Design · 2024</p>
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