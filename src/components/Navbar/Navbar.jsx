import React from "react";
import AddPlaylistBtn from "./AddPlaylistBtn";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <nav className=" dark:bg-gray-800 dark:text-white bg-white w-full  z-50 ">
      <div className="container flex relative justify-between items-center mx-auto px-8 h-20 ">
        {/* <!-- logo --> */}
        <Logo />

        {/* <!-- search bar --> */}
        <div className="flex justify-end items-center space-x-4">
          {/* <SearchBar /> */}
          {/* <!-- add playlist --> */}
          <AddPlaylistBtn />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
