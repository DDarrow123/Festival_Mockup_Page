import React, { Component } from "react";
import "../sass/App.scss";
import BottomNavBar from "../components/BottomNavBar";
import NavBar from "../components/NavBar";
import WordCarousel from "../components/WordCarousel";

class FestivalLandingPage extends Component {
  render() {
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
  }
}

export default FestivalLandingPage;
