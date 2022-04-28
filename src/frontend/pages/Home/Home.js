import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useTheme } from "../../context";
import "./Home.css";
const Home = () => {
   const navigate=useNavigate()
    const { themetoggle, toggleThemefunction } = useTheme();
   return (
     
    <div className="homepage">
     <img src="./assests/glamhome3.jpg" className="homepage_img"></img>
      <div className="home_content">
        <div className="heading-home">WELCOME TO GLAMM-SPLASH <span  class="material-icons-outlined">play_circle</span></div>
        <div className="desp-home">Explore Different Videos for Makeup,SkinCare,Hairstyle At One Place..</div>
        <div className="home-btn" onClick={()=>navigate("/explore")}>EXPLORE</div>
        <span
          class="material-icons-outlined light_mode-btn homepgae-toggle "
          onClick={toggleThemefunction}
        >
          {themetoggle ? "light_mode" : "dark_mode"}
        </span>
      </div>
    </div>
  
  );
};
export { Home };
