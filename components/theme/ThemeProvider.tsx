"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/**
 * Reads/writes the same `data-theme` attribute ThemeScript already set
 * before paint — this provider doesn't decide the theme on first
 * render (it can't, safely, during SSR), it just picks up what's
 * already correct on the DOM via a lazy useState initializer (evaluated
 * during render, same pattern as useReducedMotion) rather than an
 * effect + setState, avoiding an extra render pass. On the server this
 * still resolves to "light" — nothing visual depends on it there (all
 * styling is CSS-variable-driven off the attribute directly), so the
 * only consumers affected are low-stakes enough to self-correct within
 * a frame after hydration.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // ignore — private browsing, storage disabled, etc.
    }
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
