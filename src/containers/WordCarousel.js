import React, { Component } from "react";

class WordCarousel extends Component {
  state = {
    slideOneAnimate: false,
    slideTwoAnimate: false,
    slideThreeAnimate: false
  };

  componentDidMount() {
    let carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.addEventListener("scroll", this.scrollHorizontally);
  }

  scrollHorizontally = e => {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.querySelector(".carousel-slider").scrollLeft -= delta * 60; // Multiplied by 60
    // console.log(document.querySelector(".carousel-container").scrollLeft);
    e.preventDefault();
  };

  hoverOn = e => {
    let exp = e.target.id;
    switch (exp) {
      case "slide-4":
        this.setState({ slideOneAnimate: true });
        break;
      case "slide-6":
        this.setState({ slideTwoAnimate: true });
        break;
      case "slide-7":
        this.setState({ slideThreeAnimate: true });
    }
  };

  hoverOff = e => {
    let exp = e.target.id;
    switch (exp) {
      case "slide-4":
        this.setState({ slideOneAnimate: false });
        break;
      case "slide-6":
        this.setState({ slideTwoAnimate: false });
        break;
      case "slide-7":
        this.setState({ slideThreeAnimate: false });
    }
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
          <div
            className={
              this.state.slideOneAnimate ? "slide text-focus-in" : "slide"
            }
            id="slide-4"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          >
            Cinema.
          </div>
          <div className="slide" id="slide-5">
            Art.
          </div>
          <div
            className={
              this.state.slideTwoAnimate ? "slide jello-horizontal" : "slide"
            }
            id="slide-6"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          >
            Music.
          </div>
          <div
            className={
              this.state.slideThreeAnimate ? "slide vibrate-1" : "slide"
            }
            id="slide-7"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          >
            Design
          </div>
        </div>
      </div>
    );
  }
}

export default WordCarousel;
