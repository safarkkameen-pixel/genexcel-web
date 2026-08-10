'use client';

import Link from 'next/link';
import { footerLinks, siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-500 border-t border-slate-200 dark:bg-[#040D1F] dark:text-[#7C8BA5] dark:border-none">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-9 pt-10 pb-11">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-8 h-[34px] overflow-hidden flex-none">
                <img
                  src="/images/logo-dark.png"
                  alt="GenExcel AI"
                  className="h-[42px] block object-cover object-top"
                />
              </span>
              <span className="font-display text-base font-medium text-slate-900 dark:text-white">
                genexcel<span className="text-cyan-600 dark:text-[#22D3EE]">.ai</span>
              </span>
            </Link>
            <p className="text-[13.5px] leading-relaxed text-slate-500 dark:text-[#7C8BA5] max-w-[270px]">
              A genomics-led learning and wellness platform &mdash; pairing a genetic report with Helix, an AI tutor grounded in your child&rsquo;s own textbooks, plus nutrition and fitness guidance for the whole family.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-900 dark:text-white mb-4">Solutions</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.solutions.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13.5px] hover:text-cyan-600 dark:hover:text-[#67E8F9] transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-900 dark:text-white mb-4">Company</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13.5px] hover:text-cyan-600 dark:hover:text-[#67E8F9] transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-900 dark:text-white mb-4">Resources</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13.5px] hover:text-cyan-600 dark:hover:text-[#67E8F9] transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-900 dark:text-white mb-4">Legal</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13.5px] hover:text-cyan-600 dark:hover:text-[#67E8F9] transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200 dark:border-white/[.08] text-[12.5px] text-slate-400 dark:text-[#5C6E8C]">
          <span>&copy; {currentYear} {siteConfig.creator}. All rights reserved.</span>
          <span>Genetic analysis performed in ISO-certified partner laboratories.</span>
        </div>
      </div>
    </footer>
  );
}
