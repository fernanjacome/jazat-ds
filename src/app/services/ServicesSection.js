import ServiceCard from "@/components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Pagination } from "swiper/modules";
import React, { useEffect, useState } from "react";

const ServicesSection = ({ language, currentLang }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">{currentLang[language].ourServices}</h2>
      <h3 className="section-subtitle">
        {currentLang[language].unlockEndless}
      </h3>
      {isMobile ? (
        <div className="container p-5">
          {" "}
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={1}
            modules={[FreeMode, Pagination]}
          >
            <SwiperSlide>
              <div className="w-full flex justify-center items-center">
                <ServiceCard
                  title={currentLang[language].professionalLandingPageTitle}
                  description={
                    currentLang[language].professionalLandingPageDescription
                  }
                  from={currentLang[language].from}
                  price="350"
                  features={[
                    currentLang[language].professionalLandingPageFeature1,
                    currentLang[language].professionalLandingPageFeature2,
                    currentLang[language].professionalLandingPageFeature3,
                    currentLang[language].professionalLandingPageFeature4,
                  ]}
                  deliveryTime={
                    currentLang[language].professionalLandingPageDelivery
                  }
                  color="#fe2500"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center items-center">
                <ServiceCard
                  title={currentLang[language].standardCorporateWebsiteTitle}
                  description={
                    currentLang[language].standardCorporateWebsiteDescription
                  }
                  from={currentLang[language].from}
                  price="700"
                  features={[
                    currentLang[language].standardCorporateWebsiteFeature1,
                    currentLang[language].standardCorporateWebsiteFeature2,
                    currentLang[language].standardCorporateWebsiteFeature3,
                    currentLang[language].standardCorporateWebsiteFeature4,
                  ]}
                  deliveryTime={
                    currentLang[language].standardCorporateWebsiteDelivery
                  }
                  color="#006FC4"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full flex justify-center items-center">
                <ServiceCard
                  title={currentLang[language].advancedCorporateWebsiteTitle}
                  description={
                    currentLang[language].advancedCorporateWebsiteDescription
                  }
                  from={currentLang[language].from}
                  price="1000"
                  features={[
                    currentLang[language].advancedCorporateWebsiteFeature1,
                    currentLang[language].advancedCorporateWebsiteFeature2,
                    currentLang[language].advancedCorporateWebsiteFeature3,
                    currentLang[language].advancedCorporateWebsiteFeature4,
                  ]}
                  deliveryTime={
                    currentLang[language].advancedCorporateWebsiteDelivery
                  }
                  color="#9e37e8"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full flex justify-center items-center">
                <ServiceCard
                  title={currentLang[language].professionalPortfolioTitle}
                  description={
                    currentLang[language].professionalPortfolioDescription
                  }
                  price="400"
                  from={currentLang[language].from}
                  features={[
                    currentLang[language].professionalPortfolioFeature1,
                    currentLang[language].professionalPortfolioFeature2,
                    currentLang[language].professionalPortfolioFeature3,
                    currentLang[language].professionalPortfolioFeature4,
                  ]}
                  deliveryTime={
                    currentLang[language].professionalPortfolioDelivery
                  }
                  color="#28B326"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full flex justify-center items-center">
                <ServiceCard
                  title={currentLang[language].redesignAndOptimizationTitle}
                  description={
                    currentLang[language].redesignAndOptimizationDescription
                  }
                  from={currentLang[language].from}
                  price="700"
                  features={[
                    currentLang[language].redesignAndOptimizationFeature1,
                    currentLang[language].redesignAndOptimizationFeature2,
                    currentLang[language].redesignAndOptimizationFeature3,
                    currentLang[language].redesignAndOptimizationFeature4,
                  ]}
                  deliveryTime={
                    currentLang[language].redesignAndOptimizationDelivery
                  }
                  color="#D1298D"
                />
              </div>
            </SwiperSlide>
          </Swiper>{" "}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="container">
            <ServiceCard
              title={currentLang[language].professionalLandingPageTitle}
              description={
                currentLang[language].professionalLandingPageDescription
              }
              from={currentLang[language].from}
              price="350"
              features={[
                currentLang[language].professionalLandingPageFeature1,
                currentLang[language].professionalLandingPageFeature2,
                currentLang[language].professionalLandingPageFeature3,
                currentLang[language].professionalLandingPageFeature4,
              ]}
              deliveryTime={
                currentLang[language].professionalLandingPageDelivery
              }
              color="#fe2500"
            />
            <ServiceCard
              title={currentLang[language].standardCorporateWebsiteTitle}
              description={
                currentLang[language].standardCorporateWebsiteDescription
              }
              from={currentLang[language].from}
              price="700"
              features={[
                currentLang[language].standardCorporateWebsiteFeature1,
                currentLang[language].standardCorporateWebsiteFeature2,
                currentLang[language].standardCorporateWebsiteFeature3,
                currentLang[language].standardCorporateWebsiteFeature4,
              ]}
              deliveryTime={
                currentLang[language].standardCorporateWebsiteDelivery
              }
              color="#006FC4"
            />
            <ServiceCard
              title={currentLang[language].advancedCorporateWebsiteTitle}
              description={
                currentLang[language].advancedCorporateWebsiteDescription
              }
              from={currentLang[language].from}
              price="1000"
              features={[
                currentLang[language].advancedCorporateWebsiteFeature1,
                currentLang[language].advancedCorporateWebsiteFeature2,
                currentLang[language].advancedCorporateWebsiteFeature3,
                currentLang[language].advancedCorporateWebsiteFeature4,
              ]}
              deliveryTime={
                currentLang[language].advancedCorporateWebsiteDelivery
              }
              color="#9e37e8"
            />
            <ServiceCard
              title={currentLang[language].professionalPortfolioTitle}
              description={
                currentLang[language].professionalPortfolioDescription
              }
              price="400"
              from={currentLang[language].from}
              features={[
                currentLang[language].professionalPortfolioFeature1,
                currentLang[language].professionalPortfolioFeature2,
                currentLang[language].professionalPortfolioFeature3,
                currentLang[language].professionalPortfolioFeature4,
              ]}
              deliveryTime={currentLang[language].professionalPortfolioDelivery}
              color="#28B326"
            />
            <ServiceCard
              title={currentLang[language].redesignAndOptimizationTitle}
              description={
                currentLang[language].redesignAndOptimizationDescription
              }
              from={currentLang[language].from}
              price="700"
              features={[
                currentLang[language].redesignAndOptimizationFeature1,
                currentLang[language].redesignAndOptimizationFeature2,
                currentLang[language].redesignAndOptimizationFeature3,
                currentLang[language].redesignAndOptimizationFeature4,
              ]}
              deliveryTime={
                currentLang[language].redesignAndOptimizationDelivery
              }
              color="#D1298D"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
