import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEntries, getEntryBySlug } from "@/lib/content";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getEntryBySlug(slug);
  return { title: entry?.title ?? "Запись" };
}

export async function generateStaticParams() {
  const entries = await getAllEntries();
  return entries.map((e) => ({ slug: e.slug }));
}

export default async function EntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getEntryBySlug(slug);
  if (!entry) notFound();

  return (
    <main className={styles.main}>
      <p className={styles.meta}>
        {entry.date} · {entry.tags.join(" · ")}
      </p>
      <h1 className={styles.h1}>{entry.title}</h1>
      {entry.metric && <p className={styles.metric}>{entry.metric}</p>}
      <article className={styles.body}>
        <MDXRemote
          source={entry.content}
          options={{ mdxOptions: { rehypePlugins: [rehypeHighlight] } }}
        />
      </article>
      <Link href="/blog" className={styles.back}>
        ← назад
      </Link>
    </main>
  );
}