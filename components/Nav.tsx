"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/blog", label: "Блог" },
  { href: "/changelog", label: "История" },
  { href: "/about", label: "О проекте" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
        <span className={styles.dot} aria-hidden />
        Улучшатор
      </Link>
      <nav
        id="site-nav"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Основная навигация"
      >
        {LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className={styles.link}
            style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a href="https://github.com/" className={styles.cta} onClick={() => setOpen(false)}>
          Установить
        </a>
      </nav>
      <button
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? `${styles.bar} ${styles.barX1}` : styles.bar} />
        <span className={open ? `${styles.bar} ${styles.barX2}` : styles.bar} />
        <span className={open ? `${styles.bar} ${styles.barHide}` : styles.bar} />
      </button>
    </header>
  );
}