import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/content/JsonLd";
import { faqItems } from "@/content/data/faq";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description: "Find answers to common questions about GenExcel, Helix, and how we handle your family's data.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }])} />
      <JsonLd data={faqJsonLd(faqItems.map((item) => ({ question: item.question, answer: item.answer })))} />

      <Hero
        eyebrow="FAQs"
        heading="Frequently Asked Questions"
        subhead="Find answers to common questions about GenExcel, Helix, and how we handle your family's data."
      />

      <Section spacing="md">
        <div className={styles.faqWrap}>
          <FAQAccordion items={faqItems} />
        </div>
        <Text tone="muted" size="sm" className={styles.stillHaveQuestions}>
          Still have questions? <Link href="/contact">Contact our team →</Link>
        </Text>
      </Section>
    </>
  );
}
