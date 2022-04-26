import { createContext, useReducer, useEffect } from "react";
import { watchHistoryReducerFun} from "../reducers";
import { getHistoryService } from "../services";
import { useAuth } from "./authContext";

const WatchHistoryContext = createContext();
const WatchHistoryProvider = ( {children}) => {
  const {
    auth: { token },
  } = useAuth();
  const [ watchHistoryState,dispatchWatchHistory] = useReducer(
    watchHistoryReducerFun,
    {
      watchHistory: [],
    }
  );
useEffect(() => {
    token &&
      (async () => {
        try {
          const { data, status } = await getHistoryService({ token });
          if (status === 200) {
            dispatchWatchHistory({
              type:"SET_WATCHHISTORY",
              payload: { watchHistory: data.history },
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
  }, [token]);
  return <WatchHistoryContext.Provider value={{watchHistoryState, dispatchWatchHistory}}>{children}</WatchHistoryContext.Provider>;
};
export {  WatchHistoryProvider,  WatchHistoryContext };
