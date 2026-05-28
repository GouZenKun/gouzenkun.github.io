"use client";

import React from "react";
import Link from "next/link";
import { useLanguage, Language } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className={`${styles.header} glassmorphism`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoIcon}></div>
          <span className={`${styles.logoText} text-gradient`}>ANTIGRAVITY</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/portfolio" className={styles.navLink}>
            {TRANSLATIONS[language].navPortfolio}
          </Link>
          <Link href="/about" className={styles.navLink}>
            {TRANSLATIONS[language].navAbout}
          </Link>
        </nav>

        <div className={styles.rightGroup}>
          <div className={styles.badgeGroup}>
            <span className={styles.badgePulse}></span>
            <span className={styles.badgeText}>
              {TRANSLATIONS[language].navAvailable}
            </span>
          </div>

          <select
            className={styles.langSelect}
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </header>
  );
}
