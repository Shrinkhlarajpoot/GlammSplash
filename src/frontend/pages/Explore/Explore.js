import "./Explore.css"
import { Navbar, Sidebar } from "../../components"
import { VideoCard } from "./components/VideoCard"

const Explore = ()=>{
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
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    
                </div>
            </div>
            </div>

        </div>
    )
}
export {Explore}