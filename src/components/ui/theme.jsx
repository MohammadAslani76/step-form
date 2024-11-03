import { createTheme} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';

export const lightTheme = createTheme({
    direction : "rtl" ,
    typography: {
        fontFamily: "vazir"
    },
    palette: {
        mode: 'light',
    }
})

export const darkTheme = createTheme({
    direction : "rtl",
    typography: {
        fontFamily: "vazir"
    },
    palette: {
        mode: 'dark',
    }
})

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})