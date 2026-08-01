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
          // Base glassmorphism
          'relative overflow-hidden rounded-3xl',
          'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl backdrop-saturate-150',
          'border border-white/30 dark:border-slate-700/30',
          'shadow-glass dark:shadow-none',

          // Hover effects
          hover && [
            'transition-all duration-300 ease-out',
            'hover:shadow-glass-lg dark:hover:shadow-lg dark:hover:shadow-slate-900/50',
            'hover:border-primary-100/50 dark:hover:border-primary-500/30',
            'hover:bg-white/80 dark:hover:bg-slate-800/80',
            'hover:-translate-y-1',
          ],

          // Glow effect
          glow && 'hover:shadow-glow',

          // Gradient background
          gradient && 'bg-gradient-to-br from-white/80 via-white/60 to-primary-50/40 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-primary-900/40',

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
