import { createContext, useEffect, useReducer } from "react";
import { playListReduceFunc } from "../reducers";
import { getPlaylistsService } from "../services";
import { useAuth } from "./authContext";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
  const {
    auth: { token },
  } = useAuth();
  const [playlistsState, dispatchPlaylists] = useReducer(playListReduceFunc, {
    playlists: [],
  });
  useEffect(() => {
    token &&
      (async () => {
        try {
          const { data, status } = await getPlaylistsService(token);
          if (status === 200) {
            console.log(data,"fromgetplaylist fun")
            dispatchPlaylists({
              type: "GET_PLAYLISTS",
              payload: { playlists: data.playlists },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();

    
    

  
  }, [token]);

  return <PlaylistContext.Provider value={{playlistsState, dispatchPlaylists}}>{children}</PlaylistContext.Provider>;
};
export { PlaylistProvider,PlaylistContext};
