import React from "react";
import articlePhoto from "../assets/sliderphoto2.png";
const ArticleFooter = ({ date, number, header }) => {
  return (
    <div className="article">
      <div className="articleText">
        <div className="articleDate">
          <p>{date}</p>
          <p className="articleNumber">{number}</p>
        </div>
        <h4>{header}</h4>
      </div>
      <img src={articlePhoto} alt="article"></img>
    </div>
  );
};

ArticleFooter.defaultProps = {
  date: "August 26, 2013",
  number: "5",
  header: "Palestinians call off peace talks after clash",
};
export default ArticleFooter;
