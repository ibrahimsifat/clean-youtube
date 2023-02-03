import { useStoreState } from "easy-peasy";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const PlaylistCard = ({ playlist }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const {
    channelTitle,
    playlistDescription,
    playlistThumbnail,
    playlistTitle,
    playlistId,
  } = playlist;

  return (
    <div class="  dark:text-white sm:m-0 m-4">
      <div className={layout == "list" ? " w-full lg:max-w-full  flex" : ""}>
        <Link to={`/playlist/${playlistId}`}>
          <img
            src={playlistThumbnail.url}
            alt={playlistTitle}
            class={
              layout == "list"
                ? "w-full h-full lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                : "w-full  h-auto lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            }
          />
        </Link>

        <div class=" dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div class="mb-8">
            <p class="text-sm dark:text-white text-gray-600 flex items-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <Link to={`/playlist/${playlistId}`}>
              <div class=" font-bold text-md mb-2 h-14">
                {playlistTitle.slice(0, 90)}
              </div>
            </Link>
          </div>
          <div class="flex items-center justify-between">
            <div className="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="https://yt3.googleusercontent.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj"
                alt="Avatar of Writer"
              />
              <div class="text-sm">
                <p class="leading-none">{channelTitle}</p>
              </div>
            </div>
            <div className="flex justify-center items-center md:space-x-6 space-x-3">
              {"hello" ? (
                <MdFavoriteBorder size={24} />
              ) : (
                <MdFavorite size={24} />
              )}
              <AiFillDelete size={24} color="red" />
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
    </div>
  );
};

export default PlaylistCard;
