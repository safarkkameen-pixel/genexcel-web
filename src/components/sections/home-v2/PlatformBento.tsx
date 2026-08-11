'use client';

import { motion } from 'framer-motion';
import { Dna, Bot, GraduationCap, Camera, HeartPulse, Users, type LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const FEATURES: { icon: LucideIcon; tag: string; title: string; description: string; span?: string }[] = [
  { icon: Dna, tag: '26 PROFILES', title: 'Genetic Reports', description: 'Diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds.' },
  { icon: Bot, tag: '225K+ PASSAGES', title: 'Helix, the AI Tutor', description: 'Answers homework from your child’s own textbook, and never mentions genetics while it teaches.' },
  { icon: GraduationCap, tag: 'SCHOOL GENOMICS', title: 'Learning & Study', description: 'Study plans, roadmaps and a lesson generator that adapt to how each child actually learns.', span: 'lg:[grid-column:span_2] lg:[grid-row:span_2]' },
  { icon: Camera, tag: 'INSTANT', title: 'AI NutriScan', description: 'Photograph any meal for instant nutrition analysis, with targets tuned to genetic adjustments.', span: 'lg:[grid-column:1/span_2] lg:[grid-row:2/span_2]' },
  { icon: HeartPulse, tag: 'LIVE LOGGING', title: 'Fitness & Habits', description: 'Workout plans, live gym logging and step tracking synced with Apple Health or Health Connect.' },
  { icon: Users, tag: 'UP TO 5 KIDS', title: 'Family Dashboard', description: 'One household account, consent you control, and a genetic counsellor in the loop when you want one.', span: 'lg:[grid-column:4] lg:[grid-row:3]' },
];

function BentoCard({ feature, delay }: { feature: (typeof FEATURES)[number]; delay: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className={feature.span}
    >
      <GlassCard className="flex flex-col justify-between min-h-[230px] p-6 h-full">
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09]">
            <Icon className="h-[21px] w-[21px] text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
          </span>
          <span className="font-display text-[11px] font-medium tracking-[0.14em] text-amber-600 dark:text-[#F59E0B]">{feature.tag}</span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-display text-[15.5px] sm:text-[17px] lg:text-[19px] font-medium tracking-[-0.01em] text-slate-900 dark:text-white mb-2">{feature.title}</h3>
          <p className="text-[13.5px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5]">{feature.description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function PlatformBento() {
  return (
    <section id="platform" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-11"
        >
          <div className="max-w-[640px]">
            <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE] mb-5">The platform</div>
            <h2 className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.14]" style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>
              Six systems, written from the genome out.
            </h2>
          </div>
          <p className="text-[14.5px] leading-[1.7] text-slate-600 dark:text-[#8B9AB5] max-w-[340px]">
            One saliva sample feeds six systems &mdash; from a tutor that reads your child&rsquo;s textbooks to a diet plan adjusted to their genes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {FEATURES.map((feature, i) => (
            <BentoCard key={feature.title} feature={feature} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
