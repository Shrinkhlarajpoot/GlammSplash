import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useTheme, useVideoListing } from "../../context";
import "./Navbar.css";
import { debounce } from "../../utils";
const Navbar = () => {
  const { themetoggle, toggleThemefunction } = useTheme();
  const {videolistingDispatch, videolistingState}=useVideoListing()
  const {
    auth: { token },
    setAuth,
  } = useAuth();
 const navigate = useNavigate();
  const {pathname}=useLocation()
  const changeHandler =(e)=>{
    videolistingDispatch({
      type:"SET_SEACH_TEXT",
      payload:{searchedText:e.target.value}
    })
    if(pathname!=="/explore"){
      navigate("/explore")
    }
}
 return (
    <div className={`Navbar_wrapper ${themetoggle ? "lighttheme" : ""}`}>
      <div className="main__logo" role="button" onClick={()=>navigate("/")}>
        <span class="material-icons">play_circle_outline</span>
        GLAMM-SPLASH
      </div>
    
      <input
        type="text"
        placeholder="search here..."
        className="Navbar_input"
        value={videolistingState.searchedText}
        onChange={(e)=>debounce(changeHandler(e))}
      ></input>
  
      
      <div className="Navbar_lastitems">
        <span
          class="material-icons-outlined light_mode-btn "
          onClick={toggleThemefunction}
        >
          {themetoggle ? "light_mode" : "dark_mode"}
        </span>

        <div
          className="nav-account"
          onClick={() => (token ? navigate("/profile") : navigate("/login"))}
        >
          <span class="material-icons">account_circle</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export { Navbar };
