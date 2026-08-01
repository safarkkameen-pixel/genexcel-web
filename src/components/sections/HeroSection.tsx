'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TextReveal } from '@/components/ui/TextReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

// Dynamic import for 3D scene to avoid SSR issues
const DNAScene = dynamic(
  () => import('@/components/three/DNAHelix').then((mod) => mod.DNAScene),
  { ssr: false }
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D DNA Background */}
      <DNAScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 dark:from-slate-900/80 dark:via-transparent dark:to-slate-900/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/50 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="container-custom relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge
              variant="glass"
              size="lg"
              icon={<Sparkles className="h-4 w-4 text-primary-500" />}
              className="shadow-lg"
            >
              AI-Powered Pediatric Health Platform
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-slate-900 dark:text-white">
              <TextReveal>Unlock Your Child&apos;s</TextReveal>
            </span>
            <br />
            <span className="relative">
              <span className="gradient-text-animated">
                <TextReveal delay={0.3}>Genetic Potential</TextReveal>
              </span>
              {/* Decorative underline */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
              >
                <motion.path
                  d="M2 8C50 2 100 2 150 6C200 10 250 8 298 4"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The AI-powered platform combining{' '}
            <span className="text-primary-600 font-semibold">genetic insights</span> with personalized
            nutrition, brain games, and health tracking for children ages 4-18.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-16 px-10 text-xl bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-glow-lg"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
            </MagneticButton>

            <MagneticButton className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-16 px-10 text-xl border-2 border-primary-200 bg-white/80 backdrop-blur-sm text-primary-700 hover:border-primary-300 hover:bg-primary-50">
                <Play className="h-5 w-5 fill-current" />
                Watch Demo
              </button>
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500 dark:text-slate-400"
          >
            {[
              { icon: '🧬', text: '450+ Genetic Traits' },
              { icon: '🧠', text: '10 Brain Games' },
              { icon: '📷', text: 'AI Nutrition' },
              { icon: '🏫', text: '50+ Schools' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-12 inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-100 dark:border-slate-700"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">4.9/5</span> from 2,000+ parents
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary-500 mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
