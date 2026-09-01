import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroTimeline from "@/components/motion/HeroTimeline";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import { servicesNav, site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "CYBEROCO | Cyber Security, Secure Development & AI Automation",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

const MARQUEE_ITEMS = [
  "Penetration Testing",
  "Red Team Operations",
  "Cloud Security",
  "Secure Development",
  "Threat Intelligence",
  "Incident Response",
  "Compliance & Audit",
  "Security Training",
];

const ACCREDITATIONS = [
  { slug: "iso-27001", alt: "ISO 27001 accreditation" },
  { slug: "soc-2", alt: "SOC 2 accreditation" },
  { slug: "pci-dss", alt: "PCI DSS accreditation" },
  { slug: "crest", alt: "CREST accreditation" },
  { slug: "cyber-essentials-plus", alt: "Cyber Essentials Plus accreditation" },
  { slug: "gdpr", alt: "GDPR accreditation" },
  { slug: "nist-csf", alt: "NIST CSF accreditation" },
  { slug: "swift-csp", alt: "SWIFT CSP accreditation" },
];

const CERTIFICATIONS = [
  { slug: "oscp", alt: "OSCP certification" },
  { slug: "oswe", alt: "OSWE certification" },
  { slug: "crest-crt", alt: "CREST CRT certification" },
  { slug: "cissp", alt: "CISSP certification" },
  { slug: "cism", alt: "CISM certification" },
  { slug: "ceh", alt: "CEH certification" },
  { slug: "iso27001-la", alt: "ISO 27001 Lead Auditor certification" },
  { slug: "qsa", alt: "QSA certification" },
];

const HOME_SERVICES = [
  { num: "01", slug: "cyber-security-services", heading: "Cyber Security Solutions" },
  { num: "02", slug: "web-application-development", heading: "Web & App Development Solutions" },
  { num: "03", slug: "ai-automation-services", heading: "AI Automation Solutions" },
  { num: "04", slug: "custom-software-solutions", heading: "Custom Software Solutions" },
  { num: "05", slug: "ecommerce-solutions", heading: "e-Commerce Solutions" },
];

function serviceDesc(slug: string): string {
  return servicesNav.find((service) => service.slug === slug)?.desc ?? "";
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Hero">
        {/* TODO: self-hosted hero video at /video/hero.mp4 */}
        <div className="hero-overlay" aria-hidden="true" />

        <HeroTimeline>
          <div className="hero-content">
            <p data-hero="label" className="text-label c-gray-999 mb-6">
              CYBEROCO — Cyber Security · Secure Development · AI Automation
            </p>

            <h1 className="mb-8">
              <div className="hero-line-wrap">
                <span data-hero="line" className="hero-line text-display">
                  We craft
                </span>
              </div>
              <div className="hero-line-wrap">
                <span data-hero="line" className="hero-line text-display">
                  digital futures.
                </span>
              </div>
            </h1>

            <div className="hero-bottom-row">
              <p
                data-hero="sub"
                className="text-subheading c-gray-555 max-w-sm leading-relaxed"
              >
                Minimalist design. Purposeful code.
                <br />
                Intelligence at every layer.
              </p>

              <div data-hero="cta" className="hero-cta-group">
                <Link href="/work" className="btn-fill">
                  View Work
                </Link>
                <Link href="/contact" className="btn-outline">
                  Start a project
                </Link>
              </div>
            </div>
          </div>

          <div data-hero="scroll" className="scroll-indicator" aria-hidden="true">
            <span className="text-label">Scroll</span>
            <div className="scroll-line" />
          </div>
        </HeroTimeline>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={30} />
      <section className="section" id="accreditations">
        <div className="mb-12">
          <Reveal variant="fadeUp" stagger={0}>
            <p className="text-label c-gray-999 mb-2 accred-label">
              Accreditations & frameworks
            </p>
          </Reveal>
          <Reveal variant="fadeUp" stagger={0}>
            <h2 className="text-headline max-w-3xl accred-heading">
              Aligned to the standards your auditors and customers expect.
            </h2>
          </Reveal>
        </div>

        <Reveal variant="fadeIn" stagger={0.05} start="top 88%" className="accred-grid">
          {ACCREDITATIONS.map((accred) => (
            <div key={accred.slug} className="accred-item">
              <Image
                src={`/images/accreditations/${accred.slug}.svg`}
                alt={accred.alt}
                width={200}
                height={75}
              />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="stats-bar">
        <Reveal variant="fadeUp" stagger={0.1} className="stats-grid">
          <div className="stat-item">
            <p className="stat-value">48+</p>
            <p className="stat-label">Projects delivered</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">3×</p>
            <p className="stat-label">Average conversion lift</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">{"< 1s"}</p>
            <p className="stat-label">Avg. load time</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">100%</p>
            <p className="stat-label">Client retention</p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="services">
        <p className="text-label c-gray-999 mb-12">What we do</p>

        <Reveal variant="fadeUp" stagger={0.08} start="top 80%" className="flex flex-col">
          {HOME_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-row"
            >
              <div className="service-row-left">
                <span className="text-label service-num">{service.num}</span>
                <h3
                  className="text-headline"
                  style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
                >
                  {service.heading}
                </h3>
              </div>
              <p className="service-desc">{serviceDesc(service.slug)}</p>
              <span className="service-arrow">→</span>
            </Link>
          ))}
        </Reveal>
      </section>
      <section className="section bg-gray-light" id="engagements">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Popular engagements</p>
          <h2 className="text-headline max-w-2xl">Clear, scoped ways to start.</h2>
        </div>

        <Reveal variant="scale" className="engagement-grid">
          <Link href="/services/penetration-testing" className="engagement-item">
            <h3>Web & API Penetration Test</h3>
            <p>
              Manual, methodology-led testing of your web application and its APIs,
              mapped to the OWASP Top 10 and OWASP API Top 10.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/vulnerability-assessment" className="engagement-item">
            <h3>Vulnerability Assessments</h3>
            <p>
              Broad, automated and manually-verified scanning across your estate to
              surface and prioritise exploitable weaknesses.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/threat-risk-assessment" className="engagement-item">
            <h3>Risk Assessments</h3>
            <p>
              Structured evaluation of your threat landscape, mapped to business
              impact, to guide where security investment goes next.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/mobile-application-testing" className="engagement-item">
            <h3>Mobile Application Testing</h3>
            <p>
              iOS and Android testing covering client logic, local storage, API
              communication and platform-specific attack paths.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/api-penetration-testing" className="engagement-item">
            <h3>API Penetration Testing</h3>
            <p>
              Focused testing of REST, GraphQL and internal APIs for authentication,
              authorisation and business-logic flaws.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/web-application-development" className="engagement-item">
            <h3>Web App Development</h3>
            <p>
              Secure, performant web applications built and hardened from the ground
              up, not audited after launch.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/ai-automation-services" className="engagement-item">
            <h3>AI Automation</h3>
            <p>
              Workflow and process automation powered by AI, deployed with the same
              rigor we apply to security engagements.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/ecommerce-solutions" className="engagement-item">
            <h3>e-Commerce Solutions</h3>
            <p>
              Secure, performant web applications built and hardened from the ground
              up, not audited after launch.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
          <Link href="/services/custom-software-solutions" className="engagement-item">
            <h3>Custom Software</h3>
            <p>
              Workflow and process automation powered by AI, deployed with the same
              rigor we apply to security engagements.
            </p>
            <span className="engagement-arrow">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="section" id="industries">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Industry Packages</p>
          <h2 className="text-headline max-w-2xl">Security built around your sector.</h2>
        </div>

        <Reveal variant="fadeUp" stagger={0.06} className="industry-grid">
          <Link href="/industries/financial-services" className="industry-card">
            <h3>Financial Services</h3>
            <p>
              SOC 2, ISO 27001, PCI DSS, SWIFT CSP, operational resilience and
              threat-led testing for banks, fintech and payment institutions.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/healthcare" className="industry-card">
            <h3>Healthcare</h3>
            <p>
              DSPT, ISO 27001, GDPR for special category data, ransomware
              preparedness for NHS bodies and HealthTech.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/ecommerce-retail" className="industry-card">
            <h3>E-commerce & Retail</h3>
            <p>
              PCI DSS, Magecart defence, web app and API testing, GDPR. Scheduled
              around your trading calendar.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/saas-technology" className="industry-card">
            <h3>SaaS & Technology</h3>
            <p>
              SOC 2 and ISO 27001 evidence reuse, continuous pentesting, cloud
              security, enterprise procurement support.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/hospitality" className="industry-card">
            <h3>Hospitality</h3>
            <p>
              PCI DSS for multi-property estates, POS and PMS testing, network
              segmentation, GDPR for guest data.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/manufacturing-industrial" className="industry-card">
            <h3>Manufacturing & Industrial</h3>
            <p>
              IT pentesting, safe OT/ICS assessment, IEC 62443-aligned methodology,
              NIS Regulations readiness.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
          <Link href="/industries/education-research" className="industry-card">
            <h3>Education & Research</h3>
            <p>
              Jisc-aligned pentesting, GDPR for student data, research IP protection,
              ISO 27001 for commercial activity.
            </p>
            <span className="industry-link">View package →</span>
          </Link>
        </Reveal>
      </section>
      <section className="section bg-black no-border" id="why-us">
        <p className="text-label mb-6" style={{ color: "#999" }}>
          Why Choose Us
        </p>
        <div className="max-w-4xl">
          <h2 className="text-headline c-white mb-6">
            Why leading organisations partner with CYBEROCO.
          </h2>
          <p className="text-subheading" style={{ color: "#999" }}>
            Independent expertise, regulatory alignment, and board-ready insight
            delivered with global reach.
          </p>
        </div>
      </section>

      <section className="section" id="global-delivery">
        <div className="grid grid-2" style={{ gap: "3.5rem 5rem" }}>
          <Reveal variant="fadeUp" stagger={0} start="top 82%">
            <div className="feature-block">
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                Global Delivery & Accredited Expertise
              </h3>
              <p className="c-gray-555 leading-relaxed">
                CREST member and QSA-led. Supporting clients across regulated sectors
                in Europe, North America and the Middle East.
              </p>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" stagger={0} start="top 82%" delay={0.1}>
            <div className="feature-block">
              <h3
                className="text-headline"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                Cyber Incident Response & Crisis Support
              </h3>
              <p className="c-gray-555 leading-relaxed">
                Available 24/7 on part and full retainers. Senior responders on
                standby to contain, investigate and recover, wherever your systems
                are.
              </p>
              <Link
                href="/contact"
                className="btn-outline"
                style={{ alignSelf: "flex-start" }}
              >
                Get Immediate Assistance →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light" id="credentials">
        <div className="mb-12">
          <p className="text-label c-gray-999 mb-2">Credentials</p>
          <h2 className="text-headline max-w-2xl mb-3">Team certifications</h2>
          <p className="c-gray-555 max-w-xl">
            Our consultants hold the certifications regulated clients and auditors
            look for.
          </p>
        </div>

        <Reveal variant="fadeIn" stagger={0.05} start="top 88%" className="cred-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.slug} className="cred-item">
              <Image
                src={`/images/certifications/${cert.slug}.svg`}
                alt={cert.alt}
                width={200}
                height={75}
              />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section" id="blog">
        <div
          className="flex items-end justify-between mb-12 flex-col md-flex-row"
          style={{ gap: "1.5rem" }}
        >
          <div>
            <p className="text-label c-gray-999 mb-2">From the blog</p>
            <h2 className="text-headline">Field notes from our research team</h2>
            <p className="c-gray-555 max-w-xl" style={{ marginTop: "0.85rem" }}>
              Findings from real incidents, pen test debriefs, and breach analysis.
              Plain-English writeups of what our consultants are seeing in the wild.
            </p>
          </div>
          <Link href="/blog" className="nav-link text-xs">
            View all →
          </Link>
        </div>

        <Reveal variant="fadeUp" stagger={0.08} className="blog-grid">
          <Link href="/blog/pci-compliant-web-app-vulnerabilities" className="blog-card">
            <span className="text-label blog-tag">Pen Test Debrief</span>
            <h3>Three ways we still get into "PCI compliant" web apps</h3>
            <p>
              A walkthrough of the logic flaws and misconfigurations that keep
              showing up in engagements, despite a clean compliance report.
            </p>
          </Link>
          <Link href="/blog/ransomware-incident-first-60-minutes" className="blog-card">
            <span className="text-label blog-tag">Incident Response</span>
            <h3>What the first 60 minutes of a ransomware incident actually look like</h3>
            <p>
              Containment decisions, stakeholder communication, and the mistakes that
              turn a bad day into a bad quarter.
            </p>
          </Link>
          <Link href="/blog/api-authorisation-flaws" className="blog-card">
            <span className="text-label blog-tag">Research</span>
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
      <section className="section bg-black no-border" id="about-preview">
        <p className="text-label mb-12" style={{ color: "#999" }}>
          The studio
        </p>

        <div className="max-w-4xl">
          <Reveal variant="lines">
            <div className="reveal-line mb-1">
              <span
                className="about-line text-headline c-white"
                style={{ display: "block", lineHeight: "1.15" }}
              >
                We believe the best design
              </span>
            </div>
            <div className="reveal-line mb-1">
              <span
                className="about-line text-headline c-white"
                style={{ display: "block", lineHeight: "1.15" }}
              >
                is the one you don't notice —
              </span>
            </div>
            <div className="reveal-line mb-14">
              <span
                className="about-line text-headline"
                style={{ display: "block", lineHeight: "1.15", color: "#999" }}
              >
                only the outcome.
              </span>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" stagger={0}>
            <Link
              href="/about"
              className="btn-outline about-cta-btn"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Our story →
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={36} inverted />

      <section className="section" id="testimonials">
        <p className="text-label c-gray-999 mb-12">Client voice</p>

        <div className="grid grid-2 gap-8" style={{ gap: "3rem 5rem" }}>
          <Reveal variant="fadeIn">
            <div className="testimonial-item flex flex-col gap-6">
              <p className="testimonial-quote">
                "CYBEROCO redefined how we think about risk. The result feels
                inevitable — thorough, fast, right."
              </p>
              <div className="divider-thin" />
              <div>
                <p className="text-sm font-semibold">Leila M.</p>
                <p className="text-xs c-gray-999" style={{ marginTop: "0.125rem" }}>
                  CPO, Versa Finance
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="fadeIn" delay={0.14}>
            <div className="testimonial-item flex flex-col gap-6">
              <p className="testimonial-quote">
                "They didn't just design an app — they made our complexity invisible.
                That's rare."
              </p>
              <div className="divider-thin" />
              <div>
                <p className="text-sm font-semibold">Jonas R.</p>
                <p className="text-xs c-gray-999" style={{ marginTop: "0.125rem" }}>
                  Founder, Nova Health
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray" id="cta">
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready to start?</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <h2 className="text-headline max-w-xl cta-headline">
                Let's build something worth remembering.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="fadeUp" stagger={0} className="shrink-0 cta-btn">
            <Link
              href="/contact"
              className="btn-fill"
              style={{ fontSize: "0.875rem", padding: "1rem 2rem" }}
            >
              Start a project →
            </Link>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}