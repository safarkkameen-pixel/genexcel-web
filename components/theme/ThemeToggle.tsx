"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.scss";

/**
 * Both icons always render; which one is visible is decided by plain
 * CSS keyed on [data-theme] (see the module.scss), not by `theme`
 * state — that avoids any hydration-mismatch risk for what's actually
 * painted. The label is intentionally theme-agnostic (not "Switch to
 * dark/light mode") so it never has to depend on `theme` state either:
 * the server always assumes "light" (no `document` at SSR time), so a
 * label that read that state would render one string on the server and
 * — for any returning visitor already in dark mode — a different one
 * on the client, a real hydration mismatch on this exact attribute.
 */
export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg className={styles.sun} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6.3" y2="17.7" />
          <line x1="17.7" y1="6.3" x2="19.4" y2="4.6" />
        </g>
      </svg>
      <svg className={styles.moon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
