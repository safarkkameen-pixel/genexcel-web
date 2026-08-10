import type { FaqItem } from "@/content/data/faq";
import styles from "./FAQAccordion.module.scss";

/**
 * Server-rendered <details>/<summary> accordion — deliberately not a
 * client-only, animation-first component: FAQ content must stay
 * crawlable and screen-reader-readable (plan §10 SEO, §12 Accessibility).
 * Native <details> gives keyboard support for free.
 */
export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.id} className={styles.item}>
          <summary className={styles.question}>{item.question}</summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
