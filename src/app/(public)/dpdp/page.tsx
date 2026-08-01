'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  Scale,
  Building,
  FileCheck,
  KeyRound,
  UserCheck,
  Baby,
  Globe,
  Lock,
  AlertTriangle,
  Clock,
  Landmark,
  RefreshCw,
  Mail,
} from 'lucide-react';


export default function DPDPCompliancePage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gradient" className="mb-6">
                <Scale className="h-3 w-3 mr-1" />
                Data Protection
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <TextReveal>DPDP</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.3}>Compliance Notice</TextReveal>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Digital Personal Data Protection Act, 2023 (India) &mdash; This notice explains how Curanova complies with the DPDP Act in relation to the GenExcel mobile application.
            </motion.p>

            

          </div>
        </div>
      </section>

      {/* Section 1: Data Fiduciary Information */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  1. Data Fiduciary <span className="gradient-text">Information</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-8" glow>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Data Fiduciary</p>
                    <p className="font-medium text-slate-900 dark:text-white">Curanova</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Registered Address</p>
                    <p className="font-medium text-slate-900 dark:text-white">[Full registered address]</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-medium text-primary-600 dark:text-primary-400">dpo@curanova.ai</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Grievance Officer</p>
                    <p className="font-medium text-slate-900 dark:text-white">[Name]</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Lawful Purpose of Data Processing */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  2. Lawful Purpose of <span className="gradient-text">Data Processing</span>
                </h2>
              </div>
            </motion.div>

            {/* 2.1 Based on Consent */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">2.1 Based on Your Consent (Section 6)</h3>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Data Category</th>
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Personal identity data (name, DOB, gender)', 'Account creation and profile management'],
                      ['Contact data (email, phone, address)', 'Communication, verification, and account recovery'],
                      ['Health measurements (vitals, BMI, growth)', 'Personalised health tracking and insights'],
                      ['Genomic data (genetic test results, traits)', 'Genetic analysis and trait-based health recommendations'],
                      ['Nutrition data (dietary logs, food images)', 'AI-powered nutritional analysis and dietary tracking'],
                      ['Activity and sleep data', 'Fitness tracking and health monitoring'],
                      ['Profile picture', 'Account personalisation'],
                      ['Telemedicine consultation data', 'Connecting you with healthcare professionals'],
                      ['AI chat interactions', 'Providing AI-powered health and nutrition guidance'],
                    ].map(([category, purpose], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{category}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* 2.2 Legitimate Uses */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2.2 For Legitimate Uses (Section 7)</h3>
              <div className="space-y-3">
                {[
                  'Ensuring security and preventing fraud',
                  'Compliance with Indian law and regulations',
                  'Medical emergencies (if applicable, with appropriate safeguards)',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Consent Mechanism */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
                  <KeyRound className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  3. Consent <span className="gradient-text">Mechanism</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 3.1 How We Obtain Consent */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">3.1 How We Obtain Consent</h3>
                  <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <div>
                      <strong className="text-slate-900 dark:text-white">Initial Consent:</strong> Before using the App, you are presented with a legal consent screen that requires you to review and accept our Privacy Policy, Terms of Service, and Medical Disclaimer
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Explicit Consent for Health Data:</strong> Health and genetic data is collected only after you explicitly provide it through the App
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Granular Permission Consent:</strong> Device permissions (camera, microphone, activity recognition, push notifications) are requested individually with clear explanations of their purpose
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Informed Consent:</strong> Each consent request is accompanied by a clear description in plain language
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 3.2 Withdrawing Consent */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">3.2 Withdrawing Consent</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">You may withdraw your consent at any time by:</p>
                  <div className="space-y-3">
                    {[
                      'Declining the consent screen (you will be logged out)',
                      'Deleting your account: Settings > Delete Account',
                      "Revoking device permissions through your device's settings",
                      'Disabling notifications: Settings > Notification Preferences',
                      'Contacting us: privacy@curanova.ai',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                    Withdrawing consent will not affect the lawfulness of processing carried out before the withdrawal. Some services may become unavailable after consent is withdrawn.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Rights of Data Principals */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  4. Rights of Data <span className="gradient-text">Principals</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: '4.1 Right to Access Information (Section 11)',
                  items: [
                    'You can view all your personal data within the App (Profile, Health Dashboard, Reports)',
                    'You can request a summary of your data processing activities by contacting us',
                  ],
                },
                {
                  title: '4.2 Right to Correction and Erasure (Section 12)',
                  items: [
                    'Correction: Edit your personal information through Settings > Edit Profile',
                    'Erasure: Request deletion through Settings > Delete Account',
                    'Timeline: Account deletion is processed within 30 days of the grace period ending',
                    'Confirmation: You will receive a confirmation email when deletion is scheduled and when it is completed',
                  ],
                },
                {
                  title: '4.3 Right to Data Portability',
                  items: [
                    'Export your data: Settings > Privacy & Data > Download My Data',
                    'Format: Your data is compiled into a ZIP file and sent to your registered email address',
                    'Contents: All personal data, health records, activity logs, and genomic data associated with your account',
                    'Processing time: Export requests are typically processed within 72 hours',
                  ],
                },
                {
                  title: '4.4 Right to Grievance Redressal (Section 13)',
                  items: [
                    'You may raise a grievance with our Grievance Officer (details in Section 1 above)',
                    'We will acknowledge your grievance within 48 hours',
                    'We will resolve your grievance within 30 days',
                    'If unsatisfied, you may approach the Data Protection Board of India',
                  ],
                },
                {
                  title: '4.5 Right to Nominate (Section 14)',
                  items: [
                    'You may nominate another individual to exercise your rights in the event of your death or incapacity',
                    'To register a nominee, contact privacy@curanova.ai',
                  ],
                },
              ].map((section, sIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIndex * 0.05 }}
                >
                  <GlassCard className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">{section.title}</h3>
                    <div className="space-y-2">
                      {section.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2" />
                          <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Data Processing for Children */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
                  <Baby className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  5. Data Processing for <span className="gradient-text">Children</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">5.1 Parental/Guardian Consent</h3>
                  <div className="space-y-3">
                    {[
                      'GenExcel allows parents and legal guardians to manage health data of their minor children',
                      'We process children\'s personal data only with verifiable parental or guardian consent',
                      'Parents/guardians maintain full control over their children\'s data, including the ability to view, edit, export, and delete it',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">5.2 Safeguards</h3>
                  <div className="space-y-3">
                    {[
                      'We do not perform behavioural tracking or targeted advertising on children\'s data',
                      'We do not process children\'s data in any manner that is likely to cause harm to them',
                      'Children\'s genomic and health data is subject to the same security measures as adult data (AES-256 encryption, secure storage)',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Data Processors and Cross-Border Transfers */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  6. Data Processors and <span className="gradient-text">Cross-Border Transfers</span>
                </h2>
              </div>
            </motion.div>

            {/* 6.1 Data Processors */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">6.1 Data Processors</h3>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Processor</th>
                      <th className="text-left px-6 py-4 font-semibold">Country</th>
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                      <th className="text-left px-6 py-4 font-semibold">Safeguards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Google Cloud / Firebase', 'US/India', 'Push notifications, crash reporting, file storage', 'Google Cloud DPA, encryption'],
                      ['Google Gemini AI (Vertex AI)', 'US/India', 'Food image analysis (NutriScan)', 'Processed via our backend, no direct user access'],
                      ['OpenAI', 'United States', 'AI chat assistance (Helix Chat)', 'Processed via our backend, no direct user access'],
                      ['Telemedicine Provider', 'India', 'Video consultations', 'Encrypted WebSocket connections'],
                    ].map(([processor, country, purpose, safeguards], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{processor}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{country}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{purpose}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{safeguards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* 6.2 Cross-Border */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6.2 Cross-Border Data Transfers</h3>
              <div className="space-y-3">
                {[
                  'Your data may be transferred to countries where our data processors operate',
                  'All transfers comply with the provisions of the DPDP Act regarding data transfer to permissible jurisdictions',
                  'We ensure that adequate safeguards (contractual obligations, encryption) are in place before transferring data',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Data Security Measures */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  7. Data Security <span className="gradient-text">Measures</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                In compliance with Section 8 of the DPDP Act, we implement the following reasonable security safeguards:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Encryption', desc: 'AES-256 encryption for data at rest; TLS/HTTPS for data in transit', color: 'from-blue-500 to-cyan-500' },
                { title: 'Secure Authentication', desc: 'JWT tokens stored in device secure storage (iOS Keychain / Android EncryptedSharedPreferences)', color: 'from-green-500 to-emerald-500' },
                { title: 'Minimal Local Storage', desc: 'Personal data kept in memory only during active sessions; no PII persisted in unencrypted local storage', color: 'from-violet-500 to-purple-500' },
                { title: 'Access Controls', desc: 'Role-based access controls on all backend systems', color: 'from-amber-500 to-orange-500' },
                { title: 'Token Management', desc: 'Push notification tokens deactivated on logout and deleted on account deletion', color: 'from-red-500 to-pink-500' },
                { title: 'Regular Audits', desc: 'Periodic security assessments and vulnerability testing', color: 'from-teal-500 to-cyan-500' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Data Breach Notification */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  8. Data Breach <span className="gradient-text">Notification</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">In the event of a personal data breach:</p>
              <div className="space-y-3">
                {[
                  'We will notify the Data Protection Board of India as required under the DPDP Act',
                  'We will notify affected Data Principals without unreasonable delay',
                  'Notification will include the nature of the breach, data affected, and remedial measures taken',
                  'We maintain an incident response plan for prompt breach detection and response',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Retention and Deletion */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  9. Retention and <span className="gradient-text">Deletion</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Data Type</th>
                      <th className="text-left px-6 py-4 font-semibold">Retention Period</th>
                      <th className="text-left px-6 py-4 font-semibold">Deletion Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Account data', 'Until account deletion + 30-day grace period', 'Permanent deletion after grace period'],
                      ['Health measurements', 'Until user deletes or account deletion', 'Permanent deletion'],
                      ['Genomic data', 'Until user deletes or account deletion', 'Permanent deletion'],
                      ['Nutrition & activity logs', 'Until user deletes or account deletion', 'Permanent deletion'],
                      ['Telemedicine records', 'As required by healthcare regulations', 'Per regulatory requirements'],
                      ['Push notification tokens', 'Until logout or account deletion', 'Automatic deactivation/deletion'],
                      ['AI chat history', 'Until user clears or account deletion', 'Permanent deletion'],
                    ].map(([type, period, method], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{type}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{period}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections 10-12: Significant Data Fiduciary, Updates, Contact */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* 10: Significant Data Fiduciary */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                  <Landmark className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  10. Significant Data Fiduciary <span className="gradient-text">Obligations</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">If Curanova is designated as a Significant Data Fiduciary under the DPDP Act, we will:</p>
              <div className="space-y-3">
                {[
                  'Appoint a Data Protection Officer (DPO) based in India',
                  'Appoint an independent data auditor',
                  'Conduct periodic Data Protection Impact Assessments (DPIA)',
                  'Publish findings of such audits as required',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 11: Updates */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  11. Updates to This <span className="gradient-text">Notice</span>
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  'This notice may be updated to reflect changes in law or our data practices',
                  'Material changes will be communicated through in-app notifications',
                  'The latest version will always be available at genexcel.ai/dpdp',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 12: Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  12. Contact and <span className="gradient-text">Grievance Redressal</span>
                </h2>
              </div>
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 mb-6">For questions, concerns, or grievances regarding data processing:</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      {[
                        ['Grievance Officer', '[Name]'],
                        ['Email', 'grievance@curanova.ai'],
                        ['Phone', '[Phone number]'],
                        ['Address', '[Full address]'],
                        ['Response Time', 'Acknowledgement within 48 hours; resolution within 30 days'],
                      ].map(([label, value], index) => (
                        <tr key={index} className="bg-white/50 dark:bg-slate-800/30">
                          <td className="px-6 py-3 font-medium text-slate-900 dark:text-white w-1/3">{label}</td>
                          <td className="px-6 py-3 text-slate-600 dark:text-slate-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                  If your grievance is not resolved satisfactorily, you may file a complaint with the <strong className="text-slate-700 dark:text-slate-200">Data Protection Board of India</strong> as established under the DPDP Act, 2023.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
