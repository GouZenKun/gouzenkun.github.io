"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Project } from "../../types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import styles from "./PortfolioGrid.module.css";

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Check URL hash to automatically open a project modal (for links from skills page)
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hashId = window.location.hash.replace("#", "");
        const matched = projects.find((proj) => proj.id === hashId);
        if (matched) {
          setActiveProject(matched);
        }
      }
    };

    // Run on initial mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [projects]);

  // 1. Gather all unique tags from the projects list
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((proj) => {
      proj.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // 2. Filter projects based on BOTH selected tags and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Localized properties check
      const title = project.title[language] || "";
      const subtitle = project.subtitle[language] || "";
      const description = project.description[language] || "";

      // Check search matching
      const matchesSearch =
        searchQuery.trim() === "" ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Check tag matching
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [projects, searchQuery, selectedTags, language]);

  // Toggle selected tags state
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionSubtitle}>{t.portfolioSubtitle}</span>
          <h2 className={`${styles.sectionTitle} text-gradient`}>{t.portfolioTitle}</h2>
          <p className={styles.sectionDesc}>{t.portfolioDesc}</p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className={`${styles.filterPanel} glassmorphism`}>
          {/* Quick Search */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchIcon}>&#x1F50D;</div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.clearSearch}
                aria-label="Clear search input"
              >
                &times;
              </button>
            )}
          </div>

          {/* Tags Filter List */}
          <div className={styles.tagsWrapper}>
            <span className={styles.filterLabel}>{t.filterLabel}</span>
            <div className={styles.tagsList}>
              {uniqueTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`${styles.tagButton} ${
                      isSelected ? styles.activeTag : ""
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchQuery || selectedTags.length > 0) && (
            <div className={styles.filterSummary}>
              <span className={styles.summaryText}>
                {t.showingCount
                  .replace("{count}", String(filteredProjects.length))
                  .replace("{total}", String(projects.length))}
              </span>
              <button onClick={handleClearFilters} className={styles.clearAllBtn}>
                {t.clearAll}
              </button>
            </div>
          )}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className={`${styles.noResults} glassmorphism`}>
            <div className={styles.noResultsIcon}>&#x2639;</div>
            <h3>{t.noResultsTitle}</h3>
            <p>{t.noResultsDesc}</p>
            <button onClick={handleClearFilters} className={styles.resetBtn}>
              {t.resetFilters}
            </button>
          </div>
        )}
      </div>

      {/* Render detailed viewport modal when work card is selected */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
