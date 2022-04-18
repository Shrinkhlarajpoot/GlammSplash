import { NavLink } from "react-router-dom";
import { useTheme } from "../../context";
import "./Sidebar.css";
const Sidebar = () => {
  const {themetoggle,toggleThemefunction}= useTheme()

  return (
    <div className={`sidebar_wrapper ${themetoggle?"lighttheme":""}`}>
        <NavLink to="/" className="links"><span class="material-icons">explore</span>Explore</NavLink>
        <NavLink to="/playlist" className="links"><span class="material-icons">create_new_folder</span>Playlist</NavLink>
        <NavLink to="/likevideos" className="links"> <span class="material-icons">thumb_up</span>Liked Videos</NavLink>
        <NavLink to="/watchlater" className="links">  <span class="material-icons">watch_later</span>Watch Later</NavLink>
        <NavLink to="/" className="links"> <span class="material-icons" >history</span>History</NavLink>
      </div>
  );
};
export { Sidebar };
