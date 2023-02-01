import { BiPlusMedical } from "react-icons/bi";
import Modal from "react-modal";
import IconButton from "../UI/IconButton";
const customStyles = {
  content: {
    width: "60%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

function AddPlaylist({ modalIsOpen, setIsOpen }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#4654A3";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className="text-[#4654A3] font-bold">
          Add/submit a playlist id or playlist link otherwise we can't fetch the
          correct data for you
        </h2>

        <form class="mt-6 flex w-full">
          <input
            class="rounded-l-lg py-1 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-full focus:outline-none"
            placeholder="PL_lakasldejksdsslakdfhas_drtyula"
          />

          <IconButton>
            <BiPlusMedical />
            <span className="ml-2 md:text-md text-sm">Add</span>
          </IconButton>
        </form>
      </Modal>
    </div>
  );
}
export default AddPlaylist;
