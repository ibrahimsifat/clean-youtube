import { useStoreState } from "easy-peasy";
import React from "react";
import AllPlaylists from "../../components/playlists/AllPlaylists";
import NoContent from "./NoContent";

const Home = () => {
  const { data } = useStoreState((state) => state.playlist);
  // console.log("home called");
  const playlistArray = Object.values(data);
  if (playlistArray?.length <= 0) {
    return <NoContent />;
  }
  return (
    <div className="md:mt-16 mt-2">
      {/* <SemiNavigation /> */}
      <AllPlaylists playlists={playlistArray} />
    </div>
  );
};

export default Home;
