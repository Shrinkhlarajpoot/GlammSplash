import { useNavigate } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import "./Navbar.css";
import { toast } from "react-toastify";
const Navbar = () => {
  const { themetoggle, toggleThemefunction } = useTheme();
  const {
    auth: { token },
    setAuth,
  } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("glamm-splashtoken");
    localStorage.removeItem("glamm-splashuser");
    toast.success("Logged Out sucessfully");
    setAuth({
      token: "",
      user: "",
    });
    navigate("/logout");
  };
  return (
    <div className={`Navbar_wrapper ${themetoggle ? "lighttheme" : ""}`}>
      <div className="main__logo">
        <span class="material-icons">play_circle_outline</span>
        GLAMM-SPLASH
      </div>
      <input
        type="text"
        placeholder="search here..."
        className="Navbar_input"
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
          onClick={() => (token ? logoutHandler() : navigate("/login"))}
        >
          <span class="material-icons">account_circle</span>
          <span>{token ? "Logout" : "Login"}</span>
        </div>
      </div>
    </div>
  );
};
export { Navbar };
