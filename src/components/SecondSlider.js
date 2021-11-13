import React, { useState } from "react";
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
import blackBackground from "./assets/blackBackground.png";

const photos = {
  photo1: photo1,
  photo2: photo2,
  photo3: photo3,
  photo4: photo4,
  photo5: photo5,
  photo6: photo6,
  photo7: photo7,
};

const openPopupbox = (c) => {
  const content = (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        className="largePhoto"
        alt="largeThumbnail"
        src={photos[Object.keys(photos)[c]]}
      ></img>
    </div>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

const SecondSlider = () => {
  //const slider = useRef();
  const [countt, setCountt] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    appendDots: (dots) => (
      <div
        style={{
          height: "160px",
        }}
      >
        <div
          className="thumbnails"
          style={{
            display: "flex",
            gap: "100px",
            justifyContent: "center",
            marginLeft: "-11.5%",
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
          zIndex: "3",
        }}
      >
        <img
          className="thumbnailSlider"
          alt="thumbnail slider"
          src={photos[Object.keys(photos)[i]]}
        ></img>
      </li>
    ),
  };

  return (
    <div className="secondContainerSlider">
      <button onClick={() => openPopupbox(countt)}>
        <img className="searchButton" src={search} alt="search box"></img>
      </button>
      <PopupboxContainer />
      <img
        className="blackBackground"
        alt="black background"
        src={blackBackground}
      ></img>
      <Slider
        className="secondSlider"
        //ref={(c) => (slider.current = c)}
        {...settings}
      >
        <div>
          <img className="imageSlider" src={photo1} alt=" slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo2} alt=" slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo3} alt="slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo4} alt=" slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo5} alt=" slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo6} alt=" slider"></img>
        </div>
        <div>
          <img className="imageSlider" src={photo7} alt=" slider"></img>
        </div>
      </Slider>
    </div>
  );
};

export default SecondSlider;
