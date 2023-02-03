import { useStoreState } from "easy-peasy";
import React from "react";
import AllPlaylists from "../../components/playlists/AllPlaylists";
import SemiNavigation from "../../components/SemiNavigation/SemiNavigation";
import NoContent from "./NoContent";

const Home = () => {
  const { data } = useStoreState((state) => state.playlist);
  const playlistArray = Object.values(data);
  if (playlistArray?.length <= 0) {
    return <NoContent />;
  }
  return (
    <>
      <SemiNavigation />
      <AllPlaylists playlists={playlistArray} />
    </>
  );
};

export default Home;
