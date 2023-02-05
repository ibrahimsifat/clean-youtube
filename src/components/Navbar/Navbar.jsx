import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../utils/data/data";
import AddPlaylistBtn from "./AddPlaylistBtn";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <nav className=" dark:bg-gray-800 dark:text-white bg-white w-full  z-50 ">
      <div className="container flex relative justify-between items-center mx-auto px-8 h-20 ">
        {/* <!-- logo --> */}
        <Logo />

        <div className="md:flex justify-end items-center relative hidden lg:space-x-8 md:space-x-4 cursor-pointer">
          {navData.map((item, index) => (
            <Link to={item.path} className="font-bold text-md " key={index}>
              {item.level}
            </Link>
          ))}
        </div>

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
