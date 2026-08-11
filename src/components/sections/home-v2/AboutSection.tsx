'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const ABOUT_STATS = [
  { value: 1020, suffix: '+', label: 'Genetic traits catalogued', color: 'text-slate-900 dark:text-white' },
  { value: 225000, suffix: '+', label: 'Textbook passages for Helix', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 26, suffix: '', label: 'Genetic trait profiles', color: 'text-slate-900 dark:text-white' },
  { value: 8, suffix: '', label: 'Playable cognitive games', color: 'text-amber-600 dark:text-[#FBBF24]' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-center"
        >
          <span className="inline-block py-[7px] px-[14px] mb-[22px] rounded-full border border-slate-200 bg-white text-[10.5px] font-semibold tracking-[0.16em] uppercase text-cyan-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:text-[#22D3EE]">
            About us
          </span>
          <h2
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.12] mb-5"
            style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}
          >
            To turn your child&rsquo;s genetic code into software that teaches, feeds and coaches them,{' '}
            <span className="text-slate-400 dark:text-[#4A5B78]">not just a report they read once.</span>
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-slate-600 dark:text-[#8B9AB5] max-w-[520px] mx-auto mb-8">
            GenExcel.ai is India&rsquo;s genomics-led learning and wellness platform &mdash; pairing accredited laboratory sequencing with Helix, an AI tutor grounded in your child&rsquo;s own textbooks, plus nutrition and fitness guidance that carries the same genetic adjustments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2.5 h-[52px] px-[26px] rounded-full text-[14.5px] font-semibold whitespace-nowrap text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md hover:opacity-90 dark:text-[#F2FEFF] dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100 transition-colors"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-full border border-slate-200 bg-white text-cyan-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:text-[#22D3EE]">
                <Phone className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block text-[11px] tracking-[0.1em] uppercase text-slate-400 dark:text-[#5C6E8C]">For any questions</span>
                <span className="block mt-[3px] text-[14.5px] font-semibold text-slate-900 dark:text-white">info@curanova.ai</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-6 pb-24 grid grid-cols-2 lg:grid-cols-4 gap-[18px]"
      >
        {ABOUT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[26px] py-[34px] px-7 bg-white border border-slate-200 shadow-glass dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none"
          >
            <div className={`font-display font-light tracking-[-0.03em] leading-none ${stat.color}`} style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.7} />
            </div>
            <div className="mt-3 text-[13.5px] text-slate-500 dark:text-[#8B9AB5]">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
