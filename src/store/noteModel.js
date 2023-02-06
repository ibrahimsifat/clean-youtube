import { action, persist } from "easy-peasy";
import { toast } from "react-toastify";

const noteModel = persist(
  {
    items: {},
    addNote: action((state, payload) => {
      if (state.items[payload.videoId]) {
        state.items[payload.videoId].unshift(payload);
      } else {
        state.items[payload.videoId] = [payload];
      }
      toast.success("Note added successfully");
    }),
    updateNote: action((state, payload) => {
      if (state.items[payload.videoId]) {
        state.items[payload.videoId].find(
          (note) => note.id === payload.id
        ).note = payload.note;
      }
      toast.success("Note updated successfully");
    }),
    deleteNote: action((state, payload) => {
      state.items[payload.videoId] = state.items[payload.videoId].filter(
        (note) => note.id !== payload.id
      );
      toast.success("Note Deleted successfully");
    }),
  },
  { storage: localStorage }
);
export default noteModel;

// note data structure
// const note = {
//   videoId: "a;kfe,el",
//   timeStamp: "2014-",
//   content: "this is note",
// };
