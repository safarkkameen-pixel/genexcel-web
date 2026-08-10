import type { PricingTier } from "@/content/data/pricingTiers";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import styles from "./PricingTeaser.module.scss";

export function PricingTeaser({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className={styles.grid}>
      {tiers.map((tier) => (
        <div key={tier.name} className={[styles.card, tier.popular && styles.popular].filter(Boolean).join(" ")}>
          <div className={styles.head}>
            <span className={styles.name}>{tier.name}</span>
            {tier.popular && <Badge tone="violet">Popular</Badge>}
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>{tier.price}</span>
            <span className={styles.period}>{tier.period}</span>
          </div>

          <p className={styles.description}>{tier.description}</p>

          <ul className={styles.features}>
            {tier.features.map((feature) => (
              <li key={feature} className={styles.feature}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <Button href={tier.href} variant={tier.popular ? "primary" : "secondary"} size="md" className={styles.cta}>
            {tier.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
