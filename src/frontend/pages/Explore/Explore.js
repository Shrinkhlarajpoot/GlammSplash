import "./Explore.css";
import { Loader, Navbar, Sidebar } from "../../components";
import { VideoCard } from "./components/VideoCard";
import { useVideoListing } from "../../context";
import { FilterByCategory, FilterBySearch, sortByDate } from "../../utils";
import { ToggleLatestPalette } from "./components/toggleLatestPlalette";
import { useState } from "react";

const Explore = () => {
  const [toggleLatestPalette, setTogglelatestpalette] = useState(false);
  const {
    videolistingState: {
      data,
      loading,
      selectedCategory,
      categories,
      searchedText,
      sortBy,
    },
    videolistingDispatch,
  } = useVideoListing();

  const searchedItem = FilterBySearch(data, searchedText);
  const sortedItem = sortByDate(searchedItem, sortBy);
  const selectedVideoList = FilterByCategory(sortedItem, selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="explore_main_container">
          <div className="category_wrapper">
            {categories?.map((category) => (
              <span
                key={category}
                onClick={() =>
                  videolistingDispatch({
                    type: "SET_SELECTED_CATEGORY",
                    payload: { selectedCategory: category },
                  })
                }
                className={
                  selectedCategory.toUpperCase() === category.toUpperCase()
                    ? "active_category"
                    : ""
                }
              >
                {category}
              </span>
            ))}
          </div>

          <div className="explore_videos">
            {loading ? <Loader /> : null}
            {selectedVideoList.length > 0 ? (
              selectedVideoList?.map((video) => (
                <VideoCard video={video} key={video._id} />
              ))
            ) : loading === false ? (
              <div className="empty_container-heading ">
                No Item Exist for this Search <span className="recover_explore" onClick={()=>videolistingDispatch({
                  type:"SET_SEACH_TEXT",
                  payload:{
                    searchedText:""
                  }
                })}>Explore..</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div
        className="sortbydatetoggle"
        onClick={() => setTogglelatestpalette(true)}
      >
        {!toggleLatestPalette && (
          <div>
            <span class="material-icons">sort</span>SORT
          </div>
        )}
      </div>
      {toggleLatestPalette ? (
        <ToggleLatestPalette
          setTogglelatestpalette={setTogglelatestpalette}
          toggleLatestPalette={toggleLatestPalette}
        />
      ) : null}
    </div>
  );
};
export { Explore };
