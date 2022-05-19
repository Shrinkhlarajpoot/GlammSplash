import { NavLink } from "react-router-dom";
import { useTheme } from "../../context";
import "./Sidebar.css";
const Sidebar = () => {
  const {themetoggle,toggleThemefunction}= useTheme()

  return (
    <>
    <div className={`sidebar_wrapper sidebar1 ${themetoggle?"lighttheme":""}`}>
          <NavLink to="/"  className={({ isActive }) => (isActive ? "links  active homelink" : "links homelink")} ><span class="material-icons">home</span>Home</NavLink>
        <NavLink to="/explore"  className={({ isActive }) => (isActive ? "links  active" : "links")} ><span class="material-icons">explore</span>Explore</NavLink>
        <NavLink to="/playlist"  className={({ isActive }) => (isActive ? "links  active" : "links")} ><span class="material-icons">create_new_folder</span>Playlist</NavLink>
        <NavLink to="/likevideos" className={({ isActive }) => (isActive ? "links  active" : "links")} > <span class="material-icons">thumb_up</span>Liked Videos</NavLink>
        <NavLink to="/watchlater"  className={({ isActive }) => (isActive ? "links  active" : "links")} >  <span class="material-icons">watch_later</span>Watch Later</NavLink>
        <NavLink to="/watchhistory"  className={({ isActive }) => (isActive ? "links  active" : "links")} > <span class="material-icons" >history</span>History</NavLink>
      </div>
     
      </>
  );
};
export { Sidebar };
