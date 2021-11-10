import React from "react";
const Banner = ({ size }) => {
  return (
    <div className="banner bigBanner">
      <p>banner</p>
      <p>{size}</p>
    </div>
  );
};
Banner.defaultProps = {
  size: "940x120",
};

export default Banner;
