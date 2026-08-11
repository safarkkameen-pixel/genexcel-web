'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  GraduationCap,
  Stethoscope,
  BarChart3,
  Shield,
  Trophy,
  Check,
  ArrowRight,
  BookOpen,
  Lightbulb,
  LineChart,
} from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Health Camps & Sample Collection',
    description: 'We run on-campus health camps to collect saliva samples, then read each returned lab report automatically — self-verified before a single data point reaches a student profile.',
  },
  {
    icon: BarChart3,
    title: 'Teacher Learning Profiles',
    description: 'Every student gets a curated learning profile covering 9 indicators: cognitive ability, memory, attention, motivation, reading, maths, verbal ability, creativity, and stress resilience. Teachers never see raw genetic data.',
  },
  {
    icon: Lightbulb,
    title: 'AI Lesson Generator',
    description: 'Generate lesson plans across 15 teaching methods, from the 5E model to project-based learning and Socratic questioning, tailored to how each class actually learns.',
  },
  {
    icon: BookOpen,
    title: 'Helix at Home',
    description: 'Every student gets Helix, an AI tutor that answers homework questions only from their own textbooks, over 225,000 searchable passages across five languages, available by text or voice.',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Track each student\'s learning profile over time, alongside quiz results and teach-back sessions from Helix, to see growth beyond test scores.',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Role-based access keeps genetic data clinical-eyes-only. Teachers see the curated learning profile; full genetic data stays with certified counsellors, under India\'s DPDP Act.',
  },
];

const benefits = [
  {
    title: 'A Learning Profile for Every Student',
    description: 'Teachers get a curated 9-indicator learning profile, memory, attention, motivation, and more, so lessons can be personalized without ever touching raw genetic data.',
  },
  {
    title: 'Homework Help That Doesn\'t Stop at the School Gate',
    description: 'Helix, the AI tutor, is available to every student at home, grounded in their own textbooks, so homework help matches what was actually taught in class.',
  },
  {
    title: 'Parent Engagement',
    description: 'Keep parents informed and involved with shared progress reports and insights drawn from each student\'s learning profile.',
  },
  {
    title: 'Teacher Empowerment',
    description: 'Give educators 15 teaching methods and an AI lesson generator so every class plan fits how their students actually learn.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Partner Schools', color: 'text-slate-900 dark:text-white' },
  { value: 15000, suffix: '+', label: 'Students', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 9, suffix: '', label: 'Learning Indicators per Student', color: 'text-slate-900 dark:text-white' },
  { value: 15, suffix: '', label: 'Teaching Methods Supported', color: 'text-amber-600 dark:text-[#FBBF24]' },
];

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small schools getting started',
    features: [
      'Up to 100 students',
      'On-campus health camp scheduling',
      'Standard learning profile reports',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Most popular for K-12 schools',
    features: [
      'Up to 500 students',
      'Full 9-indicator learning profiles',
      'AI lesson generator (15 teaching methods)',
      'Helix tutor access for every student',
      'Parent portal access',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For school districts and chains',
    features: [
      'Unlimited students',
      'Multi-school management',
      'Custom integrations',
      'Dedicated account manager',
      'On-site training',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export default function SchoolsPage() {
  return (
    <main>
      <PageHero
        icon={GraduationCap}
        eyebrow="For Schools"
        title={<>From Health Camp <GradientText>To Learning Profile</GradientText></>}
        subtitle="School Genomics brings health camps, per-student learning profiles, and an AI lesson generator to your campus, plus Helix, an AI tutor grounded in each student's own textbooks, available to every student at home."
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

      {/* Features Grid */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Platform Features</Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Everything Schools <GradientText>Need</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive platform designed specifically for educational institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <feature.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display font-light text-xl text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="gradient" className="mb-4">
              <Trophy className="h-3 w-3 mr-1" />
              Why Choose GenExcel
            </Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Benefits for <GradientText>Your School</GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <Check className="h-6 w-6 text-cyan-600 dark:text-[#22D3EE]" />
                    </div>
                    <div>
                      <h3 className="font-display font-light text-lg text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Pricing</Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Flexible <GradientText>School Packages</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your school&apos;s size and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-full rounded-3xl p-8 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-2xl scale-105'
                    : 'bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700'
                }`}>
                  {pkg.highlighted && (
                    <Badge className="mb-4 bg-white/20 text-white border-0">Most Popular</Badge>
                  )}
                  <h3 className={`font-display font-light text-2xl mb-2 ${pkg.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 ${pkg.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-slate-300'}`}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className={`h-5 w-5 ${pkg.highlighted ? 'text-white' : 'text-cyan-600 dark:text-[#22D3EE]'}`} />
                        <span className={pkg.highlighted ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.highlighted ? 'secondary' : 'primary'}
                    className="w-full"
                  >
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            ))}
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
                Ready to Transform Your School?
              </h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Join 50+ schools already using GenExcel to improve student health and learning outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Request a Demo
                </Button>
                <Button variant="secondary" size="xl">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
