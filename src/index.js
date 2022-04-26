import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./frontend/context/authContext";
import {
  LikelistProvider,
  PlaylistProvider,
  ThemeProvider,
  VideoListingProvider,
  NotesProvider,
  WatchlaterProvider,
  WatchHistoryProvider

} from "./frontend/context";



makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <VideoListingProvider>
          <AuthProvider>
            <PlaylistProvider>
              <WatchlaterProvider>
                <LikelistProvider>
                  <WatchHistoryProvider>
              <NotesProvider>
              <App />
              </NotesProvider>
              </WatchHistoryProvider>
              </LikelistProvider>
              </WatchlaterProvider>
            </PlaylistProvider>
          </AuthProvider>
        </VideoListingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
