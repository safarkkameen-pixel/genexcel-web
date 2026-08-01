'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { LifeBuoy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HelpPage() {
  useSmoothScroll();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-6">Help Center</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-6 mb-6">
              Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Center
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the support you need with GenExcel.
            </p>
          </div>
        </div>
      </section>

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
                  <LifeBuoy className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Our help center with guides, tutorials, and troubleshooting is being built. For immediate assistance, please contact our support team.
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" leftIcon={<Mail className="w-5 h-5" />}>
                    Contact Support
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
