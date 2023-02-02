import { createStore } from "easy-peasy";
import playlistCardLayout from "./playlistLayout";
import playlistModel from "./playlistModel";

const store = createStore({
  playlist: playlistModel,
  playlistLayout: playlistCardLayout,
});
export default store;
