import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Press & Media",
  description: "News, updates, and media resources from GenExcel.",
  path: "/press",
});

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Press", path: "/press" },
        ])}
      />

      <Hero
        eyebrow="Press"
        heading="Press & Media"
        subhead="News, updates, and media resources from GenExcel."
      />

      <Section spacing="lg">
        <div className={styles.card}>
          <SpotlightCard>
            <Heading as="h2" size="display-md" align="center" className={styles.cardTitle}>
              Coming Soon
            </Heading>
            <Text tone="muted" size="lg" className={styles.cardBody}>
              Our press and media kit is being prepared. For press inquiries, please contact us directly.
            </Text>
            <Button href="/contact" variant="primary" size="md">
              Press Inquiries
            </Button>
          </SpotlightCard>
        </div>
      </Section>
    </>
  );
}
