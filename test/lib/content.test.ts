import { describe, it, expect } from "vitest";
import { getAllEntries, getEntryBySlug, getEntriesByTag } from "../../lib/content";

const FIX = "test/fixtures/content";

describe("getAllEntries", () => {
  it("читает и сортирует по дате desc", async () => {
    const entries = await getAllEntries(FIX);
    expect(entries.map((e) => e.slug)).toEqual(["b", "a", "c"]);
  });
  it("парсит фронтматтер и тип из папки", async () => {
    const b = (await getAllEntries(FIX)).find((e) => e.slug === "b")!;
    expect(b.type).toBe("changelog");
    expect(b.title).toBe("Запись B");
    expect(b.tags).toEqual(["изменения"]);
    expect(b.metric).toBe("X → Y");
    expect(b.excerpt.length).toBeGreaterThan(0);
  });
});

describe("getEntryBySlug", () => {
  it("находит запись", async () => {
    const e = await getEntryBySlug("c", FIX);
    expect(e?.type).toBe("post");
  });
  it("возвращает undefined для отсутствующей", async () => {
    expect(await getEntryBySlug("nope", FIX)).toBeUndefined();
  });
});

describe("getEntriesByTag", () => {
  it("фильтрует по тегу", async () => {
    const tagged = await getEntriesByTag("разбор", FIX);
    expect(tagged.map((e) => e.slug)).toEqual(["c"]);
  });
});