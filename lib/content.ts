import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type EntryType = "changelog" | "post";
export type Tag = "изменения" | "разбор" | "находка";

export interface Entry {
  slug: string;
  type: EntryType;
  title: string;
  date: string;
  tags: Tag[];
  metric?: string;
  excerpt: string;
  content: string;
}

const DEFAULT_DIR = path.join(process.cwd(), "content");

function normalizeDate(value: unknown): string {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "");
}

export async function getAllEntries(dir: string = DEFAULT_DIR): Promise<Entry[]> {
  const entries: Entry[] = [];
  for (const type of ["changelog", "blog"] as const) {
    const full = path.join(dir, type);
    const files = await fs.readdir(full).catch(() => [] as string[]);
    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;
      const raw = await fs.readFile(path.join(full, file), "utf8");
      const { data, content } = matter(raw);
      const excerpt = typeof data.excerpt === "string" ? data.excerpt : content.slice(0, 140);
      entries.push({
        slug: file.replace(/\.mdx$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""),
        type: type === "blog" ? "post" : "changelog",
        title: String(data.title ?? file),
        date: normalizeDate(data.date),
        tags: Array.isArray(data.tags) ? (data.tags as Tag[]) : [],
        metric: data.metric ? String(data.metric) : undefined,
        excerpt,
        content,
      });
    }
  }
  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getEntryBySlug(slug: string, dir: string = DEFAULT_DIR): Promise<Entry | undefined> {
  return (await getAllEntries(dir)).find((e) => e.slug === slug);
}

export async function getEntriesByTag(tag: Tag, dir: string = DEFAULT_DIR): Promise<Entry[]> {
  return (await getAllEntries(dir)).filter((e) => e.tags.includes(tag));
}