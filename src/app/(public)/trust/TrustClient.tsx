'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  ShieldCheck,
  Fingerprint,
  MapPin,
  MessageCircleOff,
  Layers,
  Lock,
  FileCheck,
  ArrowRight,
  Info,
} from 'lucide-react';

const pillars = [
  {
    icon: Fingerprint,
    title: 'Not linked to a name',
    description: "Every genetic record is stored against an anonymous sample code — never a name, email or date of birth. Connecting a sample to a person is a separate, permission-gated action, and every single time it happens, it's recorded with who, when and why.",
  },
  {
    icon: MapPin,
    title: 'AI stays in India',
    description: "Every AI feature — conversation, voice, report reading, food recognition — runs inside Indian data-centre regions, checked automatically before every release. One high-profile voice capability was deliberately left switched off because the only way to run it would have moved children's audio abroad.",
  },
  {
    icon: MessageCircleOff,
    title: 'Child-safety rules Helix can’t talk around',
    description: "A child is never told they carry a disease risk. A child never sees a psychometric score or label. Helix refuses to fabricate a quiz score even if asked, and never tells a child that genetics shaped how it teaches them. These are enforced rules, not guidelines in a document.",
  },
  {
    icon: Layers,
    title: 'Consent, layered and revocable',
    description: 'Legal documents, genetic testing consent, and per-category consent (health, academic, communications) are each granted separately — usually by a verified guardian for a minor. Every grant and every withdrawal is recorded, and withdrawing never deletes the history.',
  },
  {
    icon: Lock,
    title: 'Protected beyond the storage layer',
    description: "Every gene reading and extracted genetic record carries its own encryption, on top of the storage system's own protection. Report PDFs live in private storage with short-lived, single-purpose links, and access is re-checked the moment a report is viewed — so revoking access cuts it off immediately, even mid-session.",
  },
  {
    icon: FileCheck,
    title: 'Your rights, honoured directly',
    description: 'Request an export of your data, correct it, or ask for deletion — which anonymises your account after a 30-day grace period you can still cancel. Withdraw any consent at any time. A grievance mechanism and nominee registration are both available.',
  },
];

export default function TrustPage() {
  return (
    <main>
      <PageHero
        icon={ShieldCheck}
        eyebrow="Trust & Privacy"
        title={<>Built for Children&apos;s <GradientText>Genetic Data</GradientText></>}
        subtitle="Most of what GenExcel processes belongs to children. That single fact shapes more of the product than anything else — here's what it actually means in practice, not just in a policy document."
      />

      {/* Pillars */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <pillar.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{pillar.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What a child never sees */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge variant="default" className="mb-4">Deliberately Withheld</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 dark:text-white mb-6">
                What a Child <GradientText>Never Sees</GradientText>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                Not every part of a genetic report belongs in front of a child. Parents and genetic counsellors see the complete picture, correctly framed — a child sees a curated, encouraging one.
              </p>
              <div className="space-y-3">
                {[
                  'Disease-risk genetic traits and addiction-susceptibility results',
                  'Mental-health-related traits',
                  'Any score or label from the learning-style assessment',
                  'Any statement that genetics informed a teaching decision',
                  'A fabricated quiz score, even if they ask for one',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <MessageCircleOff className="h-4 w-4 text-cyan-600 dark:text-[#67E8F9]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <GlassCard className="p-8" glow>
                <div className="flex items-center gap-3 mb-6">
                  <Info className="h-6 w-6 text-cyan-600 dark:text-[#22D3EE]" />
                  <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white">What we&apos;re still finishing</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  In the same spirit of saying plainly what&apos;s live and what isn&apos;t: consent is captured and recorded across the platform today, but the switch that would automatically refuse a request from someone who hasn&apos;t completed consent is still being rolled out — turning it on before every existing account has finished the consent flow would risk locking people out of their own data. It&apos;s the next compliance milestone we&apos;re closing.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  We&apos;d rather tell you that directly than let a glossy privacy page imply everything is already switched on.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Links to formal documents */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <GlassCard className="p-8 md:p-12 text-center max-w-3xl mx-auto" glow>
            <h3 className="text-2xl font-display font-light text-slate-900 dark:text-white mb-3">Want the formal documents?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              This page explains our approach in plain language. For the legal detail, read our full Privacy Policy and our DPDP Act compliance notice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy">
                <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>Privacy Policy</Button>
              </Link>
              <Link href="/dpdp">
                <Button variant="outline">DPDP Compliance</Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[1] py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] py-16 px-8 sm:px-14 max-w-4xl mx-auto text-center bg-white border border-slate-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.14] dark:to-white/[.05] dark:backdrop-blur-3xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none"
          >
            <div
              aria-hidden="true"
              className="absolute -right-[10%] -top-[30%] w-[420px] h-[420px] rounded-full animate-gx-drift pointer-events-none"
              style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,211,238,.18), transparent 68%)' }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 dark:text-white mb-6">Questions About How We Handle Data?</h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Our team can walk you through exactly how consent, encryption and access controls work.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
