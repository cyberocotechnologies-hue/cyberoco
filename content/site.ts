/**
 * CYBEROCO — canonical site configuration.
 *
 * Single source of truth for site identity, navigation, footer link columns
 * and the route manifest. The static build shipped five drifted nav variants;
 * the Navbar, MobileMenu, Footer and every ported page read from this file
 * instead of hardcoding their own copy.
 */

export const site = {
  name: "CYBEROCO",
  legalName: "Cyberoco Technologies",
  // trim() + || handles both unset AND empty-string values (empty NEXT_PUBLIC_SITE_URL broke Vercel builds via new URL(""))
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.cyberoco.tech",
  email: "info@cyberoco.tech",
  tagline: "Cyber Security, Secure Development & AI Automation",
  description:
    "CYBEROCO is a CREST-accredited cyber security, secure development and AI automation firm.",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/cyberoco" },
    { label: "X", href: "https://x.com/cyberoco" },
    { label: "GitHub", href: "https://github.com/cyberoco" },
  ],
};

export type SlugNavItem = {
  slug: string;
  label: string;
  desc?: string;
};

export type NavLinkItem = {
  label: string;
  href: string;
  desc?: string;
};

export type RouteEntry = {
  path: string;
  title: string;
};

/* ── Navigation ──────────────────────────────────────────────────── */

export const servicesNav: SlugNavItem[] = [
  {
    slug: "penetration-testing",
    label: "Penetration Testing",
    desc: "CREST-accredited, senior-led testing across web, API, network, mobile and cloud.",
  },
  {
    slug: "api-penetration-testing",
    label: "API Penetration Testing",
    desc: "OWASP API Security Top 10 coverage across REST, GraphQL, SOAP and gRPC.",
  },
  {
    slug: "vulnerability-assessment",
    label: "Vulnerability Assessment",
    desc: "Authenticated scanning, manual validation and exploitability-ranked prioritisation.",
  },
  {
    slug: "threat-risk-assessment",
    label: "Threat & Risk Assessment",
    desc: "Identify, prioritise and treat the risks that matter, with board-level outputs.",
  },
  {
    slug: "mobile-application-testing",
    label: "Mobile Application Testing",
    desc: "iOS and Android testing to OWASP MASVS/MASTG, from binary to API backend.",
  },
  {
    slug: "cybersecurity-services",
    label: "Cyber Security Services",
    desc: "CREST-accredited penetration testing, vulnerability and risk assessments.",
  },
  {
    slug: "ai-automation",
    label: "AI Automation Services",
    desc: "Secure, governed AI workflows — LLM integration, pipelines and monitoring.",
  },
  {
    slug: "web-application-development",
    label: "Web & App Development",
    desc: "Secure-by-design web and mobile apps, built alongside our security consultants.",
  },
  {
    slug: "ecommerce-solutions",
    label: "E-commerce Solutions",
    desc: "Secure online stores with integrated payments, shipping and order management.",
  },
  {
    slug: "custom-software-solutions",
    label: "Custom Software Solutions",
    desc: "Enterprise platforms, backend systems and compliance infrastructure.",
  },
];

export const industriesNav: SlugNavItem[] = [
  { slug: "financial-services", label: "Financial Services" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "ecommerce-retail", label: "E-commerce & Retail" },
  { slug: "saas-technology", label: "SaaS & Technology" },
  { slug: "hospitality", label: "Hospitality" },
  { slug: "manufacturing-industrial", label: "Manufacturing & Industrial" },
  { slug: "education-research", label: "Education & Research" },
];

export const resourcesNav: NavLinkItem[] = [
  {
    label: "Sample Report",
    href: "/resources/sample-pentest-report",
    desc: "See exactly what you receive",
  },
  { label: "Research Lab", href: "/research", desc: "CVEs and original vulnerability research" },
  {
    label: "Publications",
    href: "/publications",
    desc: "Books and research papers from our team",
  },
  { label: "Media Coverage", href: "/media-coverage", desc: "CYBEROCO in the press" },
];

export const topNav: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "CT Signals", href: "/ct-signals" },
  { label: "Contact", href: "/contact" },
];

/* ── Services mega-menu (desktop two-column panel + mobile nested accordion) ── */

export type MegaSubItem = { label: string; href: string; desc: string };

export type MegaCategory = {
  id: string;
  label: string;
  href: string;
  desc: string;
  items: MegaSubItem[];
};

