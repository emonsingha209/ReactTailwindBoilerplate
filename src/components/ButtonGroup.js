import React from "react";

const ButtonGroup = ({ buttons, activeButton, setActiveButton }) => {
  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className="w-fit bg-[#F0EFE9] p-0.5 rounded-full text-gray-600 text-sm">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`px-8 py-2 rounded-full transition-colors ${
            button === activeButton ? "bg-white text-primary font-bold" : ""
          }`}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
