import { getAllEntries } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Manifest from "@/components/Manifest";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import ChangeLog from "@/components/ChangeLog";
import FinalCTA from "@/components/FinalCTA";

export default async function Home() {
  const entries = await getAllEntries();
  const logEntries = entries.filter((e) => e.type === "changelog").slice(0, 7);
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={80}>
        <StackStrip />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={120}>
        <Manifest />
      </Reveal>
      <Reveal delay={140}>
        <Features />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={120}>
        <HowItWorks />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={100}>
        <Stats />
      </Reveal>
      <Reveal delay={140}>
        <ChangeLog entries={logEntries} />
      </Reveal>
      <Reveal delay={100}>
        <FinalCTA />
      </Reveal>
    </main>
  );
}