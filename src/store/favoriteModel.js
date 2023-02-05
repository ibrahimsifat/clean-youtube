import { action, persist } from "easy-peasy";

const FavoriteModel = persist({
  items: Array(5),
  addFavorite: action((state, playlistId) => {
    if (!state.items.includes(playlistId)) {
      state.items.push(playlistId);
    }
  }),
  removeFavorite: action((state, playlistId) => {
    state.items = state.items.filter((pid) => pid.id !== playlistId);
  }),
});
export default FavoriteModel;
