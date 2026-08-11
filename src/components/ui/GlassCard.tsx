'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = true, glow = false, gradient = false }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glassmorphism — matches the homepage's aqua/glass recipe
          'relative overflow-hidden rounded-3xl',
          'bg-white border border-slate-200 shadow-glass',
          'dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03]',
          'dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none',

          // Hover effects
          hover && [
            'transition-all duration-300 ease-out',
            'hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/[.34]',
          ],

          // Glow effect
          glow && 'hover:shadow-glow dark:hover:shadow-none',

          // Gradient background
          gradient && 'bg-gradient-to-br from-white via-white to-cyan-50/60 dark:from-white/[.14] dark:to-white/[.05]',

          className
        )}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
