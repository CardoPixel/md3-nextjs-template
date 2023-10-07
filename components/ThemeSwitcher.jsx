"use client";
import React from "react";
import { IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import useAppStore from "../store/useAppStore";

const ThemeSwitcher = () => {
    const themePreference = useAppStore((state) => state.themePreference);
    const setThemePreference = useAppStore((state) => state.setThemePreference);

    const handleThemeChange = () => {
        let newTheme = "";

        if (themePreference === "system") {
            newTheme = "light";
        } else if (themePreference === "light") {
            newTheme = "dark";
        } else if (themePreference === "dark") {
            newTheme = "system";
        }

        setThemePreference(newTheme);
    };

    return (
        <IconButton
            aria-label="Toggle Theme"
            onClick={handleThemeChange}
            sx={{ color: "primary.contrastText" }}
        >
            {themePreference === "system" && <BrightnessAutoIcon />}
            {themePreference === "light" && <Brightness7Icon />}
            {themePreference === "dark" && <Brightness4Icon />}
        </IconButton>
    );
};

export default ThemeSwitcher;
