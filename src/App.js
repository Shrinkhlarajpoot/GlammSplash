import "./App.css";

import { Pageroutes } from "./frontend/routes/Pageroutes";
import { useTheme } from "./frontend/context";
import { ToastWrapper } from "./frontend/components/ToastWrapper/ToastWrapper";

function App() {
const{themetoggle} =useTheme()
  return (
    <div  className={`App ${themetoggle?"lighttheme":""}`}>
    <ToastWrapper/>
      <Pageroutes />
    </div>
  );
}

export default App;
