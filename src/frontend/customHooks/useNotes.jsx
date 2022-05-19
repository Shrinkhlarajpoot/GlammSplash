import { useContext } from "react";
import { useAuth } from "../context";
import { NotesContext } from "../context/notesContext";
import { addNoteService, deleteNoteService } from "../services";
import toast from "react-hot-toast";
import { editNoteService } from "../services/notesService";
const useNotes = () => {
  const { notesState, dispatchNotes } = useContext(NotesContext);
  const {
    auth: { token },
  } = useAuth();

  const addNewNotes = async ({ token, note }) => {
    if (token) {
      try {
        const { data, status } = await addNoteService({ token, note });
        if (status === 201) {
          toast.success("New Note Added");
          dispatchNotes({
            type: "SET_NOTES",
            payload: {
              notes: data.notes,
            },
          });
        }
      } catch (error) {
        toast.error("Try Again Later");
      }
    }
  };

  const deleteNotes = async ({ token, noteId }) => {
    if (token) {
      try {
        const { data, status } = await deleteNoteService({ token, noteId });
        if (status === 200) {
          toast.success("Note Deleted");
          dispatchNotes({
            type: "SET_NOTES",
            payload: {
              notes: data.notes,
            },
          });
        }
      } catch (error) {
        toast.error("Try Again Later");
      }
    }
  };
  const editNotes = async ({ token, note }) => {
    if (token) {
      try {
        const { data, status } = await editNoteService({ token, note });
        if (status === 201) {
          toast.success("Note Updated");

          dispatchNotes({
            type: "SET_NOTES",
            payload: {
              notes: data.notes,
            },
          });
        }
      } catch (error) {
        toast.error("Try Again Later");
      }
    }
  };
  return { addNewNotes, dispatchNotes, notesState, deleteNotes, editNotes };
};
export { useNotes };
