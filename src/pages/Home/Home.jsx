import { useStoreState } from "easy-peasy";
import React from "react";
import AllPlaylists from "../../components/playlists/AllPlaylists";
import NoContent from "./NoContent";

const Home = () => {
  const { data } = useStoreState((state) => state.playlist);
  const playlistArray = Object.values(data);
  if (playlistArray?.length <= 0) {
    return <NoContent />;
  }
  return (
    <>
      <AllPlaylists playlists={playlistArray} />
    </>
  );
};

export default Home;
