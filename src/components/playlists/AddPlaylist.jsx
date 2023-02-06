import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";
import UseErrorModel from "../../hooks/useErrorModel";
import { customModelStyles } from "../../utils/data/data";
import { successNotify } from "../../utils/toast";
import PrimaryBtn from "../UI/PrimaryBtn";

function AddPlaylist({ modalIsOpen, setIsOpen }) {
  const [inputPlaylistId, setInputPlaylistId] = useState("");
  const { getPlaylists } = useStoreActions((action) => action.playlist);
  const { isError } = useStoreState((action) => action.playlist);

  /// open error
  function closeModal() {
    setIsOpen(false);
  }
  // console.log(channelData);
  const [errorModalIsOpen, setErrorIsOpen] = useState(false);

  function ErrorOpenModal() {
    setErrorIsOpen(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPlaylistId.includes("list=")) {
      const playlistId = inputPlaylistId.split("list=")[1];
      if (playlistId.startsWith("PL_")) console.log("inside", playlistId);
      getPlaylists(playlistId);
      setIsOpen(false);
      successNotify("Successfully added playlist");
      return;
    } else if (
      inputPlaylistId.startsWith("PL_") ||
      inputPlaylistId.startsWith("UU") ||
      inputPlaylistId.startsWith("FL") ||
      inputPlaylistId.startsWith("LP")
    ) {
      getPlaylists(inputPlaylistId);
      successNotify("Successfully added playlist");
      setIsOpen(false);
    } else {
      ErrorOpenModal();
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModelStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black  ">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-300">
            Add Playlist
          </p>

          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center mb-6">
            Add/submit a playlist id or playlist link otherwise we can't fetch
            the correct data for you
          </p>
          <form className="mt-6 w-full " onSubmit={handleSubmit}>
            <div className="w-full flex">
              <input
                autoFocus
                className=" py-2 px-4 rounded border-2 border-gray-400 focus:border-gray-700 text-gray-800  bg-white focus:outline-none w-full duration-300"
                placeholder="PL_lakanmbnwerttyutwewekdfhas_drtyula"
                onChange={(e) => setInputPlaylistId(e.target.value)}
              />
            </div>

            <div className="pt-6 text-center">
              <PrimaryBtn type="submit">
                <div className="flex justify-center items-center">
                  <AiOutlinePlus />
                  <span className="ml-1 md:text-xl text-md">Add Playlist</span>
                </div>
              </PrimaryBtn>
            </div>
          </form>
        </div>
      </Modal>
      <UseErrorModel
        errorModalIsOpen={errorModalIsOpen}
        setErrorIsOpen={setErrorIsOpen}
      />
    </div>
  );
}
export default AddPlaylist;
