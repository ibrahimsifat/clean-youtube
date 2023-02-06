import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import shortid from "shortid";
import { debounce } from "../../../utils/debounce";
import Badge from "../../UI/badge";
import EditButton from "../../UI/EditButton";
import Heading from "../../UI/Heading";
import PrimaryBtn from "../../UI/PrimaryBtn";

const VideoNote = ({ currentPlayingTime }) => {
  const { videoId } = useParams();
  const { addNote } = useStoreActions((actions) => actions.note);
  const { items } = useStoreState((actions) => actions.note);
  const [noteContent, setNoteContent] = useState("");
  const successError = (message) => toast.error(message);

  // add note model
  const runningVideoNotes = items[videoId];
  // console.log(runningVideoNotes);
  const handleChange = (event) => {
    setNoteContent(event.target.value);
  };
  const handleTakeNote = () => {
    if (noteContent !== "") {
      addNote({
        id: shortid.generate(),
        videoId,
        note: noteContent,
        timeStamp: currentPlayingTime,
      });
      setNoteContent("");
    } else {
      successError("Please add valid note");
    }
  };

  return (
    <div>
      <div className="w-full rounded  dark:text-white border-2 dark:border-none p-4">
        <div className="mb-2">
          <label
            for="comment"
            className="text-lg text-gray-600 dark:text-white"
          >
            Add a Note at{" "}
            <span className="bg-rose-300 dark:bg-gray-800 dark:text-red-500 px-2 font-bold ">
              {currentPlayingTime} min
            </span>
          </label>
          <textarea
            onChange={debounce(handleChange, 300)}
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-400 focus:ring-1 text-black dark:bg-gray-800 dark:text-white"
            name="comment"
            placeholder=""
          ></textarea>
        </div>
        <div>
          <PrimaryBtn onClick={handleTakeNote}>Add Note</PrimaryBtn>
        </div>
      </div>
      {runningVideoNotes && (
        <div className="pt-10">
          <Heading level={`  All Notes (${runningVideoNotes.length})`} />
        </div>
      )}
      {runningVideoNotes &&
        runningVideoNotes.map((note) => (
          <SingleNote key={note.id} note={note} />
        ))}
    </div>
  );
};

const SingleNote = ({ note }) => {
  const { updateNote, deleteNote } = useStoreActions((actions) => actions.note);
  const [isEditing, setIsEditing] = useState(false);
  const [noteContent, setNoteContent] = useState(note?.note);

  const handleUpdate = () => {
    updateNote({
      videoId: note.videoId,
      id: note.id,
      note: noteContent,
    });

    setIsEditing(false);
  };
  const handleNoteDelete = () => {
    deleteNote({
      videoId: note.videoId,
      id: note.id,
    });
  };

  return (
    <div className="flex flex-col p-8 bg-white shadow rounded-md my-2">
      <div className="flex justify-between items-center mb-4">
        <Badge level={note?.timeStamp} />
        <div>
          {isEditing ? (
            <EditButton onClick={handleUpdate}>Update Note</EditButton>
          ) : (
            <div className="flex space-x-4">
              <EditButton onClick={() => setIsEditing(true)}> Edit</EditButton>
              <AiFillDelete
                size={30}
                color="red"
                onClick={handleNoteDelete}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        {isEditing && (
          <textarea
            id="message"
            value={noteContent}
            onChange={(event) => setNoteContent(event.target.value)}
            rows="2"
            className="block p-2.5 w-full  text-gray-900 bg-gray-100 rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:text-xl text-sm"
            placeholder="Your message..."
          ></textarea>
        )}
        {!isEditing && (
          <p className="  font-bold rounded-lg w-full">{note?.note}</p>
        )}
      </div>
    </div>
  );
};
export default VideoNote;
