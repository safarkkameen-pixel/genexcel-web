import type { ReactNode } from "react";
import { TableOfContents } from "./TableOfContents";
import styles from "./LongFormLayout.module.scss";

type Section = { id: string; title: string };

/** Shared two-column layout for Trust/Legal long-form pages — plan §4. */
export function LongFormLayout({ sections, children }: { sections: Section[]; children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <TableOfContents items={sections} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
