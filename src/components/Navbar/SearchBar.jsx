import React from "react";
const SearchBar = () => {
  return (
    <div className="hidden sm:block flex-shrink justify-start ">
      <form action="" className=" ">
        <input
          type="search"
          className="peer cursor-pointer relative z-10 md:h-8 md:w-12 w-8 h-8 rounded border-2 border-transparent bg-transparent  outline-none focus:w-full focus:cursor-text focus:border-[#F95B3D]  dark:focus:border-white focus:pl-14 focus:pr-2 transition-all duration-300 "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto md:h-8 h-8 md:w-14 w-12 border-r border-transparent stroke-gray-500 px-3.5 dark:peer-focus:border-white peer-focus:border-[#F95B3D]  dark:peer-focus:stroke-white peer-focus:stroke-[#F95B3D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchBar;
