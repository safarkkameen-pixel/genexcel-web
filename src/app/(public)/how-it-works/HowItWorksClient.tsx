'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Route,
  Package,
  ScanLine,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  Baby,
  Heart,
  GraduationCap,
  Stethoscope,
  Check,
} from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Set up the household',
    description: 'A parent registers, adds each child with a name, date of birth and class, and accepts the required consents on their behalf. Older students can register themselves directly.',
  },
  {
    icon: ScanLine,
    title: 'Collect the sample',
    description: 'A saliva sample is collected — at home, or at a school health camp, where each collection kit carries a code and nothing else about the child’s identity.',
  },
  {
    icon: Sparkles,
    title: 'GenExcel reads the report',
    description: 'The returned lab PDF is read automatically — every trait, gene reading and band — in about ten seconds, then checked four ways before anything uncertain goes to a human reviewer.',
  },
  {
    icon: ShieldCheck,
    title: 'Review and assign, under consent',
    description: 'A staff member reviews anything the reader flagged, then assigns the report to the child’s account — gated on confirmed consent, a PRO plan, and one report per person. It can be reversed at any time.',
  },
  {
    icon: Users,
    title: 'Everyone sees the right view',
    description: 'The child gets a friendly, curated profile. The parent sees what to act on. The teacher sees a learning profile — never raw genetics. The counsellor sees the full clinical picture.',
  },
  {
    icon: Route,
    title: 'Helix starts teaching differently',
    description: 'From here, the AI tutor adapts how it teaches, nutrition and fitness plans pick up genetic adjustments, and quizzes, meals and workouts keep feeding a sharper picture back in.',
  },
];

const views = [
  {
    icon: Baby,
    role: 'The child',
    sees: 'A friendly profile across diet, learning, fitness and personality, with genes and plain-language advice. Risk-related traits and any psychometric score are deliberately withheld — and the tutor never says genetics changed how it teaches.',
  },
  {
    icon: Heart,
    role: 'The parent',
    sees: 'The household picture: each child’s health, progress and consents, plus their own report if they have one. Consent can be granted or withdrawn for any category, at any time.',
  },
  {
    icon: GraduationCap,
    role: 'The teacher',
    sees: 'A curated learning profile — cognitive ability, memory, attention, motivation, reading, maths, verbal ability, creativity and stress resilience on a simple one-to-ten scale. Never raw genetic readings.',
  },
  {
    icon: Stethoscope,
    role: 'The genetic counsellor',
    sees: 'The complete clinical picture for everyone in their caseload, correctly framed for risk, with consultations and messaging — and access that ends the instant a user leaves their caseload.',
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        icon={Route}
        eyebrow="How It Works"
        title={<>From One Sample to a <GradientText>Tutor That Teaches Differently</GradientText></>}
        subtitle="A genetic report shouldn't just be a PDF a family reads once. Here's exactly how one saliva sample ends up shaping how Helix teaches, what the diet plan targets, and what every adult around your child can see."
      />

      {/* Steps */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09]">
                      <step.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                    </div>
                    <span className="text-sm font-display font-medium text-amber-600 dark:text-[#FBBF24]">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What each person sees */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              <Users className="h-3 w-3 mr-1" />
              One Report, Four Views
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-4">
              The Same Report Looks <GradientText>Different to Everyone</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              What&apos;s shown is deliberately curated by role &mdash; never a one-size-fits-all export of raw genetic data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {views.map((view, index) => (
              <motion.div
                key={view.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <view.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-display font-medium text-slate-900 dark:text-white mb-3">{view.role}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{view.sees}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two modes */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="gradient" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              One Platform, Two Modes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-4">
              Chosen Once, at <GradientText>Signup</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Both modes share the same account, the same genetic foundation and the same Helix companion &mdash; they differ in what the home screen emphasises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-8 h-full" glow>
              <Badge variant="default" className="mb-4">School Genomics</Badge>
              <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-3">For school-age children</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Genetic traits and a learning-style assessment shape Helix, study plans, lesson content and what a teacher can see. The home screen leads with today&apos;s plan, an exam countdown and the tutor.
              </p>
              <ul className="space-y-2">
                {['Helix, textbook-grounded homework help', 'Study plans, roadmaps and a lesson generator', 'A curated learning profile for teachers'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE] flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-8 h-full" glow>
              <Badge variant="default" className="mb-4">Health & Wellness</Badge>
              <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-3">For adults in the household</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The same genetic foundation feeds activity rings, step tracking, diet planning and gym programming instead. The home screen leads with rings, today&apos;s plan and a wellness summary.
              </p>
              <ul className="space-y-2">
                {['Activity rings and wearable integration', 'Diet plans with genetic adjustments', 'Gym plans and live workout logging'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE] flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
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
              <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 dark:text-white mb-6">See the Whole Platform</h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Genetics, Helix, learning, nutrition and fitness &mdash; every system this report feeds, in one place.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/platform">
                  <Button variant="primary" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                    Explore the Platform
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="xl">
                    Talk to Our Team
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
