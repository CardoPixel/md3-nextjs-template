"use client";
import React, { useEffect } from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import { themeDark } from "@theme/dark";
import { themeLight } from "@theme/light";

import { useAppStore } from "@store/useAppStore";

/**
 *
 *
 * @export
 * @param {*} props
 * @return {*} 
 */
export default function ThemeRegistry(props) {
    const { options, children } = props;

    const themePreference = useAppStore((state) => state.themePreference);

    const [{ cache, flush }] = React.useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });

    // Determine the theme based on themePreference
    const determineTheme = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
        if (themePreference === "dark") {
            return responsiveFontSizes(themeDark);
        } else if (themePreference === "light") {
            return responsiveFontSizes(themeLight);
        } else {
            return responsiveFontSizes(prefersDarkMode ? themeDark : themeLight);
        }
    };

    const theme = determineTheme();

    // Set up the theme based on the Zustand store
    useEffect(() => {
        const names = flush();
        if (names.length > 0) {
            let styles = "";
            for (const name of names) {
                styles += cache.inserted[name];
            }
            const styleElement = document.createElement("style");
            styleElement.innerHTML = options.prepend
                ? `@layer emotion {${styles}}`
                : styles;
            document.head.appendChild(styleElement);
        }
    }, [cache, flush, options, themePreference]);

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
