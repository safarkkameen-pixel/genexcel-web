"use client";

/**
 * Adapted from React Bits' CountUp (TextAnimations). Counts up once when
 * scrolled into view; under prefers-reduced-motion it renders the final
 * value immediately with no animation frame loop.
 */
import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";
import styles from "./CountUp.module.scss";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, prefix = "", suffix = "", duration = 1400, className }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const reducedMotion = useReducedMotion();
  // Always start at the real value — SSR output, no-JS fallback, and any
  // reader that never triggers the intersection observer (a crawler that
  // doesn't scroll, e.g.) sees the correct number. The count-up is a
  // transient animation layered on top when it scrolls into view, never
  // the resting state.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let raf: number;
    const start = performance.now();

    // The first frame runs via requestAnimationFrame (deferred, not
    // synchronous within the effect body), and progress ~0 there already
    // rounds to 0 — so the animation still visibly restarts from zero
    // without an explicit synchronous setState(0) call here.
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reducedMotion, value, duration]);

  return (
    <span ref={ref} className={[styles.countUp, className].filter(Boolean).join(" ")}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
