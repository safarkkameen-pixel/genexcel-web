'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="cta" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] py-20 px-8 sm:px-14 bg-white border border-slate-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.14] dark:to-white/[.05] dark:backdrop-blur-3xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none"
        >
          <div
            aria-hidden="true"
            className="absolute -right-[8%] -top-[40%] w-[520px] h-[520px] rounded-full animate-gx-drift pointer-events-none"
            style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,211,238,.18), transparent 68%)' }}
          />
          <div className="relative max-w-[760px]">
            <h2
              className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.06] mb-[22px]"
              style={{ fontSize: 'clamp(30px,4.2vw,56px)' }}
            >
              Give your child a head start written in their own code.
            </h2>
            <p className="text-[17px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5] mb-9">
              Kits ship in 3&ndash;5 days. Results in 2&ndash;3 weeks. A tutor, a diet plan and a coach that keep reading from it.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2.5 h-14 px-7 rounded-full text-[15.5px] font-semibold whitespace-nowrap text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md hover:opacity-90 dark:text-[#F2FEFF] dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100 transition-colors"
              >
                Order the genetic kit
                <ArrowRight className="h-[17px] w-[17px]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center h-14 px-7 rounded-full text-[15.5px] font-semibold whitespace-nowrap text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 dark:text-[#E9F4FF] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20 dark:hover:border-white/[.38] dark:hover:from-white/20 dark:hover:to-[#22D3EE]/[.14] transition-colors"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
