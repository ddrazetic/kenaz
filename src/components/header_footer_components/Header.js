import leftArrow from "../assets/VectorSmartObject.png";
import search from "../assets/search 2.png";
import { Link } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Hamburger from "hamburger-react";
const Header = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [isBoxVisible, setState] = useState(0);
  return (
    <header>
      <div className="containerNav">
        <div className="navigation">
          <div className="leftPartNav">
            <div className="leftArrowNav">
              <img src={leftArrow} alt="arrow"></img>
            </div>
            <Link to="/">
              <p>Kenaz</p>
            </Link>
          </div>
          <div className="rightPartNav">
            <ul>
              <li>Media</li>
              <li>Marketing</li>
              <li>Contact</li>
            </ul>
            <div className="rightSearchNav">
              <img src={search} alt="search"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="containerNav purpleNav">
        <div className="hiddenHamburger">
          <Hamburger
            className="hamburgerIcon"
            toggled={isBoxVisible}
            toggle={setState}
          />
        </div>

        <div className={`navigationClose ${isBoxVisible ? "" : "hidden"}`}>
          <ul>
            <li>
              <Link to="/category">News</Link>
            </li>
            <li>
              <Link to="/category">Business</Link>
            </li>
            <li>
              <Link to="/category">sport</Link>
            </li>
            <li>
              <Link to="/category">life</Link>
            </li>
            <li>
              <Link to="/category">tech</Link>
            </li>
            <li>
              <Link to="/category">travel</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
