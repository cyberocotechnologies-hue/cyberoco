# CYBEROCO Motion System

Motion components ported from the static build (`js/animations.js`, `js/marquee.js`,
`js/main.js`, and the inline hero timeline in `index.html`). GSAP 3 + ScrollTrigger,
wrapped in React 19 client components. This document is the contract for page-porting
agents — read it before porting any page animations.

## Golden rules

1. **Never add raw `<script>` animation blocks.** Every animation the static site had
   is covered by a component below. If something is genuinely missing, extend the
   motion components in `components/motion/` — do not inline GSAP calls in pages.
2. **Always prefer `<Reveal>`** over bespoke tweens for scroll-triggered entrances.
   Only reach for raw `gsap` (via `@/lib/gsap`) when a page has a truly unique effect.
3. **All timings come from `@/lib/motion-tokens`.** Do not introduce magic numbers.
   `EASE`, `DUR`, `STAGGER`, `REVEAL_START` are the vocabulary.
4. **Import GSAP only from `@/lib/gsap`** (it registers ScrollTrigger and sets the
   global `power3.out` default, SSR-safe). Never import the `gsap` package directly
   in a page.
5. **`prefers-reduced-motion` is honored globally** by every component below. Pages
   get correct reduced-motion behavior for free — never re-implement the check.
6. **Do NOT render `CustomCursor` or `PageFade` in pages.** They are layout-level
   and already mounted by the root layout. Rendering them twice duplicates the
   cursor elements and re-triggers page fades.

## Import map

```tsx
import Reveal from "@/components/motion/Reveal";          // scroll-triggered reveals
import Marquee from "@/components/motion/Marquee";        // infinite ticker
import HeroTimeline from "@/components/motion/HeroTimeline"; // home hero entrance
import { gsap, ScrollTrigger } from "@/lib/gsap";         // only for bespoke effects
import { EASE, DUR, STAGGER, REVEAL_START } from "@/lib/motion-tokens";
```

All three components are default exports; props types are also exported
(`RevealProps`, `RevealVariant`, `MarqueeProps`, `HeroTimelineProps`).

## Tokens (`lib/motion-tokens.ts`)

| Token | Value |
| --- | --- |
| `EASE.outExpo` | `cubic-bezier(0.16, 1, 0.3, 1)` (CSS transitions only) |
| `EASE.power2` / `power3` / `power4` | `power2.out` / `power3.out` / `power4.out` |
| `EASE.linear` | `none` |
| `DUR.fast` / `base` / `mid` / `nav` / `slow` / `reveal` / `lines` / `heroLong` | `0.2` / `0.35` / `0.5` / `0.7` / `0.9` / `1.0` / `1.05` / `1.1` |
| `STAGGER.tight` / `base` / `wide` | `0.07` / `0.12` / `0.14` |
| `REVEAL_START` | `"top 85%"` |

---

## Reveal — the four scroll-trigger helpers as one component

`Reveal` ports `revealLines` / `fadeUp` / `fadeIn` / `scaleIn` from `js/animations.js`.
It renders a wrapper element and animates **the wrapper's direct children**
(each child plays the same tween, offset by `stagger`).

```tsx
interface RevealProps {
  variant: "lines" | "fadeUp" | "fadeIn" | "scale";
  children: React.ReactNode;
  stagger?: number;  // default per variant: lines 0.12, fadeUp 0.12, fadeIn 0, scale 0.07
  start?: string;    // ScrollTrigger start, default "top 85%"
  delay?: number;    // default 0
  className?: string; // wrapper class, e.g. "hero-line-wrap" for masked line reveals
  as?: React.ElementType; // wrapper element, default "div"
}
```

### Timings (ported exactly from `animations.js`)

| Variant | Tween | Duration | Ease | Original helper | Original default start |
| --- | --- | --- | --- | --- | --- |
| `lines` | `y: "108%" -> "0%"`, `opacity: 0 -> 1` | `1.05` | `power3.out` | `revealLines` | `"top 82%"` |
| `fadeUp` | `y: 44 -> 0`, `opacity: 0 -> 1` | `0.9` | `power3.out` | `fadeUp` | `"top 85%"` |
| `fadeIn` | `opacity: 0 -> 1` | `0.8` | `power2.out` | `fadeIn` | `"top 87%"` |
| `scale` | `scale: 0.96 -> 1`, `opacity: 0 -> 1` | `1.0` | `power3.out` | `scaleIn` | `"top 86%"` |

