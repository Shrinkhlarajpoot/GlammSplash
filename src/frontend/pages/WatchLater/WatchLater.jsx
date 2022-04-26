import "./WatchLater.css";
import { Navbar, Sidebar, SubCards } from "../../components";
import { useWatchlater } from "../../customHooks";
import { VideoCard } from "../Explore/components/VideoCard";

const WatchLater = () => {
 const {watchlaterState:{watchLater}}=useWatchlater();

  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className=" watch_later_container">
        {watchLater.length===0?<div className="empty_container-heading">No  WatchLater Video  Added!!</div>:null}
        {watchLater?.map((video)=>
        <VideoCard video={video} key={video._id}/>
        )}
         
        </div>
      </div>
    </div>
  );
};
export { WatchLater };