import { useStoreState } from "easy-peasy";
import React from "react";
import VideoCard from "../../../components/videos/VideoCard";

const PlaylistDetails = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);

  return (
    <div
      className={
        layout == "list"
          ? "space-y-6"
          : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      }
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default PlaylistDetails;
