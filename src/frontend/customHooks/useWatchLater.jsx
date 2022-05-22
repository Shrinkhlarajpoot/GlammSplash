import { useContext } from "react";
import { useAuth } from "../context";
import { WatchlaterContext } from "../context/watchlaterContext";
import toast from "react-hot-toast";
import {
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../services";

const useWatchlater = () => {
  const { watchlaterState, dispatchWatchlater } = useContext(WatchlaterContext);
  const {
    auth: { token },
  } = useAuth();

  const addWatchlater = async ({ token, video }) => {
    if (token) {
      try {
        const { data, status } = await addToWatchLaterService({ token, video });
        if (status === 201) {
          toast.success("Added to Watchlater");
          dispatchWatchlater({
            type: "SET_WATCHLATER",
            payload: { watchLater: data.watchlater },
          });
        }
      } catch (error) {
        console.error(error)
        toast.error("Try Again Later");
      }
    }
  };
  const deleteWatchlater = async ({ video, token }) => {
    if (token) {
      try {
        const { data, status } = await removeFromWatchLaterService({
          video,
          token,
        });
        if (status === 200) {
          toast.success("Removed from Watchlater");
          dispatchWatchlater({
            type: "SET_WATCHLATER",
            payload: { watchLater: data.watchlater },
          });
        }
      } catch (error) {
        console.error(error)
        toast.error("Try Again Later");
      }
    }
  };
  return { watchlaterState, addWatchlater, deleteWatchlater };
};
export { useWatchlater };
