"use client";

import React from "react";
import { Project } from "../../types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import PlatformIcon from "../PlatformIcon/PlatformIcon";
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
        {project.platforms && (
          <div className={styles.platformBadges}>
            {project.platforms.map((platform) =>
              platform.url ? (
                <a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformBadge}
                  data-platform={platform.platform}
                  aria-label={`View ${project.title[language] || "project"} on ${platform.label}`}
                  title={`View on ${platform.label}`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <PlatformIcon platform={platform.platform} className={styles.platformIcon} />
                </a>
              ) : (
                <span
                  key={platform.platform}
                  className={`${styles.platformBadge} ${styles.platformBadgeStatic}`}
                  data-platform={platform.platform}
                  aria-label={`${platform.label} platform`}
                  title={platform.label}
                >
                  <PlatformIcon platform={platform.platform} className={styles.platformIcon} />
                </span>
              )
            )}
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.date}>{project.date}</span>
          {project.status && (
            <span className={`${styles.statusBadge} ${project.status === "released" ? styles.statusReleased : styles.statusCancelled}`}>
              {project.status === "released" ? t.statusReleased : t.statusCancelled}
            </span>
          )}
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
