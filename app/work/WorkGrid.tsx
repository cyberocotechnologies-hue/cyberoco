"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  image?: { src: string; alt: string };
};

const FILTERS = [
  "All",
  "UI/UX Design",
  "Web Development",
  "App Development",
  "AI Automation",
];

type WorkGridProps = {
  projects: Project[];
};

export default function WorkGrid({ projects }: WorkGridProps) {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    // reducedMotion="user" — Framer layout/enter/exit animations respect
    // prefers-reduced-motion instead of always animating.
    <MotionConfig reducedMotion="user">
      <section
        className="container"
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--gray-200)",
        }}
      >
        <Reveal
          variant="fadeIn"
          stagger={0.04}
          className="flex gap-2 flex-wrap"
        >
          {FILTERS.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn${filter === category ? " active" : ""}`}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <p
          className="text-xs c-gray-999"
          style={{ marginBottom: "1.5rem" }}
          aria-live="polite"
        >
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
        <div className="work-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="work-thumb project-card"
                  data-category={project.category}
                >
                  {project.image ? (
                    <div className="thumb-placeholder">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={900}
                        height={563}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    // Image needs to be sourced — the source hotlinked an external photo with no local asset.
                    <div className="thumb-placeholder" aria-hidden="true" />
                  )}
                  <div className="project-meta">
                    <div>
                      <p className="text-label c-gray-999 mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-semibold tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="project-desc">{project.description}</p>
                    </div>
                    <span
                      className="text-xs c-gray-ccc shrink-0"
                      style={{ marginTop: "0.25rem" }}
                    >
                      {project.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {visible.length === 0 && (
          <p className="text-sm c-gray-999">No projects in this category yet.</p>
        )}
      </section>
    </MotionConfig>
  );
}