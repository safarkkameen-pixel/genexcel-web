# GenExcel.ai - Next.js Super Appealing Website Specification

## Technology Stack: Next.js 14+ (Mandatory)

This document specifies the Next.js implementation and advanced visual effects required to create a **stunning, world-class website** for GenExcel.ai.

---

## 1. Core Technology Stack

### 1.1 Framework & Runtime

```json
{
  "name": "genexcel-website",
  "version": "1.0.0",
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0"
  }
}
```

**Why Next.js 14+:**
- App Router for modern React Server Components
- Streaming SSR for fast initial page loads
- Built-in Image & Font optimization
- Edge Runtime for global performance
- Incremental Static Regeneration (ISR)
- Parallel Routes for complex layouts
- Server Actions for form handling

### 1.2 Complete Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",

    "framer-motion": "^11.0.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.100.0",
    "three": "^0.162.0",

    "gsap": "^3.12.0",
    "@gsap/react": "^2.1.0",
    "lenis": "^1.0.0",

    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.10",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",

    "lucide-react": "^0.350.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-tabs": "^1.0.4",

    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",

    "@tanstack/react-query": "^5.20.0",
    "contentful": "^10.6.0",

    "@vercel/analytics": "^1.2.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/three": "^0.162.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.1.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.11"
  }
}
```

---

## 2. Super Appealing Visual Features

### 2.1 Hero Section - 3D DNA Animation

**Effect:** A stunning 3D DNA helix that rotates slowly, with particles flowing around it. The DNA responds to mouse movement (parallax).

```typescript
// src/components/hero/HeroDNA.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  // Create DNA double helix geometry
  const { positions, colors } = useMemo(() => {
    const points: number[] = [];
    const cols: number[] = [];
    const numPoints = 200;

    for (let i = 0; i < numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 4;
      const radius = 2;

      // First strand
      points.push(
        Math.cos(t) * radius,
        (i / numPoints) * 10 - 5,
        Math.sin(t) * radius
      );
      cols.push(0.15, 0.39, 0.92); // Primary blue

      // Second strand (offset by PI)
      points.push(
        Math.cos(t + Math.PI) * radius,
        (i / numPoints) * 10 - 5,
        Math.sin(t + Math.PI) * radius
      );
      cols.push(0.05, 0.65, 0.83); // Cyan accent
    }

    return {
      positions: new Float32Array(points),
      colors: new Float32Array(cols)
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <Sparkles
        count={100}
        scale={10}
        size={2}
        speed={0.3}
        color="#60A5FA"
      />
    </group>
  );
}

export function HeroDNA() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAHelix />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
```

### 2.2 Smooth Scroll with Lenis

**Effect:** Buttery smooth scrolling that feels premium and high-end.

```typescript
// src/components/providers/SmoothScroll.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

### 2.3 Scroll-Triggered Animations with GSAP

**Effect:** Elements animate in beautifully as user scrolls, with staggered reveals.

```typescript
// src/hooks/useScrollAnimation.ts
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fade up animation
    gsap.fromTo(
      element.querySelectorAll('.animate-in'),
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
}
```

### 2.4 Glassmorphism Cards

**Effect:** Modern frosted glass effect cards with blur and subtle borders.

```typescript
// src/components/ui/GlassCard.tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base glassmorphism
        'relative overflow-hidden rounded-3xl',
        'bg-white/70 dark:bg-slate-900/70',
        'backdrop-blur-xl backdrop-saturate-150',
        'border border-white/20 dark:border-slate-700/50',
        'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',

        // Hover effects
        hover && [
          'transition-all duration-500 ease-out',
          'hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]',
          'hover:border-primary-200/50',
          'hover:-translate-y-1',
          'hover:bg-white/80 dark:hover:bg-slate-900/80',
        ],

        // Gradient overlay
        'before:absolute before:inset-0',
        'before:bg-gradient-to-br before:from-white/10 before:to-transparent',
        'before:pointer-events-none',

        className
      )}
    >
      {children}
    </div>
  );
}
```

### 2.5 Animated Gradient Background

**Effect:** Slowly morphing gradient that creates a living, breathing feel.

```typescript
// src/components/ui/AnimatedGradient.tsx
'use client';

import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />

      {/* Animated blobs */}
      <motion.div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-200/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary-200/40 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-200/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
```

### 2.6 Magnetic Buttons

**Effect:** Buttons that subtly follow the cursor when hovered, creating a magnetic pull effect.

```typescript
// src/components/ui/MagneticButton.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
```

### 2.7 Text Reveal Animation

**Effect:** Text reveals character by character or word by word with a beautiful stagger.

```typescript
// src/components/ui/TextReveal.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

### 2.8 Animated Counter

**Effect:** Numbers count up when they scroll into view, with easing.

```typescript
// src/components/ui/AnimatedCounter.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
```

### 2.9 Parallax Scroll Effect

**Effect:** Elements move at different speeds creating depth as user scrolls.

```typescript
// src/components/ui/Parallax.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
```

### 2.10 Cursor Glow Effect

**Effect:** A subtle glow follows the cursor across the page.

```typescript
// src/components/ui/CursorGlow.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.06), transparent 40%)`,
      }}
    >
      <motion.div
        className="absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/10 blur-3xl"
        style={{ x, y }}
      />
    </motion.div>
  );
}
```

---

## 3. Page Layouts

### 3.1 Homepage Layout

```typescript
// src/app/page.tsx
import { Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { CTASection } from '@/components/sections/CTASection';
import { AnimatedGradient } from '@/components/ui/AnimatedGradient';
import { CursorGlow } from '@/components/ui/CursorGlow';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <AnimatedGradient />

      <main className="relative">
        <HeroSection />

        <Suspense fallback={<SectionSkeleton />}>
          <StatsSection />
        </Suspense>

        <FeaturesSection />

        <HowItWorksSection />

        <TestimonialsSection />

        <PricingPreview />

        <CTASection />
      </main>
    </>
  );
}
```

### 3.2 Hero Section Component

```typescript
// src/components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { HeroDNA } from '@/components/hero/HeroDNA';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TextReveal } from '@/components/ui/TextReveal';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D DNA Background */}
      <HeroDNA />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-100/80 backdrop-blur-sm px-4 py-2 text-primary-700 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered Pediatric Health Platform
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            <TextReveal>
              Unlock Your Child's
            </TextReveal>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              <TextReveal delay={0.3}>
                Genetic Potential
              </TextReveal>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The AI-powered platform combining genetic insights with personalized
            nutrition, brain games, and health tracking for children ages 4-18.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton className="group relative overflow-hidden rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:shadow-xl hover:shadow-primary-600/40">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-[length:200%_100%] animate-shimmer" />
            </MagneticButton>

            <MagneticButton className="group flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-primary-300 hover:bg-primary-50">
              <Play className="h-5 w-5 text-primary-600" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>450+ Genetic Traits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>10 Brain Games</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>AI-Powered Nutrition</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span>50+ Partner Schools</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="h-12 w-6 rounded-full border-2 border-slate-300 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### 3.3 Features Section with Bento Grid

