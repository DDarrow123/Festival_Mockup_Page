import React, { Component } from "react";

class WordCarousel extends Component {
  componentDidMount() {
    let carouselContainer = document.querySelector(".carousel-container");
    document.querySelector(".carousel-slider").scrollLeft = -100;
    carouselContainer.addEventListener("scroll", this.scrollHorizontally);
  }

  scrollHorizontally = e => {
    // let carouselContainer = document.querySelector(".carousel-container");
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.querySelector(".carousel-slider").scrollLeft -= delta * 40; // Multiplied by 40 (-= delta * 40;)
    console.log(document.querySelector(".carousel-container").scrollLeft);
    e.preventDefault();
  };

  render() {
    return (
      <div className="carousel-container" onWheel={this.scrollHorizontally}>
        <div className="carousel-slider">
          <div className="slide" id="slide-1">
            One
          </div>
          <div className="slide" id="slide-2">
            Minimal
          </div>
          <div className="slide" id="slide-3">
            Festival:
          </div>
          <div className="slide" id="slide-4">
            Cinema.
          </div>
          <div className="slide" id="slide-5">
            Art.
          </div>
          <div className="slide" id="slide-6">
            Music.
          </div>
          <div className="slide" id="slide-7">
            Design
          </div>
        </div>
      </div>
    );
  }
}

export default WordCarousel;
