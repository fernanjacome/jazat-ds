"use client";

import React, { Suspense, lazy } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LazySection from "@/components/LazySection";
import { Spinner } from "@/components/Spinner";

const Home = lazy(() => import("./home/home"));
const ServicesSection = lazy(() => import("./services/ServicesSection"));

export default function index() {
  return <MainContent />;
}

const MainContent = () => {
  const { language, lang: currentLang } = useLanguage();

  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return (
    <section className="section-main">
      {/* Sección home */}
      <LazySection>
        <Suspense fallback={<Spinner />}>
          <Home language={language} currentLang={currentLang} />
        </Suspense>
      </LazySection>

      {/* Sección servicios */}
      <LazySection>
        <Suspense fallback={<Spinner />}>
          <ServicesSection language={language} currentLang={currentLang} />
        </Suspense>
      </LazySection>
    </section>
  );
};
