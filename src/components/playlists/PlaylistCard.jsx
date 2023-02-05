import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ChannelProfile from "../../utils/channelProfile";
import DeletePlaylist from "./DeletePlaylist";
const PlaylistCard = ({ playlist }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);

  const { addFavorite, removeFavorite } = useStoreActions(
    (state) => state.favorite
  );
  const { addToFavorite, removeToFavorite } = useStoreActions(
    (state) => state.playlist
  );

  const {
    channelTitle,
    playlistDescription,
    playlistThumbnail,
    playlistTitle,
    playlistId,
    matchSearch,
    channelData,
    isFavorite,
  } = playlist || {};
  const { thumbnails, url: channelUrl } = channelData;
  console.log(channelData);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  // console.log("playlist", channelData?.thumbnails?.url);

  // handleAddToFavorite
  const handleAddToFavorite = (playlistId) => {
    addFavorite(playlistId);
    addToFavorite(playlistId);
  };
  const handleRemoveToFavorite = (playlistId) => {
    console.log(playlistId);
    removeFavorite(playlistId);
    removeToFavorite(playlistId);
  };
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
            <Link to={`/playlist/${playlistId}`} className="space-y-4">
              <div className=" font-bold text-md mb-2 h-8 ">
                {playlistTitle?.slice(0, 90)}
              </div>
              {layout == "list" && (
                <div className=" font-semibold text-md text-gray-600 mb-2">
                  {playlistDescription?.slice(0, 200)}
                </div>
              )}
            </Link>
          </div>
          <div className="flex items-center justify-between md:h-10 h-8 pb-2">
            <ChannelProfile
              channelUrl={channelUrl}
              channelTitle={channelTitle}
              thumbnails={thumbnails}
            />
            <div className="flex justify-center items-center md:space-x-6 space-x-3 cursor-pointer">
              {isFavorite === true ? (
                <MdFavorite
                  size={24}
                  onClick={() => handleRemoveToFavorite(playlistId)}
                />
              ) : (
                <MdFavoriteBorder
                  size={24}
                  className="hover:fill-red-500 duration-200 cursor-pointer"
                  onClick={() => handleAddToFavorite(playlistId)}
                />
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
