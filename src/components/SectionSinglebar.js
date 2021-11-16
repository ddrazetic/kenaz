import React from "react";
import book from "./assets/book.png";
import socialTweet from "./assets/socialTweet.png";
const SectionSinglebar = () => {
  return (
    <div className="sectionSingleBar">
      <p>
        Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed
        consectetur. Sed posuere consectetur est at lobortis. Donec sed odio
        dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
        justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio
        dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus
        porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus
        eget urna mollis ornare vel eu leo.
      </p>
      <img src={book} alt="book"></img>
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien,
        eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.
        Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum
        odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas,
        sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum
        neque ipsum odio nulla, mi turpis diam tellus laoreet congue.{" "}
      </p>
      <img className="tweetImage" src={socialTweet} alt="tweet"></img>
    </div>
  );
};

export default SectionSinglebar;
