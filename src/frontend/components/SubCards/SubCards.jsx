import { useNavigate, useParams } from "react-router-dom";
import { useWatchlater } from "../../customHooks";
import { usePlaylists } from "../../customHooks/usePlaylist";
import "./SubCards.css";

const SubCards = ({video,currentPlaylist}) => {
const navigate = useNavigate();
const {deleteVideoFromPlaylist}= usePlaylists();
const {watchlaterState:{watchLater}}=useWatchlater();

const videoInWatchLater = watchLater.find((video1)=>video1._id===video._id)
          
return (
    <div className="subcard">
      <img
        onClick={() => navigate(`/explore/${video.id}`)}
        className="subcard_img"
        src={video.thumbnail}
      ></img>
      <div className="videocard_desp">
        <div className="videocard_desp-main">
          <div className="videocard_desp-desp subcard__desp">
            <div className="videocard_desp-title ">{video.title}</div>
            <div className="videocard_subdesp subcard_subdesp">
            <span>{video.views}</span>
              <span>
                <li>{video.PublishDate}</li>
              </span>
              <span>{video.creator}</span>
            </div>
          </div>
        </div>
        <span class="material-icons" onClick={()=>deleteVideoFromPlaylist({videoInPlaylist:video,playlist:currentPlaylist})}>delete</span>
      </div>
   
     
    </div>
  );
};
export { SubCards };