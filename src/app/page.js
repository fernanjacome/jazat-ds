"use client";

import React from "react";
import Button from "@/components/Button";
import ClientSatisfaction from "@/components/ClientSatisfaction";
import Card from "@/components/Card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MdOutlineTextsms } from "react-icons/md";

export default function Home() {
  return <MainContent />;
}

const MainContent = () => {
  const { language, lang: currentLang } = useLanguage();

  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return (
    <main>
      <div className="home-content">
        <h1 className="home-title">{currentLang[language].title}</h1>
        <p className="instructions">{currentLang[language].instructions}</p>
        <div className="flex gap-5">
          <Button
            className="text-white"
            variant="outline"
            label={currentLang[language].button}
            icon={MdOutlineTextsms}
            iconPosition="right"
          />
          <ClientSatisfaction />
        </div>
      </div>
      <div className="mt-5 flex flex-col text-center gap-6">
        <h3 className="font-semibold">Trusted by 30+ businesses</h3>
        <div className="flex gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} logo="/logos/teams.svg" href="#home" />
          ))}
        </div>
      </div>
    </main>
  );
};
