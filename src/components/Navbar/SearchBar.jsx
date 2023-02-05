import { useStoreActions } from "easy-peasy";
import React from "react";
const SearchBar = () => {
  // search projects
  const { search } = useStoreActions((actions) => actions.playlist);
  const handleSearch = (e) => {
    // console.log(e.target.value);
    search(e.target.value);
  };

  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  return (
    <div className="relative rounded-full bg-white shadow-xl ring-1 ring-gray-900/5  ">
      <div className="mx-auto w-full">
        <form action="" className="relative mx-auto w-full">
          <input
            type="search"
            className="peer cursor-pointer relative z-10 h-11 w-11 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-blue-400 focus:pl-16 focus:pr-4"
            onChange={debounce(handleSearch, 400)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-blue-400 peer-focus:stroke-blue-500"
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
    </div>
  );
};

export default SearchBar;
