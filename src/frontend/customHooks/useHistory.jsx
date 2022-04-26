import { useContext } from "react";
import { useAuth, WatchHistoryContext } from "../context";
import { toast } from "react-toastify";
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
        console.log(error);
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
        toast.error("Try Again Later");
        console.log(error);
      }
    }
  };
  const clearWatchHistory = async ({ token }) => {
    if (token) {
      try {
        const { data, status } = await clearWatchHistoryService({ token });

        if (status === 200) {
            toast.info("History Deleted");
          dispatchWatchHistory({
            type: "SET_WATCHHISTORY",
            payload: { watchHistory: data.history },
          });
        }
      } catch (error) {
        toast.info("Try Again Later");
        console.log(error);
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
