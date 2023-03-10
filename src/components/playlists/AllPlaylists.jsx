import { useStoreState } from "easy-peasy";
import React from "react";
import UseSearch from "../../hooks/useSearch";
import SemiNavigation from "../SemiNavigation/SemiNavigation";
import Heading from "../UI/Heading";
import FavoritePlaylists from "./favorite/FavoritePlaylists";
import PlaylistCard from "./PlaylistCard";
import RecentPlaylists from "./recent/RecentPlaylist";
const AllPlaylists = ({ playlists }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { items: recentItems } = useStoreState((state) => state.recent);
  const { items: favoriteItems } = useStoreState((state) => state.favorite);
  const { isLoading, isError, searchString } = useStoreState(
    (state) => state.playlist
  );
  const searchedPlaylist = UseSearch(searchString, playlists, "playlistTitle");
  const favoritePlaylists = playlists.filter((item) => item.isFavorite);

  return (
    <>
      {recentItems.length > 0 && <RecentPlaylists />}
      {favoriteItems.length > 0 && <FavoritePlaylists />}

      <Heading level="All Playlist" />
      <div>
        <SemiNavigation />
      </div>

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

export default AllPlaylists;
