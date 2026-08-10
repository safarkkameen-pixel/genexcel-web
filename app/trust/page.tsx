import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/marketing/TrustStrip/TrustStrip";
import { LongFormLayout } from "@/components/content/LongFormLayout";
import { DifferentiatorGrid } from "@/components/marketing/DifferentiatorGrid/DifferentiatorGrid";
import { JsonLd } from "@/components/content/JsonLd";
import { trustSections } from "@/content/data/trust";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Trust, Privacy & Child Safety",
  description:
    "GenExcel processes genetic data belonging mostly to children in India. Here is exactly how that shapes the product — anonymised sample codes, AI that stays in India, layered consent, and what a child is never shown.",
  path: "/trust",
});

/**
 * Deliberately the calmest page on the site — no ambient background,
 * no ScrollReveal, no hero mask animation (plan §11.1, §16). A worried
 * parent or a compliance reviewer should be able to read this without
 * distraction.
 */
export default function TrustPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust & Privacy", path: "/trust" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.pageTitle}>
          Trust, Privacy &amp; Child Safety
        </Heading>
        <Text size="lg" tone="muted" className={styles.pageIntro}>
          GenExcel processes genetic data belonging mostly to children in India. This single fact shapes
          more of the product than any other requirement, and this page describes the resulting
          protections in plain, functional terms — not just as policy, but as things you can point to in
          the product itself.
        </Text>
        <div className={styles.strip}>
          <TrustStrip />
        </div>
      </Section>

      <Section background="alt">
        <LongFormLayout sections={trustSections}>
          {trustSections.map((section) => (
            <div key={section.id} id={section.id}>
              <Heading as="h2" size="display-md" className={styles.sectionTitle}>
                {section.title}
              </Heading>
              {section.body.map((paragraph, index) => (
                <Text key={index} tone="muted" size="lg" className={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
            </div>
          ))}
        </LongFormLayout>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Why this matters"
          heading="The differentiators this design makes possible"
        />
        <DifferentiatorGrid usedOn="trust" />
      </Section>

      <Section background="alt" spacing="md">
        <div className={styles.legalLinks}>
          <Text tone="muted">Read the full legal documents:</Text>
          <div className={styles.legalButtons}>
            <Button href="/legal/privacy-policy" variant="secondary" size="sm">
              Privacy Policy
            </Button>
            <Button href="/legal/terms-of-service" variant="secondary" size="sm">
              Terms of Service
            </Button>
            <Button href="/legal/disclaimer" variant="secondary" size="sm">
              Disclaimer
            </Button>
            <Button href="/legal/consent-and-data" variant="secondary" size="sm">
              Consent &amp; Data
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
