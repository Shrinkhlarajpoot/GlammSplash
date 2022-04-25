import axios from "axios";

function getNotesService({ token, videoId }) {
  return axios.get(`/api/user/notes/${videoId}`, {
    headers: { authorization: token },
  });
}

function addNoteService({ token, note }) {
  return axios.post(
    "/api/user/notes",
    { note },
    {
      headers: { authorization: token },
    }
  );
}

function deleteNoteService({ token, noteId }) {
  return axios.delete(`/api/user/notes/${noteId}`, {
    headers: { authorization: token },
  });
}

function editNoteService({ token, note }) {
  return axios.post(
    `/api/user/notes/${note._id}`,
    { note },
    {
      headers: { authorization: token },
    }
  );
}
export { getNotesService, addNoteService, deleteNoteService, editNoteService };
