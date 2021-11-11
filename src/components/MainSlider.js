import React, { Component } from "react";
import Slider from "react-slick";
import comments from "./assets/comment ico.png";

export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="mainSlider">
        <Slider {...settings}>
          <div className="item">
            <div className="dateAndComments">
              <p>August 26, 2013</p>
              <img src={comments} alt="comments"></img>
              <p>22 Comments</p>
            </div>
            <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
            <button>Read article</button>
          </div>
          <div className="item">
            <div className="dateAndComments">
              <p>August 26, 2013</p>
              <img src={comments} alt="comments"></img>
              <p>22 Comments</p>
            </div>
            <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
            <button>Read article</button>
          </div>
          <div className="item">
            <div className="dateAndComments">
              <p>August 26, 2013</p>
              <img src={comments} alt="comments"></img>
              <p>22 Comments</p>
            </div>
            <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
            <button>Read article</button>
          </div>
        </Slider>
      </div>
    );
  }
}
