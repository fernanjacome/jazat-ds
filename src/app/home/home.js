import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import ClientSatisfaction from "@/components/ClientSatisfaction";
import { MdOutlineTextsms } from "react-icons/md";
import IntercaladorTexto from "@/components/IntercaladorTexto";

export const Home = ({ language, currentLang }) => {
  const title = currentLang[language].title;
  const highlightedWords = [
    "business",
    "custom-designed",
    "negocio",
    "diseñado",
    "medida.",
  ];

  const templates = [
    {
      title: "Plantilla de Portafolio",
      description: "Un diseño limpio y moderno para mostrar tu trabajo.",
      image: "/images/portfolio-template.webp",
      link: "/portfolio",
    },
    {
      title: "Landing Page para Producto",
      description: "Diseño atractivo para impulsar las ventas de tu producto.",
      image: "/images/landing-page-template.png",
      link: "/landing-page",
    },
    {
      title: "Sitio Web E-commerce",
      description: "Soluciones completas para tiendas online.",
      image: "/images/ecommerce-template.png",
      link: "/ecommerce",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <section className="home-content">
        <div className="column-1">
          <h1 className="home-title  ">
            {title.split(" ").map((word, index) =>
              highlightedWords.includes(word) ? (
                <span key={index} className="text-gradient">
                  {word}
                </span>
              ) : (
                <span key={index}> {word} </span>
              )
            )}
          </h1>
          <p className="instructions ph:text-center">
            {currentLang[language].instructions}
          </p>
          <div className="flex ph:flex-col ph:justify-center ph:items-center gap-5">
            <Button
              className="text-white ph:max-w-[50%]"
              variant="outline"
              label={currentLang[language].button}
              icon={MdOutlineTextsms}
              iconPosition="right"
            />
            <ClientSatisfaction language={language} currentLang={currentLang} />
          </div>
        </div>

        {/* Carrusel de Plantillas */}
        <div className="column-2 relative mt-4  xl:mt-14 ph:mb-5 ">
          <IntercaladorTexto language={language} />
          <div className="relative mt-2 overflow-hidden rounded-md md13:h-[22rem] xl:h-72 ph:h-60 ">
            {/* Imagen activa del carrusel */}
            {templates.map((template, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out  ${
                  currentIndex === index ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Image
                  src={template.image}
                  alt={template.title}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-center mt-4 space-x-2">
            {templates.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-primary" : "bg-gray-400"
                }`}
                onClick={() => handleSelectImage(index)}
                aria-label={`Select Template ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="services" class="services-section">
        <h2 class="section-title">{currentLang[language].ourServices}</h2>
        <div class="container">
          <div class="service-card">
            <h3 class="service-subtitle">
              {currentLang[language].professionalLandingPageTitle}
            </h3>
            <p class="service-description">
              {currentLang[language].professionalLandingPageDescription}
            </p>
            <p class="service-price">
              {currentLang[language].professionalLandingPagePrice}{" "}
              <span className="text-blue-600">350</span>
            </p>
            <ul class="service-features">
              <li>{currentLang[language].professionalLandingPageFeature1}</li>
              <li>{currentLang[language].professionalLandingPageFeature2}</li>
              <li>{currentLang[language].professionalLandingPageFeature3}</li>
              <li>{currentLang[language].professionalLandingPageFeature4}</li>
            </ul>
            <p class="service-delivery">
              <strong>Delivery Time:</strong>{" "}
              {currentLang[language].professionalLandingPageDelivery}
            </p>
          </div>

          <div class="service-card">
            <h3 class="service-subtitle">
              {currentLang[language].standardCorporateWebsiteTitle}
            </h3>
            <p class="service-description">
              {currentLang[language].standardCorporateWebsiteDescription}
            </p>
            <p class="service-price">
              {currentLang[language].standardCorporateWebsitePrice}{" "}
              <span className="text-red-600">700</span>
            </p>
            <ul class="service-features">
              <li>{currentLang[language].standardCorporateWebsiteFeature1}</li>
              <li>{currentLang[language].standardCorporateWebsiteFeature2}</li>
              <li>{currentLang[language].standardCorporateWebsiteFeature3}</li>
              <li>{currentLang[language].standardCorporateWebsiteFeature4}</li>
            </ul>
            <p class="service-delivery">
              <strong>Delivery Time:</strong>{" "}
              {currentLang[language].standardCorporateWebsiteDelivery}
            </p>
            <p class="service-support">
              {currentLang[language].standardCorporateWebsiteSupport}
            </p>
          </div>

          <div class="service-card">
            <h3 class="service-subtitle">
              {currentLang[language].advancedCorporateWebsiteTitle}
            </h3>
            <p class="service-description">
              {currentLang[language].advancedCorporateWebsiteDescription}
            </p>
            <p class="service-price">
              {currentLang[language].advancedCorporateWebsitePrice}{" "}
              <span className="text-green-600">1000</span>
            </p>
            <ul class="service-features">
              <li>{currentLang[language].advancedCorporateWebsiteFeature1}</li>
              <li>{currentLang[language].advancedCorporateWebsiteFeature2}</li>
              <li>{currentLang[language].advancedCorporateWebsiteFeature3}</li>
              <li>{currentLang[language].advancedCorporateWebsiteFeature4}</li>
            </ul>
            <p class="service-delivery">
              <strong>Delivery Time:</strong>{" "}
              {currentLang[language].advancedCorporateWebsiteDelivery}
            </p>
            <p class="service-support">
              {currentLang[language].advancedCorporateWebsiteSupport}
            </p>
          </div>

          <div class="service-card">
            <h3 class="service-subtitle">
              {currentLang[language].professionalPortfolioTitle}
            </h3>
            <p class="service-description">
              {currentLang[language].professionalPortfolioDescription}
            </p>
            <p class="service-price">
              {currentLang[language].professionalPortfolioPrice}{" "}
              <span className="text-primary">400</span>
            </p>
            <ul class="service-features">
              <li>{currentLang[language].professionalPortfolioFeature1}</li>
              <li>{currentLang[language].professionalPortfolioFeature2}</li>
              <li>{currentLang[language].professionalPortfolioFeature3}</li>
              <li>{currentLang[language].professionalPortfolioFeature4}</li>
            </ul>
            <p class="service-delivery">
              <strong>Delivery Time:</strong>{" "}
              {currentLang[language].professionalPortfolioDelivery}
            </p>
            <p class="service-support">
              {currentLang[language].professionalPortfolioSupport}
            </p>
          </div>

          <div class="service-card">
            <h3 class="service-subtitle">
              {currentLang[language].redesignAndOptimizationTitle}
            </h3>
            <p class="service-description">
              {currentLang[language].redesignAndOptimizationDescription}
            </p>
            <p class="service-price">
              {currentLang[language].redesignAndOptimizationPrice}{" "}
              <span className="text-yellow-500">700</span>
            </p>
            <ul class="service-features">
              <li>{currentLang[language].redesignAndOptimizationFeature1}</li>
              <li>{currentLang[language].redesignAndOptimizationFeature2}</li>
              <li>{currentLang[language].redesignAndOptimizationFeature3}</li>
              <li>{currentLang[language].redesignAndOptimizationFeature4}</li>
            </ul>
            <p class="service-delivery">
              <strong>Delivery Time:</strong>{" "}
              {currentLang[language].redesignAndOptimizationDelivery}
            </p>
            <p class="service-support">
              {currentLang[language].redesignAndOptimizationSupport}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
