import { getAllEntries } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Manifest from "@/components/Manifest";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import SkillsSection from "@/components/SkillsSection";
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
      <Reveal delay={20}>
        <StackStrip />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={40}>
        <Manifest />
      </Reveal>
      <Reveal delay={60}>
        <Features />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={40}>
        <HowItWorks />
      </Reveal>
      <div className="divider" aria-hidden />
      <Reveal delay={50}>
        <Stats />
      </Reveal>
      <Reveal delay={60}>
        <SkillsSection />
      </Reveal>
      <Reveal delay={60}>
        <ChangeLog entries={logEntries} />
      </Reveal>
      <Reveal delay={50}>
        <FinalCTA />
      </Reveal>
    </main>
  );
}