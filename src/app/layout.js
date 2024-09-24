"use client";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import SocialIcons from "@/components/icons/SocialIcons";

export default function RootLayout({
  children,
  title = "Jazat WebCraft",
  description = "Descripción del sitio",
  sectionName = "home",
}) {
  return (
    <LanguageProvider>
      <MainContent
        title={title}
        description={description}
        sectionName={sectionName}
      >
        {children}
      </MainContent>
    </LanguageProvider>
  );
}

const MainContent = ({ children, title, description, sectionName }) => {
  const { language, lang: currentLang } = useLanguage();

  // Manejo de errores para el idioma
  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className="relative text-secondary font-montserrat flex flex-col min-h-screen overflow-x-hidden">
        <header className="mx-20 px-4 py-2 flex justify-between items-center flex-wrap border-b-2 border-opacity-15 border-gray-400">
          <a href="/">
            <img src="./logo.png" alt="Logo de Mi Sitio" className="h-20" />
          </a>

          <nav className="flex justify-center">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
              {["home", "projects", "about", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item}`}
                    className="text-white hover:text-purple-500"
                  >
                    {currentLang[language][item]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            <Button
              label={currentLang[language].letstalk}
              icon={FiArrowUpRight}
              iconPosition="right"
            />
            <LanguageSwitcher />
          </div>
        </header>

        <main className="mx-16 flex-grow my-1 px-4 lg:px-10" id={sectionName}>
          {children}
        </main>

        <footer className=" flex justify-between bg-background text-white text-center p-4">
          <div>
            <p className="text-xs flex flex-col text-left">
              <a href="/privacy" className="hover:underline">
                Política de Privacidad
              </a>
              <a href="/terms" className="hover:underline">
                Términos de Servicio
              </a>
            </p>
          </div>
          <div>
            <p className="mt-2 text-sm font-semibold">Jazat Digital Studio</p>
            <p></p>
          </div>

          <div className="items-center flex justify-center">
            <SocialIcons color="#fff" size={20} />
          </div>
        </footer>

        <div className="radial-bg"></div>
        <div className="radial-bg-2"></div>
      </body>
    </html>
  );
};
