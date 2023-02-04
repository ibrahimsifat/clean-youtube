import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { MdFavorite, MdRecentActors } from "react-icons/md";
const MobileNav = () => {
  return (
    <div className="w-full fixed bottom-0">
      <div className="px-7 bg-white shadow-lg rounded-2xl">
        <div className="flex">
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full t "
            >
              <span className="block px-1 pt-1 pb-1">
                <AiFillHome size={20} className="mx-auto" />
                <span className="block text-xs pb-2">Home</span>
                <span className="block w-5 mx-auto h-1  rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full  "
            >
              <span className="block px-1 pt-1 pb-1">
                <MdRecentActors className="mx-auto" size={20} />
                <span className="block text-xs pb-2">Recent</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full  "
            >
              <span className="block px-1 pt-1 pb-1">
                <MdFavorite className="mx-auto" size={20} />
                <span className="block text-xs pb-2">Favorite</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full  "
            >
              <span className="block px-1 pt-1 pb-1">
                <BiSearchAlt className="mx-auto" size={20} />
                <span className="block text-xs pb-2">Search</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
