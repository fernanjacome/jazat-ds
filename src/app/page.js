"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home } from "./home/home";

export default function index() {
  return <MainContent />;
}

const MainContent = () => {
  const { language, lang: currentLang } = useLanguage();

  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return (
    <section>
      <Home language={language} currentLang={currentLang} />
    </section>
  );
};
