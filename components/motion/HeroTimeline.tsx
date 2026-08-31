"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { DUR, EASE, STAGGER, prefersReducedMotion } from "@/lib/motion-tokens";

export interface HeroTimelineProps {
  children: ReactNode;
  className?: string;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const LABEL_DURATION = 0.6;
const LABEL_AT = 0.3;
const LINES_AT = 0.55;
const SUB_DURATION = 0.8;
const SUB_AT = "-=0.4";
const CTA_DURATION = 0.6;
const CTA_AT = "-=0.4";
const SCROLL_DURATION = 0.6;
const SCROLL_AT = "-=0.2";
const LINE_FROM_Y = "110%";

export default function HeroTimeline({
  children,
  className,
}: HeroTimelineProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const label = root.querySelectorAll<HTMLElement>('[data-hero="label"]');
    const lines = root.querySelectorAll<HTMLElement>('[data-hero="line"]');
    const sub = root.querySelectorAll<HTMLElement>('[data-hero="sub"]');
    const cta = root.querySelectorAll<HTMLElement>('[data-hero="cta"]');
    const scroll = root.querySelectorAll<HTMLElement>('[data-hero="scroll"]');

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        if (label.length > 0) gsap.set(label, { opacity: 1, y: 0 });
        if (lines.length > 0) gsap.set(lines, { y: "0%", opacity: 1 });
        if (sub.length > 0) gsap.set(sub, { opacity: 1, y: 0 });
        if (cta.length > 0) gsap.set(cta, { opacity: 1, y: 0 });
        if (scroll.length > 0) gsap.set(scroll, { opacity: 1 });
        return;
      }

      if (lines.length > 0) {
        gsap.set(lines, { y: LINE_FROM_Y, opacity: 0 });
      }

      const tl = gsap.timeline({ defaults: { ease: EASE.power4 } });

      if (label.length > 0) {
        tl.fromTo(
          label,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: LABEL_DURATION },
          LABEL_AT
        );
      }

      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { y: LINE_FROM_Y, opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: DUR.heroLong,
            stagger: STAGGER.wide,
          },
          LINES_AT
        );
      }

      if (sub.length > 0) {
        tl.fromTo(
          sub,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: SUB_DURATION },
          SUB_AT
        );
      }

      if (cta.length > 0) {
        tl.fromTo(
          cta,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: CTA_DURATION },
          CTA_AT
        );
      }

      if (scroll.length > 0) {
        tl.fromTo(
          scroll,
          { opacity: 0 },
          { opacity: 1, duration: SCROLL_DURATION },
          SCROLL_AT
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}