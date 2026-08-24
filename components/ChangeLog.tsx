import Link from "next/link";
import type { Entry } from "@/lib/content";
import styles from "./ChangeLog.module.css";

export default function ChangeLog({ entries }: { entries: Entry[] }) {
  return (
    <section className={styles.log}>
      <h2 className={styles.heading}>Каждый цикл — сильнее</h2>
      <div className={styles.rows}>
        {entries.map((e) => (
          <Link key={e.slug} href={`/blog/${e.slug}`} className={styles.row}>
            <span className={styles.date}>{e.date}</span>
            <span className={styles.text}>{e.title}</span>
            {e.metric && <span className={styles.metric}>{e.metric}</span>}
          </Link>
        ))}
      </div>
      <div className={styles.foot}>
        <span className="cursor" aria-hidden />
        <Link href="/changelog" className={styles.all}>
          Вся история →
        </Link>
      </div>
    </section>
  );
}