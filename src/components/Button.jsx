import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  icon: IconComponent,
  iconPosition = "left",
  className = "",
}) => {
  const primary =
    "border-2 border-primary bg-primary text-white hover:bg-transparent hover:border-primary transition-all duration-200";
  const outline =
    "border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200";

  return (
    <button
      type={type}
      className={`${
        variant === "primary" ? primary : outline
      } font-semibold rounded-lg px-6 py-2 flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
      aria-label={label} // Añadido para accesibilidad
    >
      {/* Ícono a la izquierda */}
      {IconComponent && iconPosition === "left" && (
        <IconComponent style={{ fontSize: "1.2em" }} aria-hidden="true" />
      )}
      {label}
      {/* Ícono a la derecha */}
      {IconComponent && iconPosition === "right" && (
        <IconComponent style={{ fontSize: "1.2em" }} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
