import { createContext, useContext, useReducer, useEffect } from "react";
import { videolistingReducerFun } from "../reducers";
import { getVideoListingService } from "../services";

const videoLisitng = createContext();
const useVideoListing = () => useContext(videoLisitng);
const VideoListingProvider = ({ children }) => {
  const [videolistingState, videolistingDispatch] = useReducer(
    videolistingReducerFun,
    {
      data: [],
    }
  );
  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await getVideoListingService();
        if (status === 200) {
          videolistingDispatch({
            type: "LOAD_INITIAL_DATA",
            payload: {
              data: data.videos,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <videoLisitng.Provider value={{ videolistingDispatch, videolistingState }}>
      {children}
    </videoLisitng.Provider>
  );
};
export { VideoListingProvider, useVideoListing };
