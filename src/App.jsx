import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import "./App.css";

function App() {
  const playlistID = "PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN";
  const playlist = useStoreActions((actions) => actions.playlist);
  useEffect(() => {
    playlist.getPlaylists(playlistID);
  }, []);
  console.log(playlist);
  return <div>hello clean youtube</div>;
}

export default App;
