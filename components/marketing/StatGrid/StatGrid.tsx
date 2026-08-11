import type { CSSProperties } from "react";
import styles from "./StatGrid.module.scss";

export type Stat = { value: string; label: string };

/** Minimal N-column stat row — a big number over a muted label, divided by hairlines only. */
export function StatGrid({ stats, columns = 4 }: { stats: Stat[]; columns?: number }) {
  return (
    <dl className={styles.grid} style={{ "--stat-columns": columns } as CSSProperties}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <dt className={styles.value}>{stat.value}</dt>
          <dd className={styles.label}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
