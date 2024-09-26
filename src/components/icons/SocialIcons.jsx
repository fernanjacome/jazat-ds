import Image from "next/image";
import Facebook from "/public/icons/facebook.svg";
import Linkedin from "/public/icons/linkedin.svg";
import Instagram from "/public/icons/instagram.svg";

const SocialIcons = ({ size = 20 }) => {
  const icons = [
    {
      src: Facebook,
      alt: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      src: Linkedin,
      alt: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      src: Instagram,
      alt: "Instagram",
      url: "https://www.instagram.com",
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={size}
            height={size}
            className="invert"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
