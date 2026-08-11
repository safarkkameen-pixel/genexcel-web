'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  Dna,
  Brain,
  Microscope,
  FlaskConical,
  BookOpen,
  Award,
  Shield,
  Check,
  ArrowRight,
  FileText,
  HeartPulse,
  Dumbbell,
  ClipboardCheck,
  Sparkles,
} from 'lucide-react';

const categories = [
  {
    icon: HeartPulse,
    title: 'Diet & Nutrition',
    traits: 'Nutrient Tendencies',
    description: 'Vitamin and mineral tendencies (such as Vitamin D and B12), how the body handles carbs and fats, taste sensitivity, and snacking tendency.',
  },
  {
    icon: Brain,
    title: 'Academic & Cognitive',
    traits: 'Cognitive Skills',
    description: 'Cognitive ability, memory, attention and focus, motivation, reading literacy, mathematical ability, verbal ability, creativity, and stress resilience.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Sport',
    traits: 'Performance Traits',
    description: 'Power-versus-endurance orientation, muscle and recovery traits, injury-risk tendency, and sport suitability.',
  },
  {
    icon: Sparkles,
    title: 'Personality & Talents',
    traits: '15 Traits + 7 Talents',
    description: 'Fifteen personality dimensions, aspects of intelligence and emotional intelligence, and seven distinct talent areas.',
  },
  {
    icon: Shield,
    title: 'Health-related',
    traits: 'Clinically Reviewed',
    description: 'Elevated tendencies toward specific conditions, allergies, sleep traits, and neurological traits. Shown to parents and counsellors with careful clinical framing — risk-related traits are never shown to a child directly.',
  },
];

const methodology = [
  {
    step: '01',
    title: 'Lab Report Received',
    description: 'Your certified testing lab completes the genetic analysis and issues a PDF report. GenExcel picks up from there — turning that report into something a family can actually use.',
  },
  {
    step: '02',
    title: 'Exact Reading (fast path)',
    description: 'For known lab report formats, our exact reader parses every trait row and gene reading, measures coloured bars, sliders and gauges to recover LOW / MEDIUM / HIGH bands, and detects ticked boxes and colour badges — in about 10 seconds, with no AI interpretation and no per-report cost.',
  },
  {
    step: '03',
    title: 'Flexible Reading (AI-vision fallback)',
    description: "For unfamiliar report layouts, a second AI-vision-based reader takes over — about 8-9 minutes per report, at roughly 93% accuracy on row and value recall and roughly 96% agreement on gene readings. Its known weak spot is reading colour bands on chart pages, which is exactly why the exact reader is used wherever it applies.",
  },
  {
    step: '04',
    title: 'Four-Way Self-Check',
    description: "Every reading is checked against the source report itself: nothing was dropped, nothing was invented, gene readings agree with the report's own glossary, and row counts match what's actually drawn on the page.",
  },
  {
    step: '05',
    title: 'Human Review & Delivery',
    description: 'Anything the flexible reader is uncertain about is routed to a human reviewer before it ever reaches a family. Only then is the personalised report generated.',
  },
];

const advisors = [
  {
    name: 'Nothing Dropped',
    role: 'Completeness Check',
    credentials: 'Confirms every trait row in the lab report was captured',
    affiliation: 'Run on every report, every time',
  },
  {
    name: 'Nothing Invented',
    role: 'Fabrication Check',
    credentials: "Confirms no value was added beyond what's in the report",
    affiliation: 'Run on every report, every time',
  },
  {
    name: 'Glossary Match',
    role: 'Consistency Check',
    credentials: "Confirms gene readings agree with the report's own glossary",
    affiliation: 'Run on every report, every time',
  },
  {
    name: 'Row-Count Match',
    role: 'Rendering Check',
    credentials: 'Confirms row counts match what is actually drawn on the page',
    affiliation: 'Run on every report, every time',
  },
];

