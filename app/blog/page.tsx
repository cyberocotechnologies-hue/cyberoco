import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from the CYBEROCO research team — pen test debriefs, incident response writeups, and vulnerability research.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
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
        <p className="text-label c-gray-999 mb-10">Blog</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="blog-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Field notes from
            </span>
            <span
              className="blog-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              our research team.
            </span>
          </Reveal>
        </div>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-xl"
          style={{ marginTop: "2rem" }}
        >
          Findings from real incidents, pen test debriefs, and breach analysis.
          Plain-English writeups of what our consultants are seeing in the wild.
        </p>
      </section>

      <section className="section">
        <Reveal variant="fadeUp" stagger={0.08} className="blog-grid">
          <Link
            href="/blog/pci-compliant-web-app-vulnerabilities"
            className="blog-card"
          >
            <span className="text-label blog-tag">
              Pen Test Debrief · 12 Aug 2026
            </span>
            <h3>Three ways we still get into "PCI compliant" web apps</h3>
            <p>
              A walkthrough of the logic flaws and misconfigurations that keep
              showing up in engagements, despite a clean compliance report.
            </p>
          </Link>

          <Link
            href="/blog/ransomware-incident-first-60-minutes"
            className="blog-card"
          >
            <span className="text-label blog-tag">
              Incident Response · 5 Aug 2026
            </span>
            <h3>
              What the first 60 minutes of a ransomware incident actually look
              like
            </h3>
            <p>
              Containment decisions, stakeholder communication, and the mistakes
              that turn a bad day into a bad quarter.
            </p>
          </Link>

          <Link href="/blog/api-authorisation-flaws" className="blog-card">
            <span className="text-label blog-tag">Research · 29 Jul 2026</span>
            <h3>
              API authorisation flaws: the gap between "authenticated" and
              "authorised"
            </h3>
            <p>
              Why so many APIs correctly check who you are, but not what you're
              allowed to do, and how we test for it.
            </p>
          </Link>
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Want this in your inbox?</p>
            <h2 className="text-headline max-w-lg">
              Get in touch and we'll keep you posted.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}