import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddPlaylist from "../playlists/AddPlaylist";

const AddPlaylistBtn = ({ big }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        className={` bg-gradient-to-r from-rose-100 to-teal-100  text-black font-bold rounded-md  hover:from-teal-100 hover:to-rose-100 duration-300 ${
          big
            ? "md:py-4 py-3 md:px-6 px-4 text-3xl"
            : "md:py-2 py-1 md:px-4 px-2 "
        }`}
        onClick={openModal}
      >
        <div className="flex justify-center items-center">
          <AiOutlinePlus />
          <span
            className={`ml-1 ${
              big ? "md:text-xl text-md" : "md:text-md text-xs"
            }
          md:text-md text-xs`}
          >
            {" "}
            Add Playlist
          </span>
        </div>
      </button>
      <AddPlaylist modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AddPlaylistBtn;
