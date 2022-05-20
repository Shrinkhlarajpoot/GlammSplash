import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Explore,
  LikeVideos,
  Login,
  Logout,
  Playlist,
  Profile,
  Signup,
  SinglePlaylist,
  SingleVideo,
  WatchHistory,
  WatchLater,
  Home,
  NotFound,
} from "../pages";

import { PrivateRoute } from "./Privateroutes";

const Pageroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/singlevideo" element={<SingleVideo />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<PrivateRoute />}>
          <Route path="/playlist" element={<Playlist />} />
          <Route
            path="playlist/playlists/:playlistId"
            element={<SinglePlaylist />}
          />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likevideos" element={<LikeVideos />} />
          <Route path="/watchhistory" element={<WatchHistory />} />
        </Route>
      </Routes>
    </div>
  );
};
export { Pageroutes };
