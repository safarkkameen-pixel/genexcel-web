import { personas } from "@/content/data/personas";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import styles from "./PersonaTeaserGrid.module.scss";

/** "Who it's for" teaser grid — Families / Schools / Clinicians, used on Homepage. */
export function PersonaTeaserGrid() {
  return (
    <div className={styles.grid}>
      {personas.map((persona) => (
        <SpotlightCard key={persona.slug}>
          <div className={styles.card}>
            <Heading as="h3" size="heading-sm">
              {persona.eyebrow}
            </Heading>
            <Text tone="muted" className={styles.intro}>
              {persona.intro}
            </Text>
            <Button href={`/${persona.slug}`} variant="secondary" size="sm">
              Learn more
            </Button>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
