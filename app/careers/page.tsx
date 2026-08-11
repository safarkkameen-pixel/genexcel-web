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
  title: "Careers",
  description: "We're building the future of pediatric healthcare. Our careers page is coming soon.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <Hero
        eyebrow="Careers"
        heading="Join Our Mission"
        subhead="We're building the future of pediatric healthcare. Our careers page is coming soon."
      />

      <Section spacing="lg">
        <div className={styles.card}>
          <SpotlightCard>
            <Heading as="h2" size="display-md" align="center" className={styles.cardTitle}>
              Coming Soon
            </Heading>
            <Text tone="muted" size="lg" className={styles.cardBody}>
              We&apos;re preparing exciting opportunities to join our team. In the meantime, feel free to
              reach out to us directly if you&apos;re passionate about transforming pediatric healthcare.
            </Text>
            <Button href="/contact" variant="primary" size="md">
              Get in Touch
            </Button>
          </SpotlightCard>
        </div>
      </Section>
    </>
  );
}
