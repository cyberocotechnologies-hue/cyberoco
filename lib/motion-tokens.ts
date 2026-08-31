export const EASE = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  power2: "power2.out",
  power3: "power3.out",
  power4: "power4.out",
  linear: "none",
} as const;

export const DUR = {
  fast: 0.2,
  base: 0.35,
  mid: 0.5,
  nav: 0.7,
  slow: 0.9,
  reveal: 1.0,
  lines: 1.05,
  heroLong: 1.1,
} as const;

export const STAGGER = {
  tight: 0.07,
  base: 0.12,
  wide: 0.14,
} as const;

export const REVEAL_START = "top 85%";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}