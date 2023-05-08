import React from "react";
import IconSentiment from "../assets/ic_sentiment.png";

const Header = ({ name }) => {
  return (
    <>
      <header className="py-1 md:py-[17px] border-b-2 border-[#F5F5F5]">
        <div className="md:hidden flex space-x-2 px-4">
          <img src={IconSentiment} alt="" className="w-6" />
          <h2 className="md:hidden text-primary text-base font-bold">{name}</h2>
        </div>
        <h2 className="hidden md:block text-primary px-4 text-2xl font-bold">
          {name}
        </h2>
      </header>
    </>
  );
};

export default Header;
