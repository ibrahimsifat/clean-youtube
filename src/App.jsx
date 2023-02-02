import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes/Router";

function App() {
  const playlistID = "PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN";
  const playlist = useStoreActions((actions) => actions.playlist);
  useEffect(() => {
    playlist.getPlaylists(playlistID);
  }, []);
  console.log(playlist);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
