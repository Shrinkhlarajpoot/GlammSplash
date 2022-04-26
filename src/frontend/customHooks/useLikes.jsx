import { useContext } from "react";
import { LikelistContext, useAuth } from "../context";
import { toast } from "react-toastify";
import {
    addLikedVideoService, removeLikedVideoService
} from "../services";

const useLikes = () => {
  const {likesState, dispatchLikes } = useContext(LikelistContext);
  const {
    auth: { token },
  } = useAuth();

  const addLikeVideo = async ({ token, video }) => {
    if (token) {
      try {
        const { data, status } = await  addLikedVideoService({ token, video });
        if (status === 201) {
          toast.success("Added to Likes");
          dispatchLikes({
            type: "SET_LIKES",
            payload: { Likeslist: data.likes },
          });
        }
      } catch (error) {
        toast.error("Try Again Later");
        console.log(error);
      }
    }
  };
  const deleteLikeVideo = async ({ video, token }) => {
    if (token) {
      try {
        const { data, status } = await removeLikedVideoService({
          video,
          token,
        });
        if (status === 200) {
          toast.success("Removed from Likes");
          dispatchLikes({
            type: "SET_LIKES",
            payload: { Likeslist: data.likes },
          });
        }
      } catch (error) {
        toast.error("Try Again Later");
        console.log(error);
      }
    }
  };
  return { likesState, addLikeVideo, deleteLikeVideo };
};
export { useLikes };