import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "CT Signals",
  description:
    "CT Signals is CYBEROCO’s cyber threat intelligence series — in-depth reports on the threats reshaping regulated industries.",
  alternates: { canonical: "/ct-signals" },
};

export default function CtSignalsPage() {
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
        <p className="text-label c-gray-999 mb-10">CT Signals</p>
        <h1 className="max-w-4xl">
          <Reveal variant="lines">
            <div className="reveal-line mb-1">
              <span
                className="signals-hero-line text-display"
                style={{ display: "block", lineHeight: 1 }}
              >
                Intelligence
              </span>
            </div>
            <div className="reveal-line">
              <span
                className="signals-hero-line text-display c-gray-ccc"
                style={{ display: "block", lineHeight: 1 }}
              >
                over noise.
              </span>
            </div>
          </Reveal>
        </h1>
        <p
          className="text-sm c-gray-555 leading-relaxed max-w-xl"
          style={{ marginTop: "2rem" }}
        >
          CT — CYBEROCO Technology Signals — is our threat intelligence series:
          in-depth reports written for executives and security teams who need a
          clear, evidence-based view of the threats reshaping their industry.
        </p>
      </section>

      <section className="stats-bar">
        <Reveal variant="fadeUp" stagger={0.1} className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">32</span>
            <span className="stat-label">Pages of research</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">ATT&amp;CK</span>
            <span className="stat-label">MITRE mapped</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Vol. 01</span>
            <span className="stat-label">Now available</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Free</span>
            <span className="stat-label">No paywall</span>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">About the series</p>
            <p className="text-subheading leading-relaxed c-gray-333">
              Each volume focuses on a single threat domain, drawn from our own
              engagements and cross-sector intelligence.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555">
            <p>
              CT Signals isn’t a scheduled newsletter — we publish when the
              threat landscape actually shifts, not on a fixed calendar. Every
              volume is written to be read by both security practitioners and
              the executives who fund their programme.
            </p>
          </div>
        </div>
      </section>

      <Reveal variant="fadeUp" stagger={0}>
        <section
          className="section bg-gray-light signals-feature"
          id="current-volume"
        >
          <div className="mb-10">
            <p className="text-label c-gray-999 mb-2">Latest volume</p>
            <h2 className="text-headline max-w-2xl">Current edition.</h2>
          </div>

          <div
            className="grid grid-2"
            style={{ gap: "3rem 4rem", alignItems: "start" }}
          >
            <div
              className="proj-visual"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid var(--black)",
                borderBottom: "1px solid var(--black)",
              }}
            >
              <span className="num" style={{ fontSize: "6rem" }}>
                01
              </span>
            </div>

            <div className="flex flex-col" style={{ gap: "1.5rem" }}>
              <div>
                <p className="text-label c-gray-999 mb-2">
                  CT Signals · Volume 01 · August 2026
                </p>
                <h3
                  className="font-bold tracking-tight"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                    lineHeight: 1.2,
                  }}
                >
                  Ransomware Trends Targeting Mid-Market Financial Services
                </h3>
              </div>
              <p className="text-sm c-gray-555 leading-relaxed">
                As mid-market banks and payment processors modernise faster
                than their security programmes can keep up, they’ve become a
                disproportionately targeted segment for ransomware and
                extortion groups. This report examines the access patterns,
                extortion tactics, and regulatory blind spots driving that
                shift.
              </p>

              <Reveal
                variant="fadeUp"
                stagger={0.08}
                className="flex flex-col gap-4"
              >
                <div className="process-step">
                  <span className="text-label process-num">01</span>
                  <p className="process-text">
                    Mid-market financial institutions are now targeted at a
                    similar rate to large enterprises, with far less mature
                    detection and response capability.
                  </p>
                </div>
                <div className="process-step">
                  <span className="text-label process-num">02</span>
                  <p className="process-text">
                    Third-party vendor access remains the most consistent
                    initial access vector across the incidents we reviewed.
                  </p>
                </div>
                <div className="process-step">
                  <span className="text-label process-num">03</span>
                  <p className="process-text">
                    Double-extortion tactics are increasingly paired with
                    regulatory-disclosure threats, adding pressure beyond the
                    ransom itself.
                  </p>
                </div>
              </Reveal>

              <div className="flex flex-wrap" style={{ gap: "0.6rem" }}>
                <span className="cs-metric-pill">
                  Ransomware &amp; Extortion
                </span>
                <span className="cs-metric-pill">Third-Party Risk</span>
                <span className="cs-metric-pill">DORA</span>
                <span className="cs-metric-pill">MITRE ATT&amp;CK</span>
              </div>

              <Link
                href="/contact"
                className="btn-fill"
                style={{ alignSelf: "flex-start" }}
              >
                Request the report →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section" id="all-volumes">
        <p className="text-label c-gray-999 mb-12">The full series</p>
        <Reveal
          variant="fadeUp"
          stagger={0.08}
          start="top 82%"
          className="flex flex-col"
        >
          <Link href="/contact" className="service-row">
            <div className="service-row-left">
              <span className="text-label service-num">01</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Ransomware Trends Targeting Mid-Market Financial Services
              </h3>
            </div>
            <p className="service-desc">August 2026 · Available now</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row">
            <div className="service-row-left">
              <span className="text-label service-num">02</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                AI-Assisted Phishing: How Automation Is Reshaping Social
                Engineering
              </h3>
            </div>
            <p className="service-desc">Q4 2026 · Coming soon</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link href="/contact" className="service-row">
            <div className="service-row-left">
              <span className="text-label service-num">03</span>
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Securing the SaaS Supply Chain: Third-Party Risk in 2027
              </h3>
            </div>
            <p className="service-desc">Q1 2027 · Coming soon</p>
            <span className="service-arrow">→</span>
          </Link>
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">
              Ready to assess your exposure?
            </p>
            <h2 className="text-headline max-w-lg">
              Our research doesn’t stop at intelligence.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
