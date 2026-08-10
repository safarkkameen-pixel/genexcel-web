import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type CommonProps = {
  children: ReactNode;
  /**
   * "accent" is the single yellow-filled treatment — Programa's rule is
   * that it appears on exactly ONE button per page (DESIGN.md), so use
   * it deliberately, not as a general "important button" variant.
   */
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled" | "onClick" | "name" | "value" | "form"
>;

type ButtonAsButton = CommonProps &
  NativeButtonProps & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // TypeScript's truthiness narrowing on `props.href` above doesn't fully
  // eliminate ButtonAsLink from the union (href: string can be falsy too),
  // but the early-return in both branches above guarantees this path is
  // only reached without an href — so this cast is safe.
  const { type, disabled, onClick, name, value, form } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      name={name}
      value={value}
      form={form}
      className={classes}
    >
      {children}
    </button>
  );
}
