'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Dna,
  Brain,
  Camera,
  HeartPulse,
  Video,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const icons = {
  Dna,
  Brain,
  Camera,
  HeartPulse,
  Video,
  Users,
};

const features = [
  {
    icon: 'Dna',
    title: 'Genetic Insights',
    description: 'Discover 450+ genetic traits across 34 health categories, from metabolism to cognitive abilities.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    href: '/solutions/families#genetics',
    span: 'md:col-span-2 lg:col-span-2',
  },
  {
    icon: 'Brain',
    title: 'Brain Games',
    description: '10 scientifically designed cognitive games that adapt to your child\'s age and abilities.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    href: '/solutions/families#games',
    span: '',
  },
  {
    icon: 'Camera',
    title: 'AI NutriScan',
    description: 'Snap a photo of any meal for instant, personalized nutritional analysis powered by AI.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    href: '/solutions/families#nutrition',
    span: '',
  },
  {
    icon: 'HeartPulse',
    title: 'Health Tracking',
    description: 'Track 13 vital health metrics with beautiful visualizations and trend analysis.',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    href: '/solutions/families#health',
    span: '',
  },
  {
    icon: 'Video',
    title: 'Telemedicine',
    description: 'Connect with verified pediatricians and genetic counselors via secure video calls.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    href: '/solutions/families#telemedicine',
    span: '',
  },
  {
    icon: 'Users',
    title: 'Family Dashboard',
    description: 'Manage multiple children from one account with comprehensive family health insights.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-500/10',
    href: '/solutions/families#family',
    span: '',
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = icons[feature.icon as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className={cn('group', feature.span)}
    >
      <Link href={feature.href}>
        <GlassCard className="h-full p-8 cursor-pointer" glow>
          {/* Icon */}
          <div
            className={cn(
              'inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6',
              'bg-gradient-to-br shadow-lg',
              'transition-all duration-500',
              'group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl',
              feature.color
            )}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{feature.description}</p>

          {/* Hover arrow */}
          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Learn more
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>

          {/* Background glow on hover */}
          <div
            className={cn(
              'absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none',
              feature.bgColor
            )}
          />
        </GlassCard>
      </Link>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100/50 dark:bg-secondary-900/20 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="gradient" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything Your Child Needs to{' '}
            <span className="gradient-text">Thrive</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            One comprehensive platform for genetic insights, AI nutrition, brain development, and complete health tracking.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
