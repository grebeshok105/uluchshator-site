import { getAllEntries } from "@/lib/content";
import styles from "./page.module.css";

export const metadata = { title: "История" };

export default async function ChangelogPage() {
  const entries = (await getAllEntries()).filter((e) => e.type === "changelog");
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>История</h1>
      <p className={styles.sub}>Полный журнал изменений улучшатора.</p>
      <div className={styles.rows}>
        {entries.map((e) => (
          <div key={e.slug} className={styles.row}>
            <span className={styles.date}>{e.date}</span>
            <span className={styles.text}>{e.title}</span>
            {e.metric && <span className={styles.metric}>{e.metric}</span>}
          </div>
        ))}
      </div>
    </main>
  );
}