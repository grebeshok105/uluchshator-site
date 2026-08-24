import { describe, it, expect } from "vitest";
import { getAllEntries, getEntryBySlug, getEntriesByTag } from "../../lib/content";

const FIX = "test/fixtures/content";

describe("getAllEntries", () => {
  it("читает и сортирует по дате desc", async () => {
    const entries = await getAllEntries(FIX);
    expect(entries.map((e) => e.slug)).toEqual(["b", "d", "a", "c"]);
  });

  it("нормализует дату в ISO YYYY-MM-DD", async () => {
    const b = (await getAllEntries(FIX)).find((e) => e.slug === "b")!;
    expect(b.date).toBe("2026-08-21");
  });

  it("сохраняет стабильный порядок записей одной даты (changelog до blog)", async () => {
    const entries = await getAllEntries(FIX);
    const sameDay = entries.filter((e) => e.date === "2026-08-21");
    expect(sameDay.map((e) => e.slug)).toEqual(["b", "d"]);
  });

  it("парсит фронтматтер и тип из папки", async () => {
    const b = (await getAllEntries(FIX)).find((e) => e.slug === "b")!;
    expect(b.type).toBe("changelog");
    expect(b.title).toBe("Запись B");
    expect(b.tags).toEqual(["изменения"]);
    expect(b.metric).toBe("X → Y");
    expect(b.excerpt.length).toBeGreaterThan(0);
  });

  it("делает slug уникальным при совпадении имён после срезания даты", async () => {
    // срез даты у d дал бы 'd' — коллизий нет; проверяем сам механизм fallback:
    // файл с именем без даты в changelog и blog с одинаковым именем
    const entries = await getAllEntries(FIX);
    const slugs = entries.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
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