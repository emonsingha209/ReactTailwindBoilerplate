import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full border-b-2">
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto py-7 text-primary">
        <div className="flex items-center">
          <div className="md:mr-10 w-9 h-9">
            <img
              src="/img/paypal-mark-color.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <nav className={`md:gap-12 ${showMenu ? "flex flex-col absolute top-32 left-0 pl-8 text-2xl gap-5 z-50 pb-8 bg-white w-full" : "hidden"} md:flex`}>
            <a href="/#">Personal</a>
            <a href="/#">Business</a>
            <a href="/#">Developer</a>
            <a href="/#">Help</a>
          </nav>
        </div>

        <div className="flex gap-5 ">
          <button className="px-8 py-2.5 transition-colors duration-300 bg-white border-2 rounded-full text-primary border-primary hover:border-secondary hover:text-secondary">
            Log In
          </button>
          <button className="px-8 py-2.5 text-white transition-colors duration-300 rounded-full bg-primary hover:bg-secondary">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
