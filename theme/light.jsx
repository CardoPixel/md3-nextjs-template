import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { deepOrange } from '@mui/material/colors';

// eslint-disable-next-line new-cap
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: deepOrange[500],
        },
        background: {
            default: "#fffff",
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});