import { getAllEntries } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ChangeLog from "@/components/ChangeLog";

export default async function Home() {
  const entries = await getAllEntries();
  const logEntries = entries.filter((e) => e.type === "changelog").slice(0, 7);
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={100}>
        <Stats />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={150}>
        <ChangeLog entries={logEntries} />
      </Reveal>
    </main>
  );
}