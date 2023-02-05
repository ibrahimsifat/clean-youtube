import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist(
  {
    data: {},
    isError: "",
    isLoading: false,
    currentPlaylist: {},
    searchString: "",
    runningVideo: {},
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
    takeNote: action((state, payload) => {
      const playlistId = state.currentPlaylist.playlistId;
      const videoId = payload.videoId;
      const video = state.data[playlistId].playlistItems.find(
        (item) => item.contentDetails.videoId === videoId
      );
      video["note"] = payload.note;
      state.runningVideo = video;
    }),
    addToFavorite: action((state, playlistId) => {
      state.data[playlistId]["isFavorite"] = true;
    }),
    removeToFavorite: action((state, playlistId) => {
      state.data[playlistId]["isFavorite"] = false;
    }),
    setRunningVideoById: action((state, videoId) => {
      if (videoId) {
        const playlistId = state.currentPlaylist.playlistId;
        const video = state.data[playlistId].playlistItems.find(
          (item) => item.contentDetails.videoId === videoId
        );
        state.runningVideo = video;
        return;
      }
      state.runningVideo = {};
    }),
    getPlaylists: thunk(async (action, playlistId, { getState }) => {
      if (getState().data[playlistId]) {
        console.log("FETCH CANCEL");
        return;
      }
      try {
        action.setLoading(true);
        const playlist = await getPlaylist(playlistId);
        action.addPlaylist(playlist);
        action.setError("");
      } catch (error) {
        // console.log(error.response?.data?.error?.message);
        action.setError(
          error.response?.data?.error?.message || "Something went wrong"
        );
      } finally {
        action.setLoading(false);
      }
    }),
    getPlaylistById: action((state, playlistId) => {
      state.currentPlaylist = state.data[playlistId];
    }),
    search: action((state, payload) => {
      state.searchString = payload;
    }),
  },
  { storage: localStorage }
);
export default playlistModel;
