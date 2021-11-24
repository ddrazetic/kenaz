import React from "react";
import profileIcon from "../assets/profileIcon.png";
const ProfileComment = ({ name }) => {
  return (
    <div className="profileComment">
      <img src={profileIcon} alt="profile comment"></img>
      <div className="textComment">
        <div className="authorName">
          <h4>{name}</h4>
          <p className="dateComment">Jan 2nd, 2012 2:35 pm</p>
          <p className="replyToComment">Reply</p>
        </div>
        <p>
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit
          egestas, augue vel suspendisse. Et felis venenatis blandit sed est
          ultrices, adipiscing urna.
        </p>
      </div>
    </div>
  );
};

export default ProfileComment;
