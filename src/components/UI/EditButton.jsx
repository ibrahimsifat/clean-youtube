import { FiEdit } from "react-icons/fi";

const EditButton = (props) => {
  return (
    <button
      className="bg-[#4654A3] font-bold rounded-md text-white duration-300 hover:bg-[#85567F]  md:py-2 py-1 md:px-6 px-4 text-md"
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
