# CYBEROCO — Page Porting Conventions

The rulebook for porting pages from the static site (`../` — read-only reference)
into this Next.js 16 (App Router, TypeScript, Tailwind v4) app. Read this whole
document before porting your first page.

Also read:

- **`docs/DESIGN-SYSTEM.md`** — every CSS class available in `app/globals.css`.
  The design system is already ported. **Never invent styles or add CSS** —
  if a class is not documented there, use the closest documented structure.
- **`docs/MOTION.md`** — the motion component APIs (`Reveal`, `Marquee`,
  `HeroTimeline`).
- **`content/site.ts`** — the canonical nav, footer and route data.

## 0. Shared chrome (already built — do NOT rebuild)

`app/layout.tsx` already renders, on every page:

1. `SkipLink` (`components/layout/SkipLink.tsx`)
2. `CustomCursor` (`components/motion/CustomCursor`)
3. `Navbar` + `MobileMenu` (`components/layout/Navbar.tsx`,
   `components/layout/MobileMenu.tsx`)
4. `<PageFade>{children}</PageFade>` — **`PageFade` renders
   `<main id="page-content">`** with the fade-in. Pages must NOT render their
   own `<main>` or `#page-content` wrapper, navbar, footer, cursor, or skip
   link. Port only what sits between `<main><div id="page-content">` and
   `</div></main>` in the source HTML.
5. `Footer` (`components/layout/Footer.tsx`)
6. Organization JSON-LD and root metadata (title template, OG, robots).

The navbar/footer consume `content/site.ts` — never hardcode nav lists,
service names or footer links in a page.

## 1. Server Components by default

Pages are React Server Components. Do NOT add `"use client"` unless the file
needs state, effects, refs, or event handlers (interactive filters, accordions,
form validation). Static markup stays a server component.

## 2. Markup porting: verbatim structure, original class names

Port the source markup **verbatim in structure** and keep the ORIGINAL class
names — they are the contract with `globals.css` (see `DESIGN-SYSTEM.md`).
Mechanical conversions only:

- `class` → `className`
- `for` → `htmlFor`
- `tabindex` → `tabIndex`, `autocomplete` → `autoComplete`, etc.
- Void tags self-close: `<img>` → `<img />`, `<br>` → `<br />`, `<input>` → `<input />`
- Inline styles become objects: `style="padding-top:9rem"` →
  `style={{ paddingTop: "9rem" }}` (hyphenated CSS props → camelCase).
- `&amp;` → `&`, `&nbsp;` → `{"\u00a0"}` (or just a space if not load-bearing).

Do NOT swap ported classes for Tailwind equivalents on ported markup — several
ported classes intentionally differ from Tailwind's value (`.tracking-tight`,
`.leading-relaxed`, …). Keep inline `style` attributes where the original page
relied on them; they are page-specific fine-tuning.

## 3. Links

- Internal links → `<Link href="/...">` from `next/link`. Hrefs are
  **root-absolute, lowercase, no `.html`, no `../`**:
  `services/penetration-testing.html` → `/services/penetration-testing`.
- External links and anything `target="_blank"` stays an `<a>` and MUST carry
  `rel="noopener noreferrer"`.
- `mailto:` / `tel:` links stay plain `<a>` elements.

## 4. Metadata: every page exports it

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penetration Testing", // unique, WITHOUT "| CYBEROCO" (template adds it)
  description: "CREST-accredited, senior-led penetration testing across web, API, network, mobile and cloud — with exploit chaining, evidence-backed reporting and a free retest.",
  alternates: { canonical: "/services/penetration-testing" },
};
```

Use the source page's `<title>` (minus the ` | CYBEROCO` suffix) and `<meta
name="description">` content. Canonical paths are the entries in `ROUTES`
(`content/site.ts`). Note the correct spelling `/resources/...` — the old
site's misspelled `resourses/` folder is handled by redirects later; never
port the typo.

## 5. Headings: exactly ONE `<h1>` per page

- The hero headline becomes the page's single `<h1>`, keeping the inner line
  spans and their classes intact:

```tsx
<h1>
  <span className="hero-line text-display">Security tested.</span>
  <span className="hero-line text-display c-gray-ccc">Business proven.</span>
</h1>
```

(The source wraps these lines in `<p>`/`<div>` blocks — replace the outer
wrapper with `<h1>`, keep every inner `<span>` and its class.)

- Section eyebrow labels that are `p.text-label` in the source **stay
  paragraphs** — do not promote them to headings.
- Ensure a logical outline: section titles → `<h2>`, sub-blocks → `<h3>`.

## 6. THE COLOR RULE

**Text on black backgrounds must be ≥ #999** (`#999` passes 7.3:1 on black;
`#444`/`#555`/`#333` FAIL). When porting:

- On black sections, replace inline `style="color:#444"` (or `#333`, `#555`)
  with `#999` — or use the ported utility `.c-gray-999`.
