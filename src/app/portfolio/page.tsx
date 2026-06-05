import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid/PortfolioGrid";
import { PROJECTS } from "@/data/projects";
import styles from "../page.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <PortfolioGrid projects={PROJECTS} />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Thanakit Gowitwanich. Handcrafted with Next.js & Clean Code.</p>
      </footer>
    </div>
  );
}
