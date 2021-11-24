import React from "react";
import Calendar from "../assets/calendar.png";
import articlePhoto from "../assets/article.png";
import { Link } from "react-router-dom";

const SectionCategory = () => {
  return (
    <div className="sectionCategory">
      <h3>Patriotsvv make cuts ... and Tim Tebow survives (so far)</h3>
      <div className="dateAndAuthor">
        <img src={Calendar} alt="calendar"></img>
        <p>
          August 26, 2013&emsp; &emsp; Author: Matej Sudar &emsp; &emsp; 12
          Comments
        </p>
      </div>
      <div className="articleCategory">
        <img src={articlePhoto} alt="category"></img>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.
          </p>
          <Link className="readArticle" to="/single">
            Read article
          </Link>
        </div>
      </div>
      <div className="grayLineCategory"></div>
    </div>
  );
};

export default SectionCategory;
