/**
 * Adapted from React Bits' GradualBlur. Pure CSS (backdrop-filter + a
 * mask gradient) — no JS/state needed, so this stays a Server Component
 * and costs nothing in the client bundle. Used for hero-to-content
 * transitions, footer transitions, and section separators (plan §11.3).
 */
import styles from "./GradualBlur.module.scss";

type GradualBlurProps = {
  position?: "top" | "bottom";
  height?: number;
  className?: string;
};

export function GradualBlur({ position = "bottom", height = 120, className }: GradualBlurProps) {
  return (
    <div
      aria-hidden="true"
      className={[styles.blur, styles[position], className].filter(Boolean).join(" ")}
      style={{ height }}
    />
  );
}
