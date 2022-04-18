import { Route, Routes } from "react-router-dom"
import Mockman from "mockman-js";
import { Explore, LikeVideos, Login, Logout, Playlist, Signup, WatchLater } from "../pages";
const Pageroutes = () =>{
return (
    <div>
        <Routes>
           <Route path="/" element={<Explore/>}/>
           <Route path="/playlist" element={<Playlist/>}/>
           <Route path="/likevideos" element={<LikeVideos/>}/>
           <Route path="/watchlater" element={<WatchLater/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="signup" element={<Signup/>}/>
           <Route path="/logout" element={<Logout/>}/>
               
           
           
       </Routes>
   
   
    </div>
)
}
export {Pageroutes}