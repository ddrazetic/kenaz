import React from "react";
import { Link } from "react-router-dom";
import ArticleTopPopular from "./ArticleTopPopular";
const TopPopular = () => {
  return (
    <div className="topPopular">
      <div className="topPopularHeader">
        <p className="active">Popular</p>
        <p>Top Rated</p>
        <p>Comments</p>
      </div>
      <Link to="/single">
        <ArticleTopPopular />
      </Link>
      <Link to="/single">
        <ArticleTopPopular />
      </Link>
      <Link to="/single">
        <ArticleTopPopular />
      </Link>
      <Link to="/single">
        <ArticleTopPopular />
      </Link>
      <Link to="/single">
        <ArticleTopPopular />
      </Link>
    </div>
  );
};

export default TopPopular;
