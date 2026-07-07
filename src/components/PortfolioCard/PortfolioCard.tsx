"use client";

import React from "react";
import { Project } from "../../types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const thumbnail = project.images[0] || "/images/placeholder.png";

  return (
    <div className={`${styles.card} glassmorphism`} onClick={onClick}>
      <div 
        className={styles.imageWrapper}
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={styles.imageOverlay}></div>
        <span className={`${styles.badge} ${project.isProfessional ? styles.badgeProfessional : styles.badgePersonal}`}>
          {project.isProfessional ? t.projProfessional : t.projPersonal}
        </span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.date}>{project.date}</span>
        </div>
        <h3 className={styles.title}>{project.flag} {project.title[language] || ""}</h3>
        <p className={styles.description}>{project.description[language] || ""}</p>
        
        <div className={styles.tagsContainer}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tagPill}>
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className={`${styles.tagPill} ${styles.tagMore}`}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
