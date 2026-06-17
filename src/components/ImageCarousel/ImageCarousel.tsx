"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
  altTitle: string;
  autoPlayInterval?: number; // In milliseconds, default 4000
}

export default function ImageCarousel({
  images,
  altTitle,
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to clear and restart auto-play timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }
  };

  // Start auto-play on mount and when image array changes
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images, autoPlayInterval]);

  if (!images || images.length === 0) {
    return <div className={styles.placeholder}>No images provided</div>;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const setIndex = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
    resetTimer();
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${
              idx === currentIndex ? styles.activeSlide : styles.inactiveSlide
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label={`${altTitle} - Image ${idx + 1}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`${styles.controlButton} ${styles.prevButton}`}
            aria-label="Previous image"
          >
            &#x2039;
          </button>
          <button
            onClick={handleNext}
            className={`${styles.controlButton} ${styles.nextButton}`}
            aria-label="Next image"
          >
            <span className={styles.arrowIcon}>&#x203a;</span>
            <svg className={styles.buttonTimerSvg} width="44" height="44" viewBox="0 0 44 44" key={currentIndex}>
              <circle
                className={styles.buttonTimerBg}
                cx="22"
                cy="22"
                r="19.5"
              />
              <circle
                className={styles.buttonTimerFg}
                cx="22"
                cy="22"
                r="19.5"
                style={{ animationDuration: `${autoPlayInterval}ms` }}
              />
            </svg>
          </button>

          <div className={styles.indicators}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => setIndex(idx, e)}
                className={`${styles.indicatorDot} ${
                  idx === currentIndex ? styles.activeDot : ""
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
