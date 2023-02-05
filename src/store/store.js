import { createStore } from "easy-peasy";
import FavoriteModel from "./favoriteModel";
import playlistCardLayout from "./playlistLayout";
import playlistModel from "./playlistModel";
import RecentModel from "./recentModel";

const store = createStore({
  playlist: playlistModel,
  favorite: FavoriteModel,
  recent: RecentModel,
  playlistLayout: playlistCardLayout,
});
export default store;
