import Banner from "./Banner";
import MainSlider from "./MainSlider";
import Section from "./Section";
import TopPopular from "./TopPopular";
import SectionBusiness from "./SectionBusiness";
import SectionCarousel from "./SectionCarousel";
import SectionLocalNews from "./SectionLocalNews";
import Social from "./Social";
import KenazTv from "./KenazTv";
import TwoBanners from "./TwoBanners";
import CommentsSection from "./CommentsSection";
const Homepage = () => {
  return (
    <div className="mainContainer">
      <Banner />
      <MainSlider />
      <div className="twoColumnsDiv">
        <div className="newsbar">
          <Section
            title="News"
            colorShadow="rgba(54, 119, 181, 1)"
            numberZero="0"
          />
          <Section title="Sport" colorShadow="rgba(132, 193, 79, 1)" />
          <Banner size="620x120" />
          <SectionBusiness
            title="Business"
            colorShadow="rgba(238, 97, 81, 1)"
          />
          <Banner size="620x120" />
          <SectionCarousel
            title="New Carousel"
            colorShadow="rgba(252, 196, 77, 1)"
          />
          <div className="containerLocalNews">
            <SectionLocalNews
              title="Editorials"
              colorShadow="rgba(169, 151, 101, 1)"
              width="300px"
            />
            <SectionLocalNews
              title="Local News"
              colorShadow="rgba(169, 151, 101, 1)"
              width="300px"
            />
          </div>
        </div>
        <div className="sidebar">
          <TopPopular />
          <Social />
          <KenazTv />
          <TwoBanners />
          <CommentsSection />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Homepage;
