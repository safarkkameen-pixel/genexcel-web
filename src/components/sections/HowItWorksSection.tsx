'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, FlaskConical, Cpu, Rocket, ArrowRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Order Your Kit',
    description: 'Receive your at-home DNA collection kit within 3-5 business days. Simple, painless saliva collection.',
    color: 'from-blue-500 to-cyan-500',
    details: ['Free shipping', 'Easy instructions', 'Prepaid return'],
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Collect & Return',
    description: 'Follow our easy 5-minute collection process. Use the prepaid envelope to send your sample to our certified lab.',
    color: 'from-purple-500 to-pink-500',
    details: ['5-minute process', 'No blood required', 'Secure shipping'],
  },
  {
    number: '03',
    icon: Cpu,
    title: 'AI Analysis',
    description: 'Our lab analyzes 450+ genetic variants. AI engine generates personalized insights across 34 health categories.',
    color: 'from-green-500 to-emerald-500',
    details: ['99.9% accuracy', '450+ traits', '2-3 week turnaround'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Start Your Journey',
    description: 'Access your comprehensive report in the app. Begin exploring personalized recommendations, games, and nutrition tracking.',
    color: 'from-orange-500 to-red-500',
    details: ['Instant access', 'Ongoing insights', 'Family sharing'],
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative"
    >
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-20 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 origin-left"
          />
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: '100%', opacity: [0, 1, 1, 0] }}
            transition={{ delay: index * 0.15 + 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            viewport={{ once: true }}
            className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
          />
        </div>
      )}

      <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-800 transition-all duration-500 relative overflow-hidden">
        {/* Background gradient on hover */}
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
          step.color
        )} />

        {/* Step number */}
        <div className="text-6xl font-bold text-slate-100 dark:text-slate-700 absolute top-4 right-4 group-hover:text-primary-100 dark:group-hover:text-primary-900/50 transition-colors">
          {step.number}
        </div>

        {/* Icon */}
        <div className={cn(
          'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6',
          'bg-gradient-to-br shadow-lg',
          'transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6',
          step.color
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{step.description}</p>

        {/* Details list */}
        <ul className="space-y-2">
          {step.details.map((detail) => (
            <li key={detail} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Check className="h-4 w-4 text-green-500" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-100 dark:bg-secondary-900/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="default" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Getting Started is <span className="gradient-text">Easy</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            From ordering your kit to accessing insights, we&apos;ve made the entire journey simple and seamless.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/order"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 group"
          >
            Order Your Kit Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
