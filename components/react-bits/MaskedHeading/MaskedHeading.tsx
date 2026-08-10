"use client";

/**
 * Adapted from React Bits' text-reveal pattern (TextAnimations/BlurText,
 * ScrollReveal family), re-themed to this project's tokens and simplified
 * to a per-word mask reveal — configurable, supports plain text or a
 * pre-split array of segments, degrades to fully visible under
 * prefers-reduced-motion (plan §11.1, §12).
 */
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useInView } from "@/lib/useInView";
import styles from "./MaskedHeading.module.scss";

type MaskedHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Stagger delay per word, in ms. */
  stagger?: number;
};

export function MaskedHeading({ text, as = "h2", className, stagger = 40 }: MaskedHeadingProps) {
  const Tag = as;
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLHeadingElement>(0.4);
  // Renders fully visible by default — this is what SSR output and the
  // very first client paint show, so a slow JS download or a hydration
  // delay never leaves heading text invisible (the same failure mode
  // fixed in CountUp). We only opt INTO a hide-then-reveal animation
  // client-side, and only for headings that are genuinely off-screen at
  // mount — never for anything already visible when the page loads,
  // which is exactly the case that broke the hero H1.
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
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={[styles.heading, className].filter(Boolean).join(" ")}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className={styles.mask}>
          <span
            className={styles.word}
            style={
              reducedMotion
                ? undefined
                : {
                    transitionDelay: `${index * stagger}ms`,
                    transform: revealed ? "translateY(0)" : "translateY(110%)",
                    opacity: revealed ? 1 : 0,
                  }
            }
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
