import React from "react";
import AddPlaylistBtn from "../../components/Navbar/AddPlaylistBtn";

const NoContent = () => {
  return (
    <div class=" w-full px-16 md:px-0 pt-40 flex items-center justify-center">
      <div class="bg-white border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl dark:bg-gradient-to-l dark:from-black dark:via-neutral-900 dark:to-black dark:shadow-lg  dark:shadow-white/20">
        <p class="text-5xl md:text-6xl lg:text-8xl font-bold tracking-wider text-gray-300">
          No Playlist
        </p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Available
        </p>
        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center mb-6">
          Please, Add Playlist by Playlist-Id or Playlist-Link.
        </p>
        <AddPlaylistBtn big />
      </div>
    </div>
  );
};

export default NoContent;
