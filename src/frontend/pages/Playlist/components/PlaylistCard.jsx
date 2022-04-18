import { usePlaylists } from "../../../customHooks/usePlaylist"
import "./PlaylistCard.css"
const PlaylistCard = ({playlist}) => {
  const {deletePlaylist}=usePlaylists();
  return (

    <div className="videocard playlistcard">
      <img
        className="videocard_img playlist_img"
        src={playlist?.videos[0]?.thumbnail || "./assests/playlist.jpg" }
      
        
      ></img>
      <div className="playlistcard_desp-desp">
        <h2>{playlist.title}</h2>
        <span class="material-icons" onClick={()=>deletePlaylist(playlist._id)}>delete</span>
       </div>
       <div className="playlistcard_items">{playlist.videos.length}</div>
    </div>
  );
};
export { PlaylistCard };
