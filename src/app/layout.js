"use client";
import { useState } from "react";
import localFont from "next/font/local"; // Considera si realmente necesitas esta línea
import Image from "next/image";
import "./globals.css";
import { FiArrowUpRight } from "react-icons/fi"; // Import icons
import { FaBars } from "react-icons/fa6";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const closeMenu = () => {
    setIsExiting(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsExiting(false);
    }, 300);
  };

  if (!currentLang || !currentLang[language]) {
    return <p>Error: No se encontró el idioma seleccionado.</p>;
  }

  return (
    <html lang={language}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={description} />
      </head>
      <body>
        <header className="fixed w-full z-[100] bg-transparent backdrop-blur-lg flex px-4 py-2 border-b-2 border-opacity-15 border-gray-400">
          <nav className="z-[100] flex justify-between items-center w-[90%] mx-auto">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <a href="/">
              <img
                src="./logo.png"
                alt="Logo Jazat"
                className="z-[100] h-20 md13:h-20 xl:h-12 ph:hidden"
              />
            </a>
            <img
              src="./logo-fill.png"
              alt="Logo Jazat"
              className="z-[100] ph:h-20 md:hidden mr-10"
            />
            <button
              className="z-[100] md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars className="text-[1.75rem] text-gray-400" />
            </button>

            <div className="z-[100] hidden md:flex md:items-center">
              <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
                {["home", "projects", "about", "contact", "services"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`/${item}`} className="hover:text-purple-500">
                        {currentLang[language][item]}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="z-[100] hidden md:flex gap-2">
              <Button
                label={currentLang[language].letstalk}
                icon={FiArrowUpRight}
                iconPosition="right"
                className="hidden md:flex md:px-2 md:text-sm md:h-10"
              />
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          <div className="overflow-hidden absolute w-full h-[22rem] top-24 left-0 z-[90]">
            <div
              className={`absolute top-[0%] right-[0%] w-full mobile-menu bg-background ${
                menuOpen ? "open" : isExiting ? "closing" : "closing"
              }`}
            >
              <ul className="flex flex-col items-center gap-8 p-4">
                <div className="flex gap-2">
                  <Button
                    label={currentLang[language].letstalk}
                    icon={FiArrowUpRight}
                    iconPosition="right"
                    className="flex px-2 text-sm h-10"
                  />
                </div>
                {["home", "projects", "about", "contact", "services"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`/${item}`}
                        className="hover:text-purple-500"
                        onClick={closeMenu} // Cierra el menú al seleccionar
                      >
                        {currentLang[language][item]}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </header>

        <main className="main-content" id={sectionName}>
          {children}
        </main>

        <footer className="footer">
          <div className="flex flex-col items-center md:text-left">
            <p className="flex flex-col text-xs">
              <a href="/privacy" className="hover:underline">
                Política de Privacidad
              </a>
              <a href="/terms" className="hover:underline">
                Términos de Servicio
              </a>
            </p>
          </div>
          <div>
            <p className="mt-2 text-sm font-semibold">Jazat WebCraft</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-xs">Nuestras Redes</p>
            <SocialIcons color="#fff" size={20} />
          </div>
        </footer>

        <div className="radial-bg"></div>
        <div className="radial-bg-2"></div>
      </body>
    </html>
  );
};
