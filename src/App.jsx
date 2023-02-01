import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  const playlistID = "PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN";
  const playlist = useStoreActions((actions) => actions.playlist);
  useEffect(() => {
    playlist.getPlaylists(playlistID);
  }, []);
  console.log(playlist);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
