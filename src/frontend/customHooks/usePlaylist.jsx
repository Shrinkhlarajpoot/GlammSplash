import { useContext } from "react";
import { useAuth } from "../context";
import { PlaylistContext } from "../context/playlistContext";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  addNewPlaylistService,
  addVideoToPlaylistService,
  deleteVideoFromPlaylistService,
  deletePlaylistService,
} from "../services";

const usePlaylists = () => {
  const { playlistsState, dispatchPlaylists } = useContext(PlaylistContext);
  const {
    auth: { token },
  } = useAuth();
const createNewPlaylist = async (newPlaylistName, video) => {
  if(token){
    try {
      const { data, status } = await addNewPlaylistService(
        newPlaylistName,
        token
      );

      if (status === 201) {
        toast.success("New Playlist Added")
        dispatchPlaylists({
          type: "GET_PLAYLISTS",
          payload: { playlists: data.playlists },
        });
      }
      if (video)
       addVideoToPlaylist({
          playlist: data.playlists[data.playlists.length - 1],
          video,
        });
    } catch (err) {
      toast.error("PLease Login To Continue")
      console.error(err.response);
    }
  }
  };
  const addVideoToPlaylist = async ({ playlist, video }) => {
    if(token){
    try {
      const { data, status } = await addVideoToPlaylistService({
        token,
        playlist,
        video,
      });

      if (status === 201) {
        toast.success("Video Added to the Playlist")
        dispatchPlaylists({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      toast.error("No Video to Add")
      console.error(err);
    }
  }
  };

  const deleteVideoFromPlaylist = async ( {videoInPlaylist,playlist}) => {
 if(token){
    try {
      const { data, status } = await deleteVideoFromPlaylistService({
        token,
        playlist,
        videoInPlaylist,
      });

      if (status === 200) {
        toast.info("Video Deleted from the Playlist")
        dispatchPlaylists({
          type: "DELETE_VIDEO_FROM_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      toast.error("Try Again Later")
      console.error(err);
    }
  }
  };
  const deletePlaylist = async (playlistId) => {
    if(token){
    try {
      const { data, status } = await deletePlaylistService({
        token,
        playlistId,
      });

      if (status === 200) {
        toast.success("Playlist Deleted")
        dispatchPlaylists({
          type: "GET_PLAYLISTS",
          payload: { playlists: data.playlists },
        });
      }
    } catch (err) {
      toast.error("Try Again Later")
      console.error(err);
    }
  }
  };

  return {
    playlistsState,
    dispatchPlaylists,
    createNewPlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    deletePlaylist,
  };
};

export { usePlaylists };
