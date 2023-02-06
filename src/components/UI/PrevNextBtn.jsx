import React from "react";

const PrevNextBtn = ({ prev, level }) => {
  return (
    <button
      type="button"
      className={`border-2 border-[#4654A3] dark:text-white py-2 hover:bg-[#4654A3] hover:text-white px-3 duration-200 ${
        prev ? "rounded-l-lg " : "rounded-r-lg "
      }`}
    >
      <div className="flex flex-row align-middle">
        {prev && (
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
        <span className="mr-2 font-bold">{level}</span>
        {!prev && (
          <svg
            className="w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </button>
  );
};

export default PrevNextBtn;
