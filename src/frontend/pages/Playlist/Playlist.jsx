import "./Playlist.css";
import { useState } from "react";
import { Navbar, PlaylistModal, Sidebar } from "../../components";
import { PlaylistCard } from "./components/PlaylistCard";
import { usePlaylists } from "../../customHooks/usePlaylist";

const Playlist = () => {
  const [showAddPlaylist, setShowAddPlaylist] = useState(true);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const {
    playlistsState: { playlists },
    createNewPlaylist,
  } = usePlaylists();

  const submitNewPlaylistFormHandler = (e) => {
    e.preventDefault();
    if (newPlaylistName.trim()) {
      createNewPlaylist(newPlaylistName);
      setNewPlaylistName("");
      setShowAddPlaylist(true);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className=" playlist_main_container">
          {showAddPlaylist ? (
          
            <div className="add_newplaylist_btn">
              <span
                class="material-icons-round"
                onClick={() => setShowAddPlaylist(false)}
              >
                add
              </span>
              Add New Playlist
            </div>
          ) : (
            
              <form className="add_newplaylist_btn">
                <span class="material-icons-outlined  addnewplaylist_cancelbtn"  onClick={()=>{
                  setShowAddPlaylist(true)
                  setNewPlaylistName("")
                }
                }>cancel</span>
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
           
          )}
          {playlists?.map((playlist) => (
            <PlaylistCard playlist={playlist} key={playlist._id} />
          ))}
        </div>
      </div>
      {/* {showPlaylistModal ? (
        <PlaylistModal
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      ) : null} */}
    </div>
  );
};
export { Playlist };
