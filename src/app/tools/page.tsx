"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./tools.module.css";
import pageStyles from "../page.module.css";

type Localized = { en: string; th: string; ja: string };

interface Tool {
  name: string;
  note: Localized;
}

interface ToolCategory {
  id: string;
  title: Localized;
  tools: Tool[];
}

interface BuiltTool {
  id: string;
  name: Localized;
  description: Localized;
  tags: string[];
  href: string; // file in /public
}

// Tools I built myself. Each one is a standalone HTML file in public/apps.
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

// Edit this list to change what appears on the Tools page.
const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "engines",
    title: { en: "Game Engines & Animation", th: "เอนจินเกม & แอนิเมชัน", ja: "ゲームエンジン＆アニメーション" },
    tools: [
      { name: "Unity", note: { en: "Main engine for client development", th: "เอนจินหลักสำหรับพัฒนาฝั่งไคลเอนต์", ja: "クライアント開発のメインエンジン" } },
      { name: "Unreal Engine", note: { en: "C++ and Blueprint experiments", th: "ทดลองด้วย C++ และ Blueprint", ja: "C++とBlueprintの検証" } },
      { name: "Spine", note: { en: "2D skeletal animation", th: "แอนิเมชันโครงกระดูก 2D", ja: "2Dスケルタルアニメーション" } },
    ],
  },
  {
    id: "3d",
    title: { en: "3D & Graphics", th: "3D & กราฟิก", ja: "3D＆グラフィックス" },
    tools: [
      { name: "Blender", note: { en: "Modeling and scene prep", th: "สร้างโมเดลและเตรียมฉาก", ja: "モデリングとシーン準備" } },
      { name: "Maya", note: { en: "MEL scripting and asset pipelines", th: "เขียนสคริปต์ MEL และไปป์ไลน์แอสเซ็ต", ja: "MELスクリプトとアセットパイプライン" } },
      { name: "ShaderGraph", note: { en: "Node-based URP shaders", th: "เชดเดอร์ URP แบบโหนด", ja: "ノードベースのURPシェーダー" } },
    ],
  },
  {
    id: "code",
    title: { en: "Code & Collaboration", th: "โค้ด & การทำงานร่วมกัน", ja: "コード＆コラボレーション" },
    tools: [
      { name: "Visual Studio Code", note: { en: "Web and scripting work", th: "งานเว็บและสคริปต์", ja: "Web・スクリプト開発" } },
      { name: "Git & GitHub", note: { en: "Version control and CI", th: "ควบคุมเวอร์ชันและ CI", ja: "バージョン管理とCI" } },
      { name: "Swagger", note: { en: "API documentation", th: "เอกสาร API", ja: "APIドキュメント" } },
    ],
  },
  {
    id: "infra",
    title: { en: "Cloud & DevOps", th: "คลาวด์ & DevOps", ja: "クラウド＆DevOps" },
    tools: [
      { name: "Google Cloud Platform", note: { en: "Data pipelines and analytics", th: "ท่อข้อมูลและการวิเคราะห์", ja: "データパイプラインと分析" } },
      { name: "AWS", note: { en: "Hosting and backend services", th: "โฮสติ้งและบริการแบ็กเอนด์", ja: "ホスティングとバックエンド" } },
      { name: "Docker", note: { en: "Containerized environments", th: "สภาพแวดล้อมแบบคอนเทนเนอร์", ja: "コンテナ環境" } },
      { name: "Jenkins", note: { en: "Automated build pipelines", th: "ไปป์ไลน์บิลด์อัตโนมัติ", ja: "自動ビルドパイプライン" } },
      { name: "AppsFlyer", note: { en: "Event tracking and attribution", th: "ติดตามอีเวนต์และแอตทริบิวชัน", ja: "イベント計測とアトリビューション" } },
    ],
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
            <span className={styles.subtitle}>{t.toolsSubtitle}</span>
            <h1 className={`${styles.title} text-gradient`}>{t.toolsTitle}</h1>
            <p className={styles.description}>{t.toolsDesc}</p>
          </div>

          <h2 className={styles.sectionHeading}>{t.toolsBuiltTitle}</h2>
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

          <h2 className={styles.sectionHeading}>{t.toolsStackTitle}</h2>
          <div className={styles.categories}>
            {TOOL_CATEGORIES.map((category) => (
              <section key={category.id} className={`${styles.category} glassmorphism`}>
                <h2 className={styles.categoryTitle}>{category.title[language]}</h2>
                <ul className={styles.toolGrid}>
                  {category.tools.map((tool) => (
                    <li key={tool.name} className={styles.toolItem}>
                      <span className={styles.toolName}>{tool.name}</span>
                      <span className={styles.toolNote}>{tool.note[language]}</span>
                    </li>
                  ))}
                </ul>
              </section>
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
