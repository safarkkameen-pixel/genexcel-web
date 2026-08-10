'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  Stethoscope,
  Dna,
  FileText,
  Shield,
  Users,
  Check,
  ArrowRight,
  Microscope,
  ClipboardList,
  Building2,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Genetic Counsellor Workspace',
    description: 'Caseload-scoped access gives counsellors full genetic profiles, report review and assignment, consultations, and secure messaging, with instant loss of visibility the moment a patient leaves the caseload.',
  },
  {
    icon: FileText,
    title: 'Clinical Reports',
    description: 'Detailed, physician-friendly reports with actionable recommendations, drawn from a genetic profile covering up to 117 traits per patient, reviewed and assigned by a certified counsellor.',
  },
  {
    icon: ClipboardList,
    title: 'Telehealth Scheduling',
    description: 'Doctor profiles, scheduling, and booking are fully live, along with consultation notes and prescriptions, so care coordination doesn\'t wait on a phone tag.',
  },
  {
    icon: Microscope,
    title: 'Lab Result Verification',
    description: 'Every lab report is automatically read and self-verified against the glossary, row counts, and page counts, before it\'s ever assigned to a patient.',
  },
  {
    icon: Building2,
    title: 'Referral & Hospital Management',
    description: 'Coordinate referrals across hospitals and specialists, with case history and clinical reports following the patient through every handoff.',
  },
  {
    icon: Lock,
    title: 'DPDP Compliant',
    description: 'Enterprise-grade security with role-based access and full compliance with India\'s Digital Personal Data Protection Act. Every genetic-data view is logged and auditable.',
  },
];

const useCases = [
  {
    title: 'Pediatric Clinics',
    description: 'Integrate genetic reports into routine pediatric care. Nutrition and fitness plans adjust automatically once a report is on file.',
    icon: Stethoscope,
  },
  {
    title: 'Hospitals',
    description: 'Coordinate multi-department referrals and case handoffs, with custom API integration available for your existing systems.',
    icon: Building2,
  },
  {
    title: 'Diagnostic Laboratories',
    description: 'Partner labs feed reports directly into GenExcel, where each one is automatically read and verified within about 10 seconds for known formats.',
    icon: Microscope,
  },
  {
    title: 'Genetic Counselors',
    description: 'Full genetic profiles, caseload-scoped visibility, and secure messaging tools for counselling sessions with clear, patient-friendly explanations.',
    icon: Users,
  },
];

const stats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued', color: 'text-slate-900 dark:text-white' },
  { value: 117, suffix: '', label: 'Traits per Patient Report', color: 'text-cyan-600 dark:text-[#67E8F9]' },
  { value: 24, suffix: 'hr', label: 'Support', color: 'text-slate-900 dark:text-white' },
  { value: 100, suffix: '%', label: 'DPDP Compliant', color: 'text-amber-600 dark:text-[#FBBF24]' },
];

const certifications = [
  'NABL Certified Laboratory',
  'ISO 27001 Security',
  'DPDP Compliant',
  'SOC 2 Type II',
  'Clinical Validation',
];

const integrations = [
  'Custom API Integration',
  'Secure Data Export',
  'Referral Network Access',
  'Lab Report Import',
  'Single Sign-On (SSO)',
  'Webhook Notifications',
];

export default function HealthcarePage() {
  return (
    <main>
      <PageHero
        icon={Stethoscope}
        eyebrow="For Healthcare"
        title={<>Clinical-Grade <GradientText>Genetic Solutions</GradientText></>}
        subtitle="Empower your practice with a genetic counsellor workspace, automatic lab report reading, and telehealth scheduling, built for pediatric practices, hospitals, and counsellors."
      />

      {/* Stats Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24 grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[26px] py-[34px] px-7 bg-white border border-slate-200 shadow-glass dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none"
            >
              <div className={`font-display font-light tracking-[-0.03em] leading-none ${stat.color}`} style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.7} />
              </div>
              <div className="mt-3 text-[13.5px] text-slate-500 dark:text-[#8B9AB5]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Clinical Features</Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Built for <GradientText>Healthcare Professionals</GradientText>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Clinical-grade tools designed to integrate seamlessly into your practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6">
                    <feature.icon className="h-7 w-7 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display font-light text-xl text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="gradient" className="mb-4">
              <Building2 className="h-3 w-3 mr-1" />
              Use Cases
            </Badge>
            <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Solutions for Every <GradientText>Healthcare Setting</GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display font-light text-lg text-slate-900 dark:text-white mb-2">{useCase.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{useCase.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Integrations */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="default" className="mb-4">
                <Shield className="h-3 w-3 mr-1" />
                Certifications
              </Badge>
              <h3 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-6">
                Enterprise-Grade <GradientText>Compliance</GradientText>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <Check className="h-5 w-5 text-cyan-600 dark:text-[#22D3EE]" />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="gradient" className="mb-4">
                <Dna className="h-3 w-3 mr-1" />
                Integrations
              </Badge>
              <h3 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-6">
                Flexible <GradientText>Integrations</GradientText>
              </h3>
              <div className="space-y-3">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 dark:bg-[#22D3EE]/[.09] flex items-center justify-center">
                      <Check className="h-5 w-5 text-cyan-600 dark:text-[#22D3EE]" />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="font-display font-light text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Schedule a clinical demo to see how GenExcel can enhance your pediatric care with genetics-informed insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Schedule Clinical Demo
                </Button>
                <Button variant="secondary" size="xl">
                  Contact Medical Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
