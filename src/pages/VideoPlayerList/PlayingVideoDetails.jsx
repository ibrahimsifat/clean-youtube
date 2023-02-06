import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const PlayingVideoDetails = () => {
  const { videoId } = useParams();
  const { runningVideo } = useStoreState((state) => state.playlist);
  const { setRunningVideoById } = useStoreActions((state) => state.playlist);
  // set running video
  useEffect(() => {
    setRunningVideoById(videoId);
  }, [videoId]);
  const { description } = runningVideo || {};

  return (
    <div className="space-y-4 dark:text-white font-bold ">
      <ShowMoreText
        /* Default options */
        lines={2}
        more="Show more"
        less="...Show less"
        expanded={false}
        className="bg-white dark:bg-black  bg-opacity-50 p-5 rounded-lg "
        anchorclassName=" md:text-xl text-md"
      >
        {description}
      </ShowMoreText>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default PlayingVideoDetails;
