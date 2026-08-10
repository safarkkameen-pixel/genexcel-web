import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.scss";

/**
 * The one page on the site where a glitch effect is contextually safe —
 * isolated from any medical/genetic content, and a well-established
 * convention for 404s (plan §11.3, §11.4).
 */
export default function NotFound() {
  return (
    <Section spacing="lg">
      <div className={styles.wrapper}>
        <span className={styles.glitch} aria-hidden="true" data-text="404">
          404
        </span>
        <Heading as="h1" size="display-md" align="center">
          This page doesn&apos;t exist
        </Heading>
        <Text tone="muted" as="p">
          The page you were looking for may have moved, or the link may be out of date.
        </Text>
        <Button href="/" variant="accent" size="md">
          Back to the homepage
        </Button>
      </div>
    </Section>
  );
}
