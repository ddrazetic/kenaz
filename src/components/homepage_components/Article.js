import React from "react";
import articlePhoto from "../assets/article.png";
const Article = ({ date, number, header }) => {
  return (
    <div className="article">
      <img src={articlePhoto} alt="article"></img>
      <div className="articleDate">
        <p>{date}</p>
        <p className="articleNumber">{number}</p>
      </div>
      <h4>{header}</h4>
    </div>
  );
};

Article.defaultProps = {
  date: "August 26, 2013",
  number: "",
  header: "For Obama, MLK's shadow looms large ahead of speech",
};
export default Article;
