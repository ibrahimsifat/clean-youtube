import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import Modal from "react-modal";
import { customModelStyles } from "../../utils/data/data";
import IconButton from "../UI/IconButton";

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
        <h2 className="text-[#4654A3] font-bold">
          Add/submit a playlist id or playlist link otherwise we can't fetch the
          correct data for you
        </h2>

        <form class="mt-6 flex w-full" onSubmit={handleSubmit}>
          <input
            class="rounded-l-lg py-1 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-full focus:outline-none"
            placeholder="PL_lakasldejksdsslakdfhas_drtyula"
            onChange={(e) => setInputPlaylistId(e.target.value)}
          />

          <IconButton type={"submit"}>
            <BiPlusMedical />
            <span className="ml-2 md:text-md text-sm">Add</span>
          </IconButton>
        </form>
      </Modal>
    </div>
  );
}
export default AddPlaylist;
