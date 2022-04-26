import { useState } from "react";
import { useAuth } from "../../../context";
import { useNotes } from "../../../customHooks";
import { NoteInput } from "./NoteInput";
import "./Notes.css";
const NoteCard = ({ note }) => {
  const [formInput, setFormInput] = useState(note);
  const [isediting, setIsEditing] = useState(false);
  const { deleteNotes, editNotes } = useNotes();
  const {
    auth: { token },
  } = useAuth();
  const deleteNoteHandler = (e) => {
    e.preventDefault();
    deleteNotes({ token, noteId: note._id });
  };

  const editNoteHandler = (e) => {
    console.log("coming");
    e.preventDefault();
    if (note.title.trim() || note.description.trim()) {
      console.log("yaya se bhi");
      editNotes({ token, note: formInput });
      setIsEditing(false);
    }
  };

  return isediting ? (
    <NoteInput
      formInput={formInput}
      setFormInput={setFormInput}
      isediting={isediting}
      setIsEditing={setIsEditing}
      submitFormHandler={editNoteHandler}
    />
  ) : (
    <div className="notecard">
      <div>
        <h4 className="notecard_title">{note.title}</h4>
        <p>{note.description}</p>
        <span class="material-icons notecard_icon" onClick={(e) => deleteNoteHandler(e)}>
          delete
        </span>
        <span class="material-icons notecard_icon" onClick={() => setIsEditing(true)}>
          edit
        </span>{" "}
      </div>
    </div>
  );
};
export { NoteCard };
