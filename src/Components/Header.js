import React from "react";
import profile from "../images/main/profile.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4">
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
    </div>
  );
};

export default Header;
