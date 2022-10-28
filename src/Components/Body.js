import React from "react";
import slack from "../images/main/slack.png";
import github from "../images/main/Icon.png";

const Body = () => {
  return (
    <div className="body">
      <div className="shelve">Twitter Link</div>
      <div className="shelve">Zuri Team</div>
      <div className="shelve">Zuri Books</div>
      <div className="shelve">Python Books</div>
      <div className="shelve">Background Check for Coders</div>
      <div className="shelve">Design Books</div>
      <div className="bodyTwo">
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={github} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Body;
