'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8"
          >
            <Smartphone className="h-4 w-4" />
            Available on iOS & Android
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Start Your Child&apos;s Health Journey{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              Today
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of families who are unlocking the power of personalized health for their children. It&apos;s free to get started.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-16 px-10 text-xl rounded-full font-semibold bg-white text-primary-700 hover:bg-white/90 shadow-xl transition-all"
              >
                Download Free App
                <ArrowRight className="h-5 w-5" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-16 px-10 text-xl rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Order Genetic Test
              </Link>
            </MagneticButton>
          </motion.div>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 inline-flex items-center gap-3 text-white/70"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm">
              <span className="text-white font-semibold">4.9/5</span> from 2,000+ parents
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
