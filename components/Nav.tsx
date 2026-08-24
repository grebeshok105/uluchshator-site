"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/blog", label: "Блог" },
  { href: "/changelog", label: "История" },
  { href: "/about", label: "О проекте" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
        <span className={styles.dot} aria-hidden />
        Улучшатор
      </Link>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Основная навигация">
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