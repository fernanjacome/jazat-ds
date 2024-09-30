import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const hexToRgba = (color, alpha = 1) => {
  // Check if the input is in rgb() format
  if (color.startsWith("rgb")) {
    const rgbValues = color.match(/\d+/g).map(Number); // Extract numeric values
    return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
  }

  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
    console.error("Invalid hex color: ", color);
    return `rgba(0, 0, 0, ${alpha})`;
  }

  color = color.replace(/^#/, "");

  // Expand short hex (e.g. #abc to #aabbcc)
  if (color.length === 3) {
    color = color
      .split("")
      .map((char) => char + char)
      .join("");
  }

  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ServiceCard = ({
  title,
  description,
  price,
  features,
  deliveryTime,
  color,
  from,
}) => {
  const rgbaColor = hexToRgba(color, 0.2);
  return (
    <article className="service-card" style={{ borderColor: rgbaColor }}>
      <p className="service-delivery" style={{ borderColor: rgbaColor }}>
        {deliveryTime}
      </p>
      <h3 className="service-subtitle">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-price">
        <span className="service-from">{from}</span>{" "}
        <span style={{ color, fontSize: "3rem" }}>{price}</span>{" "}
        {/* Cambié { color } por color */}
      </div>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>
            <FaCircleCheck
              className="icon-list"
              style={{ color, opacity: "0.8" }}
            />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceCard;
