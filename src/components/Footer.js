import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full py-20">
      <div className="flex flex-col w-full max-w-6xl px-1 text-primary">
        <div className="w-40 mb-3">
          <img
            src="/img/paypal-color.svg"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex justify-between w-full py-5 border-b-2">
          <ul className="flex gap-5">
            <li>
              <a href="/#" className="text-sm font-bold">
                Help
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Contact
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Fees
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Security
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Apps
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Shop
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Enterprise
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Partners
              </a>
            </li>
          </ul>
          <div className="w-4 h-4 overflow-hidden">
            <img src="/img/usaflag.jpg" alt="flag" className="w-full h-full" />
          </div>
        </div>
        <div className="flex justify-between py-5">
          <ul className="flex gap-5">
            <li>
              <a href="/#" className="text-sm font-bold">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Newsroom
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Jobs
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Values in Action
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Public Policy
              </a>
            </li>
            <li>
              <a href="/#" className="text-sm font-bold">
                Sitemap
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <span className="mt-0.5 text-sm text-gray-600 ">
              &copy; 1999-2022
            </span>
            <ul className="flex gap-5 ">
              <li>
                <a href="/#" className="text-sm font-bold">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/#" className="text-sm font-bold">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/#" className="text-sm font-bold">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/#" className="text-sm font-bold">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
