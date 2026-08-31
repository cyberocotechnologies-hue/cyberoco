import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep work, real outcomes — detailed case studies from CYBEROCO's client engagements.",
  alternates: { canonical: "/case-studies" },
};

type CaseStudy = {
  index: string;
  category: string;
  year: string;
  metric: string;
  title: string;
  num: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    category: "UI/UX Design",
    year: "2024",
    metric: "31% faster time-to-close",
    title: "Orbital CRM",
    num: "01",
    tagline:
      "Turning a 47-screen enterprise CRM into a system people actually want to use.",
    problem:
      "Orbital's sales team spent more time fighting their CRM than closing deals. The interface had grown organically over four years — inconsistent, bloated, and slow. Churn among power users was rising.",
    solution:
      "We conducted six weeks of user research, mapping every friction point. Then rebuilt the architecture from scratch: a unified data model, a consistent component system, and a dashboard surfacing only what salespeople needed at a glance.",
    outcome:
      "Time-to-close improved 31%. User satisfaction rose from 3.1 to 4.6/5. The design system we delivered reduced front-end development time by 40% for all subsequent features.",
    // Source pointed this card at a nonexistent Orbital CRM project page — links to the portfolio instead.
    href: "/work",
  },
  {
    index: "02",
    category: "Web Development",
    year: "2024",
    metric: "3.8% conversion rate (from 1.2%)",
    title: "Versa Finance",
    num: "02",
    tagline: "A fintech platform rebuilt for trust, clarity, and speed.",
    problem:
      "Versa's marketing site converted at 1.2% — below industry average. The site was visually noisy, the value proposition buried, and it loaded in 6 seconds on mobile.",
    solution:
      "We rebuilt in Next.js with a complete editorial redesign. Every section was written and structured to answer one specific question the user had at that moment. Load time became the primary design constraint.",
    outcome:
      "Conversion rate reached 3.8%. Page load dropped to 0.9s on mobile. Core Web Vitals entered the top tier, improving organic search rankings substantially within the first quarter.",
    href: "/work/versa-finance",
  },
  {
    index: "03",
    category: "App Development",
    year: "2023",
    metric: "71% 30-day retention (from 34%)",
    title: "Nova Health App",
    num: "03",
    tagline:
      "Chronic care management — simplified for the patient and the clinician.",
    problem:
      "Nova Health's app had 34% 30-day retention. Patients found it confusing; clinicians found it slow. The codebase was a 4-year-old native iOS app with no Android equivalent.",
    solution:
      "Rebuilt in React Native with a WCAG AA-compliant design system. Onboarding was simplified to 3 steps, a real-time clinical messaging layer was added, and iOS and Android launched simultaneously.",
    outcome:
      "30-day retention rose to 71%. Clinician response time dropped 58%. The app was featured as Best New App in the Health category on both platforms.",
    href: "/work/nova-health",
  },
  {
    index: "04",
    category: "AI Automation",
    year: "2024",
    metric: "14 hrs → 20 min weekly reporting",
    title: "Pulse AI Platform",
    num: "04",
    tagline: "Automating operations intelligence for a Series A startup.",
    problem:
      "Pulse had 12 data sources, 4 dashboards, and no single source of truth. Their ops team spent 14 hours per week manually compiling reports that were outdated by Monday.",
    solution:
      "We built a custom AI pipeline ingesting all 12 sources, normalised the schema, and surfaced weekly operational summaries via a fine-tuned LLM — all in one minimal dashboard with anomaly alerts.",
    outcome:
      "14 hours of weekly manual work reduced to 20 minutes of review. The system flagged a critical inventory anomaly in week three. The pipeline scales automatically as new sources are added.",
    href: "/work/pulse-ai",
  },
];

export default function CaseStudiesPage() {
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
        <p className="text-label c-gray-999 mb-10">Case Studies</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="cs-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Deep work.
            </span>
            <span
              className="cs-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Real outcomes.
            </span>
          </Reveal>
        </div>
      </section>

      {CASE_STUDIES.map((study) => (
        <article key={study.index} className="cs-article">
          <div className="cs-topbar">
            <div className="cs-meta-row">
              <span className="text-label c-gray-ccc">{study.index}</span>
              <span className="text-label c-gray-999">{study.category}</span>
              <span className="text-label c-gray-ccc">{study.year}</span>
            </div>
            <span className="cs-metric-pill">{study.metric}</span>
          </div>
          <div className="cs-title">
            <h2 className="text-headline">{study.title}</h2>
          </div>
          <Reveal variant="fadeIn" stagger={0} start="top 78%">
            <div className="cs-visual" aria-hidden="true">
              <span className="num">{study.num}</span>
            </div>
          </Reveal>
          <Reveal
            variant="fadeIn"
            stagger={0}
            start="top 78%"
            className="cs-tagline-wrap"
          >
            <p className="proj-tagline max-w-3xl">{study.tagline}</p>
          </Reveal>
          <Reveal
            variant="fadeIn"
            stagger={0.06}
            start="top 78%"
            className="cs-pso-grid"
          >
            <div className="cs-pso-block">
              <p className="text-label c-gray-999">The Problem</p>
              <div className="cs-pso-line" />
              <p className="text-sm c-gray-444 leading-relaxed">
                {study.problem}
              </p>
            </div>
            <div className="cs-pso-block">
              <p className="text-label c-gray-999">The Solution</p>
              <div className="cs-pso-line" />
              <p className="text-sm c-gray-444 leading-relaxed">
                {study.solution}
              </p>
            </div>
            <div className="cs-pso-block">
              <p className="text-label c-gray-999">The Outcome</p>
              <div className="cs-pso-line" />
              <p className="text-sm c-gray-444 leading-relaxed">
                {study.outcome}
              </p>
            </div>
          </Reveal>
          <div className="cs-link-wrap">
            <Link href={study.href} className="nav-link text-xs">
              View full project →
            </Link>
          </div>
        </article>
      ))}

      <section className="section bg-gray">
        <div className="flex flex-col md-flex-row items-center justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-3">Ready to start?</p>
            <h2 className="text-headline max-w-lg">
              Your project could be the next case study.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
