import React from "react";
import Article from "./ArticleFooter";
const FeaturedFooter = ({ title, marginTop }) => {
  return (
    <div className="featuredFooter" style={{ marginTop: marginTop }}>
      <h3>{title}</h3>
      <Article />
      <div className="greyLine"></div>
      <Article />
      <div className="greyLine"></div>
      <Article />
    </div>
  );
};

export default FeaturedFooter;
