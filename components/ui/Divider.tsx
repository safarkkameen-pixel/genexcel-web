import styles from "./Divider.module.scss";

export function Divider({ inverse = false }: { inverse?: boolean }) {
  return <hr className={[styles.divider, inverse && styles.inverse].filter(Boolean).join(" ")} />;
}
