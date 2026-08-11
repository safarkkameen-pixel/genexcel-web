import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Features.module.scss";

type FeatureItem = {
  title: string;
  text: string;
  href: string;
  icon: ReactNode;
};

/**
 * Three flat, borderless feature items for the homepage — a quiet
 * alternative to the old image cards and bento grid. Each links to its
 * own product page; copy is drawn from the Guide-verified platform
 * descriptions (content/data/platformPillars.ts).
 */
const features: FeatureItem[] = [
  {
    title: "26 profiles — Genetic reports",
    text: "Diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds, checked four ways.",
    href: "/science",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 3c4 5-4 13 0 18" />
        <path d="M20 3c-4 5 4 13 0 18" />
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    ),
  },
  {
    title: "225K+ passages — Helix, the AI tutor",
    text: "Answers homework from your child's own textbook — and never mentions genetics while it teaches.",
    href: "/helix",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" />
        <path d="M12 8v3l2 1" />
      </svg>
    ),
  },
  {
    title: "Genetics-adjusted — Nutrition & fitness",
    text: "Genetics-adjusted meal and workout plans, synced with Apple Health or Health Connect.",
    href: "/health-wellness",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
        <path d="M4 20C8 12 13 8 17 6" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <>
      <ul className={styles.list}>
        {features.map((feature) => (
          <li key={feature.href}>
            <Link href={feature.href} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                {feature.icon}
              </span>
              <span className={styles.body}>
                <span className={styles.title}>{feature.title}</span>
                <span className={styles.text}>{feature.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
