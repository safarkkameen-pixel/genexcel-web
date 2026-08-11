import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { healthWellnessFeatures } from "@/content/data/healthWellness";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Health & Wellness",
  description:
    "The adult, body-centred product: activity rings, step and sleep tracking, wearable integration, diet planning, gym programming and body metrics — with genetic adjustments where it matters.",
  path: "/health-wellness",
});

export default function HealthWellnessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Health & Wellness", path: "/health-wellness" },
        ])}
      />

      <Hero
        eyebrow="Product · Health & Wellness"
        heading="Body-centred wellness, with your genetics working quietly underneath"
        subhead="Activity rings, step and sleep tracking, wearable integration, diet planning, gym programming and body metrics — for adults, and as a companion product for families using School Genomics."
        ambient
        actions={
          <>
            <Button href="/get-the-app" size="lg">
              Get the app
            </Button>
            <Button href="/science" variant="secondary" size="lg">
              See the science
            </Button>
          </>
        }
      />

      <Section>
        <SectionIntro
          eyebrow="What's inside"
          heading="Activity, nutrition, fitness and health tracking that actually connects"
          subhead="A connected smartwatch always wins over the phone's step count, so you see your real numbers — and every plan carries genetic adjustments where the report supports them."
        />
        <ScrollReveal>
          <MagicBento items={healthWellnessFeatures} />
        </ScrollReveal>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Setup"
          heading="A nine-step wizard, then you're in"
          subhead="Welcome, about you, body metrics, primary goal, target health area, current activity level, training experience, health-app connection, and a summary. The health-app connection step is optional and can be done later."
        />
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