export const megaMenu: MegaCategory[] = [
  {
    id: "cyber-security",
    label: "Cybersecurity Services",
    href: "/services/cybersecurity-services",
    desc: "CREST-accredited offensive testing — find your weaknesses before attackers do.",
    items: [
      {
        label: "Web & API Penetration Test",
        href: "/services/penetration-testing",
        desc: "Manual, OWASP-aligned testing of web apps and APIs.",
      },
      {
        label: "API Penetration Testing",
        href: "/services/api-penetration-testing",
        desc: "REST & GraphQL testing for auth and business-logic flaws.",
      },
      {
        label: "Mobile Application Testing",
        href: "/services/mobile-application-testing",
        desc: "iOS & Android client logic, storage & API paths.",
      },
      {
        label: "Vulnerability Assessment",
        href: "/services/vulnerability-assessment",
        desc: "Manually-verified scanning across your whole estate.",
      },
      {
        label: "Threat & Risk Assessment",
        href: "/services/threat-risk-assessment",
        desc: "Threat landscape mapped to business impact.",
      },
      {
        label: "Network & Cloud Security Testing",
        href: "/services/cybersecurity-services#network-cloud-security-testing",
        desc: "Coverage across network and cloud environments.",
      },
      {
        label: "Compliance-Ready Reporting",
        href: "/services/cybersecurity-services#compliance-ready-reporting",
        desc: "ISO 27001, SOC 2 & PCI DSS reports auditors can use.",
      },
    ],
  },
  {
    id: "web-app-development",
    label: "Web & App Development",
    href: "/services/web-application-development",
    desc: "We build and harden the web and mobile applications that carry your business.",
    items: [
      {
        label: "Web Application Development",
        href: "/services/web-application-development#web-application-development",
        desc: "React / Next.js builds, secure by design from day one.",
      },
      {
        label: "Mobile App Development",
        href: "/services/web-application-development#mobile-app-development",
        desc: "React Native apps with secure coding & peer review.",
      },
      {
        label: "E-commerce Solutions",
        href: "/services/ecommerce-solutions",
        desc: "Stores with integrated payments, shipping & reporting.",
      },
      {
        label: "Custom Software Solutions",
        href: "/services/custom-software-solutions",
        desc: "Enterprise platforms for MENA's regulated institutions.",
      },
      {
        label: "Secure Architecture & Threat Modelling",
        href: "/services/web-application-development#secure-architecture-threat-modelling",
        desc: "Security designed in from day one, not retrofitted.",
      },
      {
        label: "Pre-Launch Security Review",
        href: "/services/web-application-development#pre-launch-security-review",
        desc: "Full security review before go-live.",
      },
      {
        label: "Post-Launch Monitoring & Hardening",
        href: "/services/web-application-development#post-launch-monitoring-hardening",
        desc: "Monitoring and iteration as your risk surface evolves.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    href: "/services/ai-automation",
    desc: "AI-powered workflows that remove friction, without opening a new attack surface.",
    items: [
      {
        label: "Workflow Audit & Automation Mapping",
        href: "/services/ai-automation#workflow-audit-automation-mapping",
        desc: "We map your workflow end-to-end before automating it.",
      },
      {
        label: "LLM Integration & Prompt Engineering",
        href: "/services/ai-automation#llm-integration-prompt-engineering",
        desc: "LLMs wired into your tools, governed from the start.",
      },
      {
        label: "RAG & AI Agent Pipelines",
        href: "/services/ai-automation#rag-ai-agent-pipelines",
        desc: "Custom RAG, agents and internal tool pipelines.",
      },
      {
        label: "Secure Data Pipelines",
        href: "/services/ai-automation#secure-data-pipelines",
        desc: "Secure ingestion, normalisation and storage.",
      },
      {
        label: "AI Governance & Access Controls",
        href: "/services/ai-automation#ai-governance-access-controls",
        desc: "Strict data boundaries — your data never trains models.",
      },
      {
        label: "Monitoring, Logging & Iteration",
        href: "/services/ai-automation#monitoring-logging-iteration",
        desc: "Ongoing monitoring retainers as requirements evolve.",
      },
    ],
  },
];
/* ── Footer columns ──────────────────────────────────────────────── */

export const footerServices: NavLinkItem[] = servicesNav.map(({ slug, label }) => ({
  label,
  href: `/services/${slug}`,
}));

export const footerIndustries: NavLinkItem[] = [
  ...industriesNav.map(({ slug, label }) => ({ label, href: `/industries/${slug}` })),
  { label: "All Industries", href: "/industries" },
];

export const footerResources: NavLinkItem[] = [
  ...resourcesNav.map(({ label, href }) => ({ label, href })),
  { label: "CT Signals", href: "/ct-signals" },
];

export const footerCompany: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

/* ── Route manifest (source of truth for the future sitemap) ─────── */

export const ROUTES: RouteEntry[] = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/careers", title: "Careers" },
  { path: "/case-studies", title: "Case Studies" },
  { path: "/ct-signals", title: "CT Signals" },
  { path: "/blog", title: "Blog" },
  { path: "/work", title: "Work" },
  { path: "/services", title: "Services" },
  ...servicesNav.map(({ slug, label }) => ({ path: `/services/${slug}`, title: label })),
  { path: "/industries", title: "Industries" },
  ...industriesNav.map(({ slug, label }) => ({
    path: `/industries/${slug}`,
    title: `${label} Cyber Security`,
  })),
  { path: "/work/versa-finance", title: "Versa Finance" },
  { path: "/work/realestateapp", title: "Real Estate App" },
  { path: "/work/pulse-ai", title: "Pulse AI Platform" },
  { path: "/work/nova-health", title: "Nova Health App" },
  { path: "/work/koto-arch", title: "Koto Architecture" },
  { path: "/work/forma-studio", title: "Forma Studio" },
  {
    path: "/blog/api-authorisation-flaws",
    title: 'API authorisation flaws: the gap between "authenticated" and "authorised"',
  },
  {
    path: "/blog/pci-compliant-web-app-vulnerabilities",
    title: 'Three ways we still get into "PCI compliant" web apps',
  },
  {
    path: "/blog/ransomware-incident-first-60-minutes",
    title: "What the first 60 minutes of a ransomware incident actually look like",
  },
  { path: "/resources/sample-pentest-report", title: "Sample Penetration Test Report" },
  { path: "/research", title: "Research Lab" },
  { path: "/publications", title: "Publications" },
  { path: "/media-coverage", title: "Media Coverage" },
];
