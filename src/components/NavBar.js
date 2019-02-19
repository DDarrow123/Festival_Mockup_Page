import React from "react";
import lightening from "../images/lightening.png";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <img
        className="lightening-bolt"
        src={lightening}
        alt="Lightening Bolt Image"
      />
      <span>One Minimal Festival</span>
      <span className="nav-bar-title">
        <a href="#">Get tickets!</a>
      </span>
    </header>
  );
};

export default NavBar;
