import React from "react";
import Banner from "../homepage_components/Banner";
import SectionCategory from "./SectionCategory";

const Category = () => {
  return (
    <div className="category">
      <h3>News</h3>
      <SectionCategory />
      <SectionCategory />
      <SectionCategory />
      <SectionCategory />
      <SectionCategory />
      <SectionCategory />
      <div className="buttonsCategory">
        <button className="buttonCategory">1</button>
        <button className="buttonCategory">2</button>
        <button className="buttonCategory">3</button>
        <button className="buttonCategory activeButton ">4</button>
        <button className="buttonCategory">5</button>
        <button className="buttonCategory">6</button>
        <button className="buttonCategory">7</button>
        <button className="buttonCategory">8</button>
        <button className="buttonCategory">9</button>
        <button className="buttonCategory">10</button>
      </div>
      <div className="emptyCon"></div>
      <Banner size="620x120" />
    </div>
  );
};

export default Category;
