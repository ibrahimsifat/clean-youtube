import React from "react";
import ShowMoreText from "react-show-more-text";

const PlayingVideoDetails = ({ playingVideo }) => {
  const { title, description } = playingVideo || {};

  return (
    <div className="space-y-4 dark:text-white font-bold ">
      <p className="md:text-2xl text-xl font-bold my-5">{title}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://yt3.googleusercontent.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj"
            alt="Avatar of Writer"
          />
          <div class="text-md">
            <p class="leading-none">{"channelTitle"}</p>
            <p class="leading-none text-sm">{"channelTitle"}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full">
            show note
          </div>
          <div className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full">
            Take Note
          </div>
        </div>
      </div>
      <ShowMoreText
        /* Default options */
        lines={2}
        more="Show more"
        less="...Show less"
        expanded={false}
        className="bg-white dark:bg-black  bg-opacity-50 p-5 rounded-lg "
        anchorClass=" md:text-xl text-md"
      >
        {description}
      </ShowMoreText>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default PlayingVideoDetails;
