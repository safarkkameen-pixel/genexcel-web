import type { ReactNode } from "react";
import Image from "next/image";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import styles from "./MagicBento.module.scss";

export type BentoItem = {
  id: string;
  title: string;
  body: string;
  icon?: ReactNode;
  /** Path to a small icon image — takes precedence over `icon` when both are set. */
  iconSrc?: string;
  /** Occupy two columns on wide layouts — set on a handful of items for visual rhythm. */
  wide?: boolean;
};

type MagicBentoProps = {
  items: BentoItem[];
  className?: string;
};

/**
 * Reusable feature-showcase grid, adapted from React Bits' MagicBento.
 * Accepts data, not hardcoded cards — used on Homepage, Helix, Science,
 * School Genomics, Health & Wellness, Schools and Clinicians per the
 * brief. Each cell is a SpotlightCard, so the glow-on-hover behavior is
 * defined once and reused everywhere this renders.
 */
export function MagicBento({ items, className }: MagicBentoProps) {
  return (
    <div className={[styles.grid, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <SpotlightCard key={item.id} className={item.wide ? styles.wide : undefined}>
          {item.iconSrc ? (
            <div className={styles.icon}>
              <Image src={item.iconSrc} alt="" width={22} height={22} style={{ objectFit: "contain", width: "22px", height: "22px" }} />
            </div>
          ) : item.icon ? (
            <div className={styles.icon}>{item.icon}</div>
          ) : null}
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </SpotlightCard>
      ))}
    </div>
  );
}
