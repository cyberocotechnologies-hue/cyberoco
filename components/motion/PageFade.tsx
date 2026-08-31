"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DUR, EASE, prefersReducedMotion } from "@/lib/motion-tokens";

export interface PageFadeProps {
  children: ReactNode;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const FADE_DISTANCE = 12;

export default function PageFade({ children }: PageFadeProps) {
  const mainRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    // Webfont swap changes text metrics after hydration — once fonts settle,
    // recalculate all ScrollTrigger positions so reveals fire at the right
    // scroll offsets.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      }).catch(() => {});
    }

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: FADE_DISTANCE },
        { opacity: 1, y: 0, duration: DUR.mid, ease: EASE.power2 }
      );
    }, el);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <main id="page-content" ref={mainRef}>
      {children}
    </main>
  );
}