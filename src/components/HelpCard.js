import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HelpCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center p-2 bg-white border border-gray-100 rounded-lg shadow-md">
      <div className="grid w-24 h-full place-items-center">
        <div className="bg-[#F6F5F1] w-12 h-12 grid place-items-center rounded-full">
          <FontAwesomeIcon icon={icon} className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex flex-col text-sm">
        <span className="font-bold">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default HelpCard;
