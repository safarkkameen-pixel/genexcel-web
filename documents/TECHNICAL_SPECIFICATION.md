# GenExcel.ai Website Technical Specification

## Overview

This document outlines the technical architecture, development stack, and implementation guidelines for the GenExcel.ai marketing website.

---

## 1. Technology Stack

### 1.1 Frontend Framework

**Recommended: Next.js 14+ (App Router)**

```json
{
  "name": "genexcel-website",
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

**Rationale:**
- Server-side rendering (SSR) for SEO
- Static site generation (SSG) for performance
- App Router for modern React patterns
- Built-in image optimization
- Edge runtime support
- Excellent developer experience

### 1.2 Styling

**Primary: Tailwind CSS v3.4+**

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

**Additional:**
- `clsx` or `tailwind-merge` for conditional classes
- `@tailwindcss/forms` for form element styling
- `@tailwindcss/typography` for prose content

### 1.3 Animation

**Framer Motion**

```json
{
  "dependencies": {
    "framer-motion": "^10.16.0"
  }
}
```

**Use Cases:**
- Page transitions
- Scroll animations
- Component mount/unmount
- Interactive elements
- Hero animations

### 1.4 Icons

**Lucide React**

```json
{
  "dependencies": {
    "lucide-react": "^0.300.0"
  }
}
```

### 1.5 Forms & Validation

```json
{
  "dependencies": {
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0"
  }
}
```

### 1.6 Data Fetching

**Tanstack Query (React Query)**

```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.0.0"
  }
}
```

### 1.7 CMS Integration

**Option A: Contentful (Recommended)**
```json
{
  "dependencies": {
    "contentful": "^10.0.0"
  }
}
```

**Option B: Sanity.io**
```json
{
  "dependencies": {
    "@sanity/client": "^6.0.0",
    "@sanity/image-url": "^1.0.0",
    "next-sanity": "^7.0.0"
  }
}
```

### 1.8 Analytics

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.0.0",
    "mixpanel-browser": "^2.48.0"
  }
}
```

---

## 2. Project Structure

```
genexcel-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-image.jpg
│   │   └── ...
│   ├── fonts/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                 # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── solutions/
│   │   │   │   ├── families/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── schools/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── healthcare/
│   │   │   │       └── page.tsx
│   │   │   ├── science/
│   │   │   │   └── page.tsx
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (resources)/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── faqs/
│   │   │   │   └── page.tsx
│   │   │   ├── help/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (legal)/
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx
│   │   │   ├── terms/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   ├── newsletter/
│   │   │   │   └── route.ts
│   │   │   └── revalidate/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── toast.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── container.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── pricing-table.tsx
│   │   │   ├── cta.tsx
│   │   │   └── faq-accordion.tsx
│   │   ├── marketing/
│   │   │   ├── feature-card.tsx
│   │   │   ├── stat-counter.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   └── pricing-card.tsx
│   │   ├── forms/
│   │   │   ├── contact-form.tsx
│   │   │   ├── newsletter-form.tsx
│   │   │   └── demo-request-form.tsx
│   │   └── shared/
│   │       ├── logo.tsx
│   │       ├── icon.tsx
│   │       ├── image.tsx
│   │       ├── link.tsx
│   │       └── seo.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── cn.ts
│   │   ├── contentful.ts
│   │   ├── analytics.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── use-scroll.ts
│   │   ├── use-media-query.ts
│   │   └── use-intersection.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── contentful.ts
│   └── config/
│       ├── site.ts
│       ├── navigation.ts
│       └── seo.ts
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Configuration Files

### 3.1 Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Contentful
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
  redirects: async () => [
    // Add redirects as needed
  ],
};

module.exports = nextConfig;
```

### 3.2 Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        accent: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        malayalam: ['Noto Sans Malayalam', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'primary': '0 4px 14px 0 rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

