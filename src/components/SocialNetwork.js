import React from "react";
const SocialNetwork = ({ image, title, fans }) => {
  return (
    <div className="socialNetwork">
      <img src={image} alt="facebook"></img>
      <p>{title}</p>
      <p className="numberOfPeople">{fans}</p>
    </div>
  );
};

export default SocialNetwork;
