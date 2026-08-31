import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const TITLE = 'Three ways we still get into "PCI compliant" web apps';
const DESCRIPTION =
  "Common logic flaws and misconfigurations our consultants find in PCI DSS compliant web applications, despite a clean scan report.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/pci-compliant-web-app-vulnerabilities" },
  openGraph: {
    type: "article",
    publishedTime: "2026-08-12",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: {
    "@type": "Organization",
    name: "CYBEROCO",
    url: "https://www.cyberoco.tech",
  },
  mainEntityOfPage:
    "https://www.cyberoco.tech/blog/pci-compliant-web-app-vulnerabilities",
};

export default function PciCompliantWebAppVulnerabilitiesPage() {
  return (
    <>
      <article className="cs-article">
        <div className="container" style={{ paddingTop: "9rem", paddingBottom: 0 }}>
          <div className="article-meta">
            <span className="text-label c-gray-999">Pen Test Debrief</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">12 Aug 2026</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">6 min read</span>
          </div>
          <Reveal variant="fadeUp" stagger={0}>
            <h1
              className="post-hero-line text-headline max-w-3xl"
              style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.15 }}
            >
              Three ways we still get into "PCI compliant" web apps
            </h1>
          </Reveal>
        </div>

        <div
          className="container"
          style={{
            paddingTop: "3rem",
            paddingBottom: "5rem",
            borderBottom: "1px solid var(--black)",
          }}
        >
          <Reveal
            variant="fadeUp"
            stagger={0.03}
            start="top 90%"
            className="article-body max-w-3xl"
          >
            <p>
              Every PCI DSS attestation letter says the same thing on the cover:
              compliant. What it doesn't say is that "compliant" and "tested
              manually by someone trying to break in" are two very different
              bars — and in most of the engagements we run, the gap between them
              is where the real risk lives.
            </p>
            <p>
              Here are three patterns we still see constantly, in applications
              that passed their compliance scan without issue.
            </p>

            <h2>1. Client-side validation masquerading as server-side control</h2>
            <p>
              Automated scanners are good at finding missing headers and
              outdated libraries. They're much worse at noticing that a price, a
              quantity, or a discount code is only validated in JavaScript
              running in the browser. We regularly intercept a checkout request,
              edit the price field directly, and watch the order go through
              unchanged.
            </p>

            <h2>2. Broken object-level authorisation on "compliant" APIs</h2>
            <p>
              PCI DSS cares about how card data is transmitted and stored — it
              doesn't automatically catch an API endpoint that returns another
              customer's order history because the object ID is guessable and
              nobody checks ownership server-side. This is consistently the
              single most common finding across our web and API engagements,
              compliant or not.
            </p>

            <h2>3. Third-party payment widget misconfiguration</h2>
            <p>
              Outsourcing card capture to a hosted payment widget is good
              practice, and it's often what makes PCI scope smaller in the first
              place. But we still find widgets embedded with permissive CSP
              rules, or checkout pages that load third-party scripts capable of
              altering the DOM around the payment iframe — reopening exactly the
              skimming risk the widget was meant to close.
            </p>

            <blockquote className="article-pullquote">
              "Compliant" tells you a control exists on paper. A penetration
              test tells you whether it holds up against someone actually
              trying.
            </blockquote>

            <p>
              None of these findings are exotic. They're the kind of thing a
              compliance scan structurally can't catch, because a scanner
              doesn't understand your business logic — it can only check for
              known signatures and missing configuration. That's the gap manual
              testing is built to close.
            </p>
          </Reveal>
        </div>
      </article>

      <Reveal variant="fadeUp" stagger={0}>
        <Link href="/blog" className="proj-next">
          <div>
            <p className="text-label proj-next-label">All articles</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}
            >
              Field notes from our research team.
            </h3>
            <p className="proj-next-meta">Back to the blog</p>
          </div>
          <span className="proj-next-arrow">→</span>
        </Link>
      </Reveal>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready?</p>
            <h2 className="text-headline max-w-lg">
              Let's talk about your risk posture.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Get in touch →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
    </>
  );
}