import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";
import { customModelStyles } from "../../utils/data/data";

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
        <div className="border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black  ">
          <p className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider text-gray-300">
            Add Playlist
          </p>

          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center mb-6">
            Add/submit a playlist id or playlist link otherwise we can't fetch
            the correct data for you
          </p>
          <form className="mt-6 w-full " onSubmit={handleSubmit}>
            <div className="w-full flex">
              <input
                className=" py-2 px-4 rounded border-2 border-gray-400 focus:border-gray-700 text-gray-800  bg-white focus:outline-none w-full duration-300"
                placeholder="PL_lakanmbnwerttyutwewekdfhas_drtyula"
                onChange={(e) => setInputPlaylistId(e.target.value)}
              />
            </div>

            <div className="pt-6 text-center">
              <button
                className=" bg-gradient-to-r from-rose-100 to-teal-100  text-black font-bold rounded-md  hover:from-teal-100 hover:to-rose-100 duration-300 md:py-4 py-3 md:px-6 px-4 text-xl"
                type="submit"
              >
                <div className="flex justify-center items-center">
                  <AiOutlinePlus />
                  <span className="ml-1 md:text-xl text-md">Add Playlist</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default AddPlaylist;
