import { useStoreActions } from "easy-peasy";
import React from "react";

const VideoNote = ({ videoId }) => {
  const { takeNote } = useStoreActions((actions) => actions.playlist);
  const handleTakeNote = () => {
    takeNote(videoId);
    console.log(videoId);
  };
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full">
        show note
      </div>
      <button
        className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full"
        onClick={handleTakeNote}
      >
        Take Note
      </button>
    </div>
  );
};

export default VideoNote;
