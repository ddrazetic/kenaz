import React, { useRef } from "react";
import Slider from "react-slick";
import ArticleCarousel from "./ArticleCarousel";
import arrowLeft from "./assets/arrowLeftYellow.png";
import arrowRight from "./assets/arrowRightYellow.png";

const SectionCarousel = ({
  title,
  colorShadow,
  numberZero,
  numberArticles,
}) => {
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
            <ArticleCarousel />
          </div>
          <div>
            <ArticleCarousel
              date="August 26, 2013"
              number={numberZero ? "22" : ""}
              header="NASA releases portrait of a planet waving at Saturn"
            />
          </div>
          <div>
            <ArticleCarousel />
          </div>
          <div>
            <ArticleCarousel />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SectionCarousel;
