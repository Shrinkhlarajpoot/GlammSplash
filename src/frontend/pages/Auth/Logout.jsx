import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";


const Logout = () => {
  const navigate = useNavigate();

   return (
    <div className="auth__pages auth__form " >
      <div className="auth__box auth__form">
        <i
          className="fa fa-close"
          id="close"
          onClick={() => navigate("/explore")}
        ></i>
       
        <h3>
          Logout Out Sucessfully..
         
        </h3>
        <div className="auth__box-sub">
          <Link to="/explore" className="Link_style">
          <button className="sub__main2">Go Back To Explore Page</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};
export { Logout };