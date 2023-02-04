import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { customModelStyles } from "../../../utils/data/data";
import SubmitPlaylistButton from "../../UI/SubmitPlaylistButton";
const AddVideoNote = ({ modalIsOpen, setIsOpen }) => {
  const { takeNote } = useStoreActions((actions) => actions.playlist);
  const [content, setContent] = useState("");

  const { videoId } = useParams();

  function closeModal() {
    setIsOpen(false);
  }

  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  const handleTakeNote = () => {
    takeNote({ videoId, note: content });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModelStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className=" w-full px-16 md:px-0  ">
        <div className="bg-white  flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg  dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black ">
          <p className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mb-10">
            Take Your Note
          </p>

          <textarea
            id="message"
            onChange={debounce(handleChange, 400)}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>

          <div className="mt-10 mb-4">
            <SubmitPlaylistButton onClick={handleTakeNote}>
              Add Note
            </SubmitPlaylistButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddVideoNote;
