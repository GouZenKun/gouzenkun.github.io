"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import Navbar from "../components/Navbar/Navbar";
import FluidSimulation from "../components/FluidSimulation/FluidSimulation";
import styles from "./page.module.css";

export default function Home() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Full-Screen Interactive Fluid Simulation Background */}
      <FluidSimulation />

      <main className={styles.main} style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
        {/* Hero Section floating on top of Fluid Canvas */}
        <section className={styles.hero} style={{ minHeight: "100vh" }}>
          <div className={styles.heroContent} style={{ pointerEvents: "auto" }}>
            <span className={styles.heroTag}>{t.heroTag}</span>
            <h1 className={`${styles.heroTitle} text-gradient`}>
              {t.heroTitle.split("<br />")[0]} <br /> {t.heroTitle.split("<br />")[1]}
            </h1>
            <p className={styles.heroDesc}>
              {t.heroDesc}
            </p>
            <div className={styles.heroActions}>
              <Link href="/portfolio" className={styles.ctaPrimary}>
                {t.ctaExplore}
              </Link>
              <Link href="/about" className={styles.ctaSecondary}>
                {t.ctaContact}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer} style={{ position: "relative", zIndex: 2, background: "rgba(6, 10, 7, 0.95)" }}>
        <p>&copy; {new Date().getFullYear()} Antigravity Studio. Handcrafted with Next.js & Clean Code.</p>
      </footer>
    </div>
  );
}
