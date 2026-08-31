"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import {
  DUR,
  EASE,
  REVEAL_START,
  STAGGER,
  prefersReducedMotion,
} from "@/lib/motion-tokens";

export type RevealVariant = "lines" | "fadeUp" | "fadeIn" | "scale";

export interface RevealProps {
  variant: RevealVariant;
  children: ReactNode;
  stagger?: number;
  start?: string;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const FADE_IN_DURATION = 0.8;

const DEFAULT_STAGGER: Record<RevealVariant, number> = {
  lines: STAGGER.base,
  fadeUp: STAGGER.base,
  fadeIn: 0,
  scale: STAGGER.tight,
};

const VARIANT_TWEENS: Record<
  RevealVariant,
  {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    duration: number;
    ease: gsap.EaseString;
  }
> = {
  lines: {
    from: { y: "108%", opacity: 0 },
    to: { y: "0%", opacity: 1 },
    duration: DUR.lines,
    ease: EASE.power3,
  },
  fadeUp: {
    from: { y: 44, opacity: 0 },
    to: { y: 0, opacity: 1 },
    duration: DUR.slow,
    ease: EASE.power3,
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: FADE_IN_DURATION,
    ease: EASE.power2,
  },
  scale: {
    from: { scale: 0.96, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    duration: DUR.reveal,
    ease: EASE.power3,
  },
};

export default function Reveal({
  variant,
  children,
  stagger = DEFAULT_STAGGER[variant],
  start = REVEAL_START,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const wrapperRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const targets = Array.from(wrapper.children);
    if (targets.length === 0) return;

    const tween = VARIANT_TWEENS[variant];
    const trigger = variant === "lines" ? wrapper : targets[0];

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(targets, tween.to);
        return;
      }

      gsap.fromTo(targets, tween.from, {
        ...tween.to,
        duration: tween.duration,
        stagger,
        delay,
        ease: tween.ease,
        scrollTrigger: {
          trigger,
          start,
          toggleActions: "play none none none",
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [variant, stagger, start, delay]);

  return (
    <Tag ref={wrapperRef} className={className}>
      {children}
    </Tag>
  );
}