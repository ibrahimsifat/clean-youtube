import { action } from "easy-peasy";

const playlistCardLayout = {
  layout: "grid",
  setGirdLayout: action((state, payload) => {
    state.layout = payload;
  }),
  setListLayout: action((state, payload) => {
    state.layout = payload;
  }),
};
export default playlistCardLayout;
