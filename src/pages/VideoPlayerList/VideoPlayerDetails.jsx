import { useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SemiNavigation from "../../components/SemiNavigation/SemiNavigation";
import VideoCard from "../../components/videos/VideoCard";
import VideoNote from "../../components/videos/videoNote/VideoNote";
import UsePagination from "../../hooks/usePagination";
import UseSearch from "../../hooks/useSearch";
import PlayingVideoDetails from "./PlayingVideoDetails";

const VideoPlayerDetails = ({ ordersItems, currentPlayingTime }) => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { searchString } = useStoreState((state) => state.playlist);

  // use search
  const items = UseSearch(searchString, ordersItems, "title");

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

  // return (
  //   <>
  //     <div>
  //       {" "}
  //       <SearchBar />
  //     </div>
  //     <div
  //       className={
  //         layout == "list"
  //           ? "space-y-6"
  //           : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
  //       }
  //     >
  //       {currentItems?.map((item) => (
  //         <VideoCard
  //           key={item.contentDetails.videoId}
  //           currentItems={currentItems}
  //           playingVideo={item}
  //         />
  //       ))}
  //     </div>
  //     <UsePagination
  //       items={items}
  //       itemsPerPage={itemsPerPage}
  //       handlePageClick={handlePageClick}
  //       pageCount={pageCount}
  //     />
  //   </>
  // );
  return (
    <Tabs selectedTabClassName="" className="my-5 p-4 dark:text-white">
      <TabList selec>
        <Tab>Details</Tab>
        <Tab>Videos</Tab>
        <Tab>Notes</Tab>
      </TabList>
      <TabPanel>
        <PlayingVideoDetails />
      </TabPanel>
      <TabPanel>
        <>
          <div className="flex justify-between items-center">
            <p className="font-bold md:text-xl text-md">
              All Videos ({items?.length})
            </p>
            <SemiNavigation />
          </div>
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
      </TabPanel>
      <TabPanel>
        <VideoNote currentPlayingTime={currentPlayingTime} />
      </TabPanel>
    </Tabs>
  );
};

export default VideoPlayerDetails;
