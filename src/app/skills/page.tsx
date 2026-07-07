"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import Navbar from "@/components/Navbar/Navbar";
import { PROJECTS } from "@/data/projects";
import styles from "./skills.module.css";
import pageStyles from "../page.module.css"; // Reuse footer and common page styles

interface Skill {
  name: string;
  years: number; // Duration of experience/study in years
  hasJobExperience: boolean; // True if it has professional job experience (gets star)
}

interface RoleData {
  id: string;
  title: {
    en: string;
    th: string;
    ja: string;
  };
  experience: {
    en: string;
    th: string;
    ja: string;
  };
  description: {
    en: string;
    th: string;
    ja: string;
  };
  skills: Skill[];
  projectIds: string[];
}

const ROLES_DATA: RoleData[] = [
  {
    id: "frontend",
    title: {
      en: "Web Frontend Engineer",
      th: "วิศวกรเว็บฟรอนต์เอนด์ (Web Frontend)",
      ja: "Webフロントエンドエンジニア"
    },
    experience: {
      en: "2 Years Active experience",
      th: "ประสบการณ์ทำงานจริง 2 ปี",
      ja: "実務経験 2年"
    },
    description: {
      en: "Experienced in building responsive SaaS industrial interfaces, Web3 game portal dashboards, and optimized WebGL interactive visualizers. Dedicated to applying SOLID clean-code principles to separate robust logic layers from aesthetic presentation layouts.",
      th: "มีประสบการณ์ในการสร้างอินเตอร์เฟส SaaS ที่ตอบสนองอย่างรวดเร็ว เว็บพอร์ทัลแดชบอร์ดเกม Web3 และตัวจำลองหน้าเว็บ WebGL มุ่งเน้นการเขียนโค้ดตามหลัก SOLID เพื่อแยกส่วนลอจิกออกจากส่วนแสดงผลอย่างเป็นระบบ",
      ja: "レスポンシブなSaaSインダストリアルダッシュボード、Web3ゲームポータル、最適化されたWebGLインタラクティブ可視化ツールの開発経験。SOLID原則を適用し、複雑なデータモデルからクリーンなUI設計を分離することに注力。"
    },
    skills: [
      { name: "JavaScript", years: 2, hasJobExperience: true },
      { name: "HTML", years: 2, hasJobExperience: true },
      { name: "CSS", years: 2, hasJobExperience: true },
      { name: "React", years: 1, hasJobExperience: true },
      { name: "Angular", years: 1, hasJobExperience: true },
      { name: "TypeScript", years: 1, hasJobExperience: true },
      { name: "zod", years: 1, hasJobExperience: true },
      { name: "Next.js", years: 1, hasJobExperience: false }
    ],
    projectIds: ["pachislo-metaverse", "climbers", "dream-casino", "oblivion-maiden"]
  },
  {
    id: "data",
    title: {
      en: "Data Engineer",
      th: "วิศวกรข้อมูล (Data Engineer)",
      ja: "データエンジニア"
    },
    experience: {
      en: "3 Years Active experience",
      th: "ประสบการณ์ทำงานจริง 3 ปี",
      ja: "実務経験 3年"
    },
    description: {
      en: "Worked at Cloud Ace Thailand and ExxonMobil. Built EC data analysis pipelines for major beverage/air conditioner manufacturers in Japan, designed telemetry event tracking streams (AppsFlyer), and set up automated Jenkins CI/CD infrastructure.",
      th: "เคยทำงานที่ Cloud Ace Thailand และ ExxonMobil สร้างท่อข้อมูลวิเคราะห์สำหรับผู้ผลิตเครื่องดื่มและเครื่องปรับอากาศรายใหญ่ในญี่ปุ่น ติดตั้งท่อส่งข้อมูลการเก็บสถิติ (AppsFlyer) และวางระบบ Jenkins CI/CD อัตโนมัติ",
      ja: "Cloud Ace ThailandおよびExxonMobilにて従事。大手飲料・エアコンメーカー向けECサイトのデータ分析パイプライン構築、AppsFlyerを用いたテレメトリログ収集システムの設計、Jenkinsを用いたCI/CD自動化環境の構築を担当。"
    },
    skills: [
      { name: "GCP (Google Cloud Platform)", years: 3, hasJobExperience: true },
      { name: "Python", years: 2, hasJobExperience: true },
      { name: "Docker", years: 2, hasJobExperience: true },
      { name: "AWS", years: 2, hasJobExperience: true },
      { name: "Data Analysis Infrastructure", years: 2, hasJobExperience: true },
      { name: "Data Visualization", years: 2, hasJobExperience: true },
      { name: "Laravel", years: 1, hasJobExperience: true },
      { name: "PHP", years: 1, hasJobExperience: true },
      { name: "Express", years: 1, hasJobExperience: true },
      { name: "Node.js", years: 1, hasJobExperience: true },
      { name: "Jenkins", years: 2, hasJobExperience: true },
      { name: "WebSockets", years: 1, hasJobExperience: true }
    ],
    projectIds: ["paint-knockout", "dream-casino", "climbers"]
  },
  {
    id: "unity",
    title: {
      en: "Unity Engineer",
      th: "วิศวกร Unity (Unity Engineer)",
      ja: "Unityエンジニア"
    },
    experience: {
      en: "4 Years Active experience",
      th: "ประสบการณ์ทำงานจริง 4 ปี",
      ja: "実務経験 4年"
    },
    description: {
      en: "Lead client engineer for major blockchain metaverse tables and multiplayer games. Specialized in dependency injection (VContainer/Zenject), asynchronous operations (UniTask), Spine-unity rendering optimization, and custom shaders (URP).",
      th: "หัวหน้าวิศวกรฝ่ายไคลเอนต์สำหรับเกมเมตาเวิร์สและบอร์ดเกมออนไลน์แบบผู้เล่นหลายคนบนบล็อกเชน เชี่ยวชาญการทำระบบ Dependency Injection (VContainer/Zenject), ประมวลผลแบบอะซิงโครนัส (UniTask), การลดภาระ Spine และเขียนเชดเดอร์เฉพาะตัว",
      ja: "ブロックチェーンメタバースゲームにおけるリードクライアントエンジニア。VContainer/Zenjectを用いた依存性注入設計、UniTaskを用いた非同期プログラミング、Spineアニメーションの最適化、カスタムシェーダー開発を主導。"
    },
    skills: [
      { name: "Unity", years: 4, hasJobExperience: true },
      { name: "C#", years: 4, hasJobExperience: true },
      { name: "SOLID Design", years: 3, hasJobExperience: true },
      { name: "Clean Code", years: 3, hasJobExperience: true },
      { name: "DRY Principles", years: 3, hasJobExperience: true },
      { name: "KISS Principles", years: 3, hasJobExperience: true },
      { name: "Spine-unity", years: 2, hasJobExperience: true },
      { name: "uGUI", years: 2, hasJobExperience: true },
      { name: "DOTween", years: 2, hasJobExperience: true },
      { name: "Cinemachine", years: 2, hasJobExperience: true },
      { name: "InputSystem", years: 2, hasJobExperience: true },
      { name: "UniTask", years: 2, hasJobExperience: true },
      { name: "VContainer", years: 2, hasJobExperience: true },
      { name: "Zenject", years: 1, hasJobExperience: true },
      { name: "URP", years: 1, hasJobExperience: true },
      { name: "LOD Optimization", years: 2, hasJobExperience: true },
      { name: "Unity Timeline", years: 2, hasJobExperience: true },
      { name: "Unity NavMesh", years: 2, hasJobExperience: true },
      { name: "Custom Unity Editors", years: 2, hasJobExperience: true },
      { name: "Unity Shuriken Particles", years: 2, hasJobExperience: true },
      { name: "Unity ShaderGraph", years: 2, hasJobExperience: true },
      { name: "Post-processing", years: 2, hasJobExperience: true },
      { name: "MVC Architecture", years: 2, hasJobExperience: true },
      { name: "MVP Architecture", years: 2, hasJobExperience: true },
      { name: "OAuth Authentication", years: 1, hasJobExperience: true },
      { name: "ORM Integration", years: 1, hasJobExperience: true },
      { name: "JWT Security", years: 1, hasJobExperience: true },
      { name: "Swagger API Docs", years: 1, hasJobExperience: true },
      { name: "JUnit Load Testing", years: 1, hasJobExperience: true },
      { name: "Addressable Assets", years: 2, hasJobExperience: true },
      { name: "ActionScript", years: 1, hasJobExperience: true },
      { name: "Unreal Engine", years: 1, hasJobExperience: false },
      { name: "C++", years: 1, hasJobExperience: false },
      { name: "HLSL Shaders", years: 1, hasJobExperience: false },
      { name: "GLSL Shaders", years: 1, hasJobExperience: false },
      { name: "MEL Scripting", years: 1, hasJobExperience: false },
      { name: "Maya", years: 1, hasJobExperience: false },
      { name: "Blender", years: 1, hasJobExperience: false },
      { name: "Houdini", years: 1, hasJobExperience: false },
      { name: "Clean Architecture", years: 1, hasJobExperience: false },
      { name: "MVVM Architecture", years: 1, hasJobExperience: false },
      { name: "GPU Instancing", years: 1, hasJobExperience: false },
      { name: "GitHub Actions", years: 1, hasJobExperience: false },
      { name: "Shell Shaders", years: 1, hasJobExperience: false },
      { name: "Toon Shaders", years: 1, hasJobExperience: false },
      { name: "RDBMS Design", years: 1, hasJobExperience: false },
      { name: "OWASP Security", years: 1, hasJobExperience: false },
      { name: "Raytracing", years: 1, hasJobExperience: false },
      { name: "HDRP", years: 1, hasJobExperience: false },
      { name: "Unity VFXGraph", years: 1, hasJobExperience: false },
      { name: "MagicaCloth2", years: 1, hasJobExperience: false },
      { name: "Unreal MaterialGraph", years: 1, hasJobExperience: false },
      { name: "Unreal Niagara Fluids", years: 1, hasJobExperience: false }
    ],
    projectIds: ["paint-knockout", "dream-casino", "pachislo-metaverse", "climbers", "axie-nft", "sinners-sanctuary", "oblivion-maiden"]
  },
  {
    id: "mobile",
    title: {
      en: "Mobile Engineer",
      th: "วิศวกรมือถือ (Mobile Engineer)",
      ja: "モバイルエンジニア"
    },
    experience: {
      en: "2 Years Active experience",
      th: "ประสบการณ์ทำงานจริง 2 ปี",
      ja: "実務経験 2年"
    },
    description: {
      en: "Deployed global commercial applications to Google Play & Apple App Store. Experienced in integrating push notifications (Firebase Messaging), in-app purchases, ad monetization mediation (ironSource), and cross-platform Flutter/WebView applications.",
      th: "ส่งมอบแอปพลิเคชันสู่ผู้ใช้ทั่วโลกทาง Google Play และ App Store มีความเชี่ยวชาญในการติดตั้งระบบแจ้งเตือน (Firebase Messaging), การชำระเงินในแอป (In-app purchase), โฆษณาทำเงิน (ironSource SDK) และการพัฒนาแอปข้ามแพลตฟอร์มด้วย Flutter",
      ja: "Google PlayおよびApp Storeへのグローバル配信、TestFlightを用いたベータ運用、アプリ内課金実装、広告収益化（ironSourceメディエーション）、Flutterを用いたハイブリッドアプリ開発を遂行。"
    },
    skills: [
      { name: "iOS Deployment", years: 2, hasJobExperience: true },
      { name: "Android Deployment", years: 2, hasJobExperience: true },
      { name: "Web3", years: 2, hasJobExperience: true },
      { name: "Flutter", years: 1, hasJobExperience: true },
      { name: "ironSource SDK", years: 1, hasJobExperience: true },
      { name: "Firebase Messaging", years: 1, hasJobExperience: true },
      { name: "In-App Purchases", years: 1, hasJobExperience: true },
      { name: "Photoshop", years: 1, hasJobExperience: true },
      { name: "Clip Studio Paint", years: 1, hasJobExperience: false },
      { name: "Aseprite", years: 1, hasJobExperience: false }
    ],
    projectIds: ["paint-knockout", "watson-holmes", "sinners-sanctuary"]
  }
];

