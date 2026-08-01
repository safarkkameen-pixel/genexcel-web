'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { PricingSection } from '@/components/sections/PricingSection';
import { TextReveal } from '@/components/ui/TextReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What's included in the genetic test?",
    answer: "Our genetic test analyzes 450+ genetic variants across 34 health categories including metabolism, nutrition, fitness, cognition, and more. You receive a detailed report plus ongoing insights in the app. The test is performed in our NABL-certified lab with 99.9% accuracy.",
  },
  {
    question: 'How long does it take to get results?',
    answer: "From the time our lab receives your sample, results are typically available within 2-3 weeks. You'll receive an email notification when your report is ready. Results are accessible through our mobile app and web portal.",
  },
  {
    question: 'Can I upgrade from Free to Premium later?',
    answer: "Absolutely! You can upgrade at any time from within the app. Your existing data will be preserved, and you'll gain immediate access to premium features. The genetic test kit will be shipped within 3-5 business days after upgrade.",
  },
  {
    question: 'Is my genetic data safe?',
    answer: "Yes, we take data security extremely seriously. All genetic data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. We comply with DPDP regulations and never share your data with third parties without explicit consent. You can request complete deletion at any time.",
  },
  {
    question: 'What age groups are supported?',
    answer: "GenExcel is designed for children ages 4-18. The app automatically adapts content and features based on your child's age group: 4-7 (simple, visual), 8-12 (moderate complexity), and 13-18 (advanced features).",
  },
  {
    question: 'Can I add more children to my account?',
    answer: "The Free plan supports 1 child, Premium supports 1 child, and the Family plan supports up to 4 children. For larger families or organizations, please contact our sales team for custom pricing.",
  },
  {
    question: 'Is there a refund policy?',
    answer: "Yes, we offer a 30-day money-back guarantee for genetic test purchases. If you're not satisfied with your results, contact us within 30 days for a full refund. App subscription refunds are handled through your respective app store.",
  },
  {
    question: 'Do you offer school or enterprise pricing?',
    answer: "Yes! We have special pricing for schools, hospitals, and enterprises. Contact our sales team for a customized quote based on your organization's needs.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
      >
        <div className={cn(
          'p-6 rounded-2xl border-2 transition-all duration-300',
          isOpen
            ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-200 dark:border-primary-800'
            : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'
        )}>
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0',
                isOpen && 'rotate-180'
              )}
            />
          </div>
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
}

export default function PricingPage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gradient" className="mb-6">
                <Sparkles className="h-3 w-3 mr-1" />
                Simple Pricing
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <TextReveal>Choose the Perfect</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.3}>Plan for Your Family</TextReveal>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300"
            >
              Start free, upgrade when you&apos;re ready. All plans include our mobile app with core features.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">
              <HelpCircle className="h-3 w-3 mr-1" />
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about GenExcel pricing and plans.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <GlassCard className="inline-block p-6">
              <p className="text-slate-600 dark:text-slate-300 mb-2">Still have questions?</p>
              <a
                href="/contact"
                className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Contact our team →
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
