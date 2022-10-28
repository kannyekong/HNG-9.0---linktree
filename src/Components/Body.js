import React from "react";
import slack from "../images/main/slack.png";
import github from "../images/main/Icon.png";

const Body = () => {
  return (
    <div className="body">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/kannyyekong"
        className="shelve"
      >
        Twitter Link
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://training.zuri.team/"
        className="shelve"
        id="btn__zuri"
      >
        Zuri Team
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="http://books.zuri.team/"
        className="shelve"
        id="books"
      >
        Zuri Books
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://books.zuri.team/python-for-beginners?ref_id=<Akaneno Ekong>"
        className="shelve"
        id="book__python"
      >
        Python Books
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://background.zuri.team"
        className="shelve"
        id="pitch"
      >
        Background Check for Coders
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://books.zuri.team/design-rules"
        className="shelve"
        id="book__design"
      >
        Design Books
      </a>
      <div className="pb-16 bodyTwo">
        <a
          target="_blank"
          rel="noreferrer"
          id="slack"
          href="https://kanny.slack.com"
        >
          <p className="hidden">USERNAME: Kanny</p>
          <img src={slack} alt="slack" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kannyekong"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Body;