Every variant uses `toggleActions: "play none none none"`. The ScrollTrigger is the
wrapper itself for `lines` (the original triggered on the lines' parent) and the first
child for the other variants (the original triggered on the first matched element).

The component's `start` default is `"top 85%"` for all variants (a consolidation of the
original per-helper `82-87%` defaults — visually indistinguishable). To reproduce a
helper's exact original trigger point, pass `start` explicitly, e.g.
`<Reveal variant="lines" start="top 82%">`.

### Mapping original calls to JSX (home page, `index.html` inline script)

| Original call | Replacement |
| --- | --- |
| `fadeUp(".accred-label", 0)` | `<Reveal variant="fadeUp" stagger={0}>` wrapping `.accred-label` |
| `fadeUp(".accred-heading", 0)` | `<Reveal variant="fadeUp" stagger={0}>` |
| `fadeIn(".accred-item", 0.05, { start: "top 88%" })` | `<Reveal variant="fadeIn" stagger={0.05} start="top 88%">` |
| `fadeUp(".stat-item", 0.1)` | `<Reveal variant="fadeUp" stagger={0.1}>` |
| `fadeUp(".service-row", 0.08, { start: "top 80%" })` | `<Reveal variant="fadeUp" stagger={0.08} start="top 80%">` |
| `scaleIn(".engagement-item", { start: "top 85%" })` | `<Reveal variant="scale">` (default stagger 0.07, default start) |
| `fadeUp(".industry-card", 0.06, { start: "top 85%" })` | `<Reveal variant="fadeUp" stagger={0.06}>` |
| `fadeUp(".feature-block", 0.1, { start: "top 82%" })` | `<Reveal variant="fadeUp" stagger={0.1} start="top 82%">` |
| `fadeIn(".cred-item", 0.05, { start: "top 88%" })` | `<Reveal variant="fadeIn" stagger={0.05} start="top 88%">` |
| `fadeUp(".blog-card", 0.08, { start: "top 85%" })` | `<Reveal variant="fadeUp" stagger={0.08}>` |
| `revealLines(".about-line")` | `<Reveal variant="lines">` (see masks below) |
| `fadeUp(".about-cta-btn", 0)` | `<Reveal variant="fadeUp" stagger={0}>` |
| `fadeIn(".testimonial-item", 0.14)` | `<Reveal variant="fadeIn" stagger={0.14}>` |
| `fadeUp(".cta-headline", 0.08)` | `<Reveal variant="fadeUp" stagger={0.08}>` |
| `fadeUp(".cta-btn", 0)` | `<Reveal variant="fadeUp" stagger={0}>` |

Examples:

```tsx
<Reveal variant="fadeUp" stagger={0.08} start="top 80%" className="service-rows">
  {services.map((s) => (
    <div key={s.slug} className="service-row">{s.title}</div>
  ))}
</Reveal>

<Reveal variant="scale" className="engagement-grid">
  {items.map((item) => <div key={item.id} className="engagement-item">{item.title}</div>)}
</Reveal>
```

### Masked line reveals (`variant="lines"`)

The tween is a direct port of `revealLines` (slide up from `y: 108%`). **The mask
(overflow clipping) is page structure — the component never adds it.**

- Home-hero style (masked): wrap the line elements in the Reveal and give it the
  overflow class — `globals.css` ships `.hero-line-wrap { overflow: hidden }`:

  ```tsx
  <Reveal variant="lines" className="hero-line-wrap">
    <span className="hero-line">Line 1</span>
    <span className="hero-line">Line 2</span>
  </Reveal>
  ```

  The component animates direct children **regardless of their class** — `.hero-line`,
  `.pt-hero-line`, `.about-line`, or no class at all. If the page needs per-line masks
  (each line clipped by its own box, like the original hero markup), use one `Reveal`
  per line: `<Reveal variant="lines" className="hero-line-wrap"><span className="hero-line">...</span></Reveal>`.

