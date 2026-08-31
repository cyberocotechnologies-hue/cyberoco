import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Forma Studio",
  description:
    "Portfolio site for an award-winning architecture firm — as considered as the buildings it designs.",
  alternates: { canonical: "/work/forma-studio" },
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
      name: "Forma Studio",
      item: "https://www.cyberoco.tech/work/forma-studio",
    },
  ],
};

const SCOPE_ITEMS = [
  "Art Direction",
  "Next.js Development",
  "Image Optimisation",
  "Sanity CMS",
  "Performance",
];

export default function FormaStudioPage() {
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
          <span className="text-label c-gray-999">Web Development</span>
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
                Forma Studio
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
                Portfolio site for an award-winning architecture firm — as
                considered as the buildings it designs.
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
        <span className="num">05</span>
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
            Forma Studio is a boutique architecture practice with a portfolio
            of cultural buildings across Europe. They needed a digital
            presence that matched their physical craft.
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
              Their previous site was a basic WordPress install with no visual
              hierarchy and 8-second load times on image-heavy pages. It was
              costing them high-value project enquiries.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Solution</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              We designed an editorial-first site with a strict grid system,
              progressive image loading, and a Sanity CMS the team can manage
              independently. Every image is served in next-gen formats,
              lazy-loaded, and sized exactly to its container.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Outcome</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              Enquiry form completions tripled in the first two months.
              Average session duration rose from 1m 12s to 3m 47s. The site
              was shortlisted for a European design award in its launch year.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        <Link href="/work/koto-arch" className="proj-next">
          <div>
            <p className="text-label proj-next-label">Next project</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
            >
              Koto Architecture
            </h3>
            <p className="proj-next-meta">UI/UX Design · 2023</p>
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