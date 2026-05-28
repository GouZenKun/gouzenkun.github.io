"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "th" | "ja";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-language") as Language;
    if (savedLang === "en" || savedLang === "th" || savedLang === "ja") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  // Dummy translator placeholder - translations are imported and checked dynamically
  const t = (key: string) => key;

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "en", setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
