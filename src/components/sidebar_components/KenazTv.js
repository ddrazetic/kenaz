import React from "react";
import YouTube from "react-youtube";

const KenazTv = () => {
  const opts = {
    height: "149",
    width: "302",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="kenazTv">
      <h3>Kenaz TV</h3>
      <div>
        <YouTube videoId="sb5C8MCVjSQ" opts={opts} />
      </div>
      <p>August 26, 2013</p>
      <h4>NASA releases portrait of a planet waving at Saturn</h4>
    </div>
  );
};

export default KenazTv;
