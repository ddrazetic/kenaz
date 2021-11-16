import TopPopular from "./TopPopular";
import Social from "./Social";
import KenazTv from "./KenazTv";
import TwoBanners from "./TwoBanners";
import CommentsSection from "./CommentsSection";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TopPopular />
      <Social />
      <KenazTv />
      <TwoBanners />
      <CommentsSection />
    </div>
  );
};

export default Sidebar;
