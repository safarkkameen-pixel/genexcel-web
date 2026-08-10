"use client";

/**
 * Adapted from React Bits' ScrollFloat (JS-CSS variant). Splits text
 * into per-character spans and scrubs their entrance directly to scroll
 * position via GSAP ScrollTrigger — a continuously scroll-linked effect,
 * genuinely different from this project's usual IntersectionObserver
 * "reveal once" pattern (ScrollReveal/MaskedHeading), which is why it's
 * the one component here that pulls in an animation library.
 *
 * Ported from the reference with a few changes to match this project's
 * conventions: TypeScript, CSS Modules instead of a global stylesheet,
 * gated by the shared useReducedMotion() hook (GSAP's scrub animation
 * is skipped entirely under reduced motion — text just renders plainly,
 * never hidden), proper ScrollTrigger/tween cleanup on unmount (the
 * original didn't kill its tween, which leaks a scroll listener if the
 * component unmounts), an aria-label so screen readers get the real
 * sentence instead of one announcement per character, a non-breaking
 * space for the space character (a bare space inside a display:
 * inline-block span gets trimmed by the browser — the exact bug already
 * found and fixed in MaskedHeading), and no baked-in font-size — sized
 * by whoever uses it, like every other text primitive in this codebase.
 */
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";
import styles from "./ScrollFloat.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollFloatProps = {
  children: string;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
};

export default function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  const chars = useMemo(() => Array.from(children), [children]);

  useEffect(() => {
    if (reducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const charElements = el.querySelectorAll(`.${styles.char}`);

    const tween = gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [chars, reducedMotion, scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2
      ref={containerRef}
      className={[styles.scrollFloat, containerClassName].filter(Boolean).join(" ")}
      aria-label={children}
    >
      <span
        className={[styles.scrollFloatText, textClassName].filter(Boolean).join(" ")}
        aria-hidden="true"
      >
        {chars.map((char, index) => (
          <span className={styles.char} key={index}>
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </h2>
  );
}
