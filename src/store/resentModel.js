import { action, persist } from "easy-peasy";

const RecentModel = persist({
  items: [],
  addToRecent: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeToRecent: action((state, playlistId) => {
    state.items = state.items.filter((pid) => pid.id !== playlistId);
  }),
});
export default RecentModel;
