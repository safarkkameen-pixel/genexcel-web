import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { PricingTable } from "@/components/content/PricingTable";
import { PricingTeaser } from "@/components/marketing/PricingTeaser/PricingTeaser";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/content/JsonLd";
import { pricingRows, pricingNote } from "@/content/data/pricing";
import { pricingTiers } from "@/content/data/pricingTiers";
import { faqItems } from "@/content/data/faq";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "BASIC vs PRO — genetics is the PRO differentiator. Every core learning, nutrition, fitness and health feature is included on both tiers.",
  path: "/pricing",
});

const pricingFaq = faqItems.filter((item) => item.category === "pricing");

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <Hero
        eyebrow="Pricing"
        heading="BASIC and PRO — genetics is the difference"
        subhead="Every account gets the AI tutor, textbook-grounded help, learning tools, nutrition, fitness and health tracking. PRO additionally unlocks the genetic report, genetic personalisation of the tutor, and genetic adjustments in nutrition and fitness."
        actions={
          <Button href="/get-the-app" variant="accent" size="lg">
            Get the app
          </Button>
        }
      />

      <Section spacing="lg">
        <SectionIntro
          align="center"
          eyebrow="Plans"
          heading="The tutor is free. The genome is the upgrade."
          subhead="Helix, diet plans and fitness tracking cost nothing. Add the genetic report when you're ready."
        />
        <ScrollReveal delay={100}>
          <PricingTeaser tiers={pricingTiers} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionIntro eyebrow="Feature breakdown" heading="Exactly what's included at each tier" />
        <PricingTable rows={pricingRows} />
        <Text tone="muted" size="sm" className={styles.note}>
          {pricingNote}
        </Text>
      </Section>

      <Section background="alt">
        <SectionIntro eyebrow="Pricing FAQ" heading="Common questions about plans and upgrading" />
        <div className={styles.faq}>
          <FAQAccordion items={pricingFaq} />
        </div>
      </Section>
    </>
  );
}
