"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./tools.module.css";
import pageStyles from "../page.module.css";

type Localized = { en: string; th: string; ja: string };

interface BuiltTool {
  id: string;
  name: Localized;
  description: Localized;
  tags: string[];
  href: string; // file in /public
}

// Tools I developed. Add an entry here (and its HTML file in public/apps) to list a new one.
const BUILT_TOOLS: BuiltTool[] = [
  {
    id: "ear-trainer",
    name: { en: "Ear Trainer", th: "ฝึกโสตประสาท (Ear Trainer)", ja: "イヤートレーナー" },
    description: {
      en: "Train your ear on intervals, chords, scales and perfect pitch with a playable 88-key piano, per-item accuracy stats, and a hands-free practice log with spoken answers.",
      th: "ฝึกฟังขั้นคู่เสียง คอร์ด สเกล และ Perfect Pitch ด้วยเปียโน 88 คีย์ที่เล่นได้จริง มีสถิติความแม่นยำรายข้อ และโหมดฝึกแบบไม่ต้องใช้มือพร้อมเสียงบอกคำตอบ",
      ja: "演奏可能な88鍵ピアノで音程・コード・スケール・絶対音感を鍛えるツール。項目別の正答率と、音声で答えを読み上げるハンズフリー練習ログ付き。",
    },
    tags: ["Web Audio API", "Speech Synthesis", "Vanilla JS"],
    href: "/apps/ear-trainer.html",
  },
];

export default function ToolsPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className={pageStyles.page}>
      <Navbar />

      <main className={pageStyles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} text-gradient`}>{t.toolsTitle}</h1>
            <p className={styles.description}>{t.toolsDesc}</p>
          </div>

          <div className={styles.builtGrid}>
            {BUILT_TOOLS.map((tool) => (
              <article key={tool.id} className={`${styles.builtCard} glassmorphism`}>
                <h3 className={styles.builtName}>{tool.name[language]}</h3>
                <p className={styles.builtDesc}>{tool.description[language]}</p>
                <div className={styles.tagRow}>
                  {tool.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.openButton}
                >
                  {t.toolsOpen} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className={pageStyles.footer}>
        <p>&copy; {new Date().getFullYear()} Thanakit Gowitwanich. Handcrafted with Next.js & Clean Code.</p>
      </footer>
    </div>
  );
}
