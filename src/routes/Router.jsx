import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileNav from "../components/Navbar/Mobile-navbar/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import SemiNavigation from "../components/SemiNavigation/SemiNavigation";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Home from "../pages/Home/Home";
import NotFound from "../pages/notFound/NotFound";
import PlaylistDetails from "../pages/playlistDetails/playlistDetails/playlistDetails";

const Router = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="relative flex min-h-screen flex-col  bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto">
        <SemiNavigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {width < 636 && <MobileNav />}
      </div>
    </div>
  );
};

export default Router;
