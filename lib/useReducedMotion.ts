"use client";

import { useEffect, useState } from "react";

function getInitial(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Single shared source of truth for `prefers-reduced-motion`, so every
 * React Bits island gates itself the same way instead of re-implementing
 * the check (plan §12 Accessibility). The initial value is read via a
 * lazy useState initializer (evaluated during render) rather than set
 * from inside an effect, so there is no synchronous setState-in-effect
 * and no flash of the wrong value.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(getInitial);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}
