"use client";

import React, { useEffect, useRef } from "react";
import { Project } from "../../types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent background scrolling when modal is active
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  // Close modal when clicking outside content area
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div ref={modalRef} className={`${styles.modal} glassmorphism`}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className={styles.modalContent}>
          <div className={styles.visualSection}>
            <ImageCarousel images={project.images} altTitle={project.title[language] || ""} />
          </div>

          <div className={styles.infoSection}>
            <span className={styles.dateBadge}>{project.date}</span>
            <h2 className={`${styles.title} text-gradient`}>{project.flag} {project.title[language] || ""}</h2>
            <p className={styles.subtitle}>{project.subtitle[language] || ""}</p>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>{t.modalRole}</span>
                <span className={styles.metaValue}>{project.role[language] || ""}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>{t.modalCategory}</span>
                <span className={`${styles.badge} ${project.isProfessional ? styles.badgeProfessional : styles.badgePersonal}`}>
                  {project.isProfessional ? t.projProfessional : t.projPersonal}
                </span>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.descriptionSection}>
              <h4 className={styles.sectionHeader}>{t.modalOverview}</h4>
              <p className={styles.descriptionText}>{project.details[language] || ""}</p>
            </div>

            <div className={styles.tagsSection}>
              <h4 className={styles.sectionHeader}>{t.modalTech}</h4>
              <div className={styles.tagsList}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.actionsSection}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                >
                  {t.modalVisit}
                  <span className={styles.arrowIcon}>&rarr;</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  {t.modalSource}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
