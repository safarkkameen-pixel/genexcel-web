'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  Stethoscope,
  Dna,
  FileText,
  Shield,
  Users,
  Check,
  ArrowRight,
  HeartPulse,
  Microscope,
  ClipboardList,
  Building2,
  Award,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: 'Clinical Genetic Testing',
    description: 'NABL-certified lab services with 99.9% accuracy for comprehensive pediatric genetic screening.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: FileText,
    title: 'Clinical Reports',
    description: 'Detailed, physician-friendly reports with actionable recommendations and clinical interpretations.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Microscope,
    title: 'Research Integration',
    description: 'Access to latest genomic research and evidence-based clinical guidelines for pediatric care.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: ClipboardList,
    title: 'Patient Management',
    description: 'Integrated platform for managing patient genetic data, tracking outcomes, and coordinating care.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: HeartPulse,
    title: 'Remote Monitoring',
    description: 'Continuous health monitoring with alerts for clinically significant changes in patient metrics.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full HIPAA, DPDP, and healthcare data compliance.',
    color: 'from-slate-500 to-slate-700',
  },
];

const useCases = [
  {
    title: 'Pediatric Clinics',
    description: 'Integrate genetic insights into routine pediatric care for personalized prevention and treatment.',
    icon: Stethoscope,
  },
  {
    title: 'Hospitals',
    description: 'Enterprise solutions for hospital systems with EHR integration and multi-department support.',
    icon: Building2,
  },
  {
    title: 'Research Institutions',
    description: 'Anonymized data access for genomic research with proper consent management.',
    icon: Microscope,
  },
  {
    title: 'Genetic Counselors',
    description: 'Tools for counseling sessions with visual aids and patient-friendly explanations.',
    icon: Users,
  },
];

const stats = [
  { value: 450, suffix: '+', label: 'Genetic Markers' },
  { value: 99.9, suffix: '%', label: 'Accuracy Rate' },
  { value: 24, suffix: 'hr', label: 'Support' },
  { value: 100, suffix: '%', label: 'HIPAA Compliant' },
];

const certifications = [
  'NABL Certified Laboratory',
  'ISO 27001 Security',
  'HIPAA Compliant',
  'DPDP Compliant',
  'SOC 2 Type II',
  'Clinical Validation',
];

const integrations = [
  'Epic EHR',
  'Cerner',
  'Allscripts',
  'eClinicalWorks',
  'Practo',
  'Custom API',
];

export default function HealthcarePage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="gradient" className="mb-6">
                  <Stethoscope className="h-3 w-3 mr-1" />
                  For Healthcare
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                <TextReveal>Clinical-Grade</TextReveal>
                <br />
                <span className="gradient-text">
                  <TextReveal delay={0.3}>Genetic Solutions</TextReveal>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              >
                Empower your practice with advanced pediatric genetic testing and AI-powered health insights. From NABL-certified testing to seamless EHR integration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Request Clinical Demo
                </Button>
                <Button variant="outline" size="xl">
                  View Case Studies
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/50 dark:to-cyan-900/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <Stethoscope className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Clinical Platform</h3>
                  <p className="text-slate-600 dark:text-slate-300">NABL-certified genetic testing</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium dark:text-white">NABL Certified</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium dark:text-white">HIPAA Compliant</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Clinical Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Built for <span className="gradient-text">Healthcare Professionals</span>
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
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Solutions for Every <span className="gradient-text">Healthcare Setting</span>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{useCase.title}</h3>
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
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Enterprise-Grade <span className="gradient-text">Compliance</span>
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Seamless <span className="gradient-text">EHR Integration</span>
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <Check className="h-5 w-5 text-blue-600" />
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
      <section className="section-padding bg-gradient-to-br from-emerald-600 via-emerald-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a clinical demo to see how GenExcel can enhance your pediatric care with genetics-informed insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Schedule Clinical Demo
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Contact Medical Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
