import React, { useRef } from "react";
import Slider from "react-slick";
import ArticleCarousel from "./ArticleCarousel";
import arrowLeft from "./assets/arrowLeftBrown.png";
import arrowRight from "./assets/arrowRightBrown.png";

const SectionLocalNews = ({ title, colorShadow, numberZero, width }) => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="section sectionNews"
      style={{ borderLeftColor: colorShadow, width: width }}
    >
      <div className="sectionHeader">
        <h3>{title}</h3>
        <div>
          <img onClick={previous} src={arrowLeft} alt="previous"></img>
          <img onClick={next} src={arrowRight} alt="next"></img>
        </div>
      </div>
      <div className="sectionArticles">
        <Slider
          style={{ height: "230px", width: "300px" }}
          ref={(c) => (slider.current = c)}
          {...settings}
        >
          <div>
            <ArticleCarousel size="230px" />
          </div>
          <div>
            <ArticleCarousel
              size="230px"
              colorS={colorShadow}
              date="August 26, 2013"
              number={numberZero ? "22" : ""}
              header="NASA releases portrait of a planet waving at Saturn"
            />
          </div>
          <div>
            <ArticleCarousel size="230px" />
          </div>
          <div>
            <ArticleCarousel size="230px" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SectionLocalNews;
