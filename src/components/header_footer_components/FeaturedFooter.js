import React from "react";
import { Link } from "react-router-dom";
import Article from "./ArticleFooter";
const FeaturedFooter = ({ title, marginTop }) => {
  return (
    <div className="featuredFooter" style={{ marginTop: marginTop }}>
      <h3>{title}</h3>
      <Link to="/single">
        <Article />
      </Link>

      <div className="greyLine"></div>
      <Link to="/single">
        <Article />
      </Link>
      <div className="greyLine"></div>
      <Link to="/single">
        <Article />
      </Link>
    </div>
  );
};

export default FeaturedFooter;
