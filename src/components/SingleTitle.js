import React from "react";
import whiteLayer from "./assets/whiteLayer.png";
import singleHeader from "./assets/singleHeader.png";
const SingleTitle = () => {
  return (
    <div className="singleTitle">
      <img
        className="singleHeader"
        src={singleHeader}
        alt="single header"
      ></img>
      <img
        className="singleHeader-layer"
        src={whiteLayer}
        alt="single header layer"
      ></img>
      <p>August 26, 2013</p>
      <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
    </div>
  );
};

export default SingleTitle;
