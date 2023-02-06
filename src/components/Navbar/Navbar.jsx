import React from "react";
import { ImGithub } from "react-icons/im";
import { useLocation } from "react-router-dom";
import AddPlaylistBtn from "./AddPlaylistBtn";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const location = useLocation();
  const homeRoute = location?.pathname === "/";
  return (
    <nav className=" dark:bg-gray-800 dark:text-white bg-white w-full  z-50 ">
      <div className="container flex relative justify-between items-center mx-auto px-8 h-20 ">
        {/* <!-- logo --> */}
        <Logo />

        {/* <!-- search bar --> */}
        <div className="flex justify-end items-center space-x-4">
          {/* <SearchBar /> */}
          {/* <!-- add playlist --> */}
          {homeRoute && <AddPlaylistBtn />}
          <a
            href="https://github.com/ibrahimsifat/clean-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub
              size={23}
              className="cursor-pointer border rounded-full mb-1 hover:border-teal-400"
            />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
