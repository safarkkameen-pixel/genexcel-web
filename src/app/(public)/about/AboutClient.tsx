'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Target,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Child Safety First',
    description: 'Everything we build prioritizes the safety and well-being of children. Age-appropriate content, strict privacy controls, and clinical oversight.',
  },
  {
    icon: Shield,
    title: 'Scientific Rigor',
    description: 'Our insights are grounded in a genetic reading pipeline that checks its own work, and reviewed by a human before anything uncertain reaches a family. We never overstate what genetics can tell us.',
  },
  {
    icon: Sparkles,
    title: 'Data Privacy',
    description: "Your family's genetic data is sacred. We use industry-leading encryption, comply with DPDP regulations, and never share data without explicit consent.",
  },
  {
    icon: Users,
    title: 'Family Empowerment',
    description: "We believe parents should have access to the best information about their child's learning and health. We make complex science accessible and actionable.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        icon={Target}
        eyebrow="Our Mission"
        title={<>Building the Future of <GradientText>Learning &amp; Health</GradientText></>}
        subtitle="To make a genetic report the input to software, not the output a family reads once. We believe every child deserves a tutor, a diet plan and a coach that already know how they learn, eat and grow."
      />

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="default" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-6">
              From a Simple Question to a <GradientText>Revolution</GradientText>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-left sm:text-center">
              <p>
                GenExcel was born from a simple question: what if we could understand each child&apos;s unique genetic makeup and use that knowledge to help them learn, thrive and grow?
              </p>
              <p>
                GenExcel combines genetic science with AI-powered insights to build a genomics-led learning and wellness platform &mdash; one where the genetic report shapes an AI tutor, a diet plan and a fitness coach, not just a PDF a family reads once.
              </p>
              <p>
                We believe every child deserves personalized guidance based on who they truly are &mdash; not generic advice meant for everyone. Our mission is to empower families with the knowledge and tools they need to unlock their child&apos;s full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-4">
              What We <GradientText>Stand For</GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <value.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <GlassCard className="inline-block p-6 max-w-xl mx-auto">
              <p className="text-slate-600 dark:text-slate-300">
                We&apos;re building out our team and company story pages next &mdash; check back soon to meet the people behind GenExcel.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
