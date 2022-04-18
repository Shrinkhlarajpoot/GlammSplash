import "./SingleVideo.css";
import {useState} from "react"
import { Navbar, PlaylistModal, Sidebar } from "../../components";
import { NoteCard } from "./components/NoteCard";
import { useParams } from "react-router-dom";
import { useVideoListing } from "../../context";
const SingleVideo = () => {
  const { videoId } = useParams();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const {
    videolistingState: { data },
  } = useVideoListing();
  const selectedSingleVideo = data.find((item) => item.id === videoId);
 
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="explore_main_container">
          <div className="single_video_conatiner">
            <div>
              <iframe
                width="100%"
                src={selectedSingleVideo?.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
                loading="lazy"
                className="video-player"
              ></iframe>
              <h2>{selectedSingleVideo?.title}</h2>
              <h4 className="single_product-owner">
                {selectedSingleVideo?.creator}
                <span class="material-icons check_mark">check_circle</span>
              </h4>
              <div className="single_video-btns">
                <a class="btn btn_icon-primary single_btn">
                  <i class="fa fa-thumbs-up"></i>Like
                </a>
                <span class="btn btn_icon-primary single_btn">
                  <i class="fa fa-clock"></i>WatchLater
                </span>
                <a class="btn btn_icon-primary single_btn" onClick={()=>setShowPlaylistModal(true)}>
                  <i class="fa fa-folder"></i>Add to Playlist
                </a>
              </div>
              <div className="single_video-desp">
                {selectedSingleVideo?.desp}
              </div>
            </div>
            <div className="notes">
              <input
                type="text"
                placeholder="Add Title"
                className="notes_title"
              ></input>
              <textarea placeholder="Desp" className="notes_desp"></textarea>
              <div className="notecard_wrapper">
                <NoteCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPlaylistModal ? (
        
        <PlaylistModal
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
          video={selectedSingleVideo }
        />
      ) : null}
    </div>
  );
};
export { SingleVideo };
