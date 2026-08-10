import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Features } from "@/components/marketing/Features/Features";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel/TestimonialCarousel";
import { PricingTeaser } from "@/components/marketing/PricingTeaser/PricingTeaser";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { howItWorksHome } from "@/content/data/howItWorksHome";
import { testimonials } from "@/content/data/testimonials";
import { pricingTiers } from "@/content/data/pricingTiers";
import { landingFinalCta } from "@/content/data/cta";
import { buildMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "One genetic report. A tutor, a diet plan and a coach.",
  description:
    "1,020+ genetic traits, an AI tutor grounded in your child's own textbooks, and daily nutrition and fitness guidance — all from one saliva sample.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />

      <Hero
        topography
        eyebrow="Genomics-led learning"
        heading="One genetic report. A tutor, a diet plan and a coach."
        subhead="1,020+ genetic traits, an AI tutor grounded in your child's own textbooks, and daily nutrition and fitness guidance — all from one saliva sample."
        imageAspectRatio="21/10"
        imageSrc="/hero.png"
        caption="DPDP compliant · Analysis in ISO-certified accredited laboratories · Building since 2019"
        actions={
          <>
            <Button href="/helix" variant="accent" size="lg">
              Meet Helix, the AI tutor
            </Button>
            <Button href="/science" variant="ghost" size="lg">
              Explore the traits →
            </Button>
          </>
        }
      />

      <Section spacing="lg">
        <Features />
      </Section>

      <Section background="alt" spacing="lg">
        <SectionIntro
          eyebrow="How it works"
          heading="The science behind our service"
          subhead="From one saliva sample to a tutor that teaches differently — accredited lab sequencing paired with a reading engine that checks its own work four ways."
        />
        <div className={styles.stepsGrid}>
          {howItWorksHome.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <Text size="sm" tone="faint">
                {step.text}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="lg">
        <SectionIntro eyebrow="Families & clinicians" heading="What parents notice first." />
        <div className={styles.testimonials}>
          <TestimonialCarousel testimonials={testimonials.slice(0, 2)} />
        </div>
      </Section>

      <Section background="alt" spacing="lg">
        <SectionIntro
          align="center"
          eyebrow="Pricing"
          heading="The tutor is free. The genome is the upgrade."
          subhead="Helix, diet plans and fitness tracking cost nothing. Add the genetic report when you're ready."
        />
        <div className={styles.pricing}>
          <PricingTeaser tiers={pricingTiers} />
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={landingFinalCta} />
      </Section>
    </>
  );
}
