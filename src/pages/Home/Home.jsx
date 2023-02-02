import { useStoreState } from "easy-peasy";
import React from "react";
import AllPlaylists from "../../components/playlists/AllPlaylists";

const Home = () => {
  const { data } = useStoreState((state) => state.playlist);
  const playlistArray = Object.values(data);
  return (
    <>
      <AllPlaylists playlists={playlistArray} />
    </>
  );
};

export default Home;
