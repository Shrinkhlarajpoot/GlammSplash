import "./PlaylistCard.css"
const PlaylistCard = () => {
  return (
    <div className="videocard playlistcard">
      <img
        className="videocard_img playlist_img"
        src="https://i.ytimg.com/vi/EkGOC5gs1ao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUlYEqcu-x-i5F9KBfQPh7L_S2NQ"
      ></img>
      <div className="playlistcard_desp-desp">
        <h2>Playlist1</h2>
        <span class="material-icons">delete</span>
       </div>
       <div className="playlistcard_items">5</div>
    </div>
  );
};
export { PlaylistCard };
