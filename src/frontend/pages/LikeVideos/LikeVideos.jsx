import "./LikeVideos.css";
import { Navbar, Sidebar } from "../../components";

const LikeVideos = () => {
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="explore_main_container">
         Hello from LikeVideos
         
        </div>
      </div>
    </div>
  );
};
export { LikeVideos };