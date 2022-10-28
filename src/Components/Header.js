import React from "react";
import profile from "../images/main/profile.jpg";
import share from "../images/main/share.png";
import shareDot from "../images/main/shareDot.png";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto space-y-4">
      <div>
        <img src={profile} className="w-16 h-16 rounded-full" alt="myProfile" />
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/kannyyekong"
      >
        <p className="font-bold">Akaneno Ekong</p>
      </a>
      <div className="absolute right-0 -top-4 md:right-48 md:-top-6">
        <img src={share} alt="shareIcon" className="hidden md:flex" />
        <img src={shareDot} className="flex md:hidden" alt="shareIcon" />
      </div>
    </div>
  );
};

export default Header;
