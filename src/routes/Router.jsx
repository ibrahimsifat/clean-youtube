import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileNav from "../components/Navbar/Mobile-navbar/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import VideoListPlayer from "../pages/VideoPlayerList/VideoListPlayer";
import Loader from "../utils/Loader";

// pages
const Home = React.lazy(() => import("../pages/Home/Home"));
const NotFound = React.lazy(() => import("../pages/notFound/NotFound"));
const PlaylistDetails = React.lazy(() =>
  import("../pages/playlistDetails/playlistDetails/playlistDetails")
);
// const VideoListPlayer = React.lazy(
//   () => "../pages/VideoPlayerList/VideoListPlayer"
// );

const Router = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="relative flex min-h-screen flex-col  bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black">
      <Navbar />
      <div className="container mx-auto">
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
            <Route path="/video/:videoId" element={<VideoListPlayer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
        {width < 636 && <MobileNav />}
      </div>
    </div>
  );
};

export default Router;
