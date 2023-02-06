import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import { debounce } from "../../../utils/debounce";
import Badge from "../../UI/badge";
import EditButton from "../../UI/EditButton";

const VideoNote = ({ currentPlayingTime }) => {
  const { videoId } = useParams();
  const { addNote } = useStoreActions((actions) => actions.note);
  const { items } = useStoreState((actions) => actions.note);
  const [noteContent, setNoteContent] = useState("");

  // add note model
  const runningVideoNotes = items[videoId];
  console.log(runningVideoNotes);
  const handleChange = (event) => {
    setNoteContent(event.target.value);
  };
  const handleTakeNote = () => {
    addNote({
      id: shortid.generate(),
      videoId,
      note: noteContent,
      timeStamp: currentPlayingTime,
    });
    setNoteContent("");
  };

  return (
    <div>
      <div class="w-full rounded-lg shadow-md shadow-teal-300/50 dark:text-white border-2 p-4">
        <div class="mb-2">
          <label for="comment" class="text-lg text-gray-600 dark:text-white">
            Add a Note at{" "}
            <span className="bg-rose-300 px-2 font-bold ">
              {currentPlayingTime} min
            </span>
          </label>
          <textarea
            onChange={debounce(handleChange, 300)}
            class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 text-black"
            name="comment"
            placeholder=""
          ></textarea>
        </div>
        <div>
          <button
            class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            onClick={handleTakeNote}
          >
            Add Note
          </button>
        </div>
      </div>
      {runningVideoNotes && (
        <p className="font-bold md:text-xl text-md mt-8 mb-2">
          All Notes ({runningVideoNotes.length})
        </p>
      )}
      {runningVideoNotes &&
        runningVideoNotes.map((note) => (
          <SingleComment key={note.id} note={note} />
        ))}
    </div>
  );
};

const SingleComment = ({ note }) => {
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
    <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl my-2">
      <div class="flex justify-between items-center mb-4">
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