- About-preview style (unmasked, like `revealLines(".about-line")` in the original —
  `.reveal-line` never had `overflow: hidden` in the original CSS): a plain wrapper
  works; add `overflow-hidden` (or a page class) to the wrapper only if you want the
  clip.

```tsx
<Reveal variant="lines" className="mb-8">
  <span className="about-line text-headline c-white" style={{ display: "block" }}>
    We believe the best design
  </span>
  <span className="about-line text-headline" style={{ display: "block" }}>
    is the one you don't notice —
  </span>
</Reveal>
```

### Behavior notes (intentional, matches the original)

- **Children are NOT pre-hidden in render.** Like the original helpers (which ran on
  `DOMContentLoaded` and showed a brief unanimated frame), elements render visible and
  are hidden by the `fromTo` in a pre-paint layout effect. Do not add `opacity: 0`
  inline styles or CSS to Reveal children — you would break the reduced-motion path,
  which skips animation and force-sets the final visible state.
- Empty wrappers are safe (original empty-set guards): no tween is created when there
  are no children.
- Unmount/re-navigation is safe: every tween and ScrollTrigger is created inside
  `gsap.context()` and reverted on unmount (fixes the original's ScrollTrigger leak).

---

## HeroTimeline — home hero entrance (index.html inline script)

Wraps the hero content and animates **descendants** marked with `data-hero`
attributes. Positions/durations/staggers are ported exactly from the inline script
in `index.html` (all tweens use the timeline default ease `power4.out`):

| Attribute | Tween | Duration | Position |
| --- | --- | --- | --- |
| `data-hero="label"` | `opacity: 0 -> 1`, `y: 10 -> 0` | `0.6` | `0.3` |
| `data-hero="line"` (all matches) | `y: "110%" -> "0%"`, `opacity: 0 -> 1`, stagger `0.14` | `1.1` | `0.55` |
| `data-hero="sub"` | `y: 18 -> 0`, `opacity: 0 -> 1` | `0.8` | `"-=0.4"` |
| `data-hero="cta"` (all matches, together) | `y: 14 -> 0`, `opacity: 0 -> 1` | `0.6` | `"-=0.4"` |
| `data-hero="scroll"` | `opacity: 0 -> 1` | `0.6` | `"-=0.2"` |

The relative positions (`"-=0.4"`, `"-=0.2"`) chain off the end of the previous
tween — with two lines the sub starts at ~1.39s, cta at ~1.79s, scroll at ~2.19s,
exactly like the source. Include all five markers to reproduce the original
sequence; missing markers simply drop out of the chain.

Home hero port:

```tsx
<HeroTimeline>
  <p data-hero="label" className="text-label c-gray-999 mb-6">
    Digital Studio — Est. 2024
  </p>
  <div className="mb-8">
    <div className="hero-line-wrap">
      <span data-hero="line" className="hero-line text-display">We craft</span>
    </div>
    <div className="hero-line-wrap">
      <span data-hero="line" className="hero-line text-display">digital futures.</span>
    </div>
  </div>
  <div className="hero-bottom-row">
    <p data-hero="sub" className="text-subheading c-gray-555 max-w-sm leading-relaxed">
      Minimalist design. Purposeful code.<br />Intelligence at every layer.
    </p>
    <div data-hero="cta" className="hero-cta-group">
      <a href="/work" className="btn-fill">View Work</a>
      <a href="/contact" className="btn-outline">Start a project</a>
    </div>
  </div>
  <div data-hero="scroll" className="scroll-indicator" aria-hidden="true">
    <span className="text-label">Scroll</span>
    <div className="scroll-line" />
  </div>
</HeroTimeline>
```

Notes:

- Keep the original per-line `.hero-line-wrap` mask structure — HeroTimeline animates
  the inner `[data-hero="line"]` elements wherever they live, matching the source.
- `.hero-line` is CSS-pre-hidden in `globals.css` (`translateY(110%); opacity: 0`),
  identical to the original build; the timeline reveals it. Keep the class.
- With JS disabled, `label`/`sub`/`cta`/`scroll` render visible (the original used
  inline `opacity: 0` and hid them without JS — this port is progressively enhanced).
  Only `.hero-line` elements stay hidden without JS, same as the original.
- Reduced motion: all `data-hero` elements are set to their visible final state.

---

## Marquee — infinite ticker (js/marquee.js)

```tsx
interface MarqueeProps {
  items: string[];
  speed?: number;      // seconds per one-set width, default 30
  inverted?: boolean;  // adds the .inverted (black) modifier, default false
  className?: string;  // appended to "marquee [inverted]"
}
```

Replaces `<div class="marquee" data-marquee data-speed="30"></div>` + `marquee.js`.
The track is server-rendered (items x3, `.marquee-track` / `.marquee-item` /
`.marquee-dot` markup — the original built it with JS and rendered nothing without
JS). Hover pauses, leave resumes. Width is re-measured (tween rebuilt) on debounced
`resize` and `document.fonts.ready` — the original measured once and drifted when
fonts loaded late. Reduced motion renders the static clipped track.

**Define the items array at module scope** so the prop identity is stable across
renders (the effect re-runs when `items`/`speed` change).

The original `index.html` had two marquee instances; both used the default list from
`marquee.js`:

```tsx
const MARQUEE_ITEMS = [
  "UI/UX Design",
  "Web Development",
  "App Development",
  "AI Automation",
  "Digital Strategy",
  "Brand Identity",
  "Motion Design",
  "Product Thinking",
];

<Marquee items={MARQUEE_ITEMS} speed={30} />
<Marquee items={MARQUEE_ITEMS} speed={36} inverted />
```

---

## CustomCursor & PageFade — layout-level, do not render in pages

- `CustomCursor` (dot + ring, `#cursor-dot` / `#cursor-ring`) mounts in the root
  layout. It disables itself on coarse pointers and reduced motion, uses
  `gsap.quickTo` for movement, and grows the ring over `a, button, [data-cursor]`
  via event delegation. Pages get hover-cursor behavior automatically; adding
  `data-cursor` to any element opts it into the grow effect.
- `PageFade` renders `<main id="page-content">` and fades it in
  (`opacity 0 -> 1`, `y: 12 -> 0`, `0.5s`, `power2.out`) on first mount and on every
  route change (the port of `initPageFadeIn`, which ran once per full page load).
  Pages render inside it via the layout — never wrap page content in another
  `<main>` or import these components.

---

## Bespoke effects (rare)

If a page truly needs a custom timeline, follow the house pattern:

```tsx
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { DUR, EASE, prefersReducedMotion } from "@/lib/motion-tokens";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
```

- create tweens inside `gsap.context(() => { ... }, scopeRef)` and
  `return () => ctx.revert()` from the effect;
- early-return for `prefersReducedMotion()` (set final states instead);
- use `DUR`/`EASE`/`STAGGER` tokens.

If late-loading content (images, fonts) changes layout and a ScrollTrigger
mis-measures, call `ScrollTrigger.refresh()` from that page's own effect.

## Intentional deltas from the static build

1. **Reveal `start` default is `"top 85%"` for all variants** (original helpers
   defaulted to 82/85/86/87% per helper; pass `start` to match exactly).
2. **Reveal `fadeIn` default stagger is `0`** (original helper default was `0.1`;
   the original pages always passed it explicitly — pass `stagger={0.1}` to match a
   bare `fadeIn(sel)` call).
3. **HeroTimeline `cta` values come from the source script** — `y: 14 -> 0`,
   `0.6s` at `"-=0.4"`, no stagger — not the approximations in earlier planning
   notes (`0.9s at 0.8` for sub / staggered cta at `~1.0`). Sub is `0.8s` at
   `"-=0.4"`; scroll is `0.6s` at `"-=0.2"`.
4. **Marquee re-measures** on debounced resize and `document.fonts.ready` (original
   measured once); hover-pause survives the rebuild.
5. **CustomCursor** uses `quickTo` (two persistent tweens) instead of two tweens per
   `mousemove`; hover detection is delegated (`mouseover`/`mouseout` with
   related-target checks) instead of binding per-element listeners + a 300ms rebind;
   it renders nothing on touch/reduced-motion. It still appears at the top-left
   corner until the first mousemove, exactly like the original.
6. **Cleanup everywhere** via `gsap.context().revert()` — the original leaked
   ScrollTriggers (harmless on a multi-page site, fatal in an SPA).
7. **PageFade replays on App Router navigation** (keyed on `usePathname()`), matching
   the original one-fade-per-page-load feel.