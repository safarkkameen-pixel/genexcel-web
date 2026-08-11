'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
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
      className="relative flex"
    >
      {plan.popular && (
        <div className="absolute -top-3.5 right-[22px] z-10 py-[5px] px-3 rounded-full text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#031326] bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-[#22D3EE] dark:to-[#60A5FA]">
          Most chosen
        </div>
      )}

      <div
        className={cn(
          'relative flex flex-col flex-1 rounded-3xl p-8 transition-all duration-300 border',
          plan.popular
            ? 'bg-white border-cyan-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-[#22D3EE]/[.10] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/30 dark:shadow-none'
            : 'bg-white border-slate-200 shadow-glass hover:border-slate-300 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.09] dark:to-white/[.03] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none dark:hover:border-white/25'
        )}
      >
        <div className="font-display text-[13px] font-medium tracking-[0.12em] uppercase text-slate-500 dark:text-[#8B9AB5] mb-4">{plan.name}</div>

        <div className="mb-2 flex items-end gap-1.5">
          <span className="font-display text-[17px] font-normal text-slate-500 dark:text-[#A9B7CE] mb-[9px]">
            {plan.price === '0' ? '' : '₹'}
          </span>
          <span className="font-display text-[28px] sm:text-4xl font-light tracking-[-0.03em] text-slate-900 dark:text-white leading-none">
            {plan.price}
          </span>
          <span className="text-[13px] text-slate-500 dark:text-[#8B9AB5] mb-2">/ {plan.period}</span>
        </div>
        <p className="text-[13.5px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5] mb-6">{plan.description}</p>

        <div className="flex flex-col gap-2 mb-6 flex-1">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-slate-600 dark:text-[#BFCCE0]">
              <Check className="h-3.5 w-3.5 flex-none mt-[3px] text-cyan-600 dark:text-[#22D3EE]" strokeWidth={2.4} />
              {feature}
            </div>
          ))}
        </div>

        <Link
          href={plan.href}
          className={cn(
            'inline-flex items-center justify-center gap-2 h-[50px] rounded-full text-[14.5px] font-semibold whitespace-nowrap transition-colors',
            plan.popular
              ? 'text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md hover:opacity-90 dark:text-[#F2FEFF] dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100'
              : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 dark:text-[#E9F4FF] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:hover:border-white/40'
          )}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

interface PricingSectionProps {
  /** 'panel': homepage sticky-stack chrome (100vh, sticky, rounded-top overlap, id="p6").
   *  'standalone' (default): normal in-flow section, as used on /pricing. */
  mode?: 'standalone' | 'panel';
}

export function PricingSection({ mode = 'standalone' }: PricingSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isPanel = mode === 'panel';

  return (
    <section
      ref={ref}
      id={isPanel ? 'p6' : 'pricing'}
      className={cn(
        'relative overflow-hidden bg-white dark:bg-[#02091A]',
        isPanel
          ? 'h-screen rounded-t-[44px] border-t border-slate-200 shadow-[0_-20px_60px_rgba(15,23,42,.06)] dark:border-slate-400/[.16] dark:shadow-[0_-30px_90px_rgba(0,0,0,.7)]'
          : 'section-padding'
      )}
    >
      <div
        className={cn(
          isPanel ? 'relative max-w-[1440px] mx-auto box-border h-full flex flex-col justify-center overflow-y-auto' : 'container-custom relative'
        )}
        style={isPanel ? { padding: 'clamp(96px,13.5vh,126px) 44px clamp(40px,7vh,90px)' } : undefined}
      >
        {isPanel ? (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10" style={{ marginBottom: 'clamp(14px,3vh,38px)' }}>
            <div>
              <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE]" style={{ marginBottom: 'clamp(8px,1.6vh,16px)' }}>
                Plans
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.1]"
                style={{ fontSize: 'clamp(24px,3.9vw,44px)' }}
              >
                Start free. Sequence when ready.
              </motion.h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-[#8B9AB5] max-w-[300px] leading-[1.65]">
              One-time kit, insights that keep updating as the science does.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="default" className="mb-4 bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-white/10 dark:text-[#67E8F9] dark:border-white/10">
              <Sparkles className="h-3 w-3 mr-1" />
              Simple Pricing
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] text-slate-900 dark:text-white mb-6">
              Choose Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA]">Plan</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-[#8B9AB5]">
              Start free, upgrade when ready. All plans include the GenExcel app with core features.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {!isPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-[#8B9AB5]">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE]" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE]" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-600 dark:text-[#22D3EE]" />
                30-day money back
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
