'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building,
  Users,
  Headphones,
  CheckCircle,
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.enum(['general', 'sales', 'support', 'partnership', 'media']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team will respond within 24 hours',
    value: 'info@genexcel.ai',
    href: 'mailto:info@genexcel.ai',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm IST',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters',
    value: 'Bangalore, India',
    href: '#',
  },
];

const departments = [
  { value: 'general', label: 'General Inquiry', icon: MessageSquare },
  { value: 'sales', label: 'Sales & Pricing', icon: Building },
  { value: 'support', label: 'Technical Support', icon: Headphones },
  { value: 'partnership', label: 'Partnerships', icon: Users },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: 'general',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <main>
      <PageHero
        icon={MessageSquare}
        eyebrow="Get in Touch"
        title={<>We&apos;d Love to <GradientText>Hear From You</GradientText></>}
        subtitle="Have questions about GenExcel? Our team is here to help."
      />

      {/* Contact Cards */}
      <section className="-mt-10 relative z-10 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full" glow>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA] mb-4 shadow-lg">
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display font-light text-slate-900 dark:text-white mb-1">{info.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{info.description}</p>
                  <p className="text-cyan-600 dark:text-[#22D3EE] font-medium">{info.value}</p>
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-light text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
                Send Us a <GradientText>Message</GradientText>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
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
                <h3 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Thank you for reaching out. We&apos;ll respond within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {departments.map((dept) => (
                      <label
                        key={dept.value}
                        className="relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={dept.value}
                          {...register('subject')}
                          className="peer sr-only"
                        />
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-slate-200 bg-white dark:border-white/20 dark:bg-white/5 peer-checked:border-cyan-500 peer-checked:bg-cyan-50 dark:peer-checked:border-[#22D3EE] dark:peer-checked:bg-[#22D3EE]/10 hover:border-slate-300 dark:hover:border-white/30 transition-all">
                          <dept.icon className="h-6 w-6 text-slate-400 dark:text-slate-500 peer-checked:text-cyan-600 dark:peer-checked:text-[#22D3EE]" />
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{dept.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:focus:border-[#22D3EE] dark:focus:ring-0 transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:focus:border-[#22D3EE] dark:focus:ring-0 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:focus:border-[#22D3EE] dark:focus:ring-0 transition-all outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:focus:border-[#22D3EE] dark:focus:ring-0 transition-all outline-none resize-none"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="xl"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="h-5 w-5" />}
                  >
                    Send Message
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
