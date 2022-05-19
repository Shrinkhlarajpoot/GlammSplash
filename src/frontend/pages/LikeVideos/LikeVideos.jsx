import "./LikeVideos.css";
import { Navbar, Sidebar } from "../../components";
import { useLikes } from "../../customHooks";
import { useAuth } from "../../context";
import { VideoCard } from "../Explore/components/VideoCard";

const LikeVideos = () => {
 const {auth:{token}}=useAuth()
 const {likesState:{ Likeslist}}=useLikes()
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="likes_main_container">
        {Likeslist.length===0?<div className="empty_container-heading ">No Like Video Added!!</div>:null}
         {Likeslist?.map((video)=>
         <VideoCard video={video} key={video._id}/>
         )}
         
        </div>
      </div>
    </div>
  );
};
export { LikeVideos };