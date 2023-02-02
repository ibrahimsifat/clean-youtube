import { useStoreState } from "easy-peasy";
import React from "react";
import PlaylistCard from "./PlaylistCard";
const AllPlaylists = ({ playlists }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);

  console.log(playlists);
  return (
    <div
      className={
        layout == "list"
          ? "space-y-6"
          : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      }
    >
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.playlistId} playlist={playlist} />
      ))}
    </div>
  );
};

export default AllPlaylists;
