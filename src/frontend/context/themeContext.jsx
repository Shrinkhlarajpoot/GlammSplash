import { createContext, useContext, useState } from "react"
 const themeContext = createContext();
const useTheme=()=>useContext(themeContext)
const ThemeProvider=({children})=>{
     const[themetoggle,setThemeToggle] = useState (JSON.parse(localStorage.getItem("glammsplash_theme")||false))
     const toggleThemefunction = ()=> {
        setThemeToggle((themetoggle)=>!themetoggle);
        localStorage.setItem("glammsplash_theme",JSON.stringify(themetoggle?false:true))
}
 return (
    <themeContext.Provider value={{themetoggle,setThemeToggle,toggleThemefunction}}>
             {children}
         </themeContext.Provider>
     )
 }
export {ThemeProvider,useTheme}