'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  Dna,
  Brain,
  Microscope,
  FlaskConical,
  BookOpen,
  Award,
  Users,
  Shield,
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';

const categories = [
  {
    icon: HeartPulse,
    title: 'Metabolism & Nutrition',
    traits: '85+ traits',
    description: 'Caffeine metabolism, lactose intolerance, vitamin needs, nutrient absorption rates.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'Cognitive & Learning',
    traits: '45+ traits',
    description: 'Memory capacity, attention span, learning style, creativity potential.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Dna,
    title: 'Physical Traits',
    traits: '60+ traits',
    description: 'Muscle composition, endurance capacity, injury susceptibility, sleep patterns.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FlaskConical,
    title: 'Health Predispositions',
    traits: '120+ traits',
    description: 'Carrier status, sensitivity markers, wellness indicators (parent-only access).',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Behavioral Traits',
    traits: '50+ traits',
    description: 'Stress response, social tendencies, motivation patterns, emotional resilience.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Immunity & Wellness',
    traits: '90+ traits',
    description: 'Immune response, allergy predispositions, inflammation markers.',
    color: 'from-teal-500 to-cyan-500',
  },
];

const methodology = [
  {
    step: '01',
    title: 'Sample Collection',
    description: 'Non-invasive cheek swab collection with our FDA-approved home kit. Simple, painless, and safe for children of all ages.',
  },
  {
    step: '02',
    title: 'DNA Extraction',
    description: 'State-of-the-art laboratory processing in our NABL-certified facility with strict quality controls.',
  },
  {
    step: '03',
    title: 'Genotyping Analysis',
    description: 'Advanced microarray technology analyzes 450+ genetic variants with 99.9% accuracy.',
  },
  {
    step: '04',
    title: 'AI Interpretation',
    description: 'Machine learning algorithms interpret genetic data against our curated database of peer-reviewed research.',
  },
  {
    step: '05',
    title: 'Report Generation',
    description: 'Personalized reports with actionable insights, reviewed by our medical team before delivery.',
  },
];

const advisors = [
  {
    name: 'Dr. Anil Kapoor',
    role: 'Chief Scientific Advisor',
    credentials: 'MD, PhD - Pediatric Genetics',
    affiliation: 'Former Director, AIIMS Genomics',
  },
  {
    name: 'Dr. Sunita Rao',
    role: 'Head of Research',
    credentials: 'PhD - Molecular Biology',
    affiliation: 'Ex-NCBS, Cambridge University',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Bioinformatics Lead',
    credentials: 'PhD - Computational Biology',
    affiliation: 'Ex-Illumina, Stanford',
  },
  {
    name: 'Dr. Priya Mehta',
    role: 'Clinical Advisor',
    credentials: 'MD - Pediatrics, Genetics',
    affiliation: 'Apollo Hospitals',
  },
];

const stats = [
  { value: 450, suffix: '+', label: 'Genetic Variants' },
  { value: 34, suffix: '', label: 'Health Categories' },
  { value: 99.9, suffix: '%', label: 'Accuracy Rate' },
  { value: 2000, suffix: '+', label: 'Research Papers' },
];

const publications = [
  'Nature Genetics - Pediatric genomics validation study',
  'Journal of Pediatrics - AI-assisted genetic interpretation',
  'Genome Medicine - Nutritional genetics in children',
  'BMC Genomics - Cognitive trait associations',
];

export default function SciencePage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        {/* Decorative DNA pattern */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gradient" className="mb-6">
                <Microscope className="h-3 w-3 mr-1" />
                The Science
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <TextReveal>Cutting-Edge Genomics</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.3}>Meets AI Innovation</TextReveal>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Our platform is built on a foundation of rigorous scientific research, validated methodologies, and continuous collaboration with leading geneticists and pediatricians worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Genetic Categories */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              34 Health Categories, <span className="gradient-text">450+ Traits</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive genetic analysis covering every aspect of your child&apos;s health and development.
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
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} mb-6 shadow-lg`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
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
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              From Sample to <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A rigorous, scientifically-validated process ensures accuracy and reliability.
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  {index !== methodology.length - 1 && (
                    <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              <GraduationCap className="h-3 w-3 mr-1" />
              Advisory Board
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              World-Class <span className="gradient-text">Scientific Team</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our research is guided by leading experts in genetics, pediatrics, and AI.
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
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-800 transition-all duration-300 text-center h-full">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{advisor.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">{advisor.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{advisor.credentials}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs">{advisor.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="gradient" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                Research
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Evidence-Based <span className="gradient-text">Science</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Every insight we provide is backed by peer-reviewed research. Our team continuously reviews the latest scientific literature to ensure our recommendations reflect current best practices.
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                      <FileText className="h-3 w-3 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{pub}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="mt-8" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View All Publications
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
                  <Award className="h-16 w-16 mx-auto text-primary-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Our Commitment</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We never overstate what genetics can tell us. Our reports clearly distinguish between strong and emerging evidence.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'All insights based on peer-reviewed research',
                    'Clear confidence levels for each finding',
                    'Regular updates as new research emerges',
                    'Medical team review before delivery',
                    'Full transparency about limitations',
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-600" />
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
      <section className="section-padding bg-gradient-to-br from-violet-600 via-violet-700 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experience the Future of Pediatric Health
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of families benefiting from genetics-informed health insights backed by rigorous science.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Get Started
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Talk to a Scientist
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
