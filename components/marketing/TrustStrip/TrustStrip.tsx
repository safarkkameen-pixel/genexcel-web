import { StarBorder } from "@/components/react-bits/StarBorder/StarBorder";
import styles from "./TrustStrip.module.scss";

const items = ["DPDP Act 2023", "Anonymised data", "AI stays in India", "Child-safe by design"];

/**
 * Repeated on Homepage and in the Footer on every page — plan §3, §11.3.
 * Server Component; StarBorder's rotation is pure CSS.
 */
export function TrustStrip({ inverse = false }: { inverse?: boolean }) {
  return (
    <ul className={[styles.strip, inverse && styles.inverse].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <li key={item}>
          <StarBorder tone={inverse ? "dark" : "light"}>{item}</StarBorder>
        </li>
      ))}
    </ul>
  );
}
