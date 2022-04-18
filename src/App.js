import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pageroutes } from "./frontend/routes/Pageroutes";
import { useTheme } from "./frontend/context";

function App() {
const{themetoggle} =useTheme()
  return (
    <div  className={`App ${themetoggle?"lighttheme":""}`}>
      <ToastContainer autoClose={1500} position="bottom-right" />
      <Pageroutes />
    </div>
  );
}

export default App;
