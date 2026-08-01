'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { navItems } from '@/config/site';
import { cn } from '@/lib/utils';

function Logo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <img
        src={isDark ? '/images/logo-dark.png' : '/images/logo.png'}
        alt="GenExcel AI"
        className="h-16 w-auto"
      />
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
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => hasChildren && setIsOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
          isActive
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
            : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800'
        )}
      >
        {item.title}
        {hasChildren && (
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        )}
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 py-3 min-w-[280px]">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div className="font-medium text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {child.title}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {child.description}
                  </div>
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                <Logo />
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </button>
              </div>

              {/* Nav items */}
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
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
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
                              className="block px-4 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
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

              {/* CTAs */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full h-14 px-8 text-lg rounded-full font-semibold bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full h-14 px-8 text-lg rounded-full font-semibold border-2 border-primary-200 dark:border-primary-700 bg-white/80 dark:bg-slate-800/80 text-primary-700 dark:text-primary-300 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-slate-700 transition-all"
                >
                  Contact Sales
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm border-b border-slate-100/50 dark:border-slate-800/50'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-full transition-all"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-10 px-4 text-sm rounded-full font-semibold bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
