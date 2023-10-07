import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { blue } from '@mui/material/colors';

// Create a Roboto font with specified settings
// eslint-disable-next-line new-cap
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a dark theme with Material-UI
export const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue[600],
        },
        background: {
            default: "#2e303e",
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
