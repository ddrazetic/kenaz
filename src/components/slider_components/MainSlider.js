import Slider from "react-slick";
import comments from "../assets/comment ico.png";
import { Link } from "react-router-dom";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="mainSlider">
      <Slider {...settings}>
        <div className="item">
          <div className="dateAndComments">
            <p>August 26, 2013</p>
            <img src={comments} alt="comments"></img>
            <p>22 Comments</p>
          </div>
          <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>

          <Link to="/single">Read article</Link>
        </div>
        <div className="item">
          <div className="dateAndComments">
            <p>August 26, 2013</p>
            <img src={comments} alt="comments"></img>
            <p>22 Comments</p>
          </div>
          <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>

          <Link to="/single">Read article</Link>
        </div>
        <div className="item">
          <div className="dateAndComments">
            <p>August 26, 2013</p>
            <img src={comments} alt="comments"></img>
            <p>22 Comments</p>
          </div>
          <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>

          <Link to="/single">Read article</Link>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
