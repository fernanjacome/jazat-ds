import React from "react";
import Card from "./Card";

export const SatisfiedClients = () => {
  return (
    <div className="mt-5 flex flex-col text-center gap-6">
      <h3 className="font-semibold">Trusted by 30+ businesses</h3>
      <div className="flex gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} logo="/logos/teams.svg" href="#home" />
        ))}
      </div>
    </div>
  );
};
