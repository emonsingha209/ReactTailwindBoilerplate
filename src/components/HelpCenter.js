import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import HelpCard from "./HelpCard";
import HelpCardSecondary from "./HelpCardSecondary";
import SearchInput from "./SearchInput";
import SideButtonGroup from "./SideButtonGroup";
import buttonData from "./buttonData.json";
import faqData from "./feqQuestion.json";
import helpData from "./helpData.json";
import helpMoreData from "./helpMoreData.json";
import sideButtonData from "./sideButtonData.json";

const HelpCenter = () => {
  const [activeTopButton, setActiveTopButton] = useState(buttonData[0]);
  const [activeSideButton, setActiveSideButton] = useState(sideButtonData[0]);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl mt-4">
        <p className="w-full text-sm font-semibold text-secondary">
          Help Center
        </p>
        <div className="px-4">
          <h1 className="w-full mb-4 text-3xl text-center">How can we help?</h1>
          <div className="flex justify-center w-full mb-5">
            <SearchInput />
          </div>
          <div className="flex gap-3 p-4 mt-8 text-sm bg-[#FFF0A8] rounded-xl text-[#795502] ">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-exclamation"
              className="w-5 h-5"
            />
            <p className="leading-6 grow">
              Received a suspicious email, fake invoice, or message? Don't
              reply, open links, download attachments, or call any listed phone
              numbers. We'll never ask for your PayPal password or financial
              details by email or message, or over the phone. Forward suspicious
              messages to{" "}
              <a href="mailto:phishing@paypal.com" className="text-primary">
                phishing@paypal.com
              </a>{" "}
              and then delete them.
            </p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" className="w-5 h-5" />
          </div>
          <div className="grid grid-cols-1 gap-4 px-5 mt-7 md:grid-cols-3">
            {helpData.map((item, index) => (
              <HelpCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <ButtonGroup
              buttons={buttonData}
              activeButton={activeTopButton}
              setActiveButton={setActiveTopButton}
            />
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="w-full md:w-1/4">
              <SideButtonGroup
                buttons={sideButtonData}
                activeButton={activeSideButton}
                setActiveButton={setActiveSideButton}
              />
            </div>
            <div className="w-full pt-1 pl-4 md:w-1/2">
              <h2 className="text-2xl ">{faqData.title}</h2>
              <ul className="mt-4 list-none">
                {faqData.questions.map((data, index) => (
                  <li key={index} className="mb-4">
                    <a href="#test" className="font-semibold text-secondary">
                      {data.question}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <div className="text-center bg-[#F7F9FB] shadow-md rounded-lg px-7  py-10 text-xs">
                <p className="mb-4 font-serif text-xs font-semibold leading-relaxed">
                  Get customized help with your account and access your message
                  center.
                </p>
                <button className="px-4 py-1.5 font-bold border-2 rounded-full border-primary text-secondary">
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16">
            <h2 className="text-3xl font-light ">More ways to get help</h2>
            <div className="grid w-4/5 grid-cols-1 gap-4 px-4 mt-7 md:grid-cols-3">
              {helpMoreData.map((item, index) => (
                <HelpCardSecondary
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center my-8">
            <div className="flex justify-center w-4/5 bg-[#F6F7FB] p-5">
              <div className="flex flex-wrap items-center justify-around w-11/12 md:flex-nowrap gap-x-36 gap-y-8">
                <div>
                  <h3 className="mb-2 text-lg">
                    How are we doing?
                  </h3>
                  <p className="text-sm">
                    Help improve the <span className="font-bold">PayPal Help Center experience</span> with some
                    quick feedback.
                  </p>
                </div>
                <div className="grid place-items-center">
                  <button className="px-8 py-3.5  text-white rounded-full text-nowrap bg-primary font-light">
                    Take the survey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
