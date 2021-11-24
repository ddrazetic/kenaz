import React from "react";
import AddComment from "./AddComment";
import ProfileComment from "./ProfileComment";

const SingleComments = () => {
  return (
    <div className="singleComments">
      <h3>Comments</h3>
      <ProfileComment name="Matt Adams" />
      <ProfileComment name="John Toews" />
      <ProfileComment name="Andrew Enns" />
      <AddComment />
    </div>
  );
};

export default SingleComments;
