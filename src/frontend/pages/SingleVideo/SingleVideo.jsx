import "./SingleVideo.css";
import { useState } from "react";
import { Loader, Navbar, PlaylistModal, Sidebar } from "../../components";
import { NoteCard } from "./components/NoteCard";
import { useParams } from "react-router-dom";
import { useAuth, useVideoListing } from "../../context";
import { useNotes } from "../../customHooks";
import { useEffect } from "react";
import { NoteInput } from "./components/NoteInput";
const SingleVideo = () => {
  const { videoId } = useParams();
  const {
    auth: { token },
  } = useAuth();
  const {
    addNewNotes,
    dispatchNotes,
    notesState: { notes,loading },
  } = useNotes();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [formInput, setFormInput] = useState({ title: "", description: "" });
  const {
    videolistingState: { data },
  } = useVideoListing();
  const selectedSingleVideo = data.find((item) => item.id === videoId);
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (formInput.title.trim() || formInput.description.trim()) {
      addNewNotes({ token, note: { ...formInput, videoId} });
    }
    setFormInput({ title: "", description: "" });
  };
  useEffect(() => {
    dispatchNotes({
      type: "SET_VIDEO_ID",
      payload: { videoId: videoId },
    });
  }, [videoId]);

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
              <h3>{selectedSingleVideo?.title}</h3>
              <h5 className="single_product-owner">
                <img
                  className="avatar-sm"
                  src={selectedSingleVideo?.creatorProfile}
                ></img>
                {selectedSingleVideo?.creator}
                <span class="material-icons check_mark">check_circle</span>
                <span>Views:{selectedSingleVideo?.views}</span>
              </h5>
              <div className="single_video-btns">
                <a class="btn btn_icon-primary single_btn">
                  <i class="fa fa-thumbs-up"></i>Like
                </a>
                <span class="btn btn_icon-primary single_btn">
                  <i class="fa fa-clock"></i>WatchLater
                </span>
                <a
                  class="btn btn_icon-primary single_btn"
                  onClick={() => setShowPlaylistModal(true)}
                >
                  <i class="fa fa-folder"></i>Add to Playlist
                </a>
              </div>
              <div className="single_video-desp">
                {selectedSingleVideo?.desp}
              </div>
            </div>
            <div className="notes">
              <div  className="notes_heading">Add Note</div>
              <NoteInput
                formInput={formInput}
                setFormInput={setFormInput}
                selectedSingleVideo={selectedSingleVideo}
                submitFormHandler={submitFormHandler}
              ></NoteInput>
              <div className="notecard_wrapper">
              {token && loading?<Loader/>:
              notes?.map((note)=>
              <NoteCard note={note} key={note._id}/>)}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {showPlaylistModal ? (
        <PlaylistModal
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
          video={selectedSingleVideo}
        />
      ) : null}
    </div>
  );
};
export { SingleVideo };
