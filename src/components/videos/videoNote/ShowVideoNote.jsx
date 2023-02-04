import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { customModelStyles } from "../../../utils/data/data";
import EditButton from "../../UI/EditButton";
const ShowVideoNote = ({ showModalIsOpen, setShowIsOpen, runningVideo }) => {
  const { takeNote } = useStoreActions((actions) => actions.playlist);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(runningVideo?.note);
  console.log(content);
  const { videoId } = useParams();

  function closeModal() {
    setShowIsOpen(false);
  }

  const handleUpdate = () => {
    takeNote({ videoId, note: content });
    closeModal();
    setIsEditing(false);
  };

  return (
    <Modal
      isOpen={showModalIsOpen}
      onRequestClose={closeModal}
      style={customModelStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className=" w-full md:px-16">
        <div className="bg-white  flex flex-col items-center justify-center px-2 md:px-8 lg:px-24 py-8 rounded-lg  dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black ">
          <div className="text-xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-300 mb-10">
            {!isEditing ? "Your Note Is:" : "Update your Note"}
          </div>
          {isEditing && (
            <textarea
              id="message"
              // defaultValue={content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          )}
          {!isEditing && (
            <p className="md:py-12 py-8 px-3 bg-gray-50 rounded-lg shadow-lg w-full">
              {runningVideo?.note}
            </p>
          )}

          <div className="mt-10 mb-4">
            {isEditing ? (
              <EditButton onClick={handleUpdate}>Update Note</EditButton>
            ) : (
              <EditButton onClick={() => setIsEditing(true)}>
                Edit Note
              </EditButton>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShowVideoNote;
