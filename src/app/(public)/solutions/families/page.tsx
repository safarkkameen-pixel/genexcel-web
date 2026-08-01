'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  Heart,
  Brain,
  Utensils,
  Activity,
  Shield,
  Sparkles,
  Users,
  Check,
  ArrowRight,
  Dna,
  Gamepad2,
  Video,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: 'Genetic Insights',
    description: 'Understand your child\'s unique genetic makeup across 450+ health traits including metabolism, nutrition needs, and cognitive strengths.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Brain,
    title: 'Cognitive Development',
    description: '10 scientifically-designed brain games that adapt to your child\'s abilities and track cognitive milestones.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Utensils,
    title: 'AI Nutrition',
    description: 'NutriScan technology analyzes meals instantly, providing personalized nutrition guidance based on your child\'s genetic profile.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Activity,
    title: 'Health Tracking',
    description: 'Monitor 13 vital health metrics including sleep patterns, activity levels, and growth milestones all in one place.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Video,
    title: 'Telemedicine',
    description: 'Connect with pediatric specialists for genetics consultations and health guidance from the comfort of your home.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Experience',
    description: 'Kids earn Genie coins, unlock achievements, and enjoy a fun, engaging interface designed just for them.',
    color: 'from-amber-500 to-yellow-500',
  },
];

const benefits = [
  'Personalized health recommendations based on genetics',
  'Age-appropriate content for children 4-18 years',
  'Dual experience: safe view for kids, full insights for parents',
  'Track multiple children on one family account',
  'Regular progress reports and health insights',
  'Access to pediatric genetic counselors',
];

const stats = [
  { value: 450, suffix: '+', label: 'Genetic Traits' },
  { value: 34, suffix: '', label: 'Health Categories' },
  { value: 10, suffix: '', label: 'Brain Games' },
  { value: 13, suffix: '', label: 'Health Metrics' },
];

const testimonials = [
  {
    name: 'Meera Gupta',
    role: 'Mother of 2',
    quote: 'GenExcel helped us understand why our son was struggling with certain foods. The genetic insights were eye-opening!',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    role: 'Father',
    quote: 'The brain games are fantastic. My daughter looks forward to them every day, and I can see her cognitive skills improving.',
    rating: 5,
  },
  {
    name: 'Priyanka Singh',
    role: 'Mother of 3',
    quote: 'Finally, a health app that understands each child is unique. The personalized recommendations have been invaluable.',
    rating: 5,
  },
];

export default function FamiliesPage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="gradient" className="mb-6">
                  <Users className="h-3 w-3 mr-1" />
                  For Families
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                <TextReveal>Unlock Your Child&apos;s</TextReveal>
                <br />
                <span className="gradient-text">
                  <TextReveal delay={0.3}>Full Potential</TextReveal>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              >
                Discover personalized health insights powered by genetics. GenExcel helps families make informed decisions about nutrition, development, and overall wellness tailored to each child&apos;s unique DNA.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get Started Free
                </Button>
                <Button variant="outline" size="xl">
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Family Health Hub</h3>
                  <p className="text-slate-600 dark:text-slate-300">All your family&apos;s health data in one secure place</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium dark:text-white">100% Secure</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium dark:text-white">AI-Powered</span>
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
            <Badge variant="default" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything Your Family <span className="gradient-text">Needs</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive tools designed to support your child&apos;s health journey from genetics to daily wellness.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="gradient" className="mb-4">
                <Heart className="h-3 w-3 mr-1" />
                Why Families Love Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Built for <span className="gradient-text">Modern Families</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                GenExcel understands that every child is unique. Our platform adapts to your family&apos;s needs and grows with your children.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {testimonials.map((testimonial, index) => (
                <GlassCard key={testimonial.name} className="p-6" glow>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start Your Family&apos;s Health Journey Today
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of families who are unlocking the power of personalized, genetics-informed health guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