```typescript
// src/components/sections/FeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Dna, Brain, Camera, Heart, Video, Users,
  Sparkles, TrendingUp, Shield
} from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: '450+ Genetic Traits',
    description: 'Comprehensive DNA analysis across 34 health categories',
    color: 'from-blue-500 to-cyan-500',
    size: 'large',
  },
  {
    icon: Brain,
    title: '10 Brain Games',
    description: 'Scientifically designed cognitive development games',
    color: 'from-purple-500 to-pink-500',
    size: 'medium',
  },
  {
    icon: Camera,
    title: 'AI NutriScan',
    description: 'Instant nutrition analysis from food photos',
    color: 'from-green-500 to-emerald-500',
    size: 'medium',
  },
  {
    icon: Heart,
    title: 'Health Tracking',
    description: '13 vital metrics with trend visualization',
    color: 'from-red-500 to-orange-500',
    size: 'small',
  },
  {
    icon: Video,
    title: 'Telemedicine',
    description: 'Video consultations with specialists',
    color: 'from-indigo-500 to-blue-500',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Family Dashboard',
    description: 'Manage multiple children from one account',
    color: 'from-teal-500 to-cyan-500',
    size: 'small',
  },
];

export function FeaturesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in">
          <motion.span
            className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything Your Child Needs
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            One platform for genetic insights, AI nutrition, brain development,
            and comprehensive health tracking.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`animate-in ${
                feature.size === 'large'
                  ? 'md:col-span-2 lg:col-span-2'
                  : feature.size === 'medium'
                  ? 'md:col-span-1'
                  : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-8 group cursor-pointer">
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center
                  w-14 h-14 rounded-2xl mb-6
                  bg-gradient-to-br ${feature.color}
                  shadow-lg
                  transition-transform duration-300
                  group-hover:scale-110 group-hover:rotate-3
                `}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary-600 font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn more
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 3.4 Stats Section with Animated Counters

```typescript
// src/components/sections/StatsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { GlassCard } from '@/components/ui/GlassCard';

const stats = [
  { value: 10000, suffix: '+', label: 'Families Trust Us' },
  { value: 450, suffix: '+', label: 'Genetic Traits Analyzed' },
  { value: 50, suffix: '+', label: 'Partner Schools' },
  { value: 99, suffix: '%', label: 'Parent Satisfaction' },
];

export function StatsSection() {
  return (
    <section className="py-20 relative -mt-20 z-10">
      <div className="container mx-auto px-6">
        <GlassCard className="p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
```

---

## 4. Tailwind CSS Configuration

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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/patterns/hero-pattern.svg')",
      },
      boxShadow: {
        'glow': '0 0 40px rgba(37, 99, 235, 0.15)',
        'glow-lg': '0 0 60px rgba(37, 99, 235, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(37, 99, 235, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
```

---

## 5. Global Styles

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-slate-900 antialiased;
  }

  /* Custom selection color */
  ::selection {
    @apply bg-primary-200 text-primary-900;
  }
}

@layer components {
  /* Glassmorphism utility */
  .glass {
    @apply bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/20;
  }

  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent;
  }

  /* Animated gradient border */
  .gradient-border {
    @apply relative;
  }
  .gradient-border::before {
    content: '';
    @apply absolute inset-0 rounded-inherit p-[2px];
    background: linear-gradient(
      135deg,
      theme('colors.primary.500'),
      theme('colors.secondary.500'),
      theme('colors.accent.500'),
      theme('colors.primary.500')
    );
    background-size: 300% 300%;
    animation: gradient 4s ease infinite;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  /* Section padding */
  .section-padding {
    @apply py-20 md:py-32;
  }
}

@layer utilities {
  /* Hide scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Text balance */
  .text-balance {
    text-wrap: balance;
  }

  /* Animation delays */
  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-300 { animation-delay: 300ms; }
  .animation-delay-500 { animation-delay: 500ms; }
}
```

---

## 6. Visual Appeal Checklist

### Must-Have Effects:

- [x] **3D DNA Hero Animation** - Three.js/React Three Fiber
- [x] **Smooth Scrolling** - Lenis
- [x] **Scroll Animations** - GSAP ScrollTrigger
- [x] **Glassmorphism Cards** - Backdrop blur + transparency
- [x] **Animated Gradient Backgrounds** - Framer Motion
- [x] **Magnetic Buttons** - Cursor-following interaction
- [x] **Text Reveal Animations** - Word-by-word stagger
- [x] **Animated Counters** - Number counting on scroll
- [x] **Parallax Effects** - Multi-layer depth
- [x] **Cursor Glow Effect** - Following ambient light
- [x] **Micro-interactions** - Hover, focus, active states
- [x] **Loading Animations** - Skeleton loaders, spinners
- [x] **Page Transitions** - Smooth cross-page animations

### Design Quality Standards:

- [ ] Minimum 60fps for all animations
- [ ] Mobile-first responsive design
- [ ] Touch-friendly interactions (44px min tap targets)
- [ ] Reduced motion support for accessibility
- [ ] Dark mode support (future)
- [ ] Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1)

---

## 7. Inspiration References

For visual direction, reference these award-winning websites:

1. **Linear.app** - Clean, gradient-heavy SaaS design
2. **Stripe.com** - Sophisticated animations and interactions
3. **Vercel.com** - Modern developer-focused aesthetic
4. **Raycast.com** - Beautiful glassmorphism and micro-interactions
5. **Loom.com** - Friendly, approachable tech product
6. **Notion.so** - Clean illustration style
7. **Figma.com** - Playful yet professional

---

*This specification ensures GenExcel.ai will have a super appealing, world-class website built with Next.js 14+ and modern web technologies.*

*Last Updated: 2026-01-10*
