import { useStoreState } from "easy-peasy";
import React from "react";
import UseSearch from "../../../hooks/useSearch";
import SemiNavigation from "../../SemiNavigation/SemiNavigation";
import PlaylistCard from "../PlaylistCard";

const FavoritePlaylists = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { items: favoritesItems } = useStoreState((state) => state.favorite);
  const { data } = useStoreState((state) => state.playlist);
  const playlistData = Object.values(data);

  const favoritesPlaylist = playlistData.reduce((acc, cur, index) => {
    if (cur.playlistId === favoritesItems[index]) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  const { isLoading, isError, searchString } = useStoreState(
    (state) => state.playlist
  );
  const searchedPlaylist = UseSearch(
    searchString,
    favoritesPlaylist,
    "playlistTitle"
  );

  // what to render

  return (
    <>
      <SemiNavigation />
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
    </>
  );
};

export default FavoritePlaylists;
