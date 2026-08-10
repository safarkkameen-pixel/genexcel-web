import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import styles from "./Stepper.module.scss";

export type StepperItem = {
  order: number;
  title: string;
  body: ReactNode;
};

type StepperProps = {
  items: StepperItem[];
};

/**
 * Adapted from React Bits' Stepper. A numbered, connected-line vertical
 * sequence — mirrors the product's own "adventure path" roadmap UI
 * (Guide §10.5), reused for the 8-stage journey on School Genomics and
 * the full narrative on How It Works (plan §11.3).
 */
export function Stepper({ items }: StepperProps) {
  return (
    <ol className={styles.stepper}>
      {items.map((item, index) => (
        <li key={item.order} className={styles.step}>
          <div className={styles.markerColumn}>
            <span className={styles.marker}>{item.order}</span>
            {index < items.length - 1 && <span className={styles.line} aria-hidden="true" />}
          </div>
          <ScrollReveal delay={index * 60} className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{item.title}</h3>
            <div className={styles.stepBody}>{item.body}</div>
          </ScrollReveal>
        </li>
      ))}
    </ol>
  );
}
