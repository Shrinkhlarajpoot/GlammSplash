import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-container flex-total-center flex-column">
      <>
        <h1>404 page not found</h1>
        <Link className="not-found_btn links" to="/explore">
          Go back home
        </Link>
      </>
    </div>
  );
};

