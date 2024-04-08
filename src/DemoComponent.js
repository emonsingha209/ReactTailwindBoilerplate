import React from "react";

const DemoComponent = () => {
  return (
    <div className="flex flex-col items-center mt-16 bg-gray-400 justify-top">
      <div className="w-full p-8 text-left bg-gray-200 max-w-7xl">
        <h1 className="mb-4 text-5xl font-bold text-stone-700">
          Hello <span className="text-stone-600">World!</span>
        </h1>
        <p className="text-base text-gray-700">
          Cheers,
          <br />
          Start your project 🚀
        </p>
      </div>
    </div>
  );
};

export default DemoComponent;
