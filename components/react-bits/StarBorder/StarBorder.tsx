import type { ReactNode } from "react";
import styles from "./StarBorder.module.scss";

/**
 * A minimal, static thin-border chip. Previously a rotating
 * conic-gradient shimmer (React Bits' StarBorder) — simplified to a
 * plain hairline border per the "less glow, no unnecessary animation"
 * redesign; used for trust/compliance chips, never a pulsing badge.
 */
type StarBorderProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function StarBorder({ children, className, tone = "light" }: StarBorderProps) {
  return (
    <span
      className={[styles.chip, tone === "dark" && styles.dark, className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
}
