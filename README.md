# CYBEROCO Technologies — Marketing Site

Marketing website for CYBEROCO Technologies (cyberoco.tech), migrated from a static
HTML site to **Next.js 16** (App Router). ~40 routes covering services, industries,
work, case studies, blog, research and resources, plus a contact form with email
delivery via Resend.

## Stack

| Layer          | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack)                                         |
| UI             | React 19, TypeScript                                                       |
| Styling        | Tailwind CSS v4 + ported legacy design system (`app/globals.css`)          |
| Motion         | GSAP + ScrollTrigger, Framer Motion (`motion`) — see `docs/MOTION.md`      |
| Forms          | react-hook-form + zod                                                      |
| Email          | Resend (`app/api/contact/`)                                                |
| Design system  | `docs/DESIGN-SYSTEM.md`                                                    |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (Turbopack)
npm run start    # serve the production build
npm run lint     # ESLint (eslint-config-next)
```

> **React Grab (dev only):** the dev server loads [React Grab](https://react-grab.dev)
> (`app/layout.tsx`, guarded by `NODE_ENV === "development"`). Press its shortcut in
> the browser to grab/copy UI elements as code for coding agents. It was added via
> `npx grab@latest init` and is never included in production builds.

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

```bash
NEXT_PUBLIC_SITE_URL=https://www.cyberoco.tech
RESEND_API_KEY=
CONTACT_TO=info@cyberoco.tech
CONTACT_FROM=CYBEROCO Website <onboarding@resend.dev>
```

- `RESEND_API_KEY` — required for real email delivery. **Without it**, the contact
  API logs submissions server-side and still returns success **in development**;
  a production deploy missing the key returns 500 (fails loudly, never silently
  drops enquiries).
- `NEXT_PUBLIC_SITE_URL` — canonical site URL used by metadata, `sitemap.xml`
  and `robots.txt`.

## Project structure

```
app/                    # All routes (App Router): services/, industries/, work/,
                        # blog/, case-studies/, research/, publications/,
                        # media-coverage/, careers/, contact/, ct-signals/,
                        # resources/, api/contact/, sitemap.ts, robots.ts, manifest.ts
components/layout/      # Shared chrome: Navbar, Footer, MobileMenu, SkipLink
components/motion/      # Motion system: Reveal, HeroTimeline, Marquee, PageFade,
                        # CustomCursor (see docs/MOTION.md)
content/site.ts         # Single source of truth for nav, footer, routes, org data
lib/                    # gsap setup, motion tokens, contact form schema (zod)
docs/                   # CONVENTIONS.md · MOTION.md · DESIGN-SYSTEM.md
proxy.ts                # Middleware: legacy URL redirects (see below)
public/images/          # Static assets (logo, project images, accreditation SVGs)
```

## Legacy URL handling

The previous site was static HTML with `.html` filenames and a misspelled
`/resourses/` folder. `proxy.ts` (middleware) permanently redirects (308):

- `/*.html` → clean path without the extension (e.g. `/blog.html` → `/blog`)
- `/index.html` → `/`
- `/resourses/*` → `/resources/*` (composes with the `.html` rule in one hop)

## Known TODOs

- **Hero video** — self-host the hero background video at `public/video/hero.mp4`
  (noted in `app/page.tsx`).
- **Work-page thumbnails** — 5 of 6 projects on `/work` (versa-finance,
  nova-health, pulse-ai, forma-studio, koto-arch) render a styled placeholder;
  source real project imagery (noted in `app/work/WorkGrid.tsx`).
- **CSP** — unsafe-inline remains (Next hydration requires it); unsafe-eval now
  dev-only; nonce-based tightening is a future hardening step.
- **Overflow line-masks** — add overflow line-masks to non-home hero line
  reveals (`Reveal variant="lines"` outside the home hero slides+fades
  unmasked — acceptable, polish later).
- **CI/CD pipeline** — no pipeline configured yet; add lint/typecheck/build on PR.

## Deployment

Vercel-ready (`next start` also works anywhere Node 20+ is available):

1. Import the repo into Vercel — no custom build settings required.
2. Set the environment variables from `.env.example` (at minimum
   `NEXT_PUBLIC_SITE_URL` with the production domain, plus `RESEND_API_KEY` for
   live contact-form email).
3. Security headers (CSP, HSTS, X-Frame-Options, etc.) are pre-configured in
   `next.config.ts`.

**Rate limiting note:** the contact API's rate limiter uses the rightmost
`x-forwarded-for` entry — valid when deployed behind a trusted proxy that
appends client IPs (Vercel overwrites the header); for other topologies
consider `@upstash/ratelimit` (the in-memory limiter is per-instance on
serverless).