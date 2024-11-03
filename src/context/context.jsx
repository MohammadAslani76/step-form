import {createContext, useState,useEffect} from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
    const getMode = () => {
        const initialMode = localStorage.getItem("darkMode");
        if (initialMode === null) {
            if (window.matchMedia("(prefers-color-scheme :dark)").matches) {
                return true
            } else {
                return false
            }
        } else {
            return JSON.parse(localStorage.getItem("darkMode"))
        }
    }

    const [darkMode,setDarkMode] = useState(getMode())

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
    }, [darkMode])

    const value = {
        darkMode : [darkMode,setDarkMode]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}