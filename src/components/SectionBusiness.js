import React from "react";
import ArticleBusiness from "./ArticleBusiness";
const SectionBusiness = ({ title, colorShadow, numberZero }) => {
  return (
    <div
      className="section sectionBusi"
      style={{ borderLeftColor: colorShadow }}
    >
      <div className="sectionHeader">
        <h3>{title}</h3>
        <a href="https://www.w3schools.com/">See all</a>
      </div>
      <div className="sectionArticles sectionBusiness">
        <ArticleBusiness
          date="August 26, 2013"
          number={numberZero ? "14" : ""}
          header="For Obama, MLK's shadow looms large ahead of speech"
        />
        <ArticleBusiness
          date="August 26, 2013"
          number={numberZero ? "14" : ""}
          header="For Obama, MLK's shadow looms large ahead of speech"
        />
        <ArticleBusiness
          date="August 26, 2013"
          number={numberZero ? "14" : ""}
          header="For Obama, MLK's shadow looms large ahead of speech"
        />
        <ArticleBusiness
          date="August 26, 2013"
          number={numberZero ? "14" : ""}
          header="For Obama, MLK's shadow looms large ahead of speech"
        />
      </div>
    </div>
  );
};

export default SectionBusiness;
