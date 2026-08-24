"use client";
import { useState } from "react";
import Link from "next/link";
import type { Entry, Tag } from "@/lib/content";
import styles from "./PostList.module.css";

const TAGS: (Tag | "все")[] = ["все", "изменения", "разбор", "находка"];

export default function PostList({ entries }: { entries: Entry[] }) {
  const [tag, setTag] = useState<Tag | "все">("все");
  const filtered = tag === "все" ? entries : entries.filter((e) => e.tags.includes(tag));

  return (
    <div>
      <div className={styles.filter} role="group" aria-label="Фильтр по тегам">
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            aria-pressed={tag === t}
            className={tag === t ? styles.active : styles.btn}
          >
            {t}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className={styles.empty}>по этому тегу пока пусто</p>
      ) : (
        <ul className={styles.list}>
          {filtered.map((e) => (
            <li key={e.slug}>
              <Link href={`/blog/${e.slug}`} className={styles.card}>
                <span className={styles.date}>
                  {e.date} · {e.type === "changelog" ? "изменение" : "пост"}
                </span>
                <h3 className={styles.title}>{e.title}</h3>
                {e.metric && <span className={styles.metric}>{e.metric}</span>}
                <p className={styles.excerpt}>{e.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}