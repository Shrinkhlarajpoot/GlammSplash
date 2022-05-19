import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context";
import "./Profile.css";

const Profile = () => {
  const { auth, setAuth } = useAuth();
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
    <div className="explore_wrapper">
      <div className="profile_page ">
        <i
          className="fa fa-close close "
          id="close"
          onClick={() => navigate("/explore")}
        ></i>

        <h3 className="myprofile">My Profile</h3>

        <div className="profile_page-desp profile_page-profile avatar-xl ">
          <h4> {auth?.user?.firstName[0] + auth?.user?.lastName[0]}</h4>
        </div>
        <div className="profile_page-desp">
          <div>First Name - </div>
          <span> {auth?.user?.firstName} </span>
        </div>
        <div className="profile_page-desp">
          <div>Last Name - </div>
          <span> {auth?.user?.lastName} </span>
        </div>
        <div className="profile_page-desp">
          <div>Email -Id - </div>
          <span> {auth?.user?.email} </span>
        </div>
        <button className="sub__main2" onClick={() => logoutHandler()}>
          Logout
        </button>
      </div>
   </div>
  );
};
export { Profile };
