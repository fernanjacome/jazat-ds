import Button from "@/components/Button";
import React, { useEffect, useState } from "react";

const ContactSection = () => {
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
    <section className="contact-section mt-5 p-4">
      <div className="col">
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto en mente o necesitas ayuda? ¡Hablemos!</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>

          <Button label="Enviar mensaje" sx={{ width: "500px" }} />
        </form>
      </div>
      <div className="col direct-contact-section">
        <h3>¿Cuál es el mejor plan para ti?</h3>
        <p>
          ¿Necesitas ayuda con tu decisión? Usa cualquiera de estos medios para
          obtener una consulta gratis con uno de nuestros expertos.
        </p>

        <div className="contact-methods">
          <p>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+123456789">+593 95 992 8535</a>
          </p>
          <p>
            <strong>Correo Electrónico:</strong>{" "}
            <a href="mailto:tuemail@ejemplo.com">fernanjacome0sb@gmail.com</a>
          </p>
          <p>
            <strong>WhatsApp: </strong>
            <a
              href="https://wa.me/123456789?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar un mensaje
            </a>
          </p>
        </div>

        <div className="social-media">
          <p>
            <strong>Sígueme en redes sociales:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/tuperfil"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
          <img src="./logo-fill.png" alt="Logo Jazat" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
