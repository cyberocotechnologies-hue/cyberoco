import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Nova Health App",
  description:
    "Chronic care management, simplified for the patient and the clinician.",
  alternates: { canonical: "/work/nova-health" },
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
      name: "Nova Health App",
      item: "https://www.cyberoco.tech/work/nova-health",
    },
  ],
};

const SCOPE_ITEMS = [
  "UX Strategy",
  "React Native",
  "API Integration",
  "Accessibility",
  "App Store Launch",
];

export default function NovaHealthPage() {
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
          <span className="text-label c-gray-999">App Development</span>
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
                Nova Health App
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
                Chronic care management, simplified for the patient and the
                clinician.
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
        <span className="num">03</span>
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
            Nova Health needed a cross-platform mobile app bridging patients
            with care teams while navigating HIPAA compliance and an extremely
            diverse user base.
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
              Their previous app had 34% 30-day retention. Patients found it
              confusing; clinicians found it slow. The codebase was a
              4-year-old native iOS app with no Android equivalent.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Solution</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              We rebuilt in React Native with a design system optimised for
              WCAG AA accessibility throughout. Onboarding was simplified to 3
              steps. A real-time messaging layer with clinical teams was
              embedded.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Outcome</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              30-day retention rose to 71%. Clinician response time dropped
              58%. The app launched simultaneously on iOS and Android,
              featured as Best New App in the Health category.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        <Link href="/work/pulse-ai" className="proj-next">
          <div>
            <p className="text-label proj-next-label">Next project</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
            >
              Pulse AI Platform
            </h3>
            <p className="proj-next-meta">AI Automation · 2024</p>
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