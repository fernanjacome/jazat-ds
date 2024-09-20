import React, { createContext, useContext, useState } from "react";
import lang from "@/languages/lang"; // Importa las traducciones

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma por defecto

  const switchLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};
