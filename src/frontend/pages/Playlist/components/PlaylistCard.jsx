import { Link } from "react-router-dom";
import { usePlaylists } from "../../../customHooks/usePlaylist"
import "./PlaylistCard.css"
const PlaylistCard = ({playlist}) => {
  const {deletePlaylist}=usePlaylists();
  return (
   
    <div className=" videocard playlistcard">
       <Link to={`playlists/${playlist._id}`}>
      <img
        className=" playlist_img"
        src={playlist?.videos[0]?.thumbnail || "./assests/playlist.jpg" }
      
        
      ></img>
        </Link>
      <div className="playlistcard_desp-desp">
        <h4>{playlist.title}</h4>
        <span class="material-icons delete_playlist " onClick={(e)=>{
          e.stopPropagation();
          deletePlaylist(playlist._id)
        }}>delete</span>
      
         
       </div>
       <div className="playlistcard_items">{playlist.videos.length}</div>
    </div>
  
  );
};
export { PlaylistCard };
