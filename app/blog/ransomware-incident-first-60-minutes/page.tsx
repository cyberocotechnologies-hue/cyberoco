import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const TITLE = "What the first 60 minutes of a ransomware incident actually look like";
const DESCRIPTION =
  "A walkthrough of containment decisions, stakeholder communication, and evidence preservation in the first hour of a ransomware incident.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/ransomware-incident-first-60-minutes" },
  openGraph: {
    type: "article",
    publishedTime: "2026-08-05",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: {
    "@type": "Organization",
    name: "CYBEROCO",
    url: "https://www.cyberoco.tech",
  },
  mainEntityOfPage:
    "https://www.cyberoco.tech/blog/ransomware-incident-first-60-minutes",
};

export default function RansomwareIncidentFirst60MinutesPage() {
  return (
    <>
      <article className="cs-article">
        <div className="container" style={{ paddingTop: "9rem", paddingBottom: 0 }}>
          <div className="article-meta">
            <span className="text-label c-gray-999">Incident Response</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">5 Aug 2026</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">5 min read</span>
          </div>
          <Reveal variant="fadeUp" stagger={0}>
            <h1
              className="post-hero-line text-headline max-w-3xl"
              style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.15 }}
            >
              What the first 60 minutes of a ransomware incident actually look
              like
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
              By the time most organisations call an incident responder, the
              ransomware has usually already run. What happens in the first hour
              after that determines almost everything about how the rest of the
              incident goes — whether it's a contained, well-documented
              recovery, or a multi-week fire drill with a lawyer on every call.
            </p>
            <p>
              Here's roughly how that first hour plays out on our retainer
              engagements.
            </p>

            <h2>Minute 0–10: Confirm and contain</h2>
            <p>
              The first job isn't investigation, it's containment. We isolate
              affected hosts from the network, disable the accounts or access
              paths being actively used, and confirm — quickly — whether this is
              genuinely still spreading or whether it's already run its course.
              Every minute spent debating instead of isolating is a minute the
              encryption process keeps running.
            </p>

            <h2>Minute 10–30: Stakeholder communication</h2>
            <p>
              In parallel, someone needs to be talking to leadership. Not with a
              full picture — there isn't one yet — but with what's known, what's
              being done, and what decisions need to be made in the next hour,
              like whether to take specific systems fully offline. Silence at
              this stage is what causes panic; a short, honest update every
              20–30 minutes is what prevents it.
            </p>

            <h2>Minute 30–60: Evidence preservation and next steps</h2>
            <p>
              Once the immediate spread is contained, the priority shifts to
              preserving evidence before anything gets rebuilt or wiped — memory
              captures, relevant logs, and the initial access vector if it's
              identifiable. This is also when we start scoping what a safe
              recovery actually looks like, rather than restoring from backup
              straight back into the same unpatched entry point.
            </p>

            <blockquote className="article-pullquote">
              The organisations that recover fastest aren't the ones with no
              incidents. They're the ones who'd already rehearsed what the first
              hour looks like.
            </blockquote>

            <p>
              None of this works without a plan in place before the incident
              starts. Knowing who has authority to isolate a production system
              at 2am, and having that agreed in advance, is what turns a
              chaotic first hour into a contained one.
            </p>
          </Reveal>
        </div>
      </article>

      <Reveal variant="fadeUp" stagger={0}>
        <Link
          href="/blog/pci-compliant-web-app-vulnerabilities"
          className="proj-next"
        >
          <div>
            <p className="text-label proj-next-label">Next article</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}
            >
              Three ways we still get into "PCI compliant" web apps
            </h3>
            <p className="proj-next-meta">Pen Test Debrief · 12 Aug 2026</p>
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