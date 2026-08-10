'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { Newspaper, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={Newspaper}
        eyebrow="Press"
        title={<>Press & <GradientText>Media</GradientText></>}
        subtitle="News, updates, and media resources from GenExcel."
      />

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display font-light text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Our press and media kit is being prepared. For press inquiries, please contact us directly.
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" leftIcon={<Mail className="w-5 h-5" />}>
                    Press Inquiries
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
