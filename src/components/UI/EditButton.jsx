import { FiEdit } from "react-icons/fi";

const EditButton = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-rose-100 to-teal-100  text-black font-bold rounded-md  hover:from-teal-100 hover:to-rose-100 duration-300 md:py-2 py-1 md:px-6 px-4 text-md"
      type="submit"
      {...props}
    >
      <div className="flex justify-center items-center">
        <FiEdit />
        <span className="ml-1 md:text-md text-xm">{props.children}</span>
      </div>
    </button>
  );
};
export default EditButton;
