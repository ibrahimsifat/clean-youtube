import { useStoreState } from "easy-peasy";
import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import ChannelProfile from "../../utils/channelProfile";
const VideoCard = ({ playingVideo }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const {
    currentPlaylist: { channelData },
    runningVideo,
  } = useStoreState((state) => state.playlist);

  const {
    thumbnail,
    title,
    matchSearch,
    description,
    contentDetails: { videoId },
  } = playingVideo || {};

  // const isThisVideoRunning = runningVideo.contentDetails.videoId === videoId;
  const { thumbnails, url: channelUrl, channelTitle } = channelData;

  return (
    <div className="  dark:text-white sm:m-0 m-4 ">
      <div
        className={`
         ${matchSearch && "border-4 border-red-400"}
         ${
           !"isThisVideoRunning" &&
           "animate-border from-teal-400 via-rose-400 to-teal-400 bg-[length:400%_400%] p-1.5 transition bg-gradient-to-r rounded"
         }
     ${layout == "list" ? " w-full lg:max-w-full flex " : ""}`}
      >
        <Link to={`/video/${videoId}`}>
          <img
            src={thumbnail?.url}
            alt={title}
            className={`
           
              ${
                layout == "list"
                  ? "w-full h-full lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  : "w-full  h-auto lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              }`}
          />
        </Link>

        <div className=" dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <Link to={`/video/${videoId}`}>
              <div className=" font-bold text-md mb-3 h-12">
                {title.slice(0, 90)}
              </div>
              {layout == "list" && (
                <div className=" font-semibold text-md text-gray-600 ">
                  {description?.slice(0, 100)}
                </div>
              )}
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <ChannelProfile
              channelUrl={channelUrl}
              channelTitle={channelTitle}
              thumbnails={thumbnails}
            />
            {"hello" ? (
              <MdFavoriteBorder
                size={24}
                className="hover:fill-red-500 duration-200 cursor-pointer"
              />
            ) : (
              <MdFavorite size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
