import "./WatchLater.css";
import { Navbar, Sidebar } from "../../components";

const WatchLater = () => {
  return (
    <div>
      <Navbar />
      <div className="explore_wrapper">
        <Sidebar />
        <div className="explore_main_container">
         Hello from WatchLater
         
        </div>
      </div>
    </div>
  );
};
export { WatchLater };