### 3.3 TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/types/*": ["./src/types/*"],
      "@/config/*": ["./src/config/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 4. Core Components

### 4.1 Button Component

```typescript
// src/components/ui/button.tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 active:scale-[0.98]',
        secondary:
          'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
        ghost:
          'text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

### 4.2 Card Component

```typescript
// src/components/ui/card.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'elevated';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-white',
          {
            'shadow-card p-6': variant === 'default',
            'shadow-card-hover p-8 bg-gradient-to-br from-primary-50 to-white':
              variant === 'feature',
            'shadow-xl p-6': variant === 'elevated',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-slate-600', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
```

### 4.3 Input Component

```typescript
// src/components/ui/input.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            'flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-150',
            'hover:border-slate-400',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-slate-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
```

---

## 5. Layout Components

### 5.1 Header Component

```typescript
// src/components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Container } from './container';
import { cn } from '@/lib/cn';
import { navigation } from '@/config/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.mainNav.map((item) => (
              <NavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navigation={navigation}
            pathname={pathname}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
```

### 5.2 Footer Component

```typescript
// src/components/layout/footer.tsx
import Link from 'next/link';
import { Container } from './container';
import { Logo } from '@/components/shared/logo';
import { footerNavigation } from '@/config/navigation';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Logo variant="white" />
              <p className="mt-4 text-slate-400 max-w-md">
                Transforming pediatric healthcare through genomics, AI, and
                personalized wellness for children ages 4-18.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {Object.entries(footerNavigation).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {category}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-slate-400 hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* App Download */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
            <p className="text-slate-400">Download the GenExcel app:</p>
            <div className="flex gap-4">
              <a href="#" className="block">
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} GenExcel.ai by CuraNova. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

---

## 6. API Routes

### 6.1 Contact Form API

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(['general', 'sales', 'support', 'partnership', 'media']),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send to email service (SendGrid, etc.)
    // await sendEmail(data);

    // Store in CRM (HubSpot, etc.)
    // await createContact(data);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### 6.2 Newsletter Subscription API

```typescript
// src/app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = newsletterSchema.parse(body);

    // Add to Mailchimp/SendGrid list
    // await addSubscriber(email, { source });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 7. SEO Implementation

### 7.1 Metadata Configuration

```typescript
// src/config/seo.ts
import { Metadata } from 'next';

export const siteConfig = {
  name: 'GenExcel.ai',
  description:
    'The AI-powered pediatric health platform that combines genetic insights with personalized nutrition, brain games, and wellness tracking for children ages 4-18.',
  url: 'https://genexcel.ai',
  ogImage: 'https://genexcel.ai/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/genexcel',
    linkedin: 'https://linkedin.com/company/genexcel',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Pediatric Health & Genomics Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'pediatric health',
    'genetic testing for children',
    'child nutrition app',
    'brain games for kids',
    'personalized health',
    'genomics',
  ],
  authors: [{ name: 'GenExcel.ai' }],
  creator: 'CuraNova',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@genexcel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};
```

### 7.2 Dynamic Sitemap

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/contentful';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://genexcel.ai';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/solutions/families',
    '/solutions/schools',
    '/solutions/healthcare',
    '/science',
    '/pricing',
    '/contact',
    '/blog',
    '/faqs',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog posts
  const blogPosts = await getAllBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogRoutes];
}
```

---

## 8. Performance Optimization

### 8.1 Image Optimization

```typescript
// src/components/shared/image.tsx
import NextImage, { ImageProps } from 'next/image';
import { cn } from '@/lib/cn';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9';
}

export function OptimizedImage({
  alt,
  aspectRatio,
  className,
  ...props
}: OptimizedImageProps) {
  const aspectClasses = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '21:9': 'aspect-[21/9]',
  };

  return (
    <div className={cn('relative overflow-hidden', aspectRatio && aspectClasses[aspectRatio])}>
      <NextImage
        alt={alt}
        className={cn('object-cover', className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
}
```

### 8.2 Font Optimization

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

---

## 9. Analytics Integration

### 9.1 Analytics Provider

```typescript
// src/components/analytics-provider.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import mixpanel from 'mixpanel-browser';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Mixpanel
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!, {
      debug: process.env.NODE_ENV === 'development',
    });
  }, []);

  useEffect(() => {
    // Track page views
    const url = pathname + searchParams.toString();
    mixpanel.track('Page View', { url });
  }, [pathname, searchParams]);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
```

### 9.2 Event Tracking Utility

```typescript
// src/lib/analytics.ts
import mixpanel from 'mixpanel-browser';

type EventName =
  | 'CTA Clicked'
  | 'Form Submitted'
  | 'Demo Requested'
  | 'App Download Clicked'
  | 'Newsletter Subscribed'
  | 'Feature Explored';

interface EventProperties {
  [key: string]: string | number | boolean;
}

export function trackEvent(name: EventName, properties?: EventProperties) {
  if (typeof window !== 'undefined') {
    mixpanel.track(name, properties);

    // Also send to GA4 if configured
    if (window.gtag) {
      window.gtag('event', name, properties);
    }
  }
}
```

---

## 10. Deployment

### 10.1 Vercel Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 10.2 Environment Variables

```bash
# .env.example

# Site
NEXT_PUBLIC_SITE_URL=https://genexcel.ai

# CMS
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
CONTENTFUL_REVALIDATE_SECRET=

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_MIXPANEL_TOKEN=

# Email
SENDGRID_API_KEY=

# CRM
HUBSPOT_API_KEY=
```

---

## 11. Testing Strategy

### 11.1 Unit Testing (Vitest)

```typescript
// src/components/ui/__tests__/button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### 11.2 E2E Testing (Playwright)

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Unlock Your Child');
    await expect(page.getByRole('link', { name: /get started/i })).toBeVisible();
  });

  test('should navigate to pricing page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Pricing');
    await expect(page).toHaveURL('/pricing');
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/contact');
    await page.fill('[name="name"]', 'Test User');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="message"]', 'Test message for the contact form.');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-message')).toBeVisible();
  });
});
```

---

## 12. Accessibility Checklist

- [ ] All images have alt text
- [ ] Semantic HTML structure (header, main, nav, footer, article, section)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] ARIA labels on icon-only buttons
- [ ] Skip to main content link
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Reduced motion preference is respected
- [ ] Language attribute set on html element
- [ ] Heading hierarchy is logical (h1 → h2 → h3)

---

*Last updated: 2026-01-10*
