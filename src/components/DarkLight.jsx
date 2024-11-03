import {Box, Fab, useTheme} from "@mui/material";
import {FaSun} from "react-icons/fa";
import {BsMoonStarsFill} from "react-icons/bs";
import {useContext} from "react";
import {DataContext} from "../context/context.jsx";

const DarkLight = () => {

    const theme = useTheme();
    const value = useContext(DataContext)
    const [darkMode,setDarkMode] = value.darkMode;

    return (
        <Box sx={{mb:2}}>
            <Fab size="small" color="primary"
                 onClick={() => setDarkMode(!darkMode)}>
                {theme.palette.mode === "dark" ? <FaSun size={20}/> : <BsMoonStarsFill size={18}/>}
            </Fab>
        </Box>
    );
};

export default DarkLight;