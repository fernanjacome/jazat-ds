"use client";

import React from "react";
import Button from "@/components/Button";
import ClientSatisfaction from "@/components/ClientSatisfaction";
import Card from "@/components/Card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MdOutlineTextsms } from "react-icons/md";
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
    <main className="w-full max-w-full overflow-x-hidden">
      <Home language={language} currentLang={currentLang} />
    </main>
  );
};
