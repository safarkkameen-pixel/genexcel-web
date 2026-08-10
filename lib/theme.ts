export const THEME_STORAGE_KEY = "genexcel-theme";
export type Theme = "light" | "dark";

/**
 * The exact logic the blocking inline script (ThemeScript) runs before
 * paint, duplicated here as a real function so ThemeProvider's initial
 * client render can compute the same answer without needing to read the
 * DOM — kept as one function so the two can't drift out of sync; see
 * ThemeScript.tsx for why the script itself can't just import this.
 */
export function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (private browsing, disabled, etc.) — fall through to OS preference.
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
