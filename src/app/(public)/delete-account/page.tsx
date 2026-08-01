'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  AlertTriangle,
  Trash2,
  CheckCircle,
  Mail,
} from 'lucide-react';

const deletionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  reason: z.string().optional(),
  message: z.string().optional(),
  confirm: z.literal(true, {
    errorMap: () => ({ message: 'You must confirm to proceed' }),
  }),
});

type DeletionFormData = z.infer<typeof deletionSchema>;

const reasonOptions = [
  { value: '', label: 'Select a reason (optional)' },
  { value: 'no-longer-use', label: 'I no longer use the app' },
  { value: 'privacy-concerns', label: 'Privacy concerns' },
  { value: 'switching-service', label: 'Switching to another service' },
  { value: 'too-many-notifications', label: 'Too many notifications' },
  { value: 'technical-issues', label: 'Technical issues' },
  { value: 'other', label: 'Other' },
];

const consequences = [
  'Your genomics reports and health data will be deleted',
  'Your profile and account information will be removed',
  'Active subscriptions will be cancelled (no refund)',
  'You will lose access to all GenExcel services',
];

export default function DeleteAccountPage() {
  useSmoothScroll();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DeletionFormData>({
    resolver: zodResolver(deletionSchema),
    defaultValues: {
      email: '',
      reason: '',
      message: '',
    },
  });

  const isConfirmed = watch('confirm');

  const onSubmit = async (data: DeletionFormData) => {
    setSubmitError('');
    try {
      const res = await fetch('/api/account-deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          reason: reasonOptions.find((r) => r.value === data.reason)?.label || undefined,
          message: data.message || undefined,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
        return;
      }

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError('Failed to submit request. Please try again later.');
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="danger" className="mb-6">
                <Trash2 className="h-3 w-3 mr-1" />
                Account Deletion
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <TextReveal>Delete Your</TextReveal>
              <br />
              <span className="text-red-600 dark:text-red-400">
                <TextReveal delay={0.3}>Account</TextReveal>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Submit a request to permanently delete your GenExcel account and all associated data.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="-mt-6 relative z-10 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="rounded-3xl border-2 border-red-200 dark:border-red-800/60 bg-red-50/80 dark:bg-red-950/30 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">
                      This action is permanent and cannot be undone
                    </h3>
                    <ul className="space-y-2">
                      {consequences.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-red-700 dark:text-red-300/90">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Request <span className="text-red-600 dark:text-red-400">Deletion</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Fill out the form below to submit your account deletion request.
                Our team will process it within 7 business days.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/50 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Request Received
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  We&apos;ve received your account deletion request.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  Our team will process it within 7 business days.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  A confirmation will be sent to your registered email.
                </p>
                <GlassCard className="inline-flex items-center gap-2 px-6 py-3">
                  <Mail className="h-4 w-4 text-primary-500" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Questions? Contact{' '}
                    <a
                      href="mailto:it@curanova.ai"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      it@curanova.ai
                    </a>
                  </span>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Registered Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/50 transition-all outline-none"
                    placeholder="Enter the email you used to sign up"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Reason for Deletion
                  </label>
                  <select
                    {...register('reason')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/50 transition-all outline-none appearance-none"
                  >
                    {reasonOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Comments */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/50 transition-all outline-none resize-none"
                    placeholder="Any additional feedback (optional)"
                  />
                </div>

                {/* Confirmation Checkbox */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('confirm')}
                      className="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-red-600 focus:ring-red-500 dark:bg-slate-800"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      I understand that this action is <strong className="text-red-600 dark:text-red-400">permanent and irreversible</strong>.
                      All my data, including genomics reports, health records, and account information will be permanently deleted.
                    </span>
                  </label>
                  {errors.confirm && (
                    <p className="mt-2 ml-8 text-sm text-red-500">{errors.confirm.message}</p>
                  )}
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-4">
                    <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                  </div>
                )}

                {/* Submit */}
                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={!isConfirmed}
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-red-500/30 hover:shadow-red-500/40 disabled:from-slate-400 disabled:to-slate-300 disabled:shadow-none"
                    rightIcon={<Trash2 className="h-5 w-5" />}
                  >
                    Submit Deletion Request
                  </Button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
