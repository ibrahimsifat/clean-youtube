import React from "react";

const PrimaryBtn = (props) => {
  return (
    <button
      className="bg-[#4654A3] font-bold rounded-md text-white duration-300 hover:bg-[#85567F]  md:py-2 py-1 md:px-6 px-4 text-md"
      type="submit"
      {...props}
    >
      <div className="flex justify-center items-center">{props.children}</div>
    </button>
  );
};

export default PrimaryBtn;
