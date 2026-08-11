import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { DeleteAccountForm } from "@/components/forms/DeleteAccountForm/DeleteAccountForm";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Delete Your Account",
  description: "Submit a request to permanently delete your GenExcel account and all associated data.",
  path: "/delete-account",
});

const warningItems = [
  "Your genomics reports and health data will be deleted",
  "Your profile and account information will be removed",
  "Active subscriptions will be cancelled (no refund)",
  "You will lose access to all GenExcel services",
];

export default function DeleteAccountPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Delete Account", path: "/delete-account" },
        ])}
      />

      <Hero
        eyebrow="Account Deletion"
        heading="Delete Your Account"
        subhead="Submit a request to permanently delete your GenExcel account and all associated data."
      />

      <Section spacing="md">
        <div className={styles.warningBox}>
          <Heading as="h3" size="heading-sm" className={styles.warningTitle}>
            This action is permanent and cannot be undone
          </Heading>
          <ol className={styles.warningList}>
            {warningItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <div className={styles.formWrap}>
          <Heading as="h2" size="display-md" className={styles.formTitle}>
            Request Deletion
          </Heading>
          <Text tone="muted" size="lg" className={styles.formIntro}>
            Fill out the form below to submit your account deletion request. Our team will process it
            within 7 business days.
          </Text>
          <DeleteAccountForm />
        </div>
      </Section>
    </>
  );
}
