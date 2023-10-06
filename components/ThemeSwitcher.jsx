"use client";
import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import useAppStore from "../store/useAppStore";

const ThemeSwitcher = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const themePreference = useAppStore((state) => state.themePreference);
    const setThemePreference = useAppStore((state) => state.setThemePreference);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (theme) => {
        setThemePreference(theme);
        handleClose();
    };

    return (
        <>
            <IconButton
                aria-controls="theme-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {themePreference === "system" && <BrightnessAutoIcon />}
                {themePreference === "light" && <Brightness7Icon />}
                {themePreference === "dark" && <Brightness4Icon />}
            </IconButton>
            <Menu
                id="theme-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ color: "background.default", borderRadius: 8, border: "2px solid primary.light" }}
            >
                <MenuItem onClick={() => handleThemeChange("system")}>
                    System Default
                </MenuItem>
                <MenuItem onClick={() => handleThemeChange("light")}>
                    Light Theme
                </MenuItem>
                <MenuItem onClick={() => handleThemeChange("dark")}>
                    Dark Theme
                </MenuItem>
            </Menu>
        </>
    );
};

export default ThemeSwitcher;