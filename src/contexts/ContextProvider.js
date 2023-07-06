import React , {createContext , useContext , useState} from "react";

const StateContext = createContext();

const initialState = {
    chat : false ,
    cart : false , 
    userProfile : false ,
    notification : false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu , setActiveMenu ] = useState(true);
    const [isClicked , setIsClicked] = useState(initialState);
    const handleClicked = (clicked) => {
        setIsClicked({...initialState , [clicked] : true})
    }

    const [screenSize , setScreenSize ] = useState(undefined);
    
    const [themeSettings , setThemeSettings ] = useState(false)
    const [currentColor , setCurrentColor] = useState("#03C9D7");
    const [currentMode , setCurrentMode ] = useState("Light");

    const setMode = (e) => {
       // console.log(e.target.value)
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode" , e.target.value);
        setThemeSettings(false);
    }
    const setColor = (color) => {
      //  console.log(e)
        setCurrentColor(color);
        localStorage.setItem("themeColor" , color);
        setThemeSettings(false);
    }
    return (
        <StateContext.Provider 
         value={{
          //  activeMenu : activeMenu ,
          activeMenu , setActiveMenu ,
          isClicked , setIsClicked ,
          handleClicked , screenSize , setScreenSize ,
          currentColor , currentMode ,
          setCurrentColor , setCurrentMode , 
          themeSettings , setThemeSettings ,
          setColor , setMode
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); 