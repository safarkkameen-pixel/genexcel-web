import type { TraitCategory } from "@/content/data/science";
import styles from "./CategoryAccordion.module.scss";

/**
 * Adapted from React Bits' AccordionGallery, rebuilt on native
 * <details>/<summary> for the same reason as FAQAccordion — this
 * content must stay crawlable and keyboard-operable without any extra
 * JS (plan §10, §12).
 */
export function CategoryAccordion({ categories }: { categories: TraitCategory[] }) {
  return (
    <div className={styles.list}>
      {categories.map((category, index) => (
        <details key={category.id} className={styles.item} open={index === 0}>
          <summary className={styles.summary}>{category.name}</summary>
          <div className={styles.body}>
            <p className={styles.covers}>{category.covers}</p>
            <p className={styles.examples}>
              <strong>Example traits:</strong> {category.examples}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
