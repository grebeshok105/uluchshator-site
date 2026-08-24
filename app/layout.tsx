import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import "highlight.js/styles/github-dark.css";

const onest = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-onest",
  weight: ["300", "400"],
});

const mono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: { default: "Улучшатор", template: "%s — Улучшатор" },
  description: "Пайплайн, который прокачивается сам. Обвязка вокруг Oh My Pi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${onest.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}