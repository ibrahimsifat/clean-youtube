import { action, persist } from "easy-peasy";

const playlistCardLayout = persist(
  {
    layout: "grid",
    setGirdLayout: action((state, payload) => {
      state.layout = payload;
    }),
    setListLayout: action((state, payload) => {
      state.layout = payload;
    }),
  },
  { storage: localStorage }
);
export default playlistCardLayout;
