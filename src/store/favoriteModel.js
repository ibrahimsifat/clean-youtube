import { action, persist } from "easy-peasy";

const FavoriteModel = persist({
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeToFavorite: action((state, playlistId) => {
    state.items = state.items.filter((pid) => pid.id !== playlistId);
  }),
});
export default FavoriteModel;
