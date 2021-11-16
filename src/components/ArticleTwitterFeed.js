import React from "react";
import articlePhoto from "./assets/twitterFooter.png";
const ArticleTwitter = ({ header }) => {
  return (
    <div className="article">
      <div className="articleText">
        <img src={articlePhoto} alt="article"></img>
        <p>Envato @envato</p>
      </div>
      <p>{header}</p>
    </div>
  );
};

ArticleTwitter.defaultProps = {
  header:
    "Is this your typical million dollar day in the park? http://enva.to/150vxFC  Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy",
};
export default ArticleTwitter;
