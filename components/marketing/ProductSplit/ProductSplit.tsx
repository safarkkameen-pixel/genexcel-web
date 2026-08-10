import { products } from "@/content/data/products";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import styles from "./ProductSplit.module.scss";

/** "Two products, one platform" side-by-side split — Guide §2.3, used on Homepage. */
export function ProductSplit() {
  return (
    <div className={styles.split}>
      {products.map((product) => (
        <div key={product.slug} className={styles.panel}>
          <Badge tone="indigo">{product.centreOfGravity}-centred</Badge>
          <Heading as="h3" size="display-md" className={styles.name}>
            {product.name}
          </Heading>
          <Text tone="muted">{product.tagline}</Text>
          <ul className={styles.features}>
            {product.signatureFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button href={`/${product.slug}`} variant="secondary" size="md">
            Explore {product.name}
          </Button>
        </div>
      ))}
    </div>
  );
}
