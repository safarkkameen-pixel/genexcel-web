import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/marketing/TrustStrip/TrustStrip";
import { LongFormLayout } from "@/components/content/LongFormLayout";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { trustSections } from "@/content/data/trust";
import { trustCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Trust, Privacy & Child Safety",
  description:
    "GenExcel processes genetic data belonging mostly to children in India. Here is exactly how that shapes the product — anonymised sample codes, AI that stays in India, layered consent, and what a child is never shown.",
  path: "/trust",
});

const childNeverSeesItems = [
  "Disease-risk genetic traits and addiction-susceptibility results",
  "Mental-health-related traits",
  "Any score or label from the learning-style assessment",
  "Any statement that genetics informed a teaching decision",
  "A fabricated quiz score, even if they ask for one",
];

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
        <div className={styles.childNeverSees}>
          <div className={styles.childNeverSeesText}>
            <Badge tone="violet" className={styles.eyebrow}>
              Deliberately Withheld
            </Badge>
            <Heading as="h2" size="display-lg" className={styles.sectionHeading}>
              What a Child Never Sees
            </Heading>
            <Text size="lg" tone="muted" className={styles.paragraph}>
              Not every part of a genetic report belongs in front of a child. Parents and genetic
              counsellors see the complete picture, correctly framed — a child sees a curated,
              encouraging one.
            </Text>
            <ul className={styles.list}>
              {childNeverSeesItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <Heading as="h3" size="heading-sm" className={styles.cardTitle}>
              What we&apos;re still finishing
            </Heading>
            <Text tone="muted" className={styles.cardBody}>
              In the same spirit of saying plainly what&apos;s live and what isn&apos;t: consent is
              captured and recorded across the platform today, but the switch that would automatically
              refuse a request from someone who hasn&apos;t completed consent is still being rolled out —
              turning it on before every existing account has finished the consent flow would risk
              locking people out of their own data. It&apos;s the next compliance milestone we&apos;re
              closing.
            </Text>
            <Text tone="muted" className={styles.cardBody}>
              We&apos;d rather tell you that directly than let a glossy privacy page imply everything is
              already switched on.
            </Text>
          </div>
        </div>
      </Section>

      <Section background="alt" spacing="md">
        <div className={styles.formalDocs}>
          <Heading as="h3" size="heading-sm" className={styles.formalDocsTitle}>
            Want the formal documents?
          </Heading>
          <Text tone="muted" size="lg" className={styles.paragraph}>
            This page explains our approach in plain language. For the legal detail, read our full
            Privacy Policy and our DPDP Act compliance notice.
          </Text>
          <div className={styles.legalButtons}>
            <Button href="/privacy" variant="secondary" size="md">
              Privacy Policy
            </Button>
            <Button href="/dpdp" variant="secondary" size="md">
              DPDP Compliance
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="md">
        <div className={styles.legalLinks}>
          <Text tone="muted">Read the full legal documents:</Text>
          <div className={styles.legalButtons}>
            <Button href="/privacy" variant="secondary" size="sm">
              Privacy Policy
            </Button>
            <Button href="/terms" variant="secondary" size="sm">
              Terms of Service
            </Button>
            <Button href="/cookies" variant="secondary" size="sm">
              Cookie Policy
            </Button>
            <Button href="/dpdp" variant="secondary" size="sm">
              DPDP Compliance
            </Button>
            <Button href="/delete-account" variant="secondary" size="sm">
              Delete Account
            </Button>
          </div>
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={trustCta} />
      </Section>
    </>
  );
}
