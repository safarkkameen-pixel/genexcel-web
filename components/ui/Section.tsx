import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.scss";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Background variant — alternate sections for rhythm without extra shadows. */
  background?: "default" | "alt" | "inverse";
  /** Vertical padding scale. */
  spacing?: "sm" | "md" | "lg";
  as?: "section" | "div";
  id?: string;
  "aria-labelledby"?: string;
};

export function Section({
  children,
  className,
  background = "default",
  spacing = "lg",
  as = "section",
  id,
  ...rest
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={[styles.section, styles[background], styles[spacing], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <Container>{children}</Container>
    </Tag>
  );
}
