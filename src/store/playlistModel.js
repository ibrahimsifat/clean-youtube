import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {},
  isError: "",
  isLoading: false,
  currentPlaylist: {},
  searchString: "",
  setError: action((state, payload) => {
    state.isError = payload;
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  deletePlaylist: action((state, playlistId) => {
    delete state.data[playlistId];
  }),
  getPlaylists: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      if (getState().data[playlistId]) {
        console.log("FETCH CANCEL");
        return;
      }
      try {
        setLoading(true);
        const playlist = await getPlaylist(playlistId);
        addPlaylist(playlist);
        setError("");
      } catch (error) {
        // console.log(error.response?.data?.error?.message);
        setError(
          error.response?.data?.error?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }
  ),
  getPlaylistById: action((state, playlistId) => {
    state.currentPlaylist = state.data[playlistId];
  }),
  search: action((state, payload) => {
    state.searchString = payload;
  }),
});
export default playlistModel;
