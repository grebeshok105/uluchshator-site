import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <p className={styles.line}>
        <span className={styles.prompt}>user@uluchshator:~$</span> command not found: /страница
      </p>
      <span className="cursor" aria-hidden />
      <Link href="/" className={`btn ${styles.home}`}>
        <span>на главную</span>
      </Link>
    </main>
  );
}