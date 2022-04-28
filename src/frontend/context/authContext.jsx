import { createContext, useContext, useEffect, useState } from "react";
const Authcontext = createContext();
const useAuth = () => useContext(Authcontext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token:localStorage.getItem("glamm-splashtoken"||""),
    user:JSON.parse(localStorage.getItem("glamm-splashuser" ||""))
  });
  useEffect(()=>{
    setAuth({...auth,
      token:localStorage.getItem("glamm-splashtoken"||""),
      user:JSON.parse(localStorage.getItem("glamm-splashuser" ||""))
    })

  },[auth.token])
 const [showpassword, setShowPassword] = useState(false);

  return (
    <Authcontext.Provider
      value={{ auth, setAuth, showpassword, setShowPassword }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export { useAuth, AuthProvider };
