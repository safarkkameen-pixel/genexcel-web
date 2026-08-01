'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { footerLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: siteConfig.links.instagram, icon: Instagram },
  { name: 'Twitter', href: siteConfig.links.twitter, icon: Twitter },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

function NewsletterForm() {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
      <p className="text-slate-400 text-sm mb-4">
        Get the latest health tips, product updates, and exclusive offers.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
        />
        <Button size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
          Subscribe
        </Button>
      </form>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const isDark = useTheme();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="container-custom">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo - always use dark logo in footer since background is dark */}
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo-dark.png"
                alt="GenExcel AI"
                className="h-20 w-auto"
              />
            </Link>

            <p className="text-slate-400 mb-6 max-w-sm">
              Transforming pediatric healthcare through genomics, AI, and personalized wellness for children ages 4-18.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <NewsletterForm />

            {/* App download */}
            <div className="lg:text-right">
              <h4 className="text-white font-semibold mb-4">Download the App</h4>
              <div className="flex gap-4 lg:justify-end">
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    className="h-12"
                  />
                </a>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="mailto:genexcel@curanova.ai" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              genexcel@curanova.ai
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.name} by {siteConfig.creator}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
