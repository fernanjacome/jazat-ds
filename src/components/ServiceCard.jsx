import React from "react";

const ServiceCard = ({
  title,
  description,
  price,
  features,
  deliveryTime,
  color,
  from,
}) => {
  return (
    <div className="service-card ">
      <h3 className="service-subtitle">{title}</h3>
      <p className="service-description">{description}</p>
      <p className="service-price">
        {from} <span style={{ color }}>{price}</span>{" "}
        {/* Cambié { color } por color */}
      </p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className="service-delivery">
        <strong>Delivery Time:</strong> {deliveryTime}
      </p>
    </div>
  );
};

export default ServiceCard;
