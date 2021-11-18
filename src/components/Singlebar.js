import React from "react";
import AboutAuthor from "./AboutAuthor";
import Banner from "./Banner";
import SectionSinglebar from "./SectionSinglebar";
import SingleComments from "./SingleComments";

const Singlebar = () => {
  return (
    <div className="singlebar">
      <SectionSinglebar />
      <Banner size="620x120" />
      <AboutAuthor />
      <SingleComments />
    </div>
  );
};

export default Singlebar;
