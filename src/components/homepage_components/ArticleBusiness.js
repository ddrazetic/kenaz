import React from "react";
import articlePhoto from "../assets/article.png";
const ArticleBusiness = ({ date, number, header }) => {
  return (
    <div className="article articleBusiness">
      <img className="imageBusiness" src={articlePhoto} alt="article"></img>
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

ArticleBusiness.defaultProps = {
  date: "August 26, 2013",
  number: "",
  header: "For Obama, MLK's shadow looms large ahead of speech",
};
export default ArticleBusiness;
