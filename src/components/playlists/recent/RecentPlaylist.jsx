import { useStoreState } from "easy-peasy";
import React from "react";
import PlaylistCard from "../PlaylistCard";

const RecentPlaylists = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { items: recentItems } = useStoreState((state) => state.recent);
  const { data } = useStoreState((state) => state.playlist);
  const playlistData = Object.values(data);

  const recentPlaylist = recentItems.reduce((acc, cur) => {
    playlistData.forEach((playlist) => {
      if (playlist.playlistId === cur) {
        acc.push(playlist);
      }
    });
    return acc;
  }, []);

  return (
    <>
      <p className="mt-16 mb-6 sm:p-0 p-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-700">
        Recent Visited-
      </p>
      <div
        className={
          layout == "list"
            ? "space-y-6"
            : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
        }
      >
        {recentPlaylist?.map((playlist) => (
          <PlaylistCard key={playlist.playlistId} playlist={playlist} />
        ))}
      </div>
    </>
  );
};

export default RecentPlaylists;
