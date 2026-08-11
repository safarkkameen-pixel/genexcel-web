'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const SCIENCE = [
  { num: '01', title: 'Order Your Kit', text: 'A collection kit ships to your door, or is collected at a school health camp. Simple, painless saliva collection.' },
  { num: '02', title: 'Lab Analysis', text: 'Your sample is analysed by our accredited partner laboratory and returned as a detailed genetic report.' },
  { num: '03', title: 'Automatic Reading', text: 'GenExcel reads the report in about ten seconds — every trait and gene reading — then checks itself four ways before anything uncertain reaches a human reviewer.' },
  { num: '04', title: 'Start Your Journey', text: 'Once assigned under recorded consent, the report reaches your child’s My Traits, your household view, and Helix — who starts teaching differently from that day.' },
];

export function ScienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="science" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <GlassCard ref={ref} className="rounded-[36px] py-14 px-7 sm:px-12" hover={false}>
          <h2
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.06] max-w-[760px] mb-6"
            style={{ fontSize: 'clamp(30px,4.4vw,56px)' }}
          >
            The science behind our service
          </h2>
          <p className="text-lg leading-[1.5] text-slate-900 dark:text-white max-w-[720px] mb-[52px]">
            From one saliva sample to a tutor that teaches differently{' '}
            <span className="text-slate-400 dark:text-[#4A5B78]">
              &mdash; accredited lab sequencing paired with a reading engine that checks its own work four ways.
            </span>
          </p>

          <div className="relative h-0.5 rounded-full bg-slate-200 dark:bg-white/[.14] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA]"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {SCIENCE.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <span className="block w-3 h-3 mb-[22px] rounded-full bg-cyan-600 dark:bg-[#22D3EE]" style={{ boxShadow: '0 0 0 5px rgba(34,211,238,.12)' }} />
                <div className="font-display text-xs tracking-[0.14em] text-amber-600 dark:text-[#F59E0B] mb-2">{step.num}</div>
                <div className="font-display text-[15.5px] font-medium text-slate-900 dark:text-white mb-2">{step.title}</div>
                <div className="text-[12.5px] leading-[1.6] text-slate-500 dark:text-[#8B9AB5]">{step.text}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
