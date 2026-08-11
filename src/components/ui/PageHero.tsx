'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Shared inner-page hero: eyebrow pill + Sora font-light headline + subtitle,
 * matching the homepage's typography (see home-v2/HeroSection.tsx). Pages
 * mount this as the first element under <main> — it supplies its own top
 * clearance for the fixed Header, so remove any `pt-*` on <main>/the old
 * hero wrapper. The page's own local gradient-blob background div should be
 * deleted too: the aqua background now comes from the shared AquaField
 * mounted once in (public)/layout.tsx.
 */
export function PageHero({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon?: LucideIcon;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative z-[1]" style={{ padding: 'clamp(112px,16vh,168px) 24px 64px' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 py-[9px] px-4 mb-6 rounded-full border border-slate-200 bg-white shadow-glass text-xs font-semibold tracking-[0.02em] text-slate-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none dark:text-[#C7D2E5]">
            {Icon && <Icon className="h-3.5 w-3.5 text-cyan-600 dark:text-[#22D3EE]" />}
            {eyebrow}
          </span>

          <h1
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.08] mb-5 text-balance"
            style={{ fontSize: 'clamp(34px,5vw,58px)' }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg leading-[1.6] text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/** Cyan → blue gradient accent span, for the emphasized part of a PageHero title. */
export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA]">
      {children}
    </span>
  );
}
