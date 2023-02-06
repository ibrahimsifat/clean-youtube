import { createStore } from "easy-peasy";
import FavoriteModel from "./favoriteModel";
import noteModel from "./noteModel";

import playlistCardLayout from "./playlistLayout";
import playlistModel from "./playlistModel";
import RecentModel from "./recentModel";

const store = createStore({
  playlist: playlistModel,
  favorite: FavoriteModel,
  recent: RecentModel,
  note: noteModel,
  playlistLayout: playlistCardLayout,
});
export default store;
