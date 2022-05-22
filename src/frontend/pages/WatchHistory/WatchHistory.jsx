import { Navbar, Sidebar, SubCards } from "../../components";
import { useAuth } from "../../context";
import { useHistory } from "../../customHooks";
import { VideoCard } from "../Explore/components/VideoCard";
const WatchHistory = () => {
  const {
    watchHistoryState: { watchHistory },clearWatchHistory
  } = useHistory();
const {auth:{token}}=useAuth()

  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className=" watch_later_container">
          {watchHistory.length === 0 ? (
           
            <div className="empty_container-heading">No WatchHistory!!</div>
            
          ) : <div className="clear_watchhistory" onClick={()=>clearWatchHistory({token})}>Clear History</div>}

          {watchHistory?.map((video) => (
            <VideoCard video={video} key={video?._id} />
          ))}
        </div>
      </div>
     
    </div>
  );
};
export { WatchHistory };
