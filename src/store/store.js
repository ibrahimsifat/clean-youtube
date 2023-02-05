import { createStore } from "easy-peasy";
import FavoriteModel from "./favoriteModel";
import playlistCardLayout from "./playlistLayout";
import playlistModel from "./playlistModel";

const store = createStore({
  playlist: playlistModel,
  favorite: FavoriteModel,
  playlistLayout: playlistCardLayout,
});
export default store;
