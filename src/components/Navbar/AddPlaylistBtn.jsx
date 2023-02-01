import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddPlaylistBtn = () => {
  return (
    <button className="bg-transparent hover:bg-[#4654A3] text-blue-dark font-semibold hover:text-white md:py-2 py-1 md:px-4 px-2 border border-[#F95B3D] hover:border-transparent rounded">
      <div className="flex justify-center items-center">
        <AiOutlinePlus />
        <span className="ml-1 md:text-md text-xs"> Add Playlist</span>
      </div>
    </button>
  );
};

export default AddPlaylistBtn;
