import { useContext } from "react";
import { useAuth, WatchHistoryContext } from "../context";
import toast from "react-hot-toast";
import {
  addToHistoryService,
  removeFromHistoryService,
  clearWatchHistoryService,
} from "../services";

const useHistory = () => {
  const { watchHistoryState, dispatchWatchHistory } =
    useContext(WatchHistoryContext);
  const {
    auth: { token },
  } = useAuth();

  const addtoWatchHistory = async ({ token, video }) => {
    if (token) {
      try {
        const { data, status } = await addToHistoryService({ token, video });

        if (status === 201) {
          dispatchWatchHistory({
            type: "SET_WATCHHISTORY",
            payload: { watchHistory: data.history },
          });
        }
      } catch (error) {
        console.error(error)
      }
    }
  };
  const deleteFromWatchHistory = async ({ video, token }) => {
    if (token) {
      try {
        const { data, status } = await removeFromHistoryService({
          videoId: video._id,
          token,
        });
        if (status === 200) {
          toast.success("Removed from History");
          dispatchWatchHistory({
            type: "SET_WATCHHISTORY",
            payload: { watchHistory: data.history },
          });
        }
      } catch (error) {
        console.error(error)
        toast.error("Try Again Later");
      }
    }
  };
  const clearWatchHistory = async ({ token }) => {
    if (token) {
      try {
        const { data, status } = await clearWatchHistoryService({ token });

        if (status === 200) {
         toast.success("History Deleted");
          dispatchWatchHistory({
            type: "SET_WATCHHISTORY",
            payload: { watchHistory: data.history },
          });
        }
      } catch (error) {
        console.error(error)
        toast.success("Try Again Later");
      }
    }
  };
  return {
    addtoWatchHistory,
    clearWatchHistory,
    watchHistoryState,
    deleteFromWatchHistory,
  };
};
export { useHistory };
