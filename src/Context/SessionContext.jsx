import { createContext, useState } from "react";


export let MyContext = createContext();


export let ContextProvider = ({children}) => {
      const [Toggle, setToggle] = useState(false);
      const [Studydata, setStudydata] = useState([])

  return(
    <MyContext.Provider value={{Toggle, setToggle, Studydata, setStudydata}}>{children}</MyContext.Provider>
  )
}