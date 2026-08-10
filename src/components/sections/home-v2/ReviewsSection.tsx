'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/config/site';

function initialsOf(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-11"
        >
          <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE] mb-5">Families &amp; clinicians</div>
          <h2 className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.14]" style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>
            What parents notice first.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]"
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-[26px] p-8 bg-white border border-slate-200 shadow-glass transition-transform duration-500 hover:-translate-y-1 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.11] dark:to-white/[.04] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.16] dark:shadow-none"
            >
              <Quote className="h-5 w-5 text-cyan-600 dark:text-[#22D3EE]" />
              <p className="text-[15px] leading-[1.7] text-slate-900 dark:text-white my-4 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3 pt-[18px] border-t border-slate-200 dark:border-white/[.14]">
                <span className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 border border-cyan-200 font-display text-sm font-semibold text-cyan-700 dark:from-[#22D3EE]/[.24] dark:to-[#60A5FA]/[.22] dark:border-[#22D3EE]/[.28] dark:text-[#A5F3FC]">
                  {initialsOf(t.author)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900 dark:text-white">{t.author}</span>
                  <span className="block mt-0.5 text-[12.5px] text-slate-400 dark:text-[#7C8BA5]">
                    {t.role} &middot; {t.location}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
