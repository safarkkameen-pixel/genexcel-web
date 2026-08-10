import type { PricingRow } from "@/content/data/pricing";
import styles from "./PricingTable.module.scss";

function renderCell(cell: boolean | string) {
  if (cell === true) return <span className={styles.yes}>✓</span>;
  if (cell === false) return <span className={styles.no}>—</span>;
  return <span className={styles.note}>{cell}</span>;
}

export function PricingTable({ rows }: { rows: PricingRow[] }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Capability</th>
            <th scope="col">BASIC</th>
            <th scope="col">PRO</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.capability}>
              <th scope="row">{row.capability}</th>
              <td>{renderCell(row.basic)}</td>
              <td>{renderCell(row.pro)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
