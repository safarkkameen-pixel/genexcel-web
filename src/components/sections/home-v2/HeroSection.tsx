'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Droplets, Dna, Bot, type LucideIcon } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { AbstractArt } from './AbstractArt';

const INTRO_CARDS = [
  { variant: 'genetics' as const, tag: '26 profiles', title: 'Genetic reports' },
  { variant: 'helix' as const, tag: '225K+ passages', title: 'Helix, the AI tutor' },
  { variant: 'nutrition' as const, tag: 'Genetics-adjusted', title: 'Nutrition & fitness' },
];

const FLOAT_CHIPS: {
  className: string;
  icon: LucideIcon | null;
  iconBg: string;
  title: string;
  subtitle: string;
  delay: string;
}[] = [
  { className: 'top-[12%] -left-[4%]', icon: Dna, iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-[#22D3EE]/[.14] dark:text-[#67E8F9]', title: '26 profiles', subtitle: 'Genetic trait report', delay: '0s' },
  { className: 'top-[2%] right-0', icon: null, iconBg: '', title: '225K+', subtitle: 'Passages', delay: '1.2s' },
  { className: 'bottom-[10%] -right-[5%]', icon: Bot, iconBg: 'bg-amber-50 text-amber-600 dark:bg-[#F59E0B]/[.14] dark:text-[#FBBF24]', title: 'Helix', subtitle: 'Textbook-grounded tutor', delay: '0.6s' },
];

function GlassCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={style}
      className={`rounded-[22px] bg-white border border-slate-200 shadow-glass dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.22] dark:shadow-none ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="p0" className="relative z-[1] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-2 left-0 right-0 text-center font-display font-bold tracking-[-0.04em] leading-none text-slate-900 dark:text-white opacity-[0.05] pointer-events-none select-none"
        style={{ fontSize: 'clamp(80px,13vw,190px)' }}
      >
        GENEXCEL
      </div>

      <div
        className="relative max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] items-center gap-14"
        style={{ padding: 'clamp(112px,16vh,168px) 24px 56px' }}
      >
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 py-[9px] px-4 mb-6 rounded-full border border-slate-200 bg-white shadow-glass text-xs font-semibold tracking-[0.02em] text-slate-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none dark:text-[#C7D2E5]">
            <Droplets className="h-3.5 w-3.5 text-cyan-600 dark:text-[#22D3EE]" />
            Purpose of GenExcel
          </span>

          <h1
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.04] mb-[22px] text-balance"
            style={{ fontSize: 'clamp(38px,4.9vw,68px)' }}
          >
            One genetic report,
            <br />
            read by a tutor,{' '}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA]">
              a diet plan and a coach
            </span>
          </h1>

          <p className="text-[17px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5] max-w-[480px] mb-[34px]">
            1,020+ genetic traits, an AI tutor grounded in your child&rsquo;s own textbooks, and daily nutrition and fitness guidance &mdash; all from one saliva sample.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-10">
            <Link
              href="#platform"
              className="inline-flex items-center gap-2.5 h-14 px-7 rounded-full text-[15.5px] font-semibold whitespace-nowrap text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md hover:opacity-90 dark:text-[#F2FEFF] dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100 transition-colors"
            >
              Meet Helix, the AI tutor
              <ArrowRight className="h-[17px] w-[17px]" />
            </Link>
            <Link
              href="/science"
              className="inline-flex items-center h-14 px-7 rounded-full text-[15.5px] font-semibold whitespace-nowrap text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 dark:text-[#E9F4FF] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:hover:border-white/[.38] dark:hover:from-white/20 dark:hover:to-[#22D3EE]/[.14] transition-colors"
            >
              Explore the traits
            </Link>
          </div>

          <GlassCard className="inline-flex flex-wrap items-center gap-7 py-[22px] px-[26px]">
            <div>
              <div className="font-display font-light text-3xl tracking-[-0.03em] leading-none text-slate-900 dark:text-white">
                <AnimatedCounter value={1020} suffix="+" duration={1.7} margin="0px" />
              </div>
              <div className="mt-2 text-[12.5px] text-slate-500 dark:text-[#8B9AB5]">Genetic traits</div>
            </div>
            <div className="w-px h-[38px] bg-slate-200 dark:bg-white/[.18]" />
            <div>
              <div className="font-display font-light text-3xl tracking-[-0.03em] leading-none text-slate-900 dark:text-white">
                <AnimatedCounter value={26} duration={1.7} margin="0px" />
              </div>
              <div className="mt-2 text-[12.5px] text-slate-500 dark:text-[#8B9AB5]">Trait profiles</div>
            </div>
            <div className="w-px h-[38px] bg-slate-200 dark:bg-white/[.18]" />
            <div>
              <div className="font-display font-light text-3xl tracking-[-0.03em] leading-none text-slate-900 dark:text-white">2019</div>
              <div className="mt-2 text-[12.5px] text-slate-500 dark:text-[#8B9AB5]">Building since</div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto"
          style={{ height: 'min(66vh, 600px)', minHeight: 440, width: '100%' }}
        >
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[28px] animate-spin-slow"
            style={{
              width: 'min(112%,600px)',
              aspectRatio: '1',
              background:
                'conic-gradient(from 0deg, rgba(34,211,238,.35), rgba(37,99,235,.12), rgba(165,243,252,.4), rgba(34,211,238,.35))',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 dark:border-white/20 animate-gx-ripple"
            style={{ width: 'min(104%,560px)', aspectRatio: '1' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border border-slate-200/70 dark:border-white/25 shadow-glass-lg"
            style={{ width: 'min(100%,520px)', aspectRatio: '1' }}
          >
            <AbstractArt variant="portrait" />
          </div>

          {FLOAT_CHIPS.map((chip, i) => (
            <GlassCard
              key={i}
              style={{ animationDelay: chip.delay }}
              className={`absolute flex items-center gap-3 py-3 pl-3 pr-[18px] animate-float ${chip.className}`}
            >
              {chip.icon ? (
                <>
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl ${chip.iconBg}`}>
                    <chip.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-slate-900 dark:text-white leading-[1.1]">{chip.title}</span>
                    <span className="block mt-[3px] text-[11.5px] text-slate-500 dark:text-[#8B9AB5]">{chip.subtitle}</span>
                  </span>
                </>
              ) : (
                <span className="flex flex-col items-center gap-1.5 px-1">
                  <span className="font-display font-light text-[26px] tracking-[-0.03em] leading-none text-slate-900 dark:text-white">{chip.title}</span>
                  <span className="text-[10.5px] tracking-[0.14em] uppercase text-slate-400 dark:text-[#5C6E8C]">{chip.subtitle}</span>
                </span>
              )}
            </GlassCard>
          ))}

          <div className="absolute bottom-[2%] left-[4%] inline-flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-white border border-slate-200 shadow-glass text-[12.5px] text-slate-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none dark:text-[#C7D2E5] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-[#22D3EE]" />
            DPDP compliant &middot; Accredited labs
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {INTRO_CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-[28px] border border-slate-200 dark:border-white/15 overflow-hidden min-h-[250px] flex flex-col justify-between p-5 shadow-glass transition-transform duration-500 hover:-translate-y-2"
            >
              <AbstractArt variant={card.variant} />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(4,22,40,.8) 0%, rgba(4,22,40,.42) 34%, transparent 62%)',
                }}
              />
              <div className="relative flex justify-end">
                <span className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white">
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </span>
              </div>
              <div className="relative">
                <span className="block text-[10.5px] tracking-[0.16em] uppercase text-amber-400 mb-1.5">{card.tag}</span>
                <span className="block font-display text-[19px] font-medium text-white">{card.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
