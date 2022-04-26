import { createContext, useEffect, useReducer } from "react";
import { notesReduceFunc } from "../reducers";
import { getNotesService } from "../services";
import { useAuth } from "./authContext";

const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const {
    auth: { token },
  } = useAuth();
  const [notesState, dispatchNotes] = useReducer(notesReduceFunc, {
    notes: [],
    videoId: "",
    loading: true,
  });

  const { videoId } = notesState;
  useEffect(() => {
    (token &&videoId) &&
      dispatchNotes({
        type: "SET_LOADING",
        payload: true,
      });
    (async () => {
      try {
        const { data, status } = await getNotesService({ token, videoId });
        if (status === 200) {
          dispatchNotes({
            type: "GET_NOTES",
            payload: { notes: data.notes },
            loading: false,
          });
        }
      } catch (error) {
     
      }
    })();
  }, [token, videoId]);

  return (
    <NotesContext.Provider value={{ notesState, dispatchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
export { NotesProvider, NotesContext };
