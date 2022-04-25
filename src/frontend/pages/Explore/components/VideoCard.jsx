import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import { PlaylistModal } from "../../../components";
import { useAuth } from "../../../context";
const VideoCard = ({ video }) => {
  const [showPlaylistModal,setShowPlaylistModal] = useState(false);
  const navigate = useNavigate();
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);
  const videoRef = useRef();
  const {auth:{token}}=useAuth()
  useEffect(() => {
    const closeModal = (e) => {
      if (
        showMoreOptionsModal &&
        videoRef.current &&
        !videoRef.current.contains(e.target)
      ) {
        setShowMoreOptionsModal(false);
      }
    };
  document.addEventListener("mousedown", closeModal);

    return () => document.removeEventListener("mousedown", closeModal);
  }, [showMoreOptionsModal]);
  return (
    <div className="videocard" ref={videoRef}>
      <img
        onClick={() => navigate(`/explore/${video.id}`)}
        className="videocard_img"
        src={video.thumbnail}
      ></img>
      <div className="videocard_desp">
        <img className="avatar-sm" src={video.creatorProfile}></img>
        <div className="videocard_desp-main">
          <div className="videocard_desp-desp">
            <div className="videocard_desp-title">{video.title}</div>
            <div className="videocard_subdesp">
              <span>{video.views}</span>
              <span>
                <li>{video.PublishDate}</li>
              </span>
              <span>{video.creator}</span>
            </div>
          </div>
        </div>
        <span
          class="material-icons"
          onClick={() => setShowMoreOptionsModal(!showMoreOptionsModal)}
        >
          more_vert
        </span>
      </div>
      {showMoreOptionsModal ? (
        <div className="show_moreoption_modal">
          <li>
            <span class="material-icons-round">thumb_up</span>Add to Like Videos
          </li>
          <li  onClick={()=>token ?setShowPlaylistModal(true):  navigate("/login")}>
            <span class="material-icons">create_new_folder</span> Add to
            Playlist
          </li>
          <li>
         
            <span class="material-icons"> watch_later </span>Add to Watch Later
          </li>
        </div>
      ) : null}
       {showPlaylistModal?<PlaylistModal showPlaylistModal={showPlaylistModal} setShowPlaylistModal={setShowPlaylistModal} video={video}/>:null}
    </div>
  );
};
export { VideoCard };
