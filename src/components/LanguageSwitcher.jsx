import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image"; // Para manejar las imágenes optimizadas
import UKIcon from "../../public/icons/uk.png"; // Icono para inglés
import SpainIcon from "../../public/icons/es.png"; // Icono para español

const LanguageSwitcher = ({ hidden }) => {
  const { language, switchLanguage } = useLanguage();

  // Si la prop hidden es verdadera, no renderizar el componente
  if (hidden) {
    return null;
  }

  return (
    <button
      onClick={switchLanguage}
      className={`p-0.5 rounded-full bg-primary hover:bg-purple-500 transition-all duration-300 focus:outline-none svg-lang`}
      aria-label={language === "en" ? "Switch to Spanish" : "Switch to English"}
    >
      <Image
        src={language === "en" ? SpainIcon : UKIcon}
        alt={language === "en" ? "Switch to Spanish" : "Switch to English"}
        width={50}
        height={50}
        className="rounded-full"
      />
    </button>
  );
};

export default LanguageSwitcher;
