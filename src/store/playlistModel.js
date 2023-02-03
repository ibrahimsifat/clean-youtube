import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {},
  error: "",
  loading: false,
  currentPlaylist: {},
  setError: action((state, payload) => {
    state.error = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  getPlaylists: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      console.log(getState());
      if (getState().data[playlistId]) {
        console.log("FETCH CANCEL");
        return;
      }
      setLoading(true);
      try {
        const playlist = await getPlaylist(playlistId);
        addPlaylist(playlist);
        console.log("API CALLED");
      } catch (error) {
        console.log(error.response?.data?.error?.message);
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
});
export default playlistModel;
