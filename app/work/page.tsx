import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import WorkGrid, { type Project } from "./WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from CYBEROCO — UI/UX design, web development, app development, and AI automation projects.",
  alternates: { canonical: "/work" },
};

const PROJECTS: Project[] = [
  {
    slug: "realestateapp",
    title: "Orbital CRM",
    category: "UI/UX Design",
    year: "2024",
    tags: ["User Research", "UI Design System", "Prototyping"],
    description: "Enterprise CRM redesign for 200+ sales reps.",
    image: { src: "/images/realestateapp.jpg", alt: "Real estate app dashboard" },
  },
  {
    slug: "versa-finance",
    title: "Versa Finance",
    category: "Web Development",
    year: "2024",
    tags: ["Editorial Design", "Next.js", "Performance Engineering"],
    description: "Fintech marketing site engineered for conversion.",
  },
  {
    slug: "nova-health",
    title: "Nova Health App",
    category: "App Development",
    year: "2023",
    tags: ["React Native", "Accessibility", "API Integration"],
    description: "Chronic care management mobile platform.",
  },
  {
    slug: "pulse-ai",
    title: "Pulse AI Platform",
    category: "AI Automation",
    year: "2024",
    tags: ["LLM Pipeline", "Data Engineering", "Monitoring"],
    description: "Ops intelligence pipeline for Series A startup.",
  },
  {
    slug: "forma-studio",
    title: "Forma Studio",
    category: "Web Development",
    year: "2023",
    tags: ["Art Direction", "Next.js", "Sanity CMS"],
    description: "Portfolio site for award-winning architecture firm.",
  },
  {
    slug: "koto-arch",
    title: "Koto Architecture",
    category: "UI/UX Design",
    year: "2023",
    tags: ["Design Systems", "Component Library", "Governance"],
    description: "Design system and brand portal for global studio.",
  },
];

export default function WorkPage() {
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
        <p className="text-label c-gray-999 mb-10">Portfolio</p>
        <div className="flex flex-col md-flex-row items-end justify-between gap-6">
          <h1>
            <Reveal variant="lines">
              <div className="reveal-line">
                <span
                  className="work-hero-line text-display"
                  style={{ display: "block", lineHeight: 1 }}
                >
                  Selected work.
                </span>
              </div>
            </Reveal>
          </h1>
        </div>
      </section>

      <WorkGrid projects={PROJECTS} />

      <section
        className="container"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          borderTop: "1px solid var(--black)",
        }}
      >
        <div className="flex flex-col md-flex-row items-center justify-between gap-6">
          <p className="text-subheading c-gray-444 max-w-md">
            Have a project in mind? Let&apos;s make something exceptional.
          </p>
          <Link href="/contact" className="btn-fill shrink-0">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}