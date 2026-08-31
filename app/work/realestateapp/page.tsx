import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Real Estate App",
  description:
    "Turning a 47-screen enterprise CRM into a system people actually want to use.",
  alternates: { canonical: "/work/realestateapp" },
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
      name: "Real Estate App",
      item: "https://www.cyberoco.tech/work/realestateapp",
    },
  ],
};

const SCOPE_ITEMS = [
  "User Research",
  "Information Architecture",
  "UI Design System",
  "Prototyping",
  "Design QA",
];

export default function RealEstateAppPage() {
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
          <span className="text-label c-gray-ccc">2026</span>
        </div>
        <h1>
          <Reveal variant="lines">
            <div className="reveal-line">
              <span
                className="proj-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Real Estate
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
                From fragmented listings to a platform buyers and agents love
                to use.
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

      <Image
        src="/images/realestateapp.jpg"
        alt="Real estate app dashboard"
        width={1651}
        height={960}
        loading="lazy"
      />

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
            A modern real estate app designed to simplify how people discover
            and manage properties. Built for speed, clarity, and seamless
            interaction between buyers and agents.
          </p>
        </Reveal>
      </section>

      <div className="proj-visual-detail">
        <div className="img-box">
          <Image
            src="/images/realestate12.jpg"
            alt="Real estate property listing screen"
            width={402}
            height={874}
            loading="lazy"
          />
        </div>
        <div className="img-box">
          <Image
            src="/images/realestate13.jpg"
            alt="Property search and filtering screen"
            width={402}
            height={874}
            loading="lazy"
          />
        </div>
        <div className="img-box">
          <Image
            src="/images/realestate14.jpg"
            alt="Property details and agent messaging screen"
            width={402}
            height={874}
            loading="lazy"
          />
        </div>
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
              The real estate experience was fragmented, outdated, and
              difficult to navigate. Users struggled with cluttered
              interfaces, inconsistent property data, and a lack of intuitive
              tools for searching, comparing, and managing listings.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Solution</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              We designed a modern, user-centric real estate application that
              simplifies the entire journey—from discovery to decision. The
              platform features a clean, intuitive interface, advanced
              filtering, real-time property updates, and seamless
              communication tools.
            </p>
          </div>
          <div className="proj-pso-block">
            <p className="text-label c-gray-999">The Outcome</p>
            <div className="proj-pso-line" />
            <p className="text-sm c-gray-444 leading-relaxed">
              The result is a high-performance real estate platform that users
              actually enjoy using. Engagement increased, property discovery
              became faster and more efficient, and agents gained a
              streamlined workflow for managing listings and leads. The app
              not only improved usability but also accelerated conversions and
              elevated the overall brand experience.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        <Link href="/work/versa-finance" className="proj-next">
          <div>
            <p className="text-label proj-next-label">Next project</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
            >
              Versa Finance
            </h3>
            <p className="proj-next-meta">Web Development · 2026</p>
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