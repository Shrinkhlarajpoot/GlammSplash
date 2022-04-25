import "./SinglePlaylist.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, PlaylistModal, Sidebar, SubCards } from "../../components";

import { usePlaylists } from "../../customHooks/usePlaylist";


const SinglePlaylist = () => {
    const { playlistId } = useParams();
 
  const {
    playlistsState: { playlists },
    createNewPlaylist,
  } = usePlaylists();

 
  const currentPlaylist = playlists?.find(
    (playlist) => playlist._id === playlistId
  );
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className=" playlist_main_container single_playlist_container">
        <div className="single_playlist_container-headings">
            <div className="heading_for_emptypage">{(currentPlaylist?.title)?.toUpperCase()}</div>
            <div className="heading_for_emptypage">{currentPlaylist?.videos&& `Total Video:${currentPlaylist?.videos?.length}`}</div>
            </div>
            {currentPlaylist?.videos.length===0?<div className="heading_for_emptypage2">No Video Added!!</div>:null}
          
  
    
            {currentPlaylist?.videos?.map((video)=>
             <SubCards video={video} key={video._id} currentPlaylist={currentPlaylist} />
            )}
           
         
        </div>
      </div>
    
    </div>
  );
};
export {SinglePlaylist};