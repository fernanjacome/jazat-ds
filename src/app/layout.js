"use client";
import localFont from "next/font/local";
import "./globals.css";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
  title = "Mi Sitio",
  description = "Descripción del sitio",
  sectionName = "home",
}) {
  return (
    <LanguageProvider>
      <html lang="es">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
        <body className="relative bg-background text-secondary font-montserrat flex flex-col min-h-screen overflow-x-hidden">
          <header className="mx-20 px-4 flex justify-between items-center flex-wrap">
            <a href="#home">
              <img src="./logo.png" alt="logo" className="h-20" />
            </a>

            <div className="flex items-center gap-5">
              <LanguageSwitcher />
              <nav>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
                  <li>
                    <a href="/" className="text-white hover:text-purple-500">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="text-white hover:text-purple-500"
                    >
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-white hover:text-purple-500"
                    >
                      Acerca de
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white hover:text-purple-500"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
              <Button
                label="Let's Talk"
                icon={FiArrowUpRight}
                iconPosition="right"
              />
            </div>
          </header>
          <main className="mx-16 flex-grow my-1 px-4 lg:px-10" id={sectionName}>
            {children}
          </main>

          <footer className="bg-primary text-center p-4">
            <p>&copy; 2024 Mi Sitio Web</p>
          </footer>
          <div className="radial-bg"></div>
          <div className="radial-bg-2"></div>
        </body>
      </html>
    </LanguageProvider>
  );
}
