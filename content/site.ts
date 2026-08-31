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
    slug: "cyber-security-services",
    label: "Cyber Security Services",
    desc: "CREST-accredited penetration testing, vulnerability and risk assessments.",
  },
  {
    slug: "ai-automation-services",
    label: "AI Automation Services",
    desc: "Secure, governed AI workflows — LLM integration, pipelines and monitoring.",
  },
  {
    slug: "web-app-development-services",
    label: "Web & App Development Services",
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
