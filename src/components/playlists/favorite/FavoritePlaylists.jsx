import { useStoreState } from "easy-peasy";
import React from "react";
import Heading from "../../UI/Heading";
import PlaylistCard from "../PlaylistCard";

const FavoritePlaylists = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { items: favoritesItems } = useStoreState((state) => state.favorite);
  const { data } = useStoreState((state) => state.playlist);
  const playlistData = Object.values(data);

  const favoritesPlaylist = favoritesItems.reduce((acc, cur) => {
    playlistData.forEach((playlist) => {
      if (playlist.playlistId === cur) {
        playlist["isFavorite"] = true;
        acc.push(playlist);
      }
    });
    return acc;
  }, []);

  return (
    <>
      <Heading level="Favorite Playlist" />
      <div
        className={
          layout == "list"
            ? "space-y-6"
            : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
        }
      >
        {favoritesPlaylist?.map((playlist) => (
          <PlaylistCard key={playlist.playlistId} playlist={playlist} />
        ))}
      </div>
    </>
  );
};

export default FavoritePlaylists;
