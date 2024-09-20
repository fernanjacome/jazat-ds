"use client"; // Asegúrate de marcar este archivo como un Client Component

const Card = ({ title = "", logo = "", href = "#" }) => {
  return (
    <li className="border-2 border-white border-opacity-20 rounded-md w-40 flex flex-col justify-center items-center py-3">
      <h2>{title}</h2>
      <a href={href}>
        <img alt="logo-teams" className="w-16" src={logo} />
      </a>
    </li>
  );
};

export default Card;
