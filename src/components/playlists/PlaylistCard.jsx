import { useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ChannelProfile from "../../utils/channelProfile";
import DeletePlaylist from "./DeletePlaylist";
const PlaylistCard = ({ playlist }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);

  const {
    channelTitle,
    playlistDescription,
    playlistThumbnail,
    playlistTitle,
    playlistId,
    matchSearch,
    channelData,
  } = playlist || {};
  const { thumbnails, url: channelUrl } = channelData;
  console.log(channelData);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  // console.log("playlist", channelData?.thumbnails?.url);
  return (
    <div className="  dark:text-white sm:m-0 m-4">
      <div
        className={`
 
        ${matchSearch && "border-4 border-red-400"}
          ${layout == "list" ? " w-full lg:max-w-full flex " : ""}
        `}
      >
        <Link to={`/playlist/${playlistId}`}>
          <img
            src={playlistThumbnail?.url}
            alt={playlistTitle}
            className={
              layout == "list"
                ? "w-full h-full lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                : "w-full  h-auto lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            }
          />
        </Link>

        <div className=" dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <p className="text-sm dark:text-white text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <Link to={`/playlist/${playlistId}`}>
              <div className=" font-bold text-md mb-2 h-14">
                {playlistTitle?.slice(0, 90)}
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <ChannelProfile
              channelUrl={channelUrl}
              channelTitle={channelTitle}
              thumbnails={thumbnails}
            />
            <div className="flex justify-center items-center md:space-x-6 space-x-3 cursor-pointer">
              {"hello" ? (
                <MdFavoriteBorder size={24} />
              ) : (
                <MdFavorite size={24} />
              )}
              <AiFillDelete
                size={24}
                color="red"
                // onClick={() => deletePlaylist(playlistId)}
                onClick={() => openModal()}
              />
            </div>
            <Tooltip
              id="my-element"
              data-tooltip-content="Remove to Favorite"
            ></Tooltip>{" "}
            <Tooltip anchorId="my-element" />
            <Tooltip anchorId="my-element2" />
          </div>
        </div>
      </div>
      <DeletePlaylist
        playlistId={playlistId}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default PlaylistCard;
