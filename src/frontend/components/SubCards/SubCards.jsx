import { useNavigate, useParams } from "react-router-dom";
import { usePlaylists } from "../../customHooks/usePlaylist";
// import { useState, useRef, useEffect } from "react";
import "./SubCards.css";

const SubCards = ({video,currentPlaylist}) => {
const navigate = useNavigate();
const {deleteVideoFromPlaylist}= usePlaylists()
          
return (
    <div className="subcard">
      <img
        onClick={() => navigate(`/explore/${video.id}`)}
        className="subcard_img"
        src={video.thumbnail}
      ></img>
      <div className="videocard_desp">
        {/* <img className="avatar-sm" src={video.creatorProfile}></img> */}
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