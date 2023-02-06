import { useStoreState } from "easy-peasy";
import React from "react";

const VideoDetails = ({ thumbnails, channelTitle, title, url }) => {
  const { runningVideo } = useStoreState((state) => state.playlist);

  return (
    <div>
      <div className="space-y-4 dark:text-white font-bold ">
        <p className="md:text-2xl text-xl font-bold my-5">
          {runningVideo?.title}
        </p>
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
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
