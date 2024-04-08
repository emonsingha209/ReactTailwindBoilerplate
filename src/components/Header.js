import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center w-full border-b-2">
      <div className="flex items-center justify-between w-full max-w-6xl px-1 py-7 text-primary">
        <div className="flex items-center gap-12 ">
          <div className="w-9 h-9">
            <img
              src="/img/paypal-mark-color.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <nav className="flex gap-12">
            <a href="/#">Personal</a>
            <a href="/#">Business</a>
            <a href="/#">Developer</a>
            <a href="/#">Help</a>
          </nav>
        </div>
        <div className="flex gap-5">
          <button className="px-8 py-2.5 transition-colors duration-300 bg-white border-2 rounded-full text-primary border-primary hover:border-secondary hover:text-secondary">
            Log In
          </button>
          <button className="px-8 py-2.5 text-white transition-colors duration-300 rounded-full bg-primary hover:bg-secondary">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
