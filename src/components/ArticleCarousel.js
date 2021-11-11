import React from "react";
import articlePhoto from "./assets/article.png";
const ArticleCarousel = ({ date, number, header, size }) => {
  return (
    <div style={{ width: size }} className="article articleCarousel">
      <img
        style={{ width: size }}
        className="imageCarousel"
        src={articlePhoto}
        alt="article"
      ></img>
      <div>
        <div className="articleDate">
          <p>{date}</p>
          <p className="articleNumber">{number}</p>
        </div>
        <h4>{header}</h4>
      </div>
    </div>
  );
};

ArticleCarousel.defaultProps = {
  date: "August 26, 2013",
  number: "",
  header: "For Obama, MLK's shadow looms large ahead of speech",
};
export default ArticleCarousel;
