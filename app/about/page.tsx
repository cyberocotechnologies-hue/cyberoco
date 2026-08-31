import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "CYBEROCO is a CREST-accredited cyber security, secure development and AI automation firm.",
  alternates: { canonical: "/about" },
};

const VALUES_MARQUEE_ITEMS = [
  "Precision",
  "Integrity",
  "Rigor",
  "Partnership",
  "Evidence",
  "Accountability",
  "Depth",
  "Trust",
];

export default function AboutPage() {
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
        <p className="text-label c-gray-999 mb-10">About CYBEROCO</p>
        <h1 className="max-w-5xl">
          <Reveal variant="lines">
            <div className="reveal-line mb-1">
              <span
                className="about-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Security tested.
              </span>
            </div>
            <div className="reveal-line">
              <span
                className="about-hero-line text-display c-gray-ccc"
                style={{ display: "block", lineHeight: 1 }}
              >
                Not assumed.
              </span>
            </div>
          </Reveal>
        </h1>
      </section>

      <section className="section" id="story">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Our story</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="about-intro text-subheading leading-relaxed c-gray-333">
                CYBEROCO was founded on a simple conviction: most security work
                is either a rubber-stamped scan or a report nobody can act on.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="about-intro">
              We started as a small team of CREST-accredited consultants
              frustrated by an industry that too often optimises for a clean
              cover page over a genuinely tested system. We wanted to build
              differently — manual testing, evidence-backed findings, and
              reporting your engineering team can actually use.
            </p>
            <p className="about-intro">
              Today we partner with regulated and high-growth businesses across
              financial services, healthcare, SaaS and more, delivering
              penetration testing, secure development, and AI automation under
              one roof. Our approach is methodical. Our standard is
              uncompromising.
            </p>
            <p className="about-intro">
              We operate at the intersection of offensive security, engineering,
              and intelligence — because the businesses we protect need all
              three working together, not handed off between vendors.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={VALUES_MARQUEE_ITEMS} speed={24} />

      <section className="section" id="values">
        <p className="text-label c-gray-999 mb-12">What drives us</p>
        <Reveal variant="scale" start="top 82%" className="value-grid">
          <div className="value-item">
            <span className="text-label c-gray-ccc">01</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Precision
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Every finding is verified, every risk rating is justified. We
              don’t pad reports with noise, and we don’t ship until the testing
              is actually done.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">02</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Integrity
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              We tell you what we found, not what’s easiest to hear.
              Independent, evidence-led assessment is the entire point of
              bringing in an outside team.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">03</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Rigor
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Manual, methodology-driven testing — not automated scans with a
              logo on the cover page. If we say we tested it, we tested it by
              hand.
            </p>
          </div>
          <div className="value-item">
            <span className="text-label c-gray-ccc">04</span>
            <h3
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.25rem" }}
            >
              Partnership
            </h3>
            <p className="text-sm c-gray-666 leading-relaxed max-w-sm">
              Your risk posture is our metric, not a report we hand off. We
              embed deeply in your environment and measure our work by what
              actually gets remediated.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section bg-gray-light no-border" id="team">
        <p className="text-label c-gray-999 mb-12">The people</p>
        <Reveal variant="fadeIn" stagger={0.06} className="team-grid">
          <div className="team-item">
            <div className="team-avatar">
              <span>J</span>
            </div>
            <div className="flex flex-col" style={{ gap: "0.375rem" }}>
              <p className="text-sm font-semibold">James K.</p>
              <p
                className="text-xs c-gray-999"
                style={{ marginBottom: "0.5rem" }}
              >
                Founder & Principal Consultant
              </p>
              <p className="text-xs c-gray-666 leading-relaxed">
                CREST CRT, OSCP. 12 years testing regulated environments across
                Europe and North America.
              </p>
            </div>
          </div>
          <div className="team-item">
            <div className="team-avatar">
              <span>P</span>
            </div>
            <div className="flex flex-col" style={{ gap: "0.375rem" }}>
              <p className="text-sm font-semibold">Priya R.</p>
              <p
                className="text-xs c-gray-999"
                style={{ marginBottom: "0.5rem" }}
              >
                Head of Penetration Testing
              </p>
              <p className="text-xs c-gray-666 leading-relaxed">
                OSCP, OSWE. Leads web, API and mobile testing engagements
                across our client base.
              </p>
            </div>
          </div>
          <div className="team-item">
            <div className="team-avatar">
              <span>D</span>
            </div>
            <div className="flex flex-col" style={{ gap: "0.375rem" }}>
              <p className="text-sm font-semibold">Daniel M.</p>
              <p
                className="text-xs c-gray-999"
                style={{ marginBottom: "0.5rem" }}
              >
                QSA & Compliance Lead
              </p>
              <p className="text-xs c-gray-666 leading-relaxed">
                Qualified Security Assessor. Bridges technical findings with
                SOC 2, ISO 27001 and PCI DSS reporting.
              </p>
            </div>
          </div>
          <div className="team-item">
            <div className="team-avatar">
              <span>S</span>
            </div>
            <div className="flex flex-col" style={{ gap: "0.375rem" }}>
              <p className="text-sm font-semibold">Sofia B.</p>
              <p
                className="text-xs c-gray-999"
                style={{ marginBottom: "0.5rem" }}
              >
                Incident Response Lead
              </p>
              <p className="text-xs c-gray-666 leading-relaxed">
                Runs our 24/7 incident response retainer, containing and
                investigating live security incidents.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="clients">
        <p className="text-label c-gray-999 mb-12">Trusted by teams like</p>
        <Reveal variant="fadeUp" stagger={0.04} className="clients-grid">
          <p className="client-name">Versa Finance</p>
          <p className="client-name">Meridian Bank</p>
          <p className="client-name">Nova Health</p>
          <p className="client-name">Pulse AI</p>
          <p className="client-name">Anchor Retail Group</p>
          <p className="client-name">Coastline Hospitality</p>
          <p className="client-name">Drift Capital</p>
          <p className="client-name">Nexum Labs</p>
        </Reveal>
      </section>

      <section className="section bg-black no-border" id="about-cta">
        <Reveal variant="fadeUp" stagger={0}>
          <div
            className="about-cta-content flex flex-col md-flex-row items-center justify-between"
            style={{ gap: "2.5rem" }}
          >
            <div>
              <p className="text-label mb-4" style={{ color: "#999" }}>
                Work with us
              </p>
              <h2 className="text-headline c-white max-w-xl">
                Serious about security? So are we.
              </h2>
            </div>
            <div
              className="flex flex-col md-flex-row shrink-0"
              style={{ gap: "1rem" }}
            >
              <Link
                href="/careers"
                className="btn-outline"
                style={{ borderColor: "#fff", color: "#fff" }}
              >
                View open roles →
              </Link>
              <Link href="/contact" className="btn-fill">
                Get in touch →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
