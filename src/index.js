import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./frontend/context/authContext";
import {
  PlaylistProvider,
  ThemeProvider,
  VideoListingProvider,
} from "./frontend/context";
import { NotesProvider } from "./frontend/context/notesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <VideoListingProvider>
          <AuthProvider>
            <PlaylistProvider>
              <NotesProvider>
              <App />
              </NotesProvider>
            </PlaylistProvider>
          </AuthProvider>
        </VideoListingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
