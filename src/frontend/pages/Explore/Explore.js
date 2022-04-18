import "./Explore.css"
import { Navbar, Sidebar } from "../../components"
import { VideoCard } from "./components/VideoCard"
import { useVideoListing } from "../../context"



const Explore = ()=>{
  const{videolistingState:{data}} = useVideoListing()
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