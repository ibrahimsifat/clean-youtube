import React from "react";
import { Link } from "react-router-dom";
import PrevNextBtn from "../UI/PrevNextBtn";

const SwitchVideo = ({ prevVideoId, nextVideoId }) => {
  return (
    <div className="flex justify-between items-center my-3 px-10">
      {prevVideoId && (
        <Link to={`/video/${prevVideoId}`}>
          <PrevNextBtn prev level="Prev" />
        </Link>
      )}
      {nextVideoId && (
        <Link to={`/video/${nextVideoId}`}>
          <PrevNextBtn level="Next" />
        </Link>
      )}
    </div>
  );
};

export default SwitchVideo;
