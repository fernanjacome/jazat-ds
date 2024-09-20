import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button"; // Asegúrate de que la importación es correcta

const LanguageSwitcher = () => {
  const { language, switchLanguage, lang: currentLang } = useLanguage(); // Obtener traducciones y el idioma

  return (
    <div>
      <Button
        onClick={switchLanguage}
        className="p-2 bg-primary text-white"
        label={
          language === "en"
            ? currentLang.en.switchToSpanish
            : currentLang.es.switchToEnglish
        }
      ></Button>
    </div>
  );
};

export default LanguageSwitcher;
