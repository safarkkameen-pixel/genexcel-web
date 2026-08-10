"use client";

/**
 * "What each person sees" tab switcher — reused on School Genomics and
 * How It Works (plan §7). Client Component: carries local tab state.
 * Keyboard-operable: real <button role="tab"> elements, arrow-key support.
 */
import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { RoleView } from "@/content/data/roleViews";
import styles from "./RoleTabs.module.scss";

const ROLE_ICON: Record<RoleView["role"], string> = {
  Child: "/icons/roles/child.png",
  Parent: "/icons/roles/parent.png",
  Teacher: "/icons/roles/teacher.png",
  Counsellor: "/icons/roles/counsellor.png",
};

export function RoleTabs({ roles }: { roles: RoleView[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roles[activeIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      setActiveIndex((index) => (index + 1) % roles.length);
    } else if (event.key === "ArrowLeft") {
      setActiveIndex((index) => (index - 1 + roles.length) % roles.length);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div role="tablist" aria-label="What each person sees" className={styles.tabList}>
        {roles.map((role, index) => (
          <button
            key={role.role}
            role="tab"
            type="button"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            className={[styles.tab, index === activeIndex && styles.active].filter(Boolean).join(" ")}
            onClick={() => setActiveIndex(index)}
            onKeyDown={handleKeyDown}
          >
            <Image src={ROLE_ICON[role.role]} alt="" width={20} height={20} className={styles.tabIcon} aria-hidden="true" />
            {role.role}
          </button>
        ))}
      </div>
      <div role="tabpanel" className={styles.panel}>
        <p className={styles.summary}>{active.summary}</p>
        <p className={styles.detail}>{active.detail}</p>
      </div>
    </div>
  );
}
