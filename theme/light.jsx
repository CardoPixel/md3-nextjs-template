import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

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
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});