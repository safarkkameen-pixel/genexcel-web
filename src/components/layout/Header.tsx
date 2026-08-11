'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { navItems } from '@/config/site';
import { cn } from '@/lib/utils';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="block w-[34px] h-9 overflow-hidden flex-none">
        <img
          src="/images/logo-dark.png"
          alt="GenExcel AI"
          className="h-[45px] block object-cover object-top"
        />
      </span>
      <span className="font-display text-lg font-medium tracking-[0.01em] text-slate-900 dark:text-white">
        genexcel<span className="text-cyan-600 dark:text-[#22D3EE]">.ai</span>
      </span>
    </Link>
  );
}

function NavItem({
  item,
  pathname,
}: {
  item: (typeof navItems)[0];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  // Close on navigation — this component persists across route changes
  // (Header lives in the layout), so local state must reset itself.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Click-outside / Escape close, for the click-to-toggle dropdown below.
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const triggerClassName = cn(
    'flex items-center gap-1.5 px-3 py-2.5 rounded-full text-[13.5px] font-medium whitespace-nowrap transition-all duration-200',
    isActive
      ? 'bg-slate-100 text-slate-900 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.06] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/20 dark:text-white'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#C7D2E5] dark:hover:bg-transparent dark:hover:bg-gradient-to-br dark:hover:from-white/[.16] dark:hover:to-white/[.06] dark:hover:backdrop-blur-2xl dark:hover:backdrop-saturate-150 dark:hover:text-white'
  );

  if (!hasChildren) {
    return (
      <Link href={item.href} className={triggerClassName}>
        {item.title}
      </Link>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className={cn(triggerClassName, 'cursor-pointer')}
      >
        {item.title}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2.5 z-50 w-[330px]"
          >
            <div className="bg-white border border-slate-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-[#081226]/[.72] dark:backdrop-blur-3xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-[0_18px_44px_rgba(0,0,0,.45)] rounded-[20px] p-2.5 flex flex-col gap-0.5">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-transparent dark:hover:bg-gradient-to-br dark:hover:from-white/[.16] dark:hover:to-[#22D3EE]/10"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{child.title}</div>
                  <div className="text-[12.5px] text-slate-500 dark:text-[#8B9AB5] leading-snug">{child.description}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-[#040D1F] shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10">
                <Logo />
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="h-6 w-6 text-slate-600 dark:text-[#C7D2E5]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 rounded-xl font-medium transition-colors',
                          pathname === item.href
                            ? 'bg-slate-100 text-cyan-600 dark:bg-white/10 dark:text-[#67E8F9]'
                            : 'text-slate-600 hover:bg-slate-50 dark:text-[#C7D2E5] dark:hover:bg-white/5'
                        )}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block px-4 py-2 text-sm text-slate-500 hover:text-cyan-600 rounded-lg hover:bg-slate-50 dark:text-[#8B9AB5] dark:hover:text-[#67E8F9] dark:hover:bg-white/5"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full h-14 px-8 text-lg rounded-full font-semibold text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full h-14 px-8 text-lg rounded-full font-semibold text-slate-700 bg-white border border-slate-300 dark:text-[#E9F4FF] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-white/[.05] dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[80] bg-white/80 backdrop-blur-[30px] backdrop-saturate-150 border-b border-slate-200 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[.07] dark:to-[#01060F]/[.66] dark:border-white/10"
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-[76px] gap-6">
            <Logo />

            <div className="hidden lg:flex items-center gap-0.5 min-w-0">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2.5">
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-3 py-2.5 text-[13.5px] font-semibold text-slate-600 hover:text-slate-900 dark:text-[#C7D2E5] dark:hover:text-white rounded-full transition-all"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-[42px] px-5 rounded-full text-[13.5px] font-semibold whitespace-nowrap text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md hover:opacity-90 dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36] dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-slate-600 dark:text-[#C7D2E5]" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
