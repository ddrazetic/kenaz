import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArticleCarousel from "./ArticleCarousel";
import arrowLeft from "../assets/arrowLeftYellow.png";
import arrowRight from "../assets/arrowRightYellow.png";

const SectionCarousel = ({ title, colorShadow, numberZero }) => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="section sectionNews"
      style={{ borderLeftColor: colorShadow }}
    >
      <div className="sectionHeader">
        <h3>{title}</h3>
        <div>
          <img
            style={{ cursor: "pointer" }}
            onClick={previous}
            src={arrowLeft}
            alt="previous"
          ></img>
          <img
            style={{ cursor: "pointer" }}
            onClick={next}
            src={arrowRight}
            alt="next"
          ></img>
        </div>
      </div>
      <div className="sectionArticles">
        <Slider
          style={{ height: "230px", width: "575px" }}
          ref={(c) => (slider.current = c)}
          {...settings}
        >
          <div>
            <Link to="/single">
              <ArticleCarousel />
            </Link>
          </div>
          <div>
            <Link to="/single">
              {" "}
              <ArticleCarousel
                date="August 26, 2013"
                number={numberZero ? "22" : ""}
                header="NASA releases portrait of a planet waving at Saturn"
              />
            </Link>
          </div>
          <div>
            <Link to="/single">
              <ArticleCarousel />
            </Link>
          </div>
          <div>
            <Link to="/single">
              <ArticleCarousel />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SectionCarousel;
