import React, { Component } from "react";
import "../sass/App.scss";
import BottomNavBar from "./BottomNavBar";
import NavBar from "./NavBar";
import WordCarousel from "../containers/WordCarousel";

const FestivalLandingPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <WordCarousel />
      </div>
      <div>
        <BottomNavBar />
      </div>
    </div>
  );
};

export default FestivalLandingPage;
