import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HelpCardSecondary = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2 text-center bg-white">
      <div className="grid w-full h-full place-items-center">
        <FontAwesomeIcon icon={icon} className="w-10 h-10 text-[#2C2E30]" />
      </div>
      <div className="flex flex-col">
        <h2 className="mb-3 font-semibold text-secondary">{title}</h2>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

export default HelpCardSecondary;
