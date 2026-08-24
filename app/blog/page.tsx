import { getAllEntries } from "@/lib/content";
import PostList from "@/components/PostList";
import styles from "./page.module.css";

export default async function BlogPage() {
  const entries = await getAllEntries();
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Блог</h1>
      <p className={styles.sub}>Изменения, разборы и находки улучшатора.</p>
      <PostList entries={entries} />
    </main>
  );
}