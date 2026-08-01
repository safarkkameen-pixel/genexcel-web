'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  GraduationCap,
  Brain,
  BarChart3,
  Users,
  Shield,
  Trophy,
  Check,
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  LineChart,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Cognitive Assessment',
    description: 'Comprehensive brain games that assess memory, attention, processing speed, and problem-solving abilities.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Class Analytics',
    description: 'Aggregate insights and reports to identify trends, strengths, and areas for improvement across your student body.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Learning Style Insights',
    description: 'Understand how each student learns best and provide teachers with actionable recommendations.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Monitor student development over time with detailed progress reports and milestone tracking.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Enterprise-grade security with role-based access. Full compliance with educational data protection regulations.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Gamified Learning',
    description: 'Motivate students with rewards, achievements, and friendly competition that makes health awareness fun.',
    color: 'from-cyan-500 to-teal-500',
  },
];

const benefits = [
  {
    title: 'Improved Student Outcomes',
    description: 'Schools using GenExcel report 23% improvement in student wellness scores.',
  },
  {
    title: 'Early Identification',
    description: 'Identify potential learning and developmental challenges before they impact academics.',
  },
  {
    title: 'Parent Engagement',
    description: 'Keep parents informed and involved with shared progress reports and insights.',
  },
  {
    title: 'Teacher Empowerment',
    description: 'Give educators the data they need to personalize their approach for each student.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Partner Schools' },
  { value: 15000, suffix: '+', label: 'Students' },
  { value: 23, suffix: '%', label: 'Wellness Improvement' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction' },
];

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small schools getting started',
    features: [
      'Up to 100 students',
      'Basic cognitive assessments',
      'Standard reports',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Most popular for K-12 schools',
    features: [
      'Up to 500 students',
      'Full cognitive assessment suite',
      'Advanced analytics dashboard',
      'Parent portal access',
      'Priority support',
      'Staff training included',
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
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="gradient" className="mb-6">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  For Schools
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                <TextReveal>Transform Student</TextReveal>
                <br />
                <span className="gradient-text">
                  <TextReveal delay={0.3}>Health & Learning</TextReveal>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              >
                Empower your school with cognitive assessments, health tracking, and actionable insights that help every student reach their full potential.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Request Demo
                </Button>
                <Button variant="outline" size="xl">
                  Download Brochure
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/50 dark:to-violet-900/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">School Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-300">Comprehensive insights for every student</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium dark:text-white">50+ Schools</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium dark:text-white">Data-Driven</span>
                </div>
              </motion.div>
            </motion.div>
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

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Platform Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything Schools <span className="gradient-text">Need</span>
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
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Benefits for <span className="gradient-text">Your School</span>
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
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
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Flexible <span className="gradient-text">School Packages</span>
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
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 ${pkg.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-slate-300'}`}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className={`h-5 w-5 ${pkg.highlighted ? 'text-white' : 'text-green-500'}`} />
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
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join 50+ schools already using GenExcel to improve student health and learning outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Request a Demo
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Talk to Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
