import React from "react";
import authorPhoto from "./assets/authorPhoto.png";
const AboutAuthor = () => {
  return (
    <div className="aboutauthor">
      <h3>About the Author</h3>
      <div className="author">
        <img src={authorPhoto} alt="author"></img>
        <p>
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit
          egestas, augue vel suspendisse. Et felis venenatis blandit sed est
          ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien,
          eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
