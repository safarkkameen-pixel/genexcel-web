'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Scale,
  BookOpen,
  UserCheck,
  ShieldAlert,
  Bot,
  Video,
  CheckCircle,
  XCircle,
  Copyright,
  FileText,
  Trash2,
  Server,
  AlertTriangle,
  Shield,
  Puzzle,
  FileCheck,
  RefreshCw,
  Mail,
} from 'lucide-react';


export default function TermsOfServicePage() {
  return (
    <main>
      <PageHero
        icon={Scale}
        eyebrow="Legal Agreement"
        title={<>Terms of <GradientText>Service</GradientText></>}
        subtitle="Please read these terms carefully before using GenExcel. By using our App, you agree to be bound by these Terms."
      />

      {/* Intro */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of the GenExcel mobile application (&quot;App&quot;) provided by Curanova (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  If you do not agree to these Terms, do not use the App.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Definitions */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  1. <span className="gradient-text">Definitions</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                { term: '"App"', def: 'refers to the GenExcel mobile application available on Android and iOS platforms' },
                { term: '"User," "you," or "your"', def: 'refers to any individual who accesses or uses the App' },
                { term: '"Care Seeker"', def: 'refers to the individual whose health and genetic data is being managed (may be the User themselves or a dependent)' },
                { term: '"Services"', def: 'refers to all features and functionality provided through the App, including health tracking, genetic analysis, AI-powered nutrition analysis, and telemedicine consultations' },
                { term: '"Content"', def: 'refers to all text, images, data, information, and other materials available through the App' },
              ].map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{item.term}</span>
                    <span className="text-slate-600 dark:text-slate-300"> {item.def}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Eligibility */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  2. <span className="gradient-text">Eligibility</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'You must be at least 18 years of age to create an account',
                'Parents or legal guardians may create accounts to manage the health data of their minor children (care seekers)',
                'By using the App, you represent that you have the legal capacity to enter into these Terms',
                'If you are using the App on behalf of a minor, you accept these Terms on their behalf and are responsible for their use of the App',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Account Registration */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  3. Account Registration and <span className="gradient-text">Security</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'You must provide accurate, current, and complete information during registration',
                'You are responsible for maintaining the confidentiality of your account credentials',
                'You must notify us immediately of any unauthorised access to or use of your account',
                'You are responsible for all activities that occur under your account',
                'We reserve the right to suspend or terminate accounts that violate these Terms',
                'You may sign in using email/password, phone OTP, or Google Sign-In',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Medical Disclaimer */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                  <ShieldAlert className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  4. Medical <span className="gradient-text">Disclaimer</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-8 border-2 border-amber-200 dark:border-amber-800/50">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <Badge variant="warning" size="lg">Important: Please Read Carefully</Badge>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>GenExcel provides health and genomic information <strong className="text-slate-900 dark:text-white">strictly for educational and informational purposes</strong>.</p>
                  <p>The App is <strong className="text-red-600 dark:text-red-400">NOT</strong> a substitute for professional medical advice, diagnosis, or treatment.</p>
                  <p>Genetic test results and interpretations are based on current scientific understanding, which continues to evolve. Results should not be used alone to make health decisions.</p>
                  <p>Use of the App does <strong className="text-red-600 dark:text-red-400">NOT</strong> create a doctor-patient relationship (except during active telemedicine consultations with licensed healthcare providers).</p>
                  <p>Always consult a qualified healthcare provider before making any medical decisions based on information provided by the App.</p>
                  <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800/50">
                    <p className="font-bold text-red-700 dark:text-red-400">
                      In case of a medical emergency, call your local emergency services immediately. Do not rely on the App for emergency medical guidance.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: AI-Powered Features */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  5. AI-Powered <span className="gradient-text">Features</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5.1 NutriScan (Food Analysis)</h3>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>NutriScan uses artificial intelligence (Google Gemini) to analyse food images and estimate nutritional content.</p>
                    <p>Results are <strong className="text-slate-900 dark:text-white">estimates</strong> and may not be perfectly accurate. Do not rely solely on NutriScan for dietary decisions, especially if you have food allergies, intolerances, or specific medical dietary requirements.</p>
                    <p>Food images are processed through our secure backend servers.</p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5.2 Helix Chat (AI Assistant)</h3>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>Helix Chat provides AI-generated health and nutrition guidance powered by OpenAI technology.</p>
                    <p>Responses are informational and educational only. They do not constitute medical advice.</p>
                    <p>AI responses may occasionally be inaccurate or incomplete. Always verify health-related information with a qualified professional.</p>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Telemedicine Services */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  6. Telemedicine <span className="gradient-text">Services</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'Telemedicine consultations connect you with licensed healthcare professionals',
                'Telemedicine is not a replacement for in-person medical care for all conditions',
                'The availability of telemedicine services depends on your location and the availability of healthcare providers',
                'You consent to the collection and sharing of relevant health data with the consulting healthcare professional during a consultation',
                'Session notes and records are maintained as required by applicable healthcare regulations',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Permitted Use */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  7. Permitted <span className="gradient-text">Use</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    You agree to use the App for:
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Personal, non-commercial health and wellness tracking',
                      "Managing your own or your dependent children's health data (as a parent/guardian)",
                      'Accessing genetic analysis and personalised health insights',
                      'Legitimate telemedicine consultations',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    You agree NOT to:
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Use the App for any unlawful or fraudulent purpose',
                      "Attempt to gain unauthorised access to our systems or other users' accounts",
                      'Reverse-engineer, decompile, or disassemble the App',
                      'Scrape, mine, or extract data from the App using automated means',
                      'Share your account credentials with third parties',
                      'Upload malicious content, viruses, or harmful code',
                      'Use the App to provide medical advice to others',
                      'Misrepresent your identity or create accounts under false pretences',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mt-0.5">
                          <XCircle className="h-3 w-3 text-red-600" />
                        </div>
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

      {/* Section 8: Intellectual Property */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                  <Copyright className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  8. Intellectual <span className="gradient-text">Property</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'All content, features, functionality, design, and code of GenExcel are owned by Curanova and are protected by intellectual property laws',
                'The GenExcel name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Curanova',
                'You may not copy, modify, distribute, sell, or lease any part of the App without our prior written consent',
                'You retain ownership of any personal data and content you submit to the App',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: User Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  9. User <span className="gradient-text">Content</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'By submitting content (including health data, images, and chat messages), you grant us a limited licence to use, store, process, and display it as necessary to provide our Services',
                'You represent that you have the right to submit any content you provide',
                'We do not claim ownership of your personal data or health records',
                'You may export or delete your content at any time through the App',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Account Deletion */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg">
                  <Trash2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  10. Account <span className="gradient-text">Deletion</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-8">
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>You may request account deletion at any time through <strong className="text-slate-900 dark:text-white">Settings &gt; Delete Account</strong>.</p>
                  <p>Upon requesting deletion, your account enters a <strong className="text-slate-900 dark:text-white">30-day grace period</strong> during which:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <p>Your account is deactivated</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <p>You can cancel the deletion request and restore your account</p>
                    </div>
                  </div>
                  <p>After the 30-day grace period, all personal data is <strong className="text-red-600 dark:text-red-400">permanently and irreversibly deleted</strong>.</p>
                  <p>Certain data may be retained longer if required by law or healthcare regulations.</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 11: Service Availability */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  11. Service Availability and <span className="gradient-text">Modifications</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                "We strive to maintain the App's availability but do not guarantee uninterrupted access",
                'We reserve the right to modify, suspend, or discontinue any feature or service at any time',
                'We will provide reasonable notice of significant changes when possible',
                'We are not liable for any loss resulting from service interruptions or modifications',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500 mt-2" />
                  <p className="text-slate-600 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 12-16: Limitation of Liability, Indemnification, Governing Law, Severability, Entire Agreement */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* 12: Limitation of Liability */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  12. Limitation of <span className="gradient-text">Liability</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">To the maximum extent permitted by applicable law:</p>
              <div className="space-y-3">
                {[
                  'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied',
                  'We do not warrant that the App will be error-free, secure, or uninterrupted',
                  'We are not liable for any indirect, incidental, special, consequential, or punitive damages',
                  'Our total liability for any claim arising from or related to the App shall not exceed the amount you have paid us in the 12 months preceding the claim, or INR 5,000, whichever is greater',
                  'We are not responsible for the accuracy of AI-generated content, including NutriScan analysis and Helix Chat responses',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 13: Indemnification */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-500 to-slate-700 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  13. <span className="gradient-text">Indemnification</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">You agree to indemnify and hold harmless Curanova, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
              <div className="space-y-3">
                {[
                  'Your use of the App',
                  'Your violation of these Terms',
                  'Your violation of any third-party rights',
                  'Any content you submit through the App',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 14: Governing Law */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  14. Governing Law and <span className="gradient-text">Dispute Resolution</span>
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  'These Terms are governed by the laws of India',
                  'Any disputes arising from these Terms or your use of the App shall first be attempted to be resolved through amicable negotiation',
                  'If negotiation fails, disputes shall be resolved through arbitration in Bangalore, India in accordance with the Arbitration and Conciliation Act, 1996',
                  'The language of arbitration shall be English',
                  'Nothing in these Terms prevents either party from seeking urgent interim relief from a court of competent jurisdiction',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 15: Severability */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg">
                  <Puzzle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  15. <span className="gradient-text">Severability</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </motion.div>

            {/* 16: Entire Agreement */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  16. Entire <span className="gradient-text">Agreement</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                These Terms, together with our Privacy Policy, DPDP Compliance Notice, and Cookie Policy, constitute the entire agreement between you and Curanova regarding the use of the App.
              </p>
            </motion.div>

            {/* 17: Changes */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  17. Changes to These <span className="gradient-text">Terms</span>
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  'We may update these Terms from time to time',
                  'Material changes will be communicated via in-app notification or email',
                  'Continued use of the App after changes constitutes acceptance',
                  'If you disagree with updated Terms, you must stop using the App',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 18: Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  18. Contact <span className="gradient-text">Us</span>
                </h2>
              </div>
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 mb-6">For questions about these Terms:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Company</p>
                    <p className="font-medium text-slate-900 dark:text-white">Curanova</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-medium text-primary-600 dark:text-primary-400">legal@curanova.ai</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Address</p>
                    <p className="font-medium text-slate-900 dark:text-white">[Registered company address]</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
