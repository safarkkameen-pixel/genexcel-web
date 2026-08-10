'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  Dna,
  Bot,
  GraduationCap,
  Camera,
  HeartPulse,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  BookOpen,
  Gamepad2,
  Clock,
} from 'lucide-react';

const platformStats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued', color: 'text-slate-900 dark:text-white' },
  { value: 225000, suffix: '+', label: 'Textbook Passages for Helix', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 26, suffix: '', label: 'Genetic Trait Profiles', color: 'text-slate-900 dark:text-white' },
  { value: 8, suffix: '', label: 'Playable Cognitive Games', color: 'text-amber-600 dark:text-[#FBBF24]' },
];

const systems = [
  {
    id: 'genetics',
    icon: Dna,
    title: 'Genetic Reports & My Traits',
    description: 'A saliva sample becomes a report across diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds and checked four ways before anyone sees it.',
    points: [
      '1,020+ traits in the master catalogue, 26 profiles across 5 categories',
      'Each report covers roughly 113 to 117 traits for that person',
      'Every trait shows a result, the genes behind it and what to do about it',
      'Risk-related traits are shown to parents and counsellors, never to the child',
    ],
  },
  {
    id: 'helix',
    icon: Bot,
    title: 'Helix, the AI Learning Companion',
    description: 'A tutor to a child, a professional assistant to a parent. Helix answers homework strictly from your child’s own prescribed textbook — not general knowledge — and is never allowed to mention that genetics shaped how it teaches.',
    points: [
      '225,000+ searchable textbook passages, in English and Indian languages',
      'Text chat and push-to-talk voice, with replies spoken as they’re produced',
      'Practice quizzes with an honest score, and teach-back sessions',
      'Manages a student’s day plan by conversation — add, reschedule, mark done',
    ],
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning & School Genomics',
    description: 'A learning-style assessment plus the genetic profile shape study plans, lesson content and what a teacher can see — expressed as a simple one-to-ten profile, never raw genetic data.',
    points: [
      'Study plans, goal-driven roadmaps and a per-chapter lesson learner',
      'A lesson generator supporting 15 teaching methods for classroom use',
      'Report-card scanning with automatic mark reading and mastery mapping',
      'A curated 9-indicator learning profile for teachers, never genetics',
    ],
  },
  {
    id: 'nutrition',
    icon: Camera,
    title: 'Nutrition & AI NutriScan',
    description: 'A seven-day diet plan with calorie and macro targets that carry genetic adjustments — plus food recognition that turns a photo into a full nutritional breakdown.',
    points: [
      'NutriScan: photograph any meal for macros, allergens and a health score',
      'The nutrition blueprint shows exactly how genetics adjusted your targets',
      'Meal swaps, grocery lists, and water and weight tracking',
      'Meal-scan replaces planned nutrition with what was actually eaten',
    ],
  },
  {
    id: 'fitness',
    icon: HeartPulse,
    title: 'Fitness, Gym & Habits',
    description: 'Programmed training that reflects a genetic disposition for power versus endurance, recovery tendencies and injury-risk considerations — plus live logging in the gym.',
    points: [
      'Generated workout plans, or build one manually day by day',
      'Live gym sessions with set logging, rest timers and live heart rate',
      'Step tracking, Apple Health and Health Connect integration',
      'Habits, points and achievements that encourage — never shame',
    ],
  },
  {
    id: 'family',
    icon: Users,
    title: 'Family & Household',
    description: 'One household account for up to five children, PIN-protected profile switching, and consent that a parent grants and can withdraw at any time.',
    points: [
      'Each child gets their own real account — their own history, their own report',
      'Layered consent: legal documents, genetic testing, per-category revocation',
      'A parent sees what to act on; a genetic counsellor sees the full picture',
      'Telehealth booking, consultation notes and prescriptions',
    ],
  },
];

const games = [
  'Focus Fortress', 'Pattern Quest', 'Memory Maze', 'Word Wizard',
  'Math Master', 'Speed Sprint', 'Emotion Explorer', 'Spatial Safari',
];

const comingSoon = [
  'Continuous, natural back-and-forth voice with Helix (push-to-talk is live today)',
  'Daily proactive nudges from Helix when it notices a student needs a hand',
  'A live, growing content library (the reading experience is built; content is on its way)',
  'Polygenic risk scores and medication-response insight',
];

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        icon={Sparkles}
        eyebrow="Platform Overview"
        title={<>Six Systems, One <GradientText>Genetic Foundation</GradientText></>}
        subtitle="One genetic report doesn't just sit in a PDF. It reaches into how Helix teaches, what the diet plan targets, and how the fitness programme is shaped — here's every system it touches."
      />

      {/* Stats */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24 grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {platformStats.map((stat) => (
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
        </div>
      </section>

      {/* Systems */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24 space-y-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              id={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="scroll-mt-28"
            >
              <GlassCard className="p-8 md:p-10" glow>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09]">
                    <system.icon className="h-8 w-8 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h2 className="font-display font-light text-2xl md:text-3xl text-slate-900 dark:text-white mb-3">{system.title}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{system.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {system.points.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE] flex-none mt-0.5" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Games */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge variant="default" className="mb-4">
                <Gamepad2 className="h-3 w-3 mr-1" />
                Games & Motivation
              </Badge>
              <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
                Cognitive Games <GradientText>Dressed as Play</GradientText>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                Eight cognitive games are playable today, each mapped back onto a genetic trait so results feed the picture of how a child actually performs.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {games.map((game) => (
                  <div key={game} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE] flex-none" />
                    {game}
                  </div>
                ))}
              </div>
              <Badge variant="secondary" size="sm">Two more games are in development</Badge>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <GlassCard className="p-8" glow>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-cyan-600 dark:text-[#22D3EE]" />
                  <h3 className="font-display font-light text-xl text-slate-900 dark:text-white">Coming Soon</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We&apos;d rather tell you what&apos;s next than overstate what&apos;s live today. These are built or in progress, not yet part of the everyday product:
                </p>
                <div className="space-y-3">
                  {comingSoon.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Badge variant="warning" size="sm" className="mt-0.5 flex-none">Soon</Badge>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust teaser */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <GlassCard className="p-8 md:p-12" glow>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <Badge variant="gradient" className="mb-4">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Built Responsibly
                </Badge>
                <h3 className="font-display font-light text-2xl md:text-3xl text-slate-900 dark:text-white mb-3">
                  Genetic data that isn&apos;t linked to a name. AI that never leaves India.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
                  Every safety rule Helix follows, and every protection around your child&apos;s genetic data, is documented on our Trust &amp; Privacy page.
                </p>
              </div>
              <Link href="/trust" className="flex-none">
                <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  See Trust & Privacy
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[1] py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] py-16 px-8 sm:px-14 max-w-4xl mx-auto text-center bg-white border border-slate-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.14] dark:to-white/[.05] dark:backdrop-blur-3xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none"
          >
            <div
              aria-hidden="true"
              className="absolute -right-[10%] -top-[30%] w-[420px] h-[420px] rounded-full animate-gx-drift pointer-events-none"
              style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,211,238,.18), transparent 68%)' }}
            />
            <div className="relative">
              <h2 className="font-display font-light text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">Ready to See It on Your Child&apos;s Textbooks?</h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Start free with Helix and the lifestyle tools, or order the genetic kit to unlock the full report.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/pricing">
                  <Button variant="primary" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="secondary" size="xl">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
