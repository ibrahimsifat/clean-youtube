import React from "react";
import Modal from "react-modal";
import AddPlaylistBtn from "../components/Navbar/AddPlaylistBtn";
import { customModelStyles } from "../utils/data/data";

const UseErrorModel = ({ errorModalIsOpen, setErrorIsOpen }) => {
  function closeModal() {
    setErrorIsOpen(false);
  }

  return (
    <Modal
      isOpen={errorModalIsOpen}
      onRequestClose={closeModal}
      style={customModelStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white text-center">
        {/* <!--content--> */}

        <p className="text-2xl md:text-3xl lg:text-5xl font-bold mx-auto text-rose-500">
          InValid Credentials
        </p>

        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center mb-6">
          please Provide a valid youtube playlist Id or playlist Link
        </p>
        <AddPlaylistBtn big />
      </div>
    </Modal>
  );
};

export default UseErrorModel;
