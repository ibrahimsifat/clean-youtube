import { action, persist } from "easy-peasy";

const FavoriteModel = persist(
  {
    items: [],
    addFavorite: action((state, playlistId) => {
      if (!state.items.includes(playlistId)) {
        state.items.push(playlistId);
      }
    }),
    removeFavorite: action((state, playlistId) => {
      state.items = state.items.filter((pid) => pid !== playlistId);
    }),
  },
  { storage: localStorage }
);
export default FavoriteModel;
