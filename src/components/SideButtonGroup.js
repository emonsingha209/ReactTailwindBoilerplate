import React from "react";

const SideButtonGroup = ({ buttons, activeButton, setActiveButton }) => {
  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className="w-full p-0.5 text-gray-600 ">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={` py-2 text-left px-4  transition-colors w-full bg-white ${
            button === activeButton
              ? "bg-[#E4F1FA] border-l-4 border-[#1740BC] text-primary font-semibold"
              : ""
          }`}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default SideButtonGroup;
