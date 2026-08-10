'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What is GenExcel, and what does it actually do?',
    answer:
      "GenExcel starts with a simple saliva sample, read by one of our partner labs. Once your child's genetic report is reviewed by our team and assigned to their account under your consent, it changes how Helix (our AI tutor) teaches them, adjusts their nutrition and fitness targets, and gives parents, teachers, and counsellors views appropriate to their role. It's designed to work alongside how your child already learns and grows, not replace it.",
  },
  {
    question: 'What is Helix, the AI tutor?',
    answer:
      "Helix is an AI companion that acts as a tutor to your child and a professional assistant to you as a parent. It answers homework strictly from your child's own prescribed textbook rather than general knowledge, and works in English or your child's regional language, by text or voice. Helix never tells a child that their genetics shaped how it's teaching them, never discusses disease risk with a child, and never invents a quiz score.",
  },
  {
    question: 'What does the genetic report actually cover, and how is it read?',
    answer:
      "Our master catalogue covers 1,020+ genetic traits across 26 profiles in 5 categories: Diet & Nutrition, Academic & Cognitive, Fitness & Sport, Personality & Talents, and Health-related. Each individual report covers 113-117 of these traits. The report is read automatically (about 10 seconds for known formats, self-checked four different ways) and then reviewed by our staff before it's ever assigned to your child's account.",
  },
  {
    question: "Is my child's genetic data linked to their name or identity?",
    answer:
      "No. Genetic data is stored against an anonymous sample code, never directly against a name, email, or date of birth. Connecting a sample to a specific person is a separate action that requires explicit permission and is fully logged, so your family's identity and genetic data are never carelessly joined together.",
  },
  {
    question: 'What can my child see, and what do I see as a parent?',
    answer:
      "Your child sees age-appropriate insights about their learning, diet, and fitness, but never disease-risk traits, addiction-susceptibility results, or their own psychometric score or label. Those more sensitive findings are visible only to parents and genetic counsellors, and are always framed with proper context rather than handed over as a raw number.",
  },
  {
    question: 'Does GenExcel diagnose disease risk or predict how my child will respond to medication?',
    answer:
      "Not yet. Today's reports focus on diet, learning, fitness, personality, and general health-related traits reviewed by our team; polygenic risk scores and medication-response (pharmacogenomic) insights are not currently generated. Any health-related trait we do report is meant to inform conversations with your paediatrician or our genetic counsellors, not to replace medical diagnosis.",
  },
  {
    question: "What's the difference between the free tier and having a genetic report?",
    answer:
      'Helix, homework help, study plans, and our diet and fitness tools all work on the Free plan — your child just sees a general "Lifestyle" section instead of "My Traits," since Helix is never instructed to mention genes or DNA on Free. Adding a genetic report through Premium or Family unlocks My Traits and genetically personalized nutrition and fitness guidance.',
  },
  {
    question: "Is any of my family's data processed outside India?",
    answer:
      "No. All AI processing, including Helix's conversations, voice, and the reading of genetic reports, stays within Indian data-centre regions. GenExcel is built to comply with India's Digital Personal Data Protection (DPDP) Act, 2023.",
  },
  {
    question: "Can I delete my account or my child's data?",
    answer:
      "Yes. Deleting an account starts a 30-day grace period, during which you can cancel the deletion if you change your mind. After 30 days, the data is anonymised rather than instantly wiped, which is what lets us safely unwind consent-linked genetic data.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
        <div
          className={cn(
            'p-6 rounded-2xl border-2 transition-all duration-300',
            isOpen
              ? 'bg-cyan-50 dark:bg-[#22D3EE]/[.09] border-cyan-200 dark:border-[#22D3EE]/[.24]'
              : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display font-medium text-slate-900 dark:text-white">{faq.question}</h3>
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

export default function FAQsPage() {
  return (
    <main>
      <PageHero
        icon={HelpCircle}
        eyebrow="FAQs"
        title={<>Frequently Asked <GradientText>Questions</GradientText></>}
        subtitle="Find answers to common questions about GenExcel, Helix, and how we handle your family's data."
      />

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
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
                className="text-cyan-600 dark:text-[#22D3EE] font-semibold hover:text-cyan-700 dark:hover:text-[#67E8F9] transition-colors"
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
