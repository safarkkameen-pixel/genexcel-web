import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Blog & guides, FAQ, glossary and help centre for GenExcel families, schools and clinicians.",
  path: "/resources",
});

const resources = [
  { title: "Blog & guides", href: "/blog", body: "Explainers on genomics, learning and wellness." },
  { title: "FAQs", href: "/faqs", body: "Genetic-data safety, accuracy, devices, pricing and sampling." },
  { title: "Glossary", href: "/resources/glossary", body: "Every GenExcel term, defined plainly." },
  { title: "Help Center", href: "/help", body: "Onboarding, account, consent and troubleshooting." },
];

export default function ResourcesPage() {
  return (
    <Section spacing="md">
      <Heading as="h1" size="display-lg" className={styles.title}>
        Resources
      </Heading>
      <Text size="lg" tone="muted" className={styles.intro}>
        Guides, answers and definitions — everything drawn from the same source of truth as the rest of
        this site.
      </Text>
      <div className={styles.grid}>
        {resources.map((resource) => (
          <SpotlightCard key={resource.href}>
            <h3 className={styles.cardTitle}>{resource.title}</h3>
            <p className={styles.cardBody}>{resource.body}</p>
            <Button href={resource.href} variant="secondary" size="sm">
              Open
            </Button>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
