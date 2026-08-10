"use client";

/**
 * Adapted from React Bits' ScrollReveal. Generic fade/slide-up wrapper
 * for any block of content — the default section-reveal used across
 * product/journey/audience pages (plan §16 motion guidelines).
 */
import { useEffect, useState, type ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";
import styles from "./ScrollReveal.module.scss";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const reducedMotion = useReducedMotion();
  // Same fix as MaskedHeading/CountUp: visible by default (SSR-safe, no
  // hydration-timing window where content disappears), and only primed
  // into a hide-then-reveal animation for content that's genuinely
  // off-screen at mount.
  const [primed, setPrimed] = useState(false);

  useEffect(() => {
    if (reducedMotion || inView) return;
    // Deferred via rAF rather than called synchronously in the effect
    // body, matching the pattern in CountUp — avoids a same-tick
    // cascading render.
    const raf = requestAnimationFrame(() => setPrimed(true));
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, inView]);

  const revealed = !primed || inView;

  return (
    <div
      ref={ref}
      className={[styles.reveal, className].filter(Boolean).join(" ")}
      style={
        reducedMotion
          ? undefined
          : {
              transitionDelay: `${delay}ms`,
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(14px)",
            }
      }
    >
      {children}
    </div>
  );
}
