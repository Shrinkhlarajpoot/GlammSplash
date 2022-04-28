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
      loading: false,
      categories: ["ALL", "Skincare", "Makeup", "Hairstyle"],
      selectedCategory: "ALL",
      searchedText: "",
      sortBy: "",
    }
  );
  useEffect(() => {
    (async () => {
      videolistingDispatch({ type: "SET_LOADING", payload: { loading: true } });
      try {
        const { status, data } = await getVideoListingService();
        if (status === 200) {
          videolistingDispatch({
            type: "LOAD_INITIAL_DATA",
            payload: {
              data: data.videos,
              loading: false,
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
