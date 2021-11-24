import React from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

const Section = ({ title, colorShadow, numberZero }) => {
  return (
    <div
      className="section sectionNews"
      style={{ borderLeftColor: colorShadow }}
    >
      <div className="sectionHeader">
        <h3>{title}</h3>
        <Link to="/category">See all</Link>
      </div>
      <div className="sectionArticles sectionArticlesResp">
        <Link to="/single">
          <Article
            date="August 26, 2013"
            number={numberZero ? "14" : ""}
            header="For Obama, MLK's shadow looms large ahead of speech"
          />
        </Link>
        <Link to="/single">
          <Article
            date="August 26, 2013"
            number={numberZero ? "22" : ""}
            header="NASA releases portrait of a planet waving at Saturn"
          />
        </Link>
        <Link to="/single">
          <Article
            date="August 26, 2013"
            number={numberZero ? "5" : ""}
            header="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Section;
