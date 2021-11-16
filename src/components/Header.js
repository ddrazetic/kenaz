import leftArrow from "./assets/VectorSmartObject.png";
import search from "./assets/search 2.png";
import { Link } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
        <div className="navigation">
          <ul>
            <li>News</li>
            <li>Business</li>
            <li>Sport</li>
            <li>Life</li>
            <li>tech</li>
            <li>travel</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
