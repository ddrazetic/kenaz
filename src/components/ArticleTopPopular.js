import React from "react";
import image from "./assets/topRated.png";
import comments from "./assets/comment2.png";

const ArticleTopPopular = () => {
  return (
    <div className="articleTopPopular">
      <div className="textTopPopular">
        <div>
          <p className="pToRight">5</p>
          <img src={comments} alt="comment"></img>
        </div>
        <p>August 26, 2013</p>
        <h3>Palestinians call off peace talks after clash</h3>
      </div>
      <img className="imgTopPopular" src={image} alt="photoPopular"></img>
    </div>
  );
};

export default ArticleTopPopular;
