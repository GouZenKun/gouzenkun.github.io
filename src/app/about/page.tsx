"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../page.module.css"; // Reuse parent layouts

export default function AboutPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.about} style={{ paddingTop: "10rem" }}>
          <div className={`${styles.aboutContainer} glassmorphism`}>
            {/* Left Section: Detailed Biography */}
            <div className={styles.aboutDetails}>
              <span className={styles.heroTag}>{t.aboutTag}</span>
              <h2 className={`${styles.aboutTitle} text-gradient`}>{t.aboutTitle}</h2>
              
              <p>{t.aboutBio1}</p>
              <p>{t.aboutBio2}</p>
              <p>{t.aboutBio3}</p>

              <h4 style={{ color: "var(--text-primary)", marginTop: "1rem", fontWeight: "700" }}>{t.aboutCore}</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                <span className={styles.heroTag} style={{ fontSize: "0.7rem" }}>WebGL & Canvas API</span>
                <span className={styles.heroTag} style={{ fontSize: "0.7rem" }}>Next.js App Router</span>
                <span className={styles.heroTag} style={{ fontSize: "0.7rem" }}>SOLID Clean Code</span>
                <span className={styles.heroTag} style={{ fontSize: "0.7rem" }}>Fluid Physics Solvers</span>
                <span className={styles.heroTag} style={{ fontSize: "0.7rem" }}>TypeScript & UI/UX</span>
              </div>
            </div>

            {/* Right Section: Contact Channels */}
            <div className={styles.contactContainer} style={{ width: "100%", maxWidth: "100%" }}>
              <div className={styles.contactHeader} style={{ textAlign: "left" }}>
                <span className={styles.heroTag}>{t.contactTag}</span>
                <h3 style={{ fontSize: "2rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  {t.contactTitle}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  {t.contactDesc}
                </p>
              </div>

              <div className={`${styles.contactBox} glassmorphism`} style={{ marginTop: "1rem", alignItems: "flex-start", textAlign: "left", width: "100%" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase" }}>
                  {t.contactDirect}
                </p>
                <a href="mailto:hello@antigravity.studio" className={styles.emailLink} style={{ fontSize: "1.25rem" }}>
                  hello@antigravity.studio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Antigravity Studio. Handcrafted with Next.js & Clean Code.</p>
      </footer>
    </div>
  );
}
