import { createContext, useReducer, useEffect } from "react";
import { likeReducerFun } from "../reducers";
import { getLikesService } from "../services";
import { useAuth } from "./authContext";

const LikelistContext = createContext();
const LikelistProvider = ({ children }) => {
  const {
    auth: { token },
  } = useAuth();
  const [likesState, dispatchLikes] = useReducer(likeReducerFun, {
    Likeslist: [],
  });
 useEffect(() => {
    token &&
      (async () => {
        try {
          const { data, status } = await getLikesService({ token });
          if (status === 200) {
            dispatchLikes({
              type: "SET_LIKES",
              payload: {  Likeslist: data.likes },
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
  }, [token]);
  return (
    <LikelistContext.Provider value={{ likesState, dispatchLikes }}>
      {children}
    </LikelistContext.Provider>
  );
};
export { LikelistProvider, LikelistContext };
