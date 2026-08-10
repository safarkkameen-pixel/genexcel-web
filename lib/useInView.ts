"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared IntersectionObserver hook — every scroll-triggered React Bits
 * island (MaskedHeading, CountUp, ScrollReveal) uses this instead of
 * re-implementing observer setup, and each reveal fires once (plan §16:
 * "triggered once per element on scroll-into-view, no re-trigger").
 */
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
