"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/motion-tokens";

const HOVERABLE_SELECTOR = "a, button, [data-cursor]";

const DOT_MOVE_DURATION = 0.05;
const RING_MOVE_DURATION = 0.35;
const RING_HOVER_DURATION = 0.25;
const DOT_HOVER_DURATION = 0.2;

function subscribeMedia(callback: () => void) {
  const coarse = window.matchMedia("(pointer: coarse)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  coarse.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    coarse.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

function isCursorDisabled(): boolean {
  return window.matchMedia("(pointer: coarse)").matches || prefersReducedMotion();
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const disabled = useSyncExternalStore(
    subscribeMedia,
    isCursorDisabled,
    () => false,
  );

  useEffect(() => {
    if (disabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dot, "x", {
      duration: DOT_MOVE_DURATION,
      ease: EASE.linear,
    });
    const dotY = gsap.quickTo(dot, "y", {
      duration: DOT_MOVE_DURATION,
      ease: EASE.linear,
    });
    const ringX = gsap.quickTo(ring, "x", {
      duration: RING_MOVE_DURATION,
      ease: EASE.power2,
    });
    const ringY = gsap.quickTo(ring, "y", {
      duration: RING_MOVE_DURATION,
      ease: EASE.power2,
    });

    // Keep dot/ring invisible until the first real mouse position is known —
    // otherwise they flash at the top-left corner (0,0) before any movement.
    let shown = false;

    const onMouseMove = (event: MouseEvent) => {
      if (!shown) {
        gsap.set([dot, ring], { opacity: 1 });
        shown = true;
      }
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const grow = () => {
      gsap.to(ring, { scale: 2, opacity: 0.5, duration: RING_HOVER_DURATION });
      gsap.to(dot, { scale: 0, duration: DOT_HOVER_DURATION });
    };

    const shrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: RING_HOVER_DURATION });
      gsap.to(dot, { scale: 1, duration: DOT_HOVER_DURATION });
    };

    const hoverableFrom = (target: EventTarget | null): Element | null =>
      target instanceof Element ? target.closest(HOVERABLE_SELECTOR) : null;

    const movedWithinSameHoverable = (event: MouseEvent): boolean =>
      event.relatedTarget instanceof Element &&
      event.target instanceof Element &&
      event.target.closest(HOVERABLE_SELECTOR) ===
        event.relatedTarget.closest(HOVERABLE_SELECTOR) &&
      event.target.closest(HOVERABLE_SELECTOR) !== null;

    const onMouseOver = (event: MouseEvent) => {
      if (!hoverableFrom(event.target)) return;
      if (movedWithinSameHoverable(event)) return;
      grow();
    };

    const onMouseOut = (event: MouseEvent) => {
      if (!hoverableFrom(event.target)) return;
      if (movedWithinSameHoverable(event)) return;
      shrink();
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      gsap.killTweensOf([dot, ring]);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}