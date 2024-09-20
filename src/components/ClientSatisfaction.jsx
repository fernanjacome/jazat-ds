"use client"; // Asegúrate de marcar este archivo como un Client Component

const ClientSatisfaction = ({ className = "" }) => {
  return (
    <div className={`flex gap-12 ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute bg-white top-0 left-0 border-primary rounded-full border-2 w-10 h-10"></div>
        <div className="absolute bg-white top-0 left-5 border-primary rounded-full border-2 w-10 h-10"></div>
        <div className="absolute bg-white top-0 left-10 border-primary rounded-full border-2 w-10 h-10"></div>
      </div>
      <p className="text-sizeBase">
        <strong>+10</strong> <br /> Satisfied Clients
      </p>
    </div>
  );
};

export default ClientSatisfaction;
