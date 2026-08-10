'use client';

import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero, GradientText } from '@/components/ui/PageHero';
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
    description: 'A household account for every child, with Helix — an AI tutor grounded in their own textbooks — plus a genetic report that shapes their nutrition and fitness plans.',
    icon: Users,
    href: '/solutions/families',
    features: ['Helix AI Tutor', 'Genetic Report', 'Nutrition & Fitness', 'Family Account'],
  },
  {
    title: 'For Schools',
    description: 'School Genomics brings health camps, per-student learning profiles for teachers, and an AI lesson generator to your campus — with Helix available to every student at home.',
    icon: GraduationCap,
    href: '/solutions/schools',
    features: ['Health Camps', 'Teacher Learning Profiles', 'Lesson Generator', 'Helix at Home'],
  },
  {
    title: 'For Healthcare',
    description: 'A genetic counsellor workspace, telehealth scheduling, and lab report verification built for pediatric practices, hospitals, and counsellors.',
    icon: Stethoscope,
    href: '/solutions/healthcare',
    features: ['NABL Certified Labs', 'Counsellor Workspace', 'Telehealth Booking', 'DPDP Compliant'],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        icon={Sparkles}
        eyebrow="Solutions"
        title={<>Personalized Health <GradientText>For Everyone</GradientText></>}
        subtitle="Whether you're a parent, school administrator, or healthcare provider, GenExcel has solutions tailored to your needs."
      />

      {/* Solutions Grid */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link key={solution.title} href={solution.href} className="block group">
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09] mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="h-8 w-8 text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
                  </div>

                  <h2 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-[#22D3EE] transition-colors">
                    {solution.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/[.08] text-slate-600 dark:text-[#8B9AB5] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-600 dark:text-[#22D3EE] font-semibold group-hover:gap-3 gap-2 transition-all">
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
          <h2 className="font-display font-light text-3xl md:text-4xl mb-6">
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
