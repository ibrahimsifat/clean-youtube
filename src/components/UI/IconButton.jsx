import React from "react";

const IconButton = ({ children, type }) => {
  return (
    <button
      class="md:px-8 px-2 rounded-r-lg bg-[#F95B3D] text-white font-bold md:p-2 p-1 uppercase   flex justify-center items-center"
      type={type || "button"}
    >
      {...children}
    </button>
  );
};

export default IconButton;
