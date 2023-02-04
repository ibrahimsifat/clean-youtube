import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import Modal from "react-modal";
import { customModelStyles } from "../../utils/data/data";
import SubmitPlaylistButton from "../UI/SubmitPlaylistButton";

function AddPlaylist({ modalIsOpen, setIsOpen }) {
  const [inputPlaylistId, setInputPlaylistId] = useState("");
  const { error } = useStoreState((state) => state.playlist);
  console.log(error);
  const { getPlaylists } = useStoreActions((action) => action.playlist);
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = () => {
    getPlaylists(inputPlaylistId);
    setIsOpen(false);
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
        <div class="border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black  ">
          <p class="text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider text-gray-300">
            Add Playlist
          </p>

          <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center mb-6">
            Add/submit a playlist id or playlist link otherwise we can't fetch
            the correct data for you
          </p>
          <form class="mt-6 w-full " onSubmit={handleSubmit}>
            <div className="w-full flex">
              <input
                class=" py-2 px-4 rounded border-2 border-gray-400 focus:border-gray-700 text-gray-800  bg-white focus:outline-none w-full duration-300"
                placeholder="PL_lakanmbnwerttyutwewekdfhas_drtyula"
                onChange={(e) => setInputPlaylistId(e.target.value)}
              />
            </div>

            <div className="pt-6 text-center">
              <SubmitPlaylistButton />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default AddPlaylist;
