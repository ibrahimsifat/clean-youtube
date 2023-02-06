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
        className={` bg-[#4654A3]   font-bold rounded-md text-white duration-300 hover:bg-[#85567F] ${
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
              big ? "md:text-xl text-md" : "xl:text-xl md:text-md text-sm"
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
