import React from "react";
import ArticleBusiness from "./ArticleBusiness";
import { Link } from "react-router-dom";
const SectionBusiness = ({ title, colorShadow, numberZero }) => {
  return (
    <div
      className="section sectionBusi"
      style={{ borderLeftColor: colorShadow }}
    >
      <div className="sectionHeader">
        <h3>{title}</h3>
        <Link to="/category">See all</Link>
      </div>
      <div className="sectionArticles sectionBusiness">
        <Link to="/single">
          <ArticleBusiness
            date="August 26, 2013"
            number={numberZero ? "14" : ""}
            header="For Obama, MLK's shadow looms large ahead of speech"
          />
        </Link>
        <Link to="/single">
          <ArticleBusiness
            date="August 26, 2013"
            number={numberZero ? "14" : ""}
            header="For Obama, MLK's shadow looms large ahead of speech"
          />
        </Link>
        <Link to="/single">
          {" "}
          <ArticleBusiness
            date="August 26, 2013"
            number={numberZero ? "14" : ""}
            header="For Obama, MLK's shadow looms large ahead of speech"
          />
        </Link>
        <Link to="/single">
          {" "}
          <ArticleBusiness
            date="August 26, 2013"
            number={numberZero ? "14" : ""}
            header="For Obama, MLK's shadow looms large ahead of speech"
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionBusiness;
