import { useStoreActions } from "easy-peasy";
import React from "react";
import SearchBar from "../Navbar/SearchBar";

const SemiNavigation = () => {
  const { setGirdLayout, setListLayout } = useStoreActions(
    (actions) => actions.playlistLayout
  );

  return (
    <div className="sm:flex justify-between items-center mt-10 hidden  pb-10 ">
      <SearchBar />
      <div className="ml-auto bg-white text-sm text-gray-500 leading-none border-2 border-white rounded-full inline-flex">
        <button
          onClick={() => setListLayout("grid")}
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-rose-500 focus:text-rose-500 font-bold rounded-l-full px-4 py-3 active"
          id="grid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Grid</span>
        </button>
        <button
          onClick={() => setGirdLayout("list")}
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-rose-500 font-bold focus:text-rose-500 rounded-r-full px-4 py-2"
          id="list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span>List</span>
        </button>
      </div>
      {/* <AllPlaylists /> */}
    </div>
  );
};

export default SemiNavigation;
