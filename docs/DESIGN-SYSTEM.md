# CYBEROCO Design System

Single source of truth for the ported design system in `app/globals.css`.
Pages are ported verbatim from the static HTML build and keep the ORIGINAL
class names — this document is the contract between the CSS and page builders.

- Stack: Next.js 16 (App Router) + Tailwind v4. Inter loads via `next/font`
  and is exposed as `--font-inter` on `<html>`.
- All ported CSS sits unlayered in `globals.css`, after `@import "tailwindcss"`.
  Unlayered rules beat Tailwind utilities of the same name, so where a class
  collides with a Tailwind utility (`.flex`, `.mb-4`, `.gap-4`, …) the
  CYBEROCO value applies. Notable deltas: `.tracking-tight` is `-0.01em`
  (Tailwind's would be `-0.025em`) and `.leading-relaxed` is `1.6`.
  Do NOT swap ported classes for Tailwind equivalents on ported markup.

## 1. Design tokens (`:root`)

| Token | Value | Use |
| --- | --- | --- |
| `--white` | `#ffffff` | base background |
| `--black` | `#000000` | base text, hairlines, fills |
| `--gray-50` | `#fafafa` | subtle hover/section tint |
| `--gray-100` | `#f5f5f5` | gray section background |
| `--gray-200` | `#e8e8e8` | hairlines, borders, placeholder color |
| `--gray-300` | `#d4d4d4` | scrollbar thumb, arrows |
| `--gray-400` | `#aaaaaa` | muted labels, captions |
| `--gray-500` | `#777777` | secondary body text |
| `--gray-600` | `#555555` | primary body text on white |
| `--success` | `#2f7a4d` | positive deltas (ecommerce mock) |
| `--gutter` | `1.5rem` | horizontal page padding; `2.5rem` at >=768px (rules keep the literal values) |
| `--container-max` | `96rem` | `.container` cap on wide displays |
| `--z-hero / --z-nav / --z-menu / --z-hamburger / --z-dropdown` | `10 / 50 / 55 / 60 / 65` | z-index scale (dropdown sits above hamburger) |
| `--dur-fast / --dur-base / --dur-slow` | `0.2s / 0.35s / 0.55s` | motion durations |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | default easing |
| `--shadow-nav` | `0 1px 0 rgba(0,0,0,0.06), 0 12px 30px -18px rgba(0,0,0,0.15)` | `.navbar.scrolled` |
| `--shadow-dropdown` | `0 20px 44px -12px rgba(0,0,0,0.16)` | `.nav-dropdown` |

## 2. Key component classes

Typography scale:

- `.text-display` — hero display: `clamp(2.8rem, 10vw, 9rem)`, weight 800, lh 0.92
- `.text-headline` — section headline: `clamp(1.9rem, 5vw, 4.25rem)`, weight 700
- `.text-subheading` — lede: `clamp(1.05rem, 2vw, 1.45rem)`, weight 400
- `.text-label` — uppercase eyebrow: `0.68rem`, `0.17em` tracking, weight 500

Layout:

- `.container` — capped at `--container-max` (96rem), centered, gutter padding
- `.section` — 5rem mobile / 8rem desktop vertical rhythm, black top rule;
  modifiers: `.no-border`, `.bg-gray`, `.bg-gray-light`, `.bg-black`
- `.grid-2 / .grid-3 / .grid-4` — collapse to one column below 768px;
  add `.grid-mobile-2` to keep two columns on mobile
- `.md-grid-12` + `.md-col-span-4/5/7/8`, `.md-col-start-9` — desktop-only
  12-column grid (the whole grid is `display: none` below 768px by design)
- Spacing/flex utilities: `.gap-2/3/4/5/6/8`, `.gap-px`, `.mb-1` … `.mb-14`,
  `.mt-1/2`, `.flex`, `.flex-col`, `.items-center/end/start`,
  `.justify-between`, `.hidden`, `.md-flex`, `.md-hidden`, `.md-flex-row`,
  `.relative`, `.overflow-hidden`, `.shrink-0`, `.max-w-xs` … `.max-w-5xl`

Buttons:

- `.btn-fill` — black fill, inverts to transparent/black-text on hover
- `.btn-outline` — current-color border, fills black on hover
- `.btn-block` — full-width modifier

Dividers: `.divider` (black 1px), `.divider-thin` (gray-200 1px).

Text color utilities: `.c-gray-999/666/555/444/333/ccc`, `.c-white` — these
keep their literal hex values by design; plus `.font-semibold`, `.font-bold`,
`.italic`, `.tracking-tight`, `.leading-relaxed`, `.text-sm`, `.text-xs`.

Other ready-made components (port markup verbatim): `.navbar` / `.nav-inner` /
`.nav-links` / `.nav-item` / `.nav-dropdown` family, `.mobile-menu` /
`.mobile-submenu` family, `.footer*`, `.hero*`, `.marquee*`, `.work-grid` /
`.work-thumb` / `.thumb-placeholder`, `.pill-btn`, `.filter-btn`.

## 3. Breakpoints

ONE breakpoint: `768px`.

- Mobile: `< 768px` (expressed as `@media (max-width: 767px)`)
- Desktop: `>= 768px` (`@media (min-width: 768px)`)

Known limitation: no intermediate tablet or ultrawide steps. Every responsive
rule in the system keys off this single line; resist adding ad-hoc breakpoints
without a design review.

## 4. THE COLOR RULE

**Text on black sections must be >= #999.**
`#999` passes 7.3:1 on black; `#444/#555/#333` FAIL on black — use them only
on white.

- On white: body text `var(--gray-600)` or `#333`; captions `var(--gray-500)`
  / `var(--gray-400)`.
- On black: `var(--white)`, `#999` (`.c-gray-999`), or `var(--gray-400)` at
  the very lightest.
- Intentional 1:1 exceptions kept from the original design (do not tokenize
  them): `.marquee.inverted` uses `#444` text and `#333` dots on black;
  `.proj-next:hover` dims its label/meta to `#555` on the black hover fill.

## 5. Hairline-grid pattern

The signature grid trick: give the grid container `gap: 1px` and a background
of the hairline color (usually `var(--black)`), then give every cell an opaque
background (`var(--white)`). The 1px gaps reveal the container background as
hairline rules — no cell borders, no pseudo-elements.

Black hairlines: `.work-grid`, `.value-grid`, `.engagement-grid`, `.feat-grid`,
`.cap-grid`. Gray-200 hairlines: `.team-grid`, `.blog-grid`, `.accred-grid`,
`.cred-grid`, `.mock-stats`. When building new grids, copy this pattern and
never add borders to the cells.

## 6. Form fields

```html
<div class="field">
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="name@company.com" />
</div>
```

- Underline inputs: 1px gray-200 bottom border that turns black on `:focus`.
- Keyboard users get a 2px black `:focus-visible` outline (3px offset) even
  though the base inputs set `outline: none`.
- `.field-error` renders validation copy under a field.
- Budget pickers: `.pill-group` + `.pill-btn` (`.active` state).
- Work filters: `.filter-btn` (`.active` state). Pills and filters have a
  2.75rem min-height touch target.

## 7. Typography / font loading

Inter loads as a VARIABLE font via `next/font` (`--font-inter` on `<html>`),
so every weight from 300 to 900 renders as a true cut. The old build's
600/900 faux-bold bug (static 300-800 webfont, synthesized bolds) is gone —
use `font-weight: 300`-`900` freely; the display 800 and headline 700 are real
weights. Body stack: `var(--font-inter), 'Helvetica Neue', Helvetica, Arial,
sans-serif`. Tailwind's `font-sans` maps to the same stack via `@theme inline`.
