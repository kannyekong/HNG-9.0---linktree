import React from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className="w-screen h-screen px-4 space-y-12 overflow-x-hidden md:px-24">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
