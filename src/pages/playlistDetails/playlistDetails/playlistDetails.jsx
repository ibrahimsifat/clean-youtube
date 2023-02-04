import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SemiNavigation from "../../../components/SemiNavigation/SemiNavigation";
import VideoCard from "../../../components/videos/VideoCard";
import UsePagination from "../../../hooks/usePagination";
import UseSearch from "../../../hooks/useSearch";

const PlaylistDetails = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { currentPlaylist, searchString } = useStoreState(
    (state) => state.playlist
  );
  const { getPlaylistById } = useStoreActions((actions) => actions.playlist);

  const { playlistId } = useParams();
  console.log(playlistId);
  useEffect(() => {
    getPlaylistById(playlistId);
  }, [playlistId]);
  const { playlistItems } = currentPlaylist;

  // use search
  const items = UseSearch(searchString, playlistItems, "title");

  // calculating  for pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  // Simulate fetching items from another resources.
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

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
        {currentItems?.map((item) => (
          <VideoCard
            key={item.contentDetails.videoId}
            currentItems={currentItems}
            playingVideo={item}
          />
        ))}
      </div>
      <UsePagination
        items={items}
        itemsPerPage={itemsPerPage}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </>
  );
};

export default PlaylistDetails;
