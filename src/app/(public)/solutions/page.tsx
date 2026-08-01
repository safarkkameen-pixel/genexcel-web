'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import {
  Users,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const solutions = [
  {
    title: 'For Families',
    description: 'Unlock your child\'s genetic potential with personalized health insights, AI nutrition guidance, and cognitive development tools.',
    icon: Users,
    href: '/solutions/families',
    color: 'from-pink-500 to-rose-500',
    features: ['450+ Genetic Traits', 'AI NutriScan', '10 Brain Games', 'Health Tracking'],
  },
  {
    title: 'For Schools',
    description: 'Transform student health and learning outcomes with cognitive assessments, class analytics, and comprehensive wellness programs.',
    icon: GraduationCap,
    href: '/solutions/schools',
    color: 'from-blue-500 to-violet-500',
    features: ['Cognitive Assessments', 'Class Analytics', 'Progress Tracking', 'Parent Portal'],
  },
  {
    title: 'For Healthcare',
    description: 'Clinical-grade genetic testing and AI-powered insights for pediatric practices, hospitals, and genetic counselors.',
    icon: Stethoscope,
    href: '/solutions/healthcare',
    color: 'from-emerald-500 to-cyan-500',
    features: ['NABL Certified', 'EHR Integration', 'Clinical Reports', 'HIPAA Compliant'],
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="h-3 w-3 mr-1" />
              Solutions
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              <TextReveal>Personalized Health</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.2}>For Everyone</TextReveal>
              </span>
            </h1>

            <p className="text-xl text-slate-600">
              Whether you&apos;re a parent, school administrator, or healthcare provider, GenExcel has solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link key={solution.title} href={solution.href} className="block group">
                <GlassCard className="p-8 h-full" glow>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {solution.title}
                  </h2>

                  <p className="text-slate-600 mb-6">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Solution is Right for You?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect fit for your needs. Schedule a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 text-lg rounded-full font-semibold bg-white text-primary-700 hover:bg-white/90 shadow-xl transition-all"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
