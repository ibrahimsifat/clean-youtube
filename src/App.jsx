import { BrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";
// import getPlaylist from "./api";

import "./App.css";
import Router from "./routes/Router";
function App() {
  // const playlistID = "PLHiZ4m8vCp9P23SqlHL0QAqiwS_oCofV2";
  // const [data, setData] = useState([]);
  // const getData = async (playlistId) => {
  //   const data = await getPlaylist(playlistId);
  //   console.log(data);
  //   return data;
  // };
  // useEffect(() => {
  //   const data = getData(playlistID);
  //   setData(data);
  // }, []);
  // console.log(data);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
