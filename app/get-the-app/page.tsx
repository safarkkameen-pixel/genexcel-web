import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

const requirements = [
  {
    text: "iPhone with Apple Health, for wearable and activity integration",
    iconSrc: "/icons/devices/iphone-apple-health.png",
  },
  {
    text: "Android with Health Connect, for Samsung Health, Google Fit and Galaxy Watch support",
    iconSrc: "/icons/devices/android-health-connect.png",
  },
  {
    text: "An internet connection for report reading, Helix, and food-photo analysis",
    iconSrc: "/icons/devices/internet-connectivity.png",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Get the app",
  description: "Get the GenExcel mobile app for iPhone or Android.",
  path: "/get-the-app",
});

export default function GetTheAppPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get the app", path: "/get-the-app" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Get the GenExcel app
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          GenExcel runs on iPhone and Android. Public App Store and Google Play links will appear on this
          page as soon as they&apos;re live — in the meantime, request access and we&apos;ll get you set up
          directly.
        </Text>

        <div className={styles.requirements}>
          <Badge tone="indigo">Device requirements</Badge>
          <ul className={styles.list}>
            {requirements.map((item) => (
              <li key={item.text} className={styles.listItem}>
                <Image src={item.iconSrc} alt="" width={28} height={28} className={styles.listIcon} aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button href="/demo" size="lg">
          Request access
        </Button>
      </Section>
    </>
  );
}
