import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Log in",
  description: "Sign in to the GenExcel mobile app, or reach a staff/partner portal.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <Section spacing="md">
      <Heading as="h1" size="display-lg" className={styles.title}>
        Log in
      </Heading>
      <Text size="lg" tone="muted" className={styles.intro}>
        Where would you like to sign in?
      </Text>

      <div className={styles.grid}>
        <SpotlightCard>
          <h3 className={styles.cardTitle}>Parents &amp; students</h3>
          <p className={styles.cardBody}>Sign in from the GenExcel mobile app on your phone.</p>
          <Button href="/get-the-app" variant="secondary" size="sm">
            Get the app
          </Button>
        </SpotlightCard>

        <SpotlightCard>
          <h3 className={styles.cardTitle}>Teachers, counsellors &amp; administrators</h3>
          <p className={styles.cardBody}>
            Staff and partner portal addresses are provided directly to your organisation. If you need
            access or have lost your link, contact us.
          </p>
          <Button href="/contact" variant="secondary" size="sm">
            Contact us
          </Button>
        </SpotlightCard>
      </div>
    </Section>
  );
}
