"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"; // Import icons
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
  const [menuOpen, setMenuOpen] = useState(false); // State for the menu

  // Error handling for the language
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
      <body className="relative text-secondary font-montserrat flex flex-col  flex-grow">
        <header className="flex px-4 py-2 border-b-2 border-opacity-15 border-gray-400">
          {/* Logo and Menu */}
          <nav className="flex justify-between items-center w-[90%] mx-auto">
            <a href="/">
              <img
                src="./logo.png"
                alt="Logo de Mi Sitio"
                className="h-20 md13:h-16 xl:h-14"
              />
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center ">
              <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
                {["home", "projects", "about", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`/${item}`} className="hover:text-purple-500">
                      {currentLang[language][item]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                label={currentLang[language].letstalk}
                icon={FiArrowUpRight}
                iconPosition="right"
                className="hidden md:flex md:px-2 md:text-sm md:h-10"
              />
              <LanguageSwitcher />
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          <div
            className={`z-10 absolute top-0 left-0 w-full min-w-fit bg-background transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-[6.5rem]" : "-translate-y-full"
            } md:hidden`}
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
              {["home", "projects", "about", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item}`}
                    className="hover:text-purple-500"
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                  >
                    {currentLang[language][item]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main
          className="mx-2 md:mx-16 flex-grow my-1 px-2 md:px-4 lg:px-10"
          id={sectionName}
        >
          {children}
        </main>

        <footer className=" bottom-0 w-full flex flex-col gap-2 md:flex-row justify-between bg-background text-white text-center p-4">
          <div className="flex flex-col items-center md:text-left">
            <p className=" flex flex-col text-xs">
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
