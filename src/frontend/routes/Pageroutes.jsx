import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Explore,
  LikeVideos,
  Login,
  Logout,
  Playlist,
  Signup,
  SingleVideo,
  WatchLater,
} from "../pages";
// import { PrivateRoute } from "routes/Privateroutes";
import { PrivateRoute } from "./Privateroutes";

const Pageroutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/playlist"
          element={
           <PrivateRoute>
             <Playlist />
             </PrivateRoute>
          }
        />
         <Route
          path="/likevideos"
          element={
            <PrivateRoute>
             <LikeVideos />
             </PrivateRoute>
          }
        />
        <Route
          path="/watchlater"
          element={
            <PrivateRoute>
            <WatchLater />
            </PrivateRoute>
          }
        />
         <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/singlevideo" element={<SingleVideo />} />
        <Route path="explore/:videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
};
export { Pageroutes };
