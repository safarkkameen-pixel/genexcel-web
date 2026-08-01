'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/CTASection';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

// Dynamic imports for heavy components
const AnimatedBackground = dynamic(
  () => import('@/components/animations/AnimatedBackground').then((mod) => mod.AnimatedBackground),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import('@/components/animations/AnimatedBackground').then((mod) => mod.CursorGlow),
  { ssr: false }
);

export default function HomePage() {
  // Enable smooth scrolling
  useSmoothScroll();

  return (
    <>
      {/* Global effects */}
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />

      <main className="relative">
        {/* Hero Section with 3D DNA */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing */}
        <PricingSection />

        {/* Final CTA */}
        <CTASection />
      </main>
    </>
  );
}
