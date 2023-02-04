import React, { useState } from "react";
import AddVideoNote from "./AddVideoNote";
import ShowVideoNote from "./ShowVideoNote";

const VideoNote = ({ runningVideo }) => {
  // add note model
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showModalIsOpen, setShowIsOpen] = useState(false);
  const { note } = runningVideo || {};

  const openAddModal = () => {
    setIsOpen(true);
  };

  // show model
  const openShowModal = () => {
    setShowIsOpen(true);
  };
  return (
    <div className="flex items-center space-x-3">
      {note ? (
        <button
          className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full"
          onClick={openShowModal}
        >
          show note
        </button>
      ) : (
        <button
          className="bg-white  bg-opacity-80 hover:bg-opacity-100  px-4 py-2 cursor-pointer rounded-full"
          onClick={openAddModal}
        >
          Take Note
        </button>
      )}

      <AddVideoNote modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <ShowVideoNote
        showModalIsOpen={showModalIsOpen}
        setShowIsOpen={setShowIsOpen}
        runningVideo={runningVideo}
      />
    </div>
  );
};

export default VideoNote;
