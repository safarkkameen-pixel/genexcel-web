'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform, type UseInViewOptions } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  /** useInView rootMargin. Defaults to '-100px', which can wrongly exclude
   * elements that sit close to a viewport edge (e.g. a left-aligned column) —
   * pass a smaller/zero margin in those layouts. */
  margin?: UseInViewOptions['margin'];
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
  margin = '-100px',
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, spring, value, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
