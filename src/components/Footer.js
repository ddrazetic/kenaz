import React from "react";
import logoBlue from "./assets/logoBlue.png";
import logo0 from "./assets/Rss.png";
import logo1 from "./assets/Facebook1.png";
import logo2 from "./assets/twitter1.png";
import logo3 from "./assets/dribble.png";
import logo4 from "./assets/Linkedin.png";
import logo5 from "./assets/Youtube1.png";
import logo6 from "./assets/Skype.png";
import FeaturedFooter from "./FeaturedFooter";

const photos = {
  photo1: logo0,
  photo2: logo1,
  photo3: logo2,
  photo4: logo3,
  photo5: logo4,
  photo6: logo5,
  photo7: logo6,
};

const getLogos = () => {
  let i;
  let a = [];
  for (i = 0; i < 7; i++) {
    a[i] = (
      <img src={photos[Object.keys(photos)[i]]} alt="logo of social site"></img>
    );
  }
  return a;
};

const Footer = () => {
  return (
    <footer>
      <div className="threeColumnFooter">
        <div className="columnFooter">
          <div className="logoFooter">
            <img src={logoBlue} alt="logo"></img>
            <h3>Kenaz</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
            ante.
          </p>
          <div className="logos">{getLogos()}</div>
          <FeaturedFooter />
        </div>
        <div className="columnFooter columnFooter-second">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
            ante.
          </p>
          <div>
            <input
              className="inputFooter"
              type="text"
              placeholder="Your mail"
            ></input>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="columnFooter columnFooter-third">
          <h3>Tags Widget</h3>
          <p className="tagsFooter">
            <span>assueverit</span>
            <span>utroquoe</span>
            <span>probo</span>
            <span>assuev</span> <span>probo</span>
            <span>assueverit</span>
            <span>titl</span>
            <strong>assueverit </strong> <span>assueverit</span>
            <span>utroquoe</span>
            <span>probo</span>
            <span>assueverit</span> <span>utroquoe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
