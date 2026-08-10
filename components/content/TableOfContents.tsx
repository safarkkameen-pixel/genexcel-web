import styles from "./TableOfContents.module.scss";

/**
 * A pure-CSS sticky sidebar (position: sticky, no scroll-spy JS) —
 * deliberately zero client cost on the pages a worried parent or a
 * compliance reviewer reads most carefully (plan §4, §11.1, §16).
 */
export function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav className={styles.toc} aria-label="On this page">
      <p className={styles.label}>On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
