'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  Heart,
  BookOpen,
  Utensils,
  Activity,
  Users,
  Check,
  ArrowRight,
  Dna,
  Gamepad2,
  Calendar,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: 'Genetic Insights',
    description: 'Your child\'s report covers roughly 113-117 traits, drawn from our master catalogue of 1,020+ traits organized into 26 profiles spanning nutrition, fitness, cognition, and more.',
  },
  {
    icon: BookOpen,
    title: 'Helix, Your Child\'s AI Tutor',
    description: 'Helix answers homework questions only from your child\'s own textbooks — 225,000+ searchable passages in English, Hindi, Malayalam, Tamil, and Kannada. Available by text or voice.',
  },
  {
    icon: Utensils,
    title: 'AI Nutrition',
    description: 'NutriScan technology analyzes meals instantly, and once a genetic report is linked, calorie and macro targets adjust automatically to your child\'s profile.',
  },
  {
    icon: Activity,
    title: 'Genetically-Tuned Fitness',
    description: 'Fitness plans adjust for your child\'s power-versus-endurance disposition and injury risk once a genetic report is on file, so activity goals fit the child, not a generic chart.',
  },
  {
    icon: Calendar,
    title: 'Book a Counsellor',
    description: 'Schedule a consultation with a certified genetic counsellor to walk through your child\'s report and get clear next steps, right from the app.',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Experience',
    description: 'Kids earn Genie coins, unlock achievements, and play 8 cognitive games designed just for them.',
  },
];

const benefits = [
  'Personalized health recommendations based on genetics',
  'Helix, an AI tutor grounded in your child\'s own textbooks',
  'Dual experience: safe view for kids, full insights for parents',
  'Track multiple children on one family account',
  'Regular progress reports and health insights',
  'Access to certified genetic counsellors for consultations',
];

const stats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued', color: 'text-slate-900 dark:text-white' },
  { value: 225000, suffix: '+', label: 'Textbook Passages', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 8, suffix: '', label: 'Playable Cognitive Games', color: 'text-slate-900 dark:text-white' },
  { value: 26, suffix: '', label: 'Trait Profiles', color: 'text-amber-600 dark:text-[#FBBF24]' },
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
    quote: 'Between the genetic nutrition plan and Helix helping with homework every evening, GenExcel has become part of our family\'s daily routine.',
    rating: 5,
  },
];

export default function FamiliesPage() {
  return (
    <main>
      <PageHero
        icon={Users}
        eyebrow="For Families"
        title={<>Unlock Your Child&apos;s <GradientText>Full Potential</GradientText></>}
        subtitle="Meet Helix, your child's AI tutor grounded in their own textbooks, plus a genetic report that shapes their nutrition and fitness plans. GenExcel helps families make informed decisions about learning and wellness, tailored to each child."
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
            <Badge variant="default" className="mb-4">Features</Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Everything Your Family <GradientText>Needs</GradientText>
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
              <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
                Built for <GradientText>Modern Families</GradientText>
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <Check className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE]" />
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
              {testimonials.map((testimonial) => (
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
                Start Your Family&apos;s Health Journey Today
              </h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Join thousands of families who are unlocking the power of personalized, genetics-informed health guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Get Started Free
                </Button>
                <Button variant="secondary" size="xl">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