- On white sections keep the original dark grays (`.c-gray-444`, `.c-gray-555`,
  `.c-gray-666` are fine there).

See `DESIGN-SYSTEM.md` §4 for the two intentional exceptions (do not
"fix" those).

## 7. Images

Use `next/image` (`<Image>`), never a bare `<img>`:

- Explicit `width`/`height` where known (the logo is 150×38; `realestateapp.jpg`
  etc. — check the source HTML/CSS for rendered sizes; where unknown use the
  natural-ish size from the layout, e.g. 900×563 for a 16:10 thumb).
- `loading="lazy"` is the default — add `priority` ONLY for above-fold hero art.
- **NEVER keep hotlinked Unsplash / mixkit / CDNs URLs.** Reference local
  `/images/...` files ONLY if a matching file exists under `public/images/`.
- Where the original hotlinked an image that has no local counterpart, replace
  the `<img>` with the styled placeholder `<div class="thumb-placeholder"
  aria-hidden="true">` and put the original alt text inside as visually hidden
  text. Document every such substitution with a short code comment in the page
  file, e.g. `// Substituted hotlinked Unsplash hero (no local asset) with thumb-placeholder.`

## 8. Motion: components, never scripts

The original pages call `fadeUp(".industry-card", 0.06)` etc. from inline
`<script>` blocks. **Never port those scripts, never write `<script>` +
`dangerouslySetInnerHTML` for animations, never import GSAP in page code.**
Replace with the motion components. **All three are default exports:**

```tsx
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import HeroTimeline from "@/components/motion/HeroTimeline";
```

- `fadeUp(".industry-card", 0.06)` → wrap the card list in
  `<Reveal variant="fadeUp" stagger={0.06}>…</Reveal>`
- `revealLines(".about-line")` → `<Reveal variant="lines">` (masks are page
  structure — `.hero-line-wrap` provides the clip)
- `fadeIn(sel, 0.05, { start: "top 88%" })` →
  `<Reveal variant="fadeIn" stagger={0.05} start="top 88%">`
- Home hero entrance timeline → `<HeroTimeline>` + `data-hero="label|line|sub|cta|scroll"`
  markers on the hero elements
- `<div class="marquee" data-marquee data-items="…">` → `<Marquee items={…} />`
  (define the items array at module scope)

`docs/MOTION.md` contains the full API reference and the complete original-call →
JSX mapping table — use it.

Component import signatures (all live under `@/components/motion/`, all default
exports, prop types also exported):

| Component | Import | Props |
| --- | --- | --- |
| `CustomCursor` | `import CustomCursor from "@/components/motion/CustomCursor"` | none (already in layout) |
| `PageFade` | `import PageFade from "@/components/motion/PageFade"` | `{ children }` (already in layout) |
| `Reveal` | `import Reveal from "@/components/motion/Reveal"` | `{ variant, children, stagger?, start?, delay?, className?, as? }` |
| `Marquee` | `import Marquee from "@/components/motion/Marquee"` | `{ items, speed?, inverted?, className? }` |
| `HeroTimeline` | `import HeroTimeline from "@/components/motion/HeroTimeline"` | `{ children }` + `data-hero` markers |

## 9. Branding: CYBEROCO only

- **No `mailto:hello@holomad.io` anywhere.** The only contact email is
  `info@cyberoco.tech` (also available as `site.email`).
- Purge every HOLOMAD string — page titles, logo `alt`s, `aria-label`s, footer
  text, `og:` copy — and replace with CYBEROCO. (`work.html`, `case-studies.html`
  and the work detail pages are HOLOMAD-branded in the source; they port as
  CYBEROCO pages.)
- Fix known source typos: "Custome Software Solutions" → "Custom Software
  Solutions" (labels come from `content/site.ts`, which is already correct).

## 10. Forms

Only the contact form exists (`/contact`) and it is owned by another agent —
do not port it. If a source page contains any other form, drop it (link to
`/contact` instead).

## 11. Code style

- TypeScript strict mode; imports use the `@/` alias (`@/components/...`,
  `@/content/site`).
- No `console.log`, no inline event handlers (`onclick="…"` does not port —
  rework the behavior with the motion components or a small client component
  when genuinely interactive).
- Structured data on detail pages (services, industries, work, blog posts):
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
  JSON.stringify(object) }} />` with a **static JSON object only** — no
  template-injected runtime data beyond what's already in the file.

## 12. Routing and file layout

Route folders are static segments matching `ROUTES` in `content/site.ts`:

```
app/services/penetration-testing/page.tsx
app/industries/financial-services/page.tsx
app/work/versa-finance/page.tsx
app/blog/api-authorisation-flaws/page.tsx
app/resources/sample-pentest-report/page.tsx
```

Name the page component `Page` or something descriptive (`PenetrationTestingPage`).
`ROUTES` is the canonical manifest — if a route you need is not listed there,
stop and flag it instead of inventing a path.
