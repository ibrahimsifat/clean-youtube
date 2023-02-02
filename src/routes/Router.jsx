import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileNav from "../components/Navbar/Mobile-navbar/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import SemiNavigation from "../components/SemiNavigation/SemiNavigation";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Home from "../pages/Home/Home";
import PlaylistDetails from "../pages/playlistDetails/playlistDetails/playlistDetails";

const Router = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="relative flex min-h-screen flex-col  bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto">
        <SemiNavigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
        </Routes>
        {width < 636 && <MobileNav />}
      </div>
    </div>
  );
};

export default Router;
