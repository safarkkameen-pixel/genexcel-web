import type { CtaBand } from "@/content/data/cta";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Magnet } from "@/components/react-bits/Magnet/Magnet";
import styles from "./CTABand.module.scss";

/**
 * Reusable conversion band, data-driven from content/data/cta.ts. The
 * primary button is Magnet-wrapped — magnetic pull is reserved for
 * primary conversion actions only (plan §16).
 */
export function CTABand({ data }: { data: CtaBand }) {
  return (
    <div className={styles.band}>
      {data.eyebrow && (
        <Badge tone="violet" inverse>
          {data.eyebrow}
        </Badge>
      )}
      <Heading as="h2" size="display-lg" align="center" className={styles.heading}>
        {data.headline}
      </Heading>
      <Text size="lg" tone="inverse-muted" className={styles.body}>
        {data.body}
      </Text>
      <div className={styles.actions}>
        <Magnet>
          <Button href={data.primaryCta.href} variant="primary" size="lg">
            {data.primaryCta.label}
          </Button>
        </Magnet>
        {data.secondaryCta && (
          <Button href={data.secondaryCta.href} variant="ghost" size="lg">
            {data.secondaryCta.label}
          </Button>
        )}
      </div>
    </div>
  );
}
