import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Open roles and culture at CuraNovaAI, the team building GenExcel.",
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
        heading="Help build a platform that treats children's data with real care"
        subhead="We're a small team working on genomics, education and child safety at the same time — which means the engineering, product and design problems here are genuinely unusual."
      />

      <Section>
        <SectionIntro eyebrow="Open roles" heading="Nothing formally posted yet" />
        <Text tone="muted" className={styles.body}>
          We don&apos;t have specific role listings published on this page today. If you&apos;re interested in
          working on GenExcel — engineering, product, design, clinical or otherwise — reach out and tell us
          what you&apos;d want to work on.
        </Text>
        <Button href="/contact" variant="accent" size="md">
          Get in touch
        </Button>
      </Section>
    </>
  );
}
