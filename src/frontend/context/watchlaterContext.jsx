import { createContext, useReducer, useEffect } from "react";
import { watchlaterReducerFun } from "../reducers";
import { getWatchLaterService } from "../services";
import { useAuth } from "./authContext";

const WatchlaterContext = createContext();

const WatchlaterProvider = ( {children}) => {
  const {
    auth: { token },
  } = useAuth();
  const [watchlaterState,dispatchWatchlater] = useReducer(
    watchlaterReducerFun,
    {
      watchLater: [],
    }
  );
useEffect(() => {
    token &&
      (async () => {
        try {
          const { data, status } = await getWatchLaterService({ token });
         if (status === 200) {
            dispatchWatchlater({
              type:"SET_WATCHLATER",
              payload: { watchLater: data.watchlater },
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
  }, [token]);
  return <WatchlaterContext.Provider value={{watchlaterState, dispatchWatchlater}}>{children}</WatchlaterContext.Provider>;
};
export { WatchlaterProvider, WatchlaterContext };
