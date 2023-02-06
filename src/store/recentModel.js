import { action, persist } from "easy-peasy";

const RecentModel = persist(
  {
    items: [],
    addToRecent: action(
      (state, playlistId) => {
        if (state.items.length > 5) {
          state.items.pop();
          if (!state.items.includes(playlistId)) {
            state.items.unshift(playlistId);
            return;
          } else {
            state.items = state.items.filter((item) => item !== playlistId);
            state.items.unshift(playlistId);
          }
        } else {
          if (!state.items.includes(playlistId)) {
            state.items.unshift(playlistId);
            return;
          } else {
            state.items = state.items.filter((item) => item !== playlistId);
            state.items.unshift(playlistId);
          }
        }
      },
      { storage: localStorage }
    ),
    removeToRecent: action((state, playlistId) => {
      state.items = state.items.filter((pid) => pid !== playlistId);
    }),
  },
  { storage: localStorage }
);
export default RecentModel;
