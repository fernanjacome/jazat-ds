"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home } from "./home";

export default function home() {
  return <MainContent />;
}

const MainContent = () => {
  const { language, lang: currentLang } = useLanguage();

  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return <Home language={language} currentLang={currentLang} />;
};
