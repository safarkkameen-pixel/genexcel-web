'use client';

import { HeroSection } from '@/components/sections/home-v2/HeroSection';
import { AboutSection } from '@/components/sections/home-v2/AboutSection';
import { PlatformBento } from '@/components/sections/home-v2/PlatformBento';
import { ScienceSection } from '@/components/sections/home-v2/ScienceSection';
import { ReviewsSection } from '@/components/sections/home-v2/ReviewsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/home-v2/CTASection';

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <PlatformBento />
      <ScienceSection />
      <ReviewsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
