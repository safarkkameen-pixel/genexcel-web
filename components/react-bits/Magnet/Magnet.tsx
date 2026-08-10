"use client";

/**
 * Adapted from React Bits' Magnet (Animations). Wraps a single child
 * (typically a Button) and pulls it gently toward the pointer within a
 * small radius — reserved for primary conversion actions only, not
 * sprinkled on every button (plan §16).
 */
import type { ReactNode, PointerEvent } from "react";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import styles from "./Magnet.module.scss";

type MagnetProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnet({ children, strength = 0.25, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handlePointerLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={[styles.magnet, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
