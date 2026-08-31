import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "Web & App Development Services",
  description:
    "Secure-by-design web and mobile app development from CYBEROCO, built alongside our security consultants.",
  alternates: { canonical: "/services/web-app-development-services" },
};

const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "React Native",
  "Secure Architecture",
  "Performance",
  "Accessibility",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build the application, or just review one we already have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We take on new builds from scratch, and we also review, harden or take over maintenance of existing codebases.",
      },
    },
    {
      "@type": "Question",
      name: "Is security testing included, or a separate engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development and testing are separate engagements, but they're designed to pair well together \u2014 many clients build with us and then run a penetration test through our Cyber Security Services before launch.",
      },
    },
    {
      "@type": "Question",
      name: "What does your stack look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React and Next.js for web, React Native for mobile, and modern backend frameworks on cloud-native infrastructure. We'll always recommend what fits your team and constraints, not just what we prefer.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take over an existing codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We start with an audit to understand what's there, then harden and rebuild incrementally rather than a risky full rewrite.",
      },
    },
  ],
};

export default function WebAppDevelopmentServicesPage() {
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
        <p className="text-label c-gray-999 mb-10">Web & App Development Services</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Built secure.
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Shipped fast.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Overview</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 srv-detail-line">
                We build and harden the web and mobile applications that carry your
                business.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="srv-detail-line">
              Designed for performance, built with the same security discipline we
              bring to penetration testing. Our developers and security consultants
              work side by side, not in sequence — so nothing ships with known
              weaknesses baked in.
            </p>
            <p className="srv-detail-line">
              <strong>Ideal for:</strong> SaaS products, client portals, marketing
              sites, internal tools, and any team that wants security built in
              rather than retrofitted.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-12">What's included</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            start="top 87%"
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Secure architecture & threat modelling from day one
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Modern web development (React / Next.js) and mobile app builds
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Secure coding practices & peer code review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Authentication, authorisation & data-handling design
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Performance & accessibility engineering
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Pre-launch security review
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Post-launch monitoring & hardening
            </li>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={24} />

      <section className="section">
        <p className="text-label c-gray-999 mb-12">Our approach</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.1}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Discovery & threat modelling.</strong> We map what you're
                building and what could go wrong with it before a single line of
                code is written.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Secure build.</strong> Design, develop and review happen
                with security checkpoints at each stage, not as a single audit at
                the end.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Pre-launch review.</strong> A full security review before
                go-live, so nothing new ships with known weaknesses.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Support & hardening.</strong> Post-launch monitoring and
                iteration as your product — and its risk surface — evolves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="container"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-12">Common questions</p>
        <Reveal variant="fadeUp" stagger={0.08} start="top 85%" className="max-w-3xl">
          <div className="faq-item">
            <p className="faq-q">
              Do you build the application, or just review one we already have?
            </p>
            <p className="faq-a">
              Both. We take on new builds from scratch, and we also review, harden
              or take over maintenance of existing codebases.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Is security testing included, or a separate engagement?</p>
            <p className="faq-a">
              Development and testing are separate engagements, but they're
              designed to pair well together — many clients build with us and then
              run a penetration test through our Cyber Security Services before
              launch.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">What does your stack look like?</p>
            <p className="faq-a">
              React and Next.js for web, React Native for mobile, and modern
              backend frameworks on cloud-native infrastructure. We'll always
              recommend what fits your team and constraints, not just what we
              prefer.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Can you take over an existing codebase?</p>
            <p className="faq-a">
              Yes. We start with an audit to understand what's there, then harden
              and rebuild incrementally rather than a risky full rewrite.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready?</p>
            <h2 className="text-headline max-w-lg">Let's scope your build.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about Web & App Development →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}