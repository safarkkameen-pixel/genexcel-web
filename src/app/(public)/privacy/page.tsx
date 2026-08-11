'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Shield,
  Eye,
  Database,
  Share2,
  Lock,
  Clock,
  UserCheck,
  Baby,
  Smartphone,
  Globe,
  RefreshCw,
  Mail,
} from 'lucide-react';


export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        icon={Shield}
        eyebrow="Your Privacy Matters"
        title={<>Privacy <GradientText>Policy</GradientText></>}
        subtitle="We are committed to protecting your privacy and ensuring transparency in how we handle your data."
      />

      {/* Intro */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Curanova (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the GenExcel mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this policy carefully. By using GenExcel, you consent to the data practices described in this policy.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  If you do not agree with the terms of this Privacy Policy, please do not access or use the App.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Information We Collect */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  1. Information We <span className="gradient-text">Collect</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* 1.1 Personal Information */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.1 Personal Information</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">When you create an account or use our services, we may collect:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Identity Data:</strong> First name, last name, date of birth, gender</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Contact Data:</strong> Email address, phone number, postal address (address line 1, address line 2, city, state, country, postal code)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Account Data:</strong> Email, password (hashed), account creation date, last login timestamp</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Profile Data:</strong> Profile picture, language preference, timezone</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 1.2 Health and Wellness Data */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.2 Health and Wellness Data</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">With your explicit consent, we collect:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Genomic Data:</strong> Genetic test results, trait analysis, genetic profiles, and lab results</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Health Measurements:</strong> Height, weight, BMI, blood pressure, heart rate, temperature, oxygen saturation, head circumference (for paediatric users)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Nutrition Data:</strong> Dietary logs (meal type, food items, macronutrients including calories, protein, carbohydrates, fats, and fibre), water intake records</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Activity Data:</strong> Activity type, duration, intensity, calories burned, distance, daily step count (via device pedometer)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Sleep Data:</strong> Sleep date, bedtime, wake time, sleep quality, interruptions</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 1.3 Telemedicine Data */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.3 Telemedicine Data</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">When you use our consultation services:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Consultation Records:</strong> Doctor details, consultation reason, session status, duration, timestamps</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Session Notes:</strong> Notes recorded by the consulting healthcare professional</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 1.4 AI Interaction Data */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.4 AI Interaction Data</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">NutriScan:</strong> Food images captured via camera for AI-powered nutritional analysis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Helix Chat:</strong> Conversational inputs and AI-generated health and nutrition guidance history</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 1.5 Device and Technical Data */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.5 Device and Technical Data</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">We automatically collect:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Device Information:</strong> Device type, operating system, OS version, app version, platform (Android/iOS)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Push Notification Tokens:</strong> Firebase Cloud Messaging (FCM) device token for delivering push notifications</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Authentication Tokens:</strong> JSON Web Tokens (JWT) stored securely on your device for session management</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 1.6 Authentication Data */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1.6 Authentication Data</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Google Sign-In:</strong> If you sign in with Google, we receive your name, email address, and profile picture from Google. We do not receive or store your Google password.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Phone Verification:</strong> Phone number verified via OTP (One-Time Password)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Email Verification:</strong> Email address verified via OTP</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Use Your Information */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  2. How We Use Your <span className="gradient-text">Information</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                      <th className="text-left px-6 py-4 font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Provide and maintain the App', 'Performance of contract'],
                      ['Create and manage your account', 'Performance of contract'],
                      ['Deliver personalised health insights and genetic trait analysis', 'Your explicit consent'],
                      ['Provide AI-powered nutritional analysis (NutriScan)', 'Your explicit consent'],
                      ['Enable telemedicine consultations', 'Performance of contract'],
                      ['Track health metrics (activity, sleep, nutrition)', 'Your explicit consent'],
                      ['Send push notifications (reminders, updates, alerts)', 'Your consent (configurable)'],
                      ['Improve our services and develop new features', 'Legitimate interest'],
                      ['Respond to your enquiries and provide support', 'Performance of contract'],
                      ['Ensure security and prevent fraud', 'Legitimate interest'],
                      ['Comply with legal obligations', 'Legal obligation'],
                    ].map(([purpose, basis], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{purpose}</td>
                        <td className="px-6 py-4">
                          <Badge variant={basis === 'Your explicit consent' ? 'success' : basis === 'Performance of contract' ? 'default' : basis === 'Legitimate interest' ? 'warning' : 'secondary'} size="sm">
                            {basis}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Data Sharing and Disclosure */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  3. Data Sharing and <span className="gradient-text">Disclosure</span>
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We do <strong className="text-slate-900 dark:text-white">not</strong> sell your personal data to third parties. We may share your information in the following circumstances:
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">3.1 Third-Party Service Providers</h3>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Service Provider</th>
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                      <th className="text-left px-6 py-4 font-semibold">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Google Firebase', 'Push notifications, crash reporting', 'Device token, platform info'],
                      ['Google Sign-In', 'Authentication', 'Name, email (during OAuth flow)'],
                      ['Google Gemini AI (Vertex AI)', 'Food image analysis (NutriScan)', 'Food images (processed via our backend)'],
                      ['OpenAI', 'Helix Chat AI assistant', 'Conversation text (processed via our backend)'],
                      ['Telemedicine Service', 'Video consultations', 'Patient name, consultation details'],
                    ].map(([provider, purpose, data], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{provider}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{purpose}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-6" glow>
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Important:</strong> All AI processing (Gemini, OpenAI) is routed through our secure backend servers. Your data is never sent directly from your device to third-party AI providers. All API keys are stored server-side.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3.2 Other Disclosures</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">We may disclose your information:</p>
              <div className="space-y-3">
                {[
                  'When required by law, regulation, or legal process',
                  'To protect the rights, property, or safety of Curanova, our users, or others',
                  'In connection with a merger, acquisition, or sale of assets (with prior notice to you)',
                  'With your explicit consent for research purposes (anonymised and aggregated data only)',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Data Security */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  4. Data <span className="gradient-text">Security</span>
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We implement robust security measures to protect your information:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Encryption in Transit', desc: 'All data transmitted between the App and our servers uses HTTPS/TLS encryption', color: 'from-blue-500 to-cyan-500' },
                { title: 'Encryption at Rest', desc: 'Personal and health data is encrypted using industry-standard AES-256 encryption on our servers', color: 'from-green-500 to-emerald-500' },
                { title: 'Secure Token Storage', desc: "Authentication tokens (JWT) are stored using the device's secure keychain (iOS) or encrypted shared preferences (Android) via Expo SecureStore", color: 'from-violet-500 to-purple-500' },
                { title: 'No PII in Local Storage', desc: 'Personal Identifiable Information is held in memory only during active sessions and is not persisted to unencrypted local storage', color: 'from-amber-500 to-orange-500' },
                { title: 'Access Controls', desc: 'Strict role-based access controls on our backend systems', color: 'from-red-500 to-pink-500' },
                { title: 'Regular Security Audits', desc: 'We conduct periodic security assessments of our infrastructure', color: 'from-teal-500 to-cyan-500' },
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

      {/* Section 5: Data Retention */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  5. Data <span className="gradient-text">Retention</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                { title: 'Active Accounts', desc: 'Your data is retained for as long as your account is active and as needed to provide our services.' },
                { title: 'Account Deletion', desc: 'Upon requesting account deletion, your account enters a 30-day grace period. During this period, you can cancel the deletion request. After 30 days, all personal data is permanently and irreversibly deleted from our systems.' },
                { title: 'Health Data', desc: 'Health measurements, activity logs, nutrition logs, and sleep data are retained for as long as your account is active. You may delete individual records at any time.' },
                { title: 'AI Interaction Data', desc: 'Chat history and NutriScan analysis logs are retained for service improvement and can be cleared by you at any time.' },
                { title: 'Telemedicine Records', desc: 'Consultation records are retained as required by applicable healthcare regulations.' },
                { title: 'Push Notification Tokens', desc: 'Device tokens are deactivated upon logout and deleted upon account deletion.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Your Rights */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  6. Your <span className="gradient-text">Rights</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: 'Right to Access', desc: 'Request a copy of all personal data we hold about you' },
                { title: 'Right to Rectification', desc: "Update or correct your personal information through the App's Edit Profile feature" },
                { title: 'Right to Erasure', desc: 'Request deletion of your account and all associated data (30-day grace period applies)' },
                { title: 'Right to Data Portability', desc: 'Export all your data in a downloadable format (ZIP file sent to your registered email)' },
                { title: 'Right to Withdraw Consent', desc: 'Withdraw consent for data processing at any time through Settings' },
                { title: 'Right to Restrict Processing', desc: 'Request limitation of how we process your data' },
                { title: 'Right to Object', desc: 'Object to data processing based on legitimate interest' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-6" glow>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">How to exercise your rights:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="default" size="sm">In-App</Badge>
                    <p className="text-slate-600 dark:text-slate-300">Settings &gt; Privacy &amp; Data &gt; Download My Data (for export) or Settings &gt; Delete Account (for erasure)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="default" size="sm">Email</Badge>
                    <p className="text-slate-600 dark:text-slate-300">privacy@curanova.ai</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Children's Privacy */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
                  <Baby className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  7. Children&apos;s <span className="gradient-text">Privacy</span>
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  GenExcel may be used by parents/guardians to manage the health data of their children (care seekers). We collect children&apos;s data only with verifiable parental/guardian consent. Parents have full control over their children&apos;s data, including the ability to view, modify, export, and delete it.
                </p>
                <p>
                  We do not knowingly collect personal information from children under the age of 13 (or applicable age in your jurisdiction) without parental consent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Device Permissions */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  8. Device <span className="gradient-text">Permissions</span>
                </h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Permission</th>
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                      <th className="text-left px-6 py-4 font-semibold">Required?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['Camera', 'NutriScan food scanning, profile picture capture', 'Optional'],
                      ['Microphone', 'Voice input for Gene AI Assistant', 'Optional'],
                      ['Activity Recognition / Motion', 'Step counter and physical activity tracking', 'Optional'],
                      ['Push Notifications', 'Receiving health reminders, updates, and alerts', 'Optional'],
                    ].map(([perm, purpose, required], index) => (
                      <tr key={index} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{perm}</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{purpose}</td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary" size="sm">{required}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
                You can revoke any permission at any time through your device settings. Revoking a permission will disable the associated feature but will not affect other App functionality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: International Data Transfers */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  9. International Data <span className="gradient-text">Transfers</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our servers are located in India (AWS Mumbai region). If you access the App from outside this region, your data may be transferred to and processed in the country where our servers are located. We ensure appropriate safeguards are in place for any international data transfers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Changes + Section 11: Contact */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  10. Changes to This <span className="gradient-text">Policy</span>
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  'The "Last Updated" date at the top will be revised',
                  'For significant changes, we will notify you via in-app notification or email',
                  'Continued use of the App after changes constitutes acceptance of the updated policy',
                  'If you do not agree with the changes, you should stop using the App and delete your account',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  11. Contact <span className="gradient-text">Us</span>
                </h2>
              </div>
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 mb-6">If you have questions or concerns about this Privacy Policy or our data practices:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Company</p>
                    <p className="font-medium text-slate-900 dark:text-white">Curanova</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-medium text-primary-600 dark:text-primary-400">privacy@curanova.ai</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Address</p>
                    <p className="font-medium text-slate-900 dark:text-white">[Registered company address]</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Data Protection Officer</p>
                    <p className="font-medium text-slate-900 dark:text-white">[DPO name and contact]</p>
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
