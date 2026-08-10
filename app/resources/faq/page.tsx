import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/content/JsonLd";
import { faqItems, type FaqItem } from "@/content/data/faq";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Genetic-data safety, device compatibility, report accuracy, pricing and how sampling works — answered plainly.",
  path: "/resources/faq",
});

const categoryLabels: Record<FaqItem["category"], string> = {
  privacy: "Privacy & genetic data",
  accuracy: "Accuracy",
  devices: "Devices & wearables",
  pricing: "Pricing",
  sampling: "Sampling",
  general: "General",
};

const categories = Array.from(new Set(faqItems.map((item) => item.category)));

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "FAQ", path: "/resources/faq" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItems.map((item) => ({ question: item.question, answer: item.answer })))} />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Frequently asked questions
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          The questions families, schools and clinical partners ask most — about genetic-data safety,
          accuracy, devices, pricing and sampling.
        </Text>
      </Section>

      {categories.map((category) => (
        <Section key={category} background="alt" spacing="md">
          <Heading as="h2" size="display-md" className={styles.categoryTitle}>
            {categoryLabels[category]}
          </Heading>
          <div className={styles.faqWrap}>
            <FAQAccordion items={faqItems.filter((item) => item.category === category)} />
          </div>
        </Section>
      ))}
    </>
  );
}
