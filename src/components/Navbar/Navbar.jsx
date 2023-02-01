import React from "react";
import AddPlaylistBtn from "./AddPlaylistBtn";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      {/* <!-- logo --> */}
      <Logo />

      <div className="md:flex justify-end items-center relative hidden lg:space-x-8 md:space-x-4">
        <p className="">All</p>
        <p className="">Recent</p>
        <p className="">Favorite</p>
      </div>

      {/* <!-- search bar --> */}
      <div className="flex justify-end items-center space-x-4">
        <SearchBar />
        {/* <!-- add playlist --> */}
        <AddPlaylistBtn />
      </div>
    </nav>
  );
};

export default Navbar;
