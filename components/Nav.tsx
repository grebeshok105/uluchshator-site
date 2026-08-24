import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/blog", label: "Блог" },
  { href: "/changelog", label: "История" },
  { href: "/about", label: "О проекте" },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.dot} aria-hidden />
        Улучшатор
      </Link>
      <nav className={styles.nav}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.link}>
            {l.label}
          </Link>
        ))}
        <a href="https://github.com/" className={styles.cta}>
          Установить
        </a>
      </nav>
    </header>
  );
}