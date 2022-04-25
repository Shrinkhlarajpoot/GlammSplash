import "./Explore.css"
import { Loader, Navbar, Sidebar } from "../../components"
import { VideoCard } from "./components/VideoCard"
import { useVideoListing } from "../../context"



const Explore = ()=>{
  const{videolistingState:{data,loading}} = useVideoListing()
    return (
        <div>
            <Navbar/>
            <div className="explore_wrapper">
                <Sidebar/>
            <div className="explore_main_container">
                <div className="category_wrapper">
                    <span>All</span>
                    <span>SkinCare</span>
                    <span>MakeUp</span>
                    <span>Hairstyles</span>
                </div>
                <div className="explore_videos">
                {loading ? <Loader/> : null}
                    {data?.map((video)=>
                        <VideoCard video={video} key={video._id}/>
                    )}
                    
                </div>
            </div>
            </div>

        </div>
    )
}
export {Explore}