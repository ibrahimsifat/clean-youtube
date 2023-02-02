import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import VideoCard from "../../../components/videos/VideoCard";

const PlaylistDetails = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { currentPlaylist } = useStoreState((state) => state.playlist);
  const { getPlaylistById } = useStoreActions((actions) => actions.playlist);

  const { playlistId } = useParams();
  useEffect(() => {
    getPlaylistById(playlistId);
  }, [playlistId]);
  const { playlistItems: items } = currentPlaylist;

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className={
          layout == "list"
            ? "space-y-6"
            : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
        }
      >
        {currentItems?.map((item) => (
          <VideoCard currentItems={currentItems} playlistItem={item} />
        ))}
      </div>
      {items?.length > itemsPerPage && (
        <ReactPaginate
          className="bg-gradient-to-r from-rose-100 via-white to-teal-100 bg-opacity-40 py-4 flex justify-center items-center font-bold my-10 space-x-3 text-md tm "
          containerClassName="bg-green-400 text-red-200"
          previousLinkClassName="px-2 py-4 rounded-l-full bg-gradient-to-r from-teal-200 to-transparent hover:bg-rose-100"
          nextLinkClassName="px-2 py-4 rounded-r-full bg-gradient-to-r from-transparent to-teal-200  hover:bg-rose-100"
          disabledLinkClassName="invisible "
          nextClassName=""
          breakLinkClassName="font-bold text-2xl text-teal-400"
          breakClassName="-mt-3"
          pageLinkClassName=" px-3 py-2   rounded-full"
          activeLinkClassName="bg-teal-100   "
          breakLabel="..."
          nextLabel="next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={`<previous`}
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default PlaylistDetails;
