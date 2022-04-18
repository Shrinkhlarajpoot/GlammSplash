import "./Playlist.css";
import { Navbar, Sidebar } from "../../components";
import { PlaylistCard } from "./components/PlaylistCard";

const Playlist = () => {
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="explore_main_container">
        <PlaylistCard/>
         
        </div>
      </div>
    </div>
  );
};
export { Playlist };
