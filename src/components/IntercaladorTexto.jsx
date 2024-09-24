import React, { useState, useEffect } from "react";
import lang from "../languages/lang";

const IntercaladorTexto = ({ language, currentLang }) => {
  const texts = language === "en" ? lang.en.texts : lang.es.texts;

  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("down");
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[(index + 1) % texts.length]);
        setDirection("up");
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, texts]);

  return (
    <div className="text-container">
      <h3 className={`text ${direction}`}>{currentText}</h3>
    </div>
  );
};

export default IntercaladorTexto;
