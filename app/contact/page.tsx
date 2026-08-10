import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { LeadForm } from "@/components/forms/LeadForm/LeadForm";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Reach GenExcel's sales, support, partnerships and grievance teams.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Contact us
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          Sales, support, partnerships, or a grievance about how your data has been handled — this form
          reaches our team either way. If your enquiry is a formal privacy grievance under the DPDP Act,
          say so in your message and it will be routed accordingly.
        </Text>
        <LeadForm formType="contact" />
      </Section>
    </>
  );
}
