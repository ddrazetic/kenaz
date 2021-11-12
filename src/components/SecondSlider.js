import React, { Component, useState } from "react";
import Slider from "react-slick";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import photo1 from "./assets/sliderphoto1.png";
import photo2 from "./assets/sliderphoto2.png";
import photo3 from "./assets/sliderphoto3.png";
import photo4 from "./assets/sliderphoto4.png";
import photo5 from "./assets/sliderphoto5.png";
import photo6 from "./assets/sliderphoto6.png";
import photo7 from "./assets/sliderphoto7.png";
import search from "./assets/search 1.png";
import "react-popupbox/dist/react-popupbox.css";

const photos = {
  photo1: photo1,
  photo2: photo2,
  photo3: photo3,
  photo4: photo4,
  photo5: photo5,
  photo6: photo6,
  photo7: photo7,
};

let openPopupbox = (c) => {
  const content = <div>{c}</div>;
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

const SecondSlider = () => {
  const [countt, setCountt] = useState(0);
  //   const customSlider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,

    appendDots: (dots) => (
      <div
        style={{
          height: "160px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "100px",
            marginLeft: "15px",
          }}
        >
          {" "}
          {dots}{" "}
        </div>
      </div>
    ),
    afterChange: (current) => {
      setCountt(current);
    },
    customPaging: (i) => (
      <li
        style={{
          maxWidth: "120px",
          maxHeight: "120px",
          color: "white",

          //   border: "2px blue solid",
        }}
      >
        {/* {i + 1} */}
        <img
          className="thumbnailSlider"
          src={photos[Object.keys(photos)[i]]}
        ></img>
      </li>
    ),
  };

  return (
    <div className="secondContainerSlider">
      <button onClick={openPopupbox(countt)}>
        <img className="searchButton" src={search}></img>
      </button>
      <PopupboxContainer />
      <Slider
        className="secondSlider"
        // ref={(slider) => (customSlider.current = slider)}
        {...settings}
      >
        <div>
          <img className="imageSlider" src={photo1} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo2} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo3} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo4} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo5} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo6} alt="image slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo7} alt="image slider"></img>
        </div>
      </Slider>
    </div>
  );
};

export default SecondSlider;
