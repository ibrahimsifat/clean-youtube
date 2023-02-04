import { useStoreState } from "easy-peasy";
import React from "react";
import UseSearch from "../../hooks/useSearch";
import PlaylistCard from "./PlaylistCard";
const AllPlaylists = ({ playlists }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { isLoading, isError, searchString } = useStoreState(
    (state) => state.playlist
  );
  const searchedPlaylist = UseSearch(searchString, playlists, "playlistTitle");

  // what to render

  return (
    <div
      className={
        layout == "list"
          ? "space-y-6"
          : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      }
    >
      {searchedPlaylist?.map((playlist) => (
        <PlaylistCard key={playlist.playlistId} playlist={playlist} />
      ))}
    </div>
  );
};

export default AllPlaylists;
