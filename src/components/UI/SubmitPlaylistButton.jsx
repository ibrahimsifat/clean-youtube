import { AiOutlinePlus } from "react-icons/ai";

const SubmitPlaylistButton = () => {
  return (
    <button
      className=" bg-gradient-to-r from-rose-100 to-teal-100  text-black font-bold rounded-md  hover:from-teal-100 hover:to-rose-100 duration-300 md:py-4 py-3 md:px-6 px-4 text-xl"
      type="submit"
    >
      <div className="flex justify-center items-center">
        <AiOutlinePlus />
        <span className="ml-1 md:text-xl text-md">Add Playlist</span>
      </div>
    </button>
  );
};
export default SubmitPlaylistButton;