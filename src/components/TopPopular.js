import React from "react";
import ArticleTopPopular from "./ArticleTopPopular";
const TopPopular = () => {
  return (
    <div className="topPopular">
      <div className="topPopularHeader">
        <p className="active">Popular</p>
        <p>Top Rated</p>
        <p>Comments</p>
      </div>
      <ArticleTopPopular />
      <ArticleTopPopular />
      <ArticleTopPopular />
      <ArticleTopPopular />
      <ArticleTopPopular />
    </div>
  );
};

export default TopPopular;
