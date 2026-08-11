import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { PricingTeaser } from "@/components/marketing/PricingTeaser/PricingTeaser";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/content/JsonLd";
import { pricingTiers } from "@/content/data/pricingTiers";
import { pricingFaqItems } from "@/content/data/faq";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Start free, upgrade when you're ready. All plans include our mobile app with core features.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd
        data={faqJsonLd(pricingFaqItems.map((item) => ({ question: item.question, answer: item.answer })))}
      />

      <Hero
        eyebrow="Simple Pricing"
        heading="Choose the Perfect Plan for Your Family"
        subhead="Start free, upgrade when you're ready. All plans include our mobile app with core features."
      />

      <Section spacing="lg">
        <SectionIntro
          align="center"
          eyebrowTone="violet"
          eyebrow="Simple Pricing"
          heading="Choose Your Plan"
          subhead="Start free, upgrade when ready. All plans include the GenExcel app with core features."
        />
        <ScrollReveal delay={100}>
          <PricingTeaser tiers={pricingTiers} />
        </ScrollReveal>
        <ul className={styles.trustRow}>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
          <li>30-day money back</li>
        </ul>
      </Section>

      <Section background="alt">
        <SectionIntro
          align="center"
          eyebrow="FAQs"
          heading="Frequently Asked Questions"
          subhead="Everything you need to know about GenExcel pricing and plans."
        />
        <div className={styles.faq}>
          <FAQAccordion items={pricingFaqItems} />
        </div>
        <Text tone="muted" size="sm" className={styles.stillHaveQuestions}>
          Still have questions? <Link href="/contact">Contact our team →</Link>
        </Text>
      </Section>
    </>
  );
}
