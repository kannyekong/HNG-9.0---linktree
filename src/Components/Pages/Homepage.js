import React from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className="w-screen h-screen px-24 py-12 overflow-x-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
