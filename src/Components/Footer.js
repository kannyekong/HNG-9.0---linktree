import React from "react";
import zuri from "../images/footer/zuri.png";
import i4g from "../images/footer/i4g.png";

const Footer = () => {
  return (
    <div className="container flex flex-col items-start py-8 mx-auto border-t md:items-center md:justify-between md:flex-row ">
      <div>
        <img src={zuri} alt="zuriinternship" />
      </div>
      <div>
        <p className="text-[16px] text-gray-300">
          HNG Internship 9 Frontend Task
        </p>
      </div>
      <div>
        <img src={i4g} alt="ingressive4good" />
      </div>
    </div>
  );
};

export default Footer;
