import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { LeadForm } from "@/components/forms/LeadForm/LeadForm";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Book a demo",
  description: "Book a GenExcel demo for your school or clinical practice.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book a demo", path: "/demo" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Book a demo
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          For schools and clinical partners. Tell us a little about your organisation, and we&apos;ll walk
          you through a live demonstration — including a real laboratory report read in front of you.
        </Text>
        <LeadForm
          formType="demo"
          messageLabel="Tell us about your school or clinic"
          messagePlaceholder="Number of students or patients, which board/syllabus or specialty, and what you'd like to see..."
          submitLabel="Request a demo"
        />
      </Section>
    </>
  );
}
