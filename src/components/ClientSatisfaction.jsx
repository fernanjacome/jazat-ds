"use client"; // Asegúrate de marcar este archivo como un Client Component

const ClientSatisfaction = ({ className = "", language, currentLang }) => {
  return (
    <div
      className={`flex gap-12 ${className} ph:flex-col ph:items-center  ph:gap-2 ph:text-center ph:mt-5`}
    >
      <div className="relative w-10 h-10 ph:ml-[-2rem]">
        <div className="absolute client-img top-0 left-0 border-primary rounded-full border-2 w-10 h-10"></div>
        <div className="absolute client-img-p top-0 left-5 border-primary rounded-full border-2 w-10 h-10"></div>
        <div className="absolute client-img-a top-0 left-10 border-primary rounded-full border-2 w-10 h-10"></div>
      </div>
      <p className="text-sizeBase">
        <strong>+3</strong>
        <br />
        {currentLang[language].satisfiedclients}
      </p>
    </div>
  );
};

export default ClientSatisfaction;
