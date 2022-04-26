import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import { PlaylistModal } from "../../../components";
import { useAuth } from "../../../context";
import { useHistory, useLikes, useWatchlater } from "../../../customHooks";

const VideoCard = ({ video }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);
  const videoRef = useRef();
  const {
    auth: { token },
  } = useAuth();
  const navigate = useNavigate();
  const {
    watchlaterState: { watchLater },
    deleteWatchlater,
    addWatchlater,
  } = useWatchlater();
  const {
    likesState: { Likeslist },
    addLikeVideo,
    deleteLikeVideo,
  } = useLikes();
  const { deleteFromWatchHistory } = useHistory();
  const currentroutePath = useLocation().pathname;

  const videoInWatchLater = watchLater.find(
    (video1) => video1._id === video._id
  );
  const videoInLikes = Likeslist.find((video1) => video1._id === video._id);
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
          {currentroutePath === "/explore" ||
          currentroutePath === "/likevideos" ||
          currentroutePath === "/" ? (
            <li
              onClick={() =>
                token
                  ? videoInLikes
                    ? deleteLikeVideo({ token, video })
                    : addLikeVideo({ token, video })
                  : navigate("/login")
              }
            >
              <span class="material-icons-round">
                {videoInLikes ? "thumb_down" : "thumb_up"}
              </span>
              {videoInLikes ? "Remove from LikeVideo" : "Add to LikeVideo"}
            </li>
          ) : null}
          <li
            onClick={() =>
              token ? setShowPlaylistModal(true) : navigate("/login")
            }
          >
            <span class="material-icons">create_new_folder</span> Add to
            Playlist
          </li>

          {currentroutePath === "/explore" ||
          currentroutePath === "/watchlater" ||
          currentroutePath === "/" ? (
            <li
              onClick={() =>
                token
                  ? videoInWatchLater
                    ? deleteWatchlater({ token, video })
                    : addWatchlater({ token, video })
                  : navigate("/login")
              }
            >
              <span class="material-icons"> watch_later </span>
              {videoInWatchLater
                ? "Remove from WatchLater"
                : "Add to WatchLater"}
            </li>
          ) : null}
          {currentroutePath === "/watchhistory" ? (
            <li
              onClick={() =>
                token
                  ? deleteFromWatchHistory({ token, video })
                  : navigate("/login")
              }
            >
              <span class="material-icons"> watch_later </span>Remove from
              History
            </li>
          ) : null}
        </div>
      ) : null}
      {showPlaylistModal ? (
        <PlaylistModal
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
          video={video}
        />
      ) : null}
    </div>
  );
};
export { VideoCard };
