"use client";

/**
 * Adapted from React Bits' SpotlightCard. A card that tracks the pointer
 * and renders a soft radial highlight under it — subtle depth, no
 * scale/rotation (plan §16: hover effects "subtle only"). Falls back to
 * a static card with no pointer tracking under prefers-reduced-motion.
 */
import type { ReactNode, PointerEvent } from "react";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import styles from "./SpotlightCard.module.scss";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={[styles.card, className].filter(Boolean).join(" ")}
    >
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
