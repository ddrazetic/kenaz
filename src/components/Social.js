import React from "react";
import SocialNetwork from "./SocialNetwork";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
const Social = () => {
  return (
    <div className="social">
      <h3>Social</h3>
      <SocialNetwork image={facebook} title="Like" fans="25041 Fans" />
      <SocialNetwork image={twitter} title="Follow" fans="25041 Folowers" />
      <SocialNetwork image={youtube} title="Subscribe" fans="941 Subscribers" />
    </div>
  );
};

export default Social;