const stats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued', color: 'text-slate-900 dark:text-white' },
  { value: 26, suffix: '', label: 'Trait Profiles', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 5, suffix: '', label: 'Trait Categories', color: 'text-slate-900 dark:text-white' },
  { value: 10, suffix: ' sec', label: 'Exact-Reader Report Parse', color: 'text-amber-600 dark:text-[#FBBF24]' },
];

const publications = [
  'Exact reader: known lab formats parsed in ~10 seconds, no AI interpretation, no per-report cost',
  'Flexible reader: AI-vision fallback for unfamiliar layouts in 8-9 minutes',
  "Four automatic self-checks run before a report is ever shown to a family",
  "Anything the flexible reader is unsure about goes to a human reviewer first",
];

export default function SciencePage() {
  return (
    <main>
      <PageHero
        icon={Microscope}
        eyebrow="The Science"
        title={<>Cutting-Edge Genomics <GradientText>Meets AI Innovation</GradientText></>}
        subtitle="Our platform is built on a real genetic trait catalogue, a report-reading pipeline that checks its own work, and honest reporting about what genetics can and can't tell us."
      />

      {/* Stats Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24 grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {stats.map((stat) => (
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

      {/* Genetic Categories */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              <Dna className="h-3 w-3 mr-1" />
              Genetic Analysis
            </Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              5 Trait Categories, <GradientText>1,020+ Genetic Traits</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our master catalogue organises traits into 26 profiles across five categories. Each family&apos;s report typically covers 113-117 of these traits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <category.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-display font-light text-xl text-slate-900 dark:text-white">{category.title}</h3>
                    <Badge variant="secondary" className="text-xs">{category.traits}</Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{category.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="gradient" className="mb-4">
              <FlaskConical className="h-3 w-3 mr-1" />
              Our Process
            </Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              From Lab Report to <GradientText>Insights</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              GenExcel doesn&apos;t run the lab test — we read the report it produces, automatically and self-verified, before a human ever reviews it.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-display font-light text-xl">
                    {step.step}
                  </div>
                  {index !== methodology.length - 1 && (
                    <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-light text-xl text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Validation */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              <ClipboardCheck className="h-3 w-3 mr-1" />
              Report Validation
            </Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Every Report Passes <GradientText>Four Checks</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Before a report reaches a family, it&apos;s checked against the lab document itself — automatically, every single time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="p-6 text-center h-full" glow>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-2xl font-display font-light group-hover:scale-110 transition-transform duration-300">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-display font-light text-lg text-slate-900 dark:text-white mb-1">{advisor.name}</h3>
                  <p className="text-cyan-600 dark:text-[#22D3EE] text-sm font-medium mb-2">{advisor.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{advisor.credentials}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs">{advisor.affiliation}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="gradient" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                How We Verify
              </Badge>
              <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
                Confirmed Against <GradientText>the Real Product</GradientText>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Our report-reading pipeline was checked against the working product itself, not an early plan or a demo. Here&apos;s what it actually does today.
              </p>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={pub}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <FileText className="h-3 w-3 text-cyan-600 dark:text-[#22D3EE]" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{pub}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="mt-8" rightIcon={<ArrowRight className="h-4 w-4" />}>
                See Our Full Process
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8" glow>
                <div className="text-center mb-8">
                  <Award className="h-16 w-16 mx-auto text-cyan-600 dark:text-[#22D3EE] mb-4" />
                  <h3 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-2">Our Commitment</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We never overstate what genetics can tell us. Our reports clearly distinguish between strong and emerging evidence.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Every reading verified against the original lab report',
                    'Clear LOW / MEDIUM / HIGH bands for every trait',
                    'Risk-related traits shown only to parents and counsellors, never to a child',
                    'Uncertain cases reviewed by a human before delivery',
                    "Full transparency about what genetics can and can't tell us",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                        <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE]" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="font-display font-light text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
                See the Science Behind Your Child&apos;s Report
              </h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                From lab report to a tutor that teaches differently &mdash; backed by a reading pipeline that checks its own work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Get Started
                </Button>
                <Button variant="secondary" size="xl">
                  Talk to a Scientist
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
