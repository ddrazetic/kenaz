import Banner from "./Banner";
import MainSlider from "./MainSlider";
import Section from "./Section";
import TopPopular from "./TopPopular";
import SectionBusiness from "./SectionBusiness";
const Homepage = () => {
  return (
    <div className="mainContainer">
      <Banner />
      <MainSlider />
      <div className="twoColumnsDiv">
        <div className="newsbar">
          <Section title="News" colorShadow="rgba(54, 119, 181, 1)" />
          <Section
            title="Sport"
            colorShadow="rgba(132, 193, 79, 1)"
            numberZero="0"
          />
          <Banner size="620x120" />
          <SectionBusiness
            numberZero="0"
            title="Business"
            colorShadow="rgba(238, 97, 81, 1)"
          />
          <Banner size="620x120" />
        </div>
        <div className="sidebar">
          <TopPopular />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
