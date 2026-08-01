'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { pricingPlans } from '@/config/site';
import { cn } from '@/lib/utils';

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'relative group',
        plan.popular && 'md:-mt-4 md:mb-4'
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Badge variant="gradient" size="lg" icon={<Zap className="h-4 w-4" />}>
            Most Popular
          </Badge>
        </div>
      )}

      <div
        className={cn(
          'relative h-full rounded-3xl p-8 transition-all duration-500',
          'border-2',
          plan.popular
            ? 'bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/30 dark:to-slate-800 border-primary-200 dark:border-primary-700 shadow-xl shadow-primary-100/50 dark:shadow-primary-900/30'
            : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600'
        )}
      >
        {/* Glow effect for popular */}
        {plan.popular && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

        <div className="relative">
          {/* Plan name */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{plan.description}</p>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-slate-400 dark:text-slate-500 text-xl">₹</span>
              <span className={cn(
                'text-5xl font-bold',
                plan.popular ? 'gradient-text' : 'text-slate-900 dark:text-white'
              )}>
                {plan.price}
              </span>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{plan.period}</div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className={cn(
                  'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                  plan.popular ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                )}>
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href={plan.href} className="block">
            <Button
              className="w-full"
              variant={plan.popular ? 'glow' : 'secondary'}
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              {plan.cta}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/20 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="default" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Start free, upgrade when ready. All plans include the GenExcel app with core features.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              30-day money back
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
