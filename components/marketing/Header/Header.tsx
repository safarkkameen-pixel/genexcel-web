"use client";

/**
 * Global site header. Desktop: logo left, five centered nav items with
 * restrained hover/click mega-menus, "Log in" + theme toggle right.
 * Mobile (< 900px): logo + theme toggle + hamburger opening a clean
 * drop-down panel — no floating pill, no full-screen overlay. Each
 * trigger is a real <button aria-expanded>; Escape closes any open menu.
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { primaryNav, utilityNav, mobileMenuItems } from "@/content/data/navigation";
import { Logo } from "@/components/marketing/Logo/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import styles from "./Header.module.scss";

const DESKTOP_BREAKPOINT = 900;

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  // A brief, cancelable delay before closing on mouseleave/blur — the
  // padding bridge on .megaMenu (see Header.module.scss) already removes
  // the geometric dead zone; this adds slack for fast/imprecise cursors.
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimeout() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function openGroupNow(label: string) {
    clearCloseTimeout();
    setOpenGroup(label);
  }

  function closeGroupSoon() {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenGroup(null), 200);
  }

  useEffect(() => clearCloseTimeout, []);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    function handleResize() {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setMobileOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="GenExcel home">
          <Logo size={26} withWordmark />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {primaryNav.map((group) => {
              const hasColumns = !!group.columns?.length;
              const isOpen = openGroup === group.label;

              return (
                <li
                  key={group.label}
                  className={styles.navItem}
                  onMouseEnter={() => hasColumns && openGroupNow(group.label)}
                  onMouseLeave={() => hasColumns && closeGroupSoon()}
                  onFocus={() => hasColumns && openGroupNow(group.label)}
                  onBlur={(event) => {
                    // Only close once focus leaves this whole trigger+panel
                    // group (e.g. Tab past the last menu item) — moving
                    // focus between the trigger and its own menu items
                    // must not count as leaving.
                    if (hasColumns && !event.currentTarget.contains(event.relatedTarget)) {
                      closeGroupSoon();
                    }
                  }}
                >
                  {hasColumns ? (
                    <>
                      <button
                        type="button"
                        className={[styles.navTrigger, isOpen && styles.navTriggerOpen]
                          .filter(Boolean)
                          .join(" ")}
                        aria-expanded={isOpen}
                        onClick={() => (isOpen ? setOpenGroup(null) : openGroupNow(group.label))}
                      >
                        {group.label}
                        <span className={styles.chevron} aria-hidden="true">
                          ▾
                        </span>
                      </button>
                      {isOpen && (
                        <div className={styles.megaMenu}>
                          <div className={styles.megaMenuPanel} role="menu">
                            {group.columns!.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={styles.megaMenuLink}
                                role="menuitem"
                                onClick={() => setOpenGroup(null)}
                              >
                                <span className={styles.megaMenuLabel}>{link.label}</span>
                                {link.description && (
                                  <span className={styles.megaMenuDescription}>{link.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={group.href!} className={styles.navTrigger}>
                      {group.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href={utilityNav.login.href} className={styles.loginLink}>
            {utilityNav.login.label}
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className={styles.mobileToggle}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Mobile">
            <ul className={styles.mobileMenuList}>
              {mobileMenuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={styles.mobileMenuLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
