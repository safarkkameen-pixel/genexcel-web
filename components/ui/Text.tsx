import type { ElementType, ReactNode } from "react";
import styles from "./Text.module.scss";

type TextProps = {
  children: ReactNode;
  as?: "p" | "span";
  size?: "lg" | "base" | "sm" | "label";
  tone?: "default" | "muted" | "faint" | "inverse" | "inverse-muted";
  className?: string;
  measure?: boolean;
};

export function Text({
  children,
  as = "p",
  size = "base",
  tone = "default",
  className,
  measure = false,
}: TextProps) {
  const Tag: ElementType = as;
  return (
    <Tag
      className={[styles.text, styles[size], styles[tone], measure && styles.measure, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
