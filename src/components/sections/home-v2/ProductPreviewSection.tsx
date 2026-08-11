'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const PREVIEWS = [
  { src: '/images/traits-screenshot.jpeg', title: 'My Traits report', caption: 'Diet, learning, fitness & health' },
  { src: '/images/helix-chat-screenshot.jpeg', title: 'Helix chat', caption: 'Textbook-grounded tutoring' },
  { src: '/images/nutriscan-screenshot-2.jpeg', title: 'AI NutriScan', caption: 'Photo-based nutrition analysis' },
  { src: '/images/games-screenshot.jpeg', title: 'Brain games', caption: 'Cognitive games that build focus' },
];

export function ProductPreviewSection() {
  return (
    <section id="preview" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[600px] mx-auto mb-11"
        >
          <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE] mb-4">The app</div>
          <h2
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.16]"
            style={{ fontSize: 'clamp(26px,3.2vw,38px)' }}
          >
            Reports, tutoring and tracking in one family app.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PREVIEWS.map((preview, i) => (
            <motion.div
              key={preview.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-5" hover>
                <div className="rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center">
                  <img
                    src={preview.src}
                    alt={preview.title}
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <div className="mt-3.5 text-[13.5px] font-semibold text-slate-900 dark:text-white">{preview.title}</div>
                <div className="mt-0.5 text-[12.5px] text-slate-500 dark:text-[#8B9AB5]">{preview.caption}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
