'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, GraduationCap, Users } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const GROUPS = [
  {
    icon: Users,
    iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-600 dark:bg-[#22D3EE]/[.14] dark:border-[#22D3EE]/[.28] dark:text-[#67E8F9]',
    linkColor: 'text-cyan-600 dark:text-[#22D3EE]',
    title: 'For families',
    href: '/solutions/families',
    points: [
      'One household account for up to five children',
      'Consent you grant, and can withdraw, at any time',
      'Direct access to a genetic counsellor',
    ],
  },
  {
    icon: GraduationCap,
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-[#60A5FA]/[.14] dark:border-[#60A5FA]/[.28] dark:text-[#93C5FD]',
    linkColor: 'text-blue-600 dark:text-[#60A5FA]',
    title: 'For schools',
    href: '/solutions/schools',
    points: [
      'On-campus health camps with collection kits',
      'School Genomics learning profiles for teachers',
      'Cohort-level reporting, privacy-safe by design',
    ],
  },
];

export function FamiliesSchoolsSection() {
  return (
    <section id="families-schools" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[600px] mx-auto mb-11"
        >
          <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE] mb-4">Families &amp; schools</div>
          <h2
            className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.16]"
            style={{ fontSize: 'clamp(26px,3.2vw,38px)' }}
          >
            One platform, two audiences.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard className="p-8">
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl border mb-5 ${group.iconBg}`}>
                  <group.icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-[19px] font-medium text-slate-900 dark:text-white mb-3.5">{group.title}</h3>
                <div className="flex flex-col gap-[11px] mb-6">
                  {group.points.map((point) => (
                    <div key={point} className="flex gap-2.5 text-[13.5px] leading-[1.5] text-slate-600 dark:text-[#8B9AB5]">
                      <Check className="h-[15px] w-[15px] mt-0.5 flex-none text-cyan-600 dark:text-[#22D3EE]" strokeWidth={2.6} />
                      {point}
                    </div>
                  ))}
                </div>
                <Link href={group.href} className={`inline-flex items-center gap-2 text-sm font-semibold ${group.linkColor}`}>
                  {group.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
