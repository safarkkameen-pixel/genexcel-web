import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ContactForm } from "@/components/forms/ContactForm/ContactForm";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Have questions about GenExcel? Our team is here to help.",
  path: "/contact",
});

const infoCards = [
  {
    title: "Email Us",
    body: "Our team will respond within 24 hours",
    value: "info@genexcel.ai",
    href: "mailto:info@genexcel.ai",
  },
  {
    title: "Call Us",
    body: "Mon-Fri from 9am to 6pm IST",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    title: "Visit Us",
    body: "Our headquarters",
    value: "Bangalore, India",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Hero
        eyebrow="Get in Touch"
        heading="We'd Love to Hear From You"
        subhead="Have questions about GenExcel? Our team is here to help."
      />

      <Section spacing="md">
        <div className={styles.infoGrid}>
          {infoCards.map((card) =>
            card.href ? (
              <a key={card.title} href={card.href} className={styles.infoCardLink}>
                <SpotlightCard>
                  <h3 className={styles.infoTitle}>{card.title}</h3>
                  <p className={styles.infoBody}>{card.body}</p>
                  <p className={styles.infoValue}>{card.value}</p>
                </SpotlightCard>
              </a>
            ) : (
              <SpotlightCard key={card.title}>
                <h3 className={styles.infoTitle}>{card.title}</h3>
                <p className={styles.infoBody}>{card.body}</p>
                <p className={styles.infoValue}>{card.value}</p>
              </SpotlightCard>
            )
          )}
        </div>
      </Section>

      <Section background="alt">
        <div className={styles.formWrap}>
          <Heading as="h2" size="display-md" className={styles.formTitle}>
            Send Us a Message
          </Heading>
          <Text tone="muted" size="lg" className={styles.formIntro}>
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </Text>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
