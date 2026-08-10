import Link from "next/link";
import { footerColumns } from "@/content/data/navigation";
import { Logo } from "@/components/marketing/Logo/Logo";
import styles from "./Footer.module.scss";

/** Server Component — no interactivity needed, keeps footer cost at zero client JS. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {footerColumns.map((column) => (
          <div key={column.title} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.bottomBrand}>
          <Logo size={20} />© {new Date().getFullYear()} Curanova Global Med LLP. All rights reserved.
        </span>
        <span className={styles.accreditation}>
          Genetic analysis performed in ISO-certified partner laboratories.
        </span>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
