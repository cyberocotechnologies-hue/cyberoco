"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/motion-tokens";

export interface MarqueeProps {
  items: string[];
  speed?: number;
  inverted?: boolean;
  className?: string;
}

const DEFAULT_SPEED = 30;
const RESIZE_DEBOUNCE_MS = 200;

export default function Marquee({
  items,
  speed = DEFAULT_SPEED,
  inverted = false,
  className,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || items.length === 0) return;
    if (prefersReducedMotion()) return;

    let tween: gsap.core.Tween | null = null;
    let rafId = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;

    const killTween = () => {
      if (tween) {
        tween.kill();
        tween = null;
      }
      gsap.set(track, { x: 0 });
    };

    const start = () => {
      killTween();
      const oneSetWidth = track.scrollWidth / 3;
      if (oneSetWidth <= 0) return;
      tween = gsap.to(track, {
        x: -oneSetWidth,
        duration: speed,
        ease: EASE.linear,
        repeat: -1,
        onRepeat: () => gsap.set(track, { x: 0 }),
      });
      if (container.matches(":hover")) tween.pause();
    };

    const scheduleStart = () => {
      rafId = requestAnimationFrame(start);
    };

    const onResize = () => {
      if (resizeTimer !== undefined) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(rafId);
        scheduleStart();
      }, RESIZE_DEBOUNCE_MS);
    };

    const onEnter = () => tween?.pause();
    const onLeave = () => tween?.play();

    scheduleStart();

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (disposed) return;
        cancelAnimationFrame(rafId);
        scheduleStart();
      });
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      if (resizeTimer !== undefined) clearTimeout(resizeTimer);
      killTween();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [items, speed]);

  const classes = ["marquee", inverted && "inverted", className]
    .filter(Boolean)
    .join(" ");

  const loopItems = [...items, ...items, ...items];

  return (
    <div ref={containerRef} className={classes} data-marquee>
      <div ref={trackRef} className="marquee-track">
        {loopItems.map((item, index) => (
          <span
            key={index}
            className="marquee-item"
            aria-hidden={index >= items.length}
          >
            {item}
            <span className="marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}