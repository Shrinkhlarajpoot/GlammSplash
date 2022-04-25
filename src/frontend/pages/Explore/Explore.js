import "./Explore.css"
import { Loader, Navbar, Sidebar } from "../../components"
import { VideoCard } from "./components/VideoCard"
import { useVideoListing } from "../../context"
import { FilterByCategory } from "../../utils"



const Explore = ()=>{
  const{videolistingState:{data,loading,selectedCategory,categories}, videolistingDispatch} = useVideoListing();
  const selectedVideoList = FilterByCategory(data,selectedCategory);
  return (
        <div>
            <Navbar/>
            <div className="explore_wrapper">
                <Sidebar/>
            <div className="explore_main_container">
                <div className="category_wrapper">
                   {categories?.map((category)=>
                     <span
                     key={category}
                     onClick={() =>
                        videolistingDispatch({
                            type: "SET_SELECTED_CATEGORY",
                            payload: { selectedCategory: category },
                        })
                    }
                     className={selectedCategory.toUpperCase()===category.toUpperCase()?"active_category":""}
                     >{category}</span>
                    )}
                </div>
                <div className="explore_videos">
                {loading ? <Loader/> : null}
                    {selectedVideoList?.map((video)=>
                        <VideoCard video={video} key={video._id}/>
                    )}
                    
                </div>
            </div>
            </div>

        </div>
    )
}
export {Explore}