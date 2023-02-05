import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import VideoNote from "../../components/videos/videoNote/VideoNote";

const PlayingVideoDetails = () => {
  const { videoId } = useParams();
  const { currentPlaylist } = useStoreState((state) => state.playlist);
  const { runningVideo } = useStoreState((state) => state.playlist);
  const { setRunningVideoById } = useStoreActions((state) => state.playlist);
  // set running video
  useEffect(() => {
    setRunningVideoById(videoId);
  }, [videoId]);
  const { title, description, contentDetails } = runningVideo || {};
  // console.log(currentPlaylist);
  const {
    channelTitle,
    channelData: { thumbnails, url },
  } = currentPlaylist;
  // console.log(url);
  return (
    <div className="space-y-4 dark:text-white font-bold ">
      <p className="md:text-2xl text-xl font-bold my-5">{title}</p>
      <div className="flex justify-between items-center">
        <a href={url} target="_blank">
          <div className="flex items-center cursor-pointer">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={thumbnails?.url}
              alt="Avatar of Writer"
            />
            <div className="text-md">
              <p className="leading-none">{channelTitle}</p>
              {/* <p className="leading-none text-sm">{"channelTitle"}</p> */}
            </div>
          </div>
        </a>
        <VideoNote
          videoId={contentDetails?.videoId}
          runningVideo={runningVideo}
        />
      </div>
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
