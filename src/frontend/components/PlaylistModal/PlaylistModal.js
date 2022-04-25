import { useState } from "react";
import { usePlaylists } from "../../customHooks/usePlaylist";
import "./PlaylistModal.css";
const PlaylistModal = ({ showPlaylistModal, setShowPlaylistModal, video }) => {
  const {
    playlistsState: { playlists },
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    createNewPlaylist,
  } = usePlaylists();
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const submitNewPlaylistFormHandler = (e) => {
    e.preventDefault();
    if (newPlaylistName.trim()) {
      createNewPlaylist(newPlaylistName,video);
      setNewPlaylistName("");
    }
  };

  return (
    <>
      {showPlaylistModal ? (
        <div className="playlist_modal">
          <div className="playlist_modal-form">
            <div className="playlist_modal-close">
              <h3>Playlist</h3>
              <span
                class="material-icons modal_icon"
                onClick={() => setShowPlaylistModal(false)}
              >
                highlight_off
              </span>
            </div>
            <div className="playlist_modal-list">
              {playlists?.map((playlist) => {
                const videoInPlaylist = playlist?.videos?.find(
                  (playlistVideo) => playlistVideo?._id === video?._id
                );
                return (
                  <div key={playlist._id}>
                    <input
                      type="checkbox"
                      checked={videoInPlaylist ? true : false}
                      onChange={() =>
                        videoInPlaylist
                          ? deleteVideoFromPlaylist({
                              videoInPlaylist,
                              playlist,
                            })
                          : addVideoToPlaylist({ video, playlist })
                      }
                    />

                    {playlist.title}
                  </div>
                );
              })}
            </div>
            <form>
              <input
                className="playlist_modal-input"
                placeholder="Enter New Playlist"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              ></input>

              <button
                className="playlist_modal-btn"
                type="submit"
                onClick={(e) => submitNewPlaylistFormHandler(e)}
              >
                Create New Playlist{" "}
                <span class="material-icons modal_icon">add_circle</span>
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};
export { PlaylistModal };
