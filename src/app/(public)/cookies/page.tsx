'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Cookie,
  Globe,
  Smartphone,
  Bell,
  Settings,
  EyeOff,
  RefreshCw,
  Mail,
  Lock,
  Database,
  Shield,
} from 'lucide-react';


export default function CookiePolicyPage() {
  return (
    <main>
      <PageHero
        icon={Cookie}
        eyebrow="Transparency"
        title={<>Cookie <GradientText>Policy</GradientText></>}
        subtitle="This policy explains how we use cookies and similar technologies on the GenExcel website and in relation to the GenExcel mobile application."
      />

      {/* Section 1: What Are Cookies */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  1. What Are <span className="gradient-text">Cookies?</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and enhance user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Cookies on Our Website */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  2. Cookies on Our <span className="gradient-text">Website</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our website (genexcel.ai) uses the following types of cookies:
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* 2.1 Strictly Necessary */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2.1 Strictly Necessary Cookies</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">These cookies are essential for the website to function and cannot be switched off.</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Cookie</th>
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Purpose</th>
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        <tr className="bg-white dark:bg-slate-800/50">
                          <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">Session cookies</td>
                          <td className="px-6 py-3 text-slate-600 dark:text-slate-300">Maintain your browsing session</td>
                          <td className="px-6 py-3"><Badge variant="secondary" size="sm">Session</Badge></td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-800/50">
                          <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">Security cookies</td>
                          <td className="px-6 py-3 text-slate-600 dark:text-slate-300">Prevent cross-site request forgery (CSRF)</td>
                          <td className="px-6 py-3"><Badge variant="secondary" size="sm">Session</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 2.2 Functional Cookies */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2.2 Functional Cookies</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">These cookies enable enhanced functionality and personalisation.</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Cookie</th>
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Purpose</th>
                          <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        <tr className="bg-white dark:bg-slate-800/50">
                          <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">Language preference</td>
                          <td className="px-6 py-3 text-slate-600 dark:text-slate-300">Remember your preferred language</td>
                          <td className="px-6 py-3"><Badge variant="default" size="sm">1 year</Badge></td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-800/50">
                          <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">Theme preference</td>
                          <td className="px-6 py-3 text-slate-600 dark:text-slate-300">Remember light/dark mode selection</td>
                          <td className="px-6 py-3"><Badge variant="default" size="sm">1 year</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 2.3 Analytics + 2.4 Third-Party */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2.3 Analytics Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">We currently do not use analytics cookies on our website.</p>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2.4 Third-Party Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300">We currently do not use third-party cookies on our website.</p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cookies and the Mobile App */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  3. Cookies and the <span className="gradient-text">Mobile App</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The GenExcel mobile application does <strong className="text-slate-900 dark:text-white">not</strong> use traditional browser cookies. Instead, the App uses the following local storage technologies:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Lock,
                  title: 'Expo SecureStore',
                  purpose: 'Secure authentication',
                  data: 'JWT access and refresh tokens (encrypted)',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Database,
                  title: 'AsyncStorage',
                  purpose: 'App preferences and state',
                  data: 'Non-PII settings: biometric preference, cached role flags, legal consent status, notification preferences',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: Shield,
                  title: 'In-Memory State',
                  purpose: 'Active session data',
                  data: 'User profile data (held in memory only, not persisted to disk)',
                  color: 'from-violet-500 to-purple-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" glow>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{item.purpose}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.data}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Key points about App data storage:</h4>
                <div className="space-y-3">
                  {[
                    'No PII is persisted to unencrypted local storage on your device',
                    'Authentication tokens are stored using platform-native secure storage (iOS Keychain / Android EncryptedSharedPreferences)',
                    'All locally stored data is cleared upon logout',
                    'Legal consent records are cached locally and synced with our backend',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <p className="text-slate-600 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Firebase and Push Notifications */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  4. Firebase and <span className="gradient-text">Push Notifications</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The App uses Firebase Cloud Messaging (FCM) for push notifications. Firebase may store:
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Data</th>
                      <th className="text-left px-6 py-4 font-semibold">Purpose</th>
                      <th className="text-left px-6 py-4 font-semibold">Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="bg-white dark:bg-slate-800/50">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">FCM device token</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Delivering push notifications to your device</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Deactivated on logout; deleted on account deletion</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800/50">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Platform and app version</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Ensuring compatibility of notifications</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Automatically collected</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Firebase does <strong className="text-slate-700 dark:text-slate-200">not</strong> use cookies within the mobile app context. For Firebase&apos;s privacy practices, see{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Google&apos;s Privacy Policy
                </a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: How to Manage Cookies */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  5. How to Manage <span className="gradient-text">Cookies</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 5.1 Website Cookies */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">5.1 Website Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">You can control and manage cookies through your browser settings:</p>
                  <div className="space-y-3">
                    {[
                      { browser: 'Chrome', path: 'Settings > Privacy and Security > Cookies and other site data' },
                      { browser: 'Firefox', path: 'Settings > Privacy & Security > Cookies and Site Data' },
                      { browser: 'Safari', path: 'Preferences > Privacy > Manage Website Data' },
                      { browser: 'Edge', path: 'Settings > Cookies and site permissions' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Badge variant="secondary" size="sm" className="flex-shrink-0 mt-0.5">{item.browser}</Badge>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.path}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                    Blocking essential cookies may affect website functionality.
                  </p>
                </GlassCard>
              </motion.div>

              {/* 5.2 Mobile App Storage */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">5.2 Mobile App Storage</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">You can manage App data storage through:</p>
                  <div className="space-y-3">
                    {[
                      { action: 'Logout', desc: 'Clears all in-memory personal data and deactivates push notification tokens' },
                      { action: 'Delete Account', desc: 'Permanently removes all data from our servers (30-day grace period) and clears all local storage' },
                      { action: 'Device Settings', desc: 'Revoke individual app permissions (camera, microphone, notifications, activity recognition)' },
                      { action: 'Clear App Data', desc: "Through your device's application settings (this will log you out)" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Badge variant="default" size="sm" className="flex-shrink-0 mt-0.5">{item.action}</Badge>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Do Not Track */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                  <EyeOff className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  6. Do Not Track <span className="gradient-text">(DNT)</span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  'The GenExcel App does not use behavioural tracking or targeted advertising',
                  'We do not employ any third-party analytics SDKs (no Sentry, Amplitude, Mixpanel, Segment, or Google Analytics) within the mobile app',
                  'We respect Do Not Track signals from browsers on our website',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                      <EyeOff className="h-3 w-3 text-green-600" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Updates + Section 8: Contact */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Updates */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  7. Updates to This <span className="gradient-text">Policy</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                We may update this Cookie Policy to reflect changes in technology or legal requirements. The latest version will always be available at genexcel.ai/cookies.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  8. Contact <span className="gradient-text">Us</span>
                </h2>
              </div>
              <GlassCard className="p-8" glow>
                <p className="text-slate-600 dark:text-slate-300 mb-6">For questions about this Cookie Policy:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
