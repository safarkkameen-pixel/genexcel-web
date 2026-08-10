import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeProps = {
  children: ReactNode;
  tone?: "cyan" | "violet" | "indigo" | "neutral";
  /** Set when rendered on a dark/inverse section, so text and dot stay legible. */
  inverse?: boolean;
  className?: string;
};

/**
 * A minimal "kicker" label — uppercase text with a small colored dot,
 * no filled pill background. Accent color is reserved for the dot only,
 * keeping the badge itself neutral (premium, restrained UI).
 */
export function Badge({ children, tone = "cyan", inverse = false, className }: BadgeProps) {
  return (
    <span
      className={[styles.badge, inverse && styles.inverse, className].filter(Boolean).join(" ")}
    >
      <span
        className={[styles.dot, styles[tone], inverse && styles.dotInverse].filter(Boolean).join(" ")}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