export default function SkillsPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentRole = ROLES_DATA.find((r) => r.id === activeTab) || ROLES_DATA[0];

  // Map showcase projects connected to the current role
  const connectedProjects = PROJECTS.filter((proj) =>
    currentRole.projectIds.includes(proj.id)
  );

  return (
    <div className={pageStyles.page}>
      <Navbar />

      <main className={pageStyles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.subtitle}>{t.skillsSubtitle}</span>
            <h1 className={`${styles.title} text-gradient`}>{t.skillsTitle}</h1>
            <p className={styles.description}>{t.skillsDesc}</p>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.tabs}>
            {ROLES_DATA.map((role) => (
              <button
                key={role.id}
                className={`${styles.tabButton} ${
                  activeTab === role.id ? styles.tabButtonActive : ""
                }`}
                onClick={() => setActiveTab(role.id)}
              >
                {role.title[language]}
              </button>
            ))}
          </div>

          {/* Role Details Card */}
          <div className={`${styles.contentCard} glassmorphism`}>
            {/* Info Section */}
            <div className={styles.infoSection}>
              <div className={styles.roleMeta}>
                <div className={styles.roleTitleRow}>
                  <h2 className={styles.roleTitle}>{currentRole.title[language]}</h2>
                  <span className={styles.expBadge}>
                    {t.roleExperience}: {currentRole.experience[language]}
                  </span>
                </div>
                <p className={styles.roleDesc}>{currentRole.description[language]}</p>
              </div>

              {/* Skills Progress list */}
              <div className={styles.skillsSection}>
                <h3 className={styles.sectionTitle}>{t.roleCoreSkills}</h3>
                <span className={styles.legendText}>{t.skillsLegend}</span>
                <div className={styles.skillsGrid} style={{ maxHeight: "450px", overflowY: "auto", paddingRight: "0.5rem" }}>
                  {(() => {
                    const maxYears = Math.max(...currentRole.skills.map((s) => s.years), 1);
                    return currentRole.skills.map((skill, index) => {
                      const fillPercent = (skill.years / maxYears) * 100;
                      
                      let labelText = "";
                      if (skill.hasJobExperience) {
                        if (language === "th") {
                          labelText = `${skill.years}★ ปี`;
                        } else if (language === "ja") {
                          labelText = `${skill.years}★年`;
                        } else {
                          labelText = skill.years === 1 ? "1★ Year" : `${skill.years}★ Years`;
                        }
                      } else {
                        if (language === "th") {
                          labelText = `${skill.years} ปี`;
                        } else if (language === "ja") {
                          labelText = `${skill.years}年`;
                        } else {
                          labelText = skill.years === 1 ? "1 Year" : `${skill.years} Years`;
                        }
                      }

                      return (
                        <div key={index} className={styles.skillItem}>
                          <div className={styles.skillHeader}>
                            <span className={styles.skillName}>{skill.name}</span>
                            <span className={styles.skillLevelText}>
                              {labelText}
                            </span>
                          </div>
                          <div className={styles.progressBarBg}>
                            <div
                              className={styles.progressBarFill}
                              style={{ width: `${fillPercent}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>

            {/* Showcase Connections */}
            <div className={styles.showcasesSection}>
              <h3 className={styles.sectionTitle}>{t.roleProjectsTitle}</h3>
              <div className={styles.showcasesGrid}>
                {connectedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/portfolio#${project.id}`}
                    className={styles.showcaseCard}
                  >
                    <div
                      className={styles.showcaseThumb}
                      style={{
                        backgroundImage: `url(${project.images[0] || "/images/placeholder.png"})`
                      }}
                    ></div>
                    <div className={styles.showcaseInfo}>
                      <h4 className={styles.showcaseTitle}>
                        {project.flag} {project.title[language]}
                      </h4>
                      <p className={styles.showcaseDesc}>
                        {project.description[language]}
                      </p>
                    </div>
                    <span className={styles.showcaseLinkArrow}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={pageStyles.footer}>
        <p>&copy; {new Date().getFullYear()} Thanakit Gowitwanich. Handcrafted with Next.js & Clean Code.</p>
      </footer>
    </div>
  );
}
