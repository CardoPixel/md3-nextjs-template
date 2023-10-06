/* eslint-disable new-cap */
import { createTheme } from "@mui/material/styles";
import { Electrolize } from "next/font/google";

export const electrolize = Electrolize({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-electrolize",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const themeDark = createTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl",
            5: "uw",
        },
        values: {
            xs: 0,
            sm: 320,
            md: 768,
            lg: 1024,
            xl: 1200,
            uw: 2560,
        },
    },
    direction: "ltr",
    components: {
        MuiCssBaseline: {
            defaultProps: {
                enableColorScheme: true,
            },
            styleOverrides: {
                "*::-webkit-scrollbar": {
                    display: "none",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                rroot: {
                    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
                    border: '0px solid #49454e',
                    color: '#e6e1e6',
                    backgroundColor: '#3a383c',
                    '&:before': {
                        backgroundColor: '#3a383c',
                        display: 'none',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#313033',
                        color: '#e6e1e6',
                        border: '0px solid #49454e',
                    },
                    '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper': {
                        color: '#e6e1e6',
                    },
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                variant: "standard",
            },
            styleOverrides: {
                root: {
                    borderRadius: "20px",
                },
                standardError: {
                    background: "#93000a",
                    color: "#ffdad6",
                },
                standardInfo: {
                    background: "#00468c",
                    color: "#d6e3ff",
                },
                standardWarning: {
                    background: "#703800",
                    color: "#ffdcc5",
                },
                standardSuccess: {
                    background: "#005231",
                    color: "#92f7bc",
                },
                filledError: {
                    background: "#ffb4ab",
                    color: "#690005",
                },
                filledInfo: {
                    background: "#a9c7ff",
                    color: "#003063",
                },
                filledWarning: {
                    background: "#ffb782",
                    color: "#4f2500",
                },
                filledSuccess: {
                    background: "#76daa1",
                    color: "#003920",
                },
                outlinedError: {
                    color: "#ffb4ab",
                },
                outlinedInfo: {
                    color: "#a9c7ff",
                },
                outlinedWarning: {
                    color: "#ffb782",
                },
                outlinedSuccess: {
                    color: "#76daa1",
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                color: "default",
            },
            styleOverrides: {
                colorDefault: {
                    background: "#201f22",
                    color: "#e6e1e6",
                },
                colorPrimary: {
                    background: "#141316",
                    color: "#e6e1e6",
                },
            },
        },
        MuiBadge: {
            defaultProps: {
                color: "default",
            },
            variants: [
                {
                    props: {
                        color: "default",
                    },
                    style: {
                        ".MuiBadge-badge": {
                            backgroundColor: "#ffb4ab",
                            color: "#690005",
                        },
                    },
                },
            ],
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:has(>svg)": {
                        padding: "8px",
                        borderRadius: "50%",
                        minWidth: "1em",
                        minHeight: "1em",
                    },
                },
            },
            variants: [
                {
                    props: {
                        variant: "elevated",
                    },
                    style: {
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                        backgroundColor: "#1c1b1e",
                        color: "#cfbcff",
                        "&:hover": {
                            background: "#29282d",
                            boxShadow:
                                "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                        },
                        "&:focus": {
                            background: "#302e35",
                        },
                        "&:active": {
                            background: "#302e35",
                        },
                        "&.Mui-disabled": {
                            backgroundColor: "rgba(28, 27, 30, 0.12)",
                            color: "rgba(28, 27, 30, 0.38)",
                            boxShadow: "none",
                        },
                    },
                },
                {
                    props: {
                        variant: "filled",
                    },
                    style: {
                        backgroundColor: "#cfbcff",
                        color: "#381e72",
                        boxShadow: "none",
                        "&.Mui-disabled": {
                            backgroundColor: "rgba(28, 27, 30, 0.12)",
                            color: "rgba(28, 27, 30, 0.38)",
                            boxShadow: "none",
                        },
                        "&:hover": {
                            backgroundColor: "#c1aef2",
                            boxShadow:
                                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                        },
                        "&:focus": {
                            backgroundColor: "#baa7eb",
                            boxShadow: "none",
                        },
                        "&:active": {
                            backgroundColor: "#baa7eb",
                            boxShadow: "none",
                        },
                    },
                },
                {
                    props: {
                        variant: "tonal",
                    },
                    style: {
                        backgroundColor: "#4a4458",
                        color: "#e8def8",
                        boxShadow: "none",
                        "&.Mui-disabled": {
                            backgroundColor: "rgba(28, 27, 30, 0.12)",
                            color: "rgba(28, 27, 30, 0.38)",
                            boxShadow: "none",
                        },
                        "&:hover": {
                            backgroundColor: "#554f63",
                            boxShadow:
                                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                        },
                        "&:focus": {
                            backgroundColor: "#5b5469",
                            boxShadow: "none",
                        },
                        "&:active": {
                            backgroundColor: "#5b5469",
                            boxShadow: "none",
                        },
                    },
                },
                {
                    props: {
                        variant: "outlined"
                    },
                    style: {
                        color: "#cfbcff",
                        borderColor: "#948f99",
                        borderWidth: "1px",
                        boxShadow: "none",
                        "&.Mui-disabled": {
                            borderColor: "rgba(230, 225, 230, 0.12)",
                            color: "rgba(230, 225, 230, 0.38)"
                        },
                        "&:hover": {
                            backgroundColor: "#222126",
                            borderColor: "#9893a0"
                        },
                        "&:focus": {
                            backgroundColor: "#29272e",
                            borderColor: "#cfbcff"
                        },
                        "&:active": {
                            backgroundColor: "#29272e",
                            borderColor: "#9b94a3"
                        }
                    }
                },
                {
                    props: {
                        variant: "text"
                    },
                    style: {
                        backgroundColor: "transparent",
                        color: "#cfbcff",
                        boxShadow: "none",
                        padding: "5px 15px",
                        "&.Mui-disabled": {
                            color: "rgba(230, 225, 230, 0.38)"
                        },
                        "&:hover": {
                            backgroundColor: "#222126"
                        },
                        "&:focus": {
                            backgroundColor: "#29272e"
                        },
                        "&:active": {
                            backgroundColor: "#29272e"
                        }
                    }
                }
            ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "20px",
                    padding: "10px 6px"
                }
            },
            variants: [
                {
                    props: {
                        variant: "elevation"
                    },
                    style: {
                        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                        backgroundColor: "#1c1b1e",
                        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        "&:hover": {
                            background: "#29282d",
                            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
                        },
                        "&:focus": {
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                            "background": "#302e35"
                        },
                        "&:active": {
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                            "background": "#302e35"
                        },
                        "&.Mui-disabled": {
                            "backgroundColor": "rgba(28, 27, 30, 0.38)",
                            "color": "#49454e",
                            "boxShadow": "none"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "filled"
                    },
                    "style": {
                        "boxShadow": "none",
                        "backgroundColor": "#363438",
                        "transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        "&:hover": {
                            "background": "#413e45",
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
                        },
                        "&:focus": {
                            "boxShadow": "none",
                            "background": "#46434b"
                        },
                        "&:active": {
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                            "background": "#46434b"
                        },
                        "&.Mui-disabled": {
                            "backgroundColor": "rgba(54, 52, 56, 0.38)",
                            "color": "#49454e",
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "outlined"
                    },
                    "style": {
                        "boxShadow": "none",
                        "backgroundColor": "#141316",
                        "borderColor": "#948f99",
                        "transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        "&:hover": {
                            "background": "#222126",
                            "boxShadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
                        },
                        "&:focus": {
                            "boxShadow": "none",
                            "background": "#29272e"
                        },
                        "&:active": {
                            "boxShadow": "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                            "background": "#46434b"
                        },
                        "&.Mui-disabled": {
                            "borderColor": "rgba(54, 52, 56, 0.12)",
                            "boxShadow": "none"
                        }
                    }
                }
            ]
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    borderRadius: "50px",
                    borderColor: "#7a757f",
                    "&:not(:first-of-type)": {
                        marginLeft: 0,
                        borderLeft: 0
                    },
                    "&:hover": {
                        background: "#eee9f2"
                    },
                    "&.Mui-selected:hover": {
                        background: "#d4cbe4"
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: "#313033",
                    color: "#f4eff4"
                }
            }
        }
    },
    palette: {
        mode: "light",
        primary: {
            main: "#6750A4",
            contrastText: "#FFFFFF",
            light: "rgb(133, 115, 182)",
            dark: "rgb(72, 56, 114)",
        },
        onPrimary: {
            main: "#FFFFFF",
            contrastText: "#6750A4",
        },
        primaryContainer: {
            main: "#E9DDFF",
            contrastText: "#22005D",
        },
        onPrimaryContainer: {
            main: "#22005D",
            contrastText: "#E9DDFF",
        },
        secondary: {
            main: "#625B71",
            contrastText: "#FFFFFF",
            light: "rgb(129, 123, 141)",
            dark: "rgb(68, 63, 79)",
        },
        onSecondary: {
            main: "#FFFFFF",
            contrastText: "#625B71",
        },
        secondaryContainer: {
            main: "#E8DEF8",
            contrastText: "#1E192B",
        },
        onSecondaryContainer: {
            main: "#1E192B",
            contrastText: "#E8DEF8",
        },
        tertiary: {
            main: "#7E5260",
            contrastText: "#FFFFFF",
        },
        onTertiary: {
            main: "#FFFFFF",
            contrastText: "#7E5260",
        },
        tertiaryContainer: {
            main: "#FFD9E3",
            contrastText: "#31101D",
        },
        onTertiaryContainer: {
            main: "#31101D",
            contrastText: "#FFD9E3",
        },
        error: {
            main: "#BA1A1A",
            contrastText: "#FFFFFF",
            light: "rgb(199, 71, 71)",
            dark: "rgb(130, 18, 18)",
        },
        onError: {
            main: "#FFFFFF",
            contrastText: "#BA1A1A",
        },
        errorContainer: {
            main: "#FFDAD6",
            contrastText: "#410002",
        },
        onErrorContainer: {
            main: "#410002",
            contrastText: "#FFDAD6",
        },
        primaryFixed: {
            main: "#E9DDFF",
        },
        primaryFixedDim: {
            main: "#CFBCFF",
        },
        onPrimaryFixed: {
            main: "#22005D",
        },
        onPrimaryFixedVariant: {
            main: "#4F378A",
        },
        secondaryFixed: {
            main: "#E8DEF8",
        },
        secondaryFixedDim: {
            main: "#CBC2DB",
        },
        onSecondaryFixed: {
            main: "#1E192B",
        },
        onSecondaryFixedVariant: {
            main: "#4A4458",
        },
        tertiaryFixed: {
            main: "#FFD9E3",
        },
        tertiaryFixedDim: {
            main: "#efb8c8",
        },
        onTertiaryFixed: {
            main: "#31101d",
        },
        onTertiaryFixedVariant: {
            main: "#633b48",
        },
        surface: {
            main: "#fdf8fd",
            contrastText: "#1c1b1e",
        },
        onSurface: {
            main: "#1c1b1e",
            contrastText: "#fdf8fd",
        },
        surfaceDim: {
            main: "#ddd8dd",
        },
        surfaceBright: {
            main: "#fdf8fd",
        },
        surfaceContainerLowest: {
            main: "#ffffff",
        },
        surfaceContainerLow: {
            main: "#f7f2f7",
        },
        surfaceContainer: {
            main: "#f2ecf1",
        },
        surfaceContainerHigh: {
            main: "#ece7eb",
        },
        surfaceContainerHighest: {
            main: "#e6e1e6",
        },
        surfaceVariant: {
            main: "#e7e0eb",
            contrastText: "#49454e",
        },
        onSurfaceVariant: {
            main: "#49454e",
            contranstText: "#e7e0eb",
        },
        outline: {
            main: "#7a757f",
        },
        outlineVariant: {
            main: "#cac4cf",
        },
        inversePrimary: {
            main: "#cfbcff",
            contrastText: "",
        },
        inverseOnPrimary: {
            main: "",
            contrastText: "#cfbcff",
        },
        inverseSurface: {
            main: "#313033",
            contrastText: "#313033",
        },
        inverseOnSurface: {
            main: "#f4eff4",
            contrastText: "#313033",
        },
        shadow: {
            main: "#000000",
        },
        scrim: {
            main: "#000000",
        },
        surfaceTintColor: {
            main: "#6750a4",
        },
        background: {
            default: "#f2ecf1",
            paper: "#fdf8fd",
        },
        onBackground: {
            main: "#1c1b1e",
        },
        common: {
            white: "#fdf8fd",
            black: "#1c1b1e",
        },
        text: {
            primary: "#1c1b1e",
            secondary: "#1e192b",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        info: {
            main: "#125db2",
            contrastText: "#ffffff",
            light: "rgb(65, 125, 193)",
            dark: "rgb(12, 65, 129)",
        },
        success: {
            main: "#2d854e",
            contrastText: "#ffffff",
            light: "rgb(57, 148, 89)",
            dark: "rgb(18, 95, 54)",
        },
        warning: {
            main: "#c6990e",
            contrastText: "#ffffff",
            light: "rgb(224, 184, 23)",
            dark: "rgb(147, 115, 0)",
        },
    },
    shape: {
        borderRadius: 4
    },
    tones: {
        primary: {
            0: "#000000",
            4: "#13003a",
            6: "#190048",
            10: "#22005d",
            12: "#260561",
            17: "#31166c",
            20: "#381e72",
            22: "#3c2377",
            24: "#41287c",
            30: "#4f378a",
            40: "#6750a4",
            50: "#8069bf",
            60: "#9a83db",
            70: "#b69df8",
            80: "#cfbcff",
            87: "#e1d3ff",
            90: "#e9ddff",
            92: "#eee4ff",
            94: "#f3eaff",
            95: "#f6eeff",
            96: "#f8f1ff",
            98: "#fdf7ff",
            99: "#fffbff",
            100: "#ffffff",
        },
        secondary: {
            0: "#000000",
            4: "#100b1d",
            6: "#151022",
            10: "#1e192b",
            12: "#221d2f",
            17: "#2c273a",
            20: "#332d41",
            22: "#373245",
            24: "#3c364a",
            30: "#4a4458",
            40: "#625b71",
            50: "#7b748a",
            60: "#958da4",
            70: "#b0a7c0",
            80: "#cbc2db",
            87: "#dfd6ef",
            90: "#e8def8",
            92: "#eee4fe",
            94: "#f3eaff",
            95: "#f6eeff",
            96: "#f8f1ff",
            98: "#fdf7ff",
            99: "#fffbff",
            100: "#ffffff",
        },
        tertiary: {
            0: "#000000",
            4: "#210410",
            6: "#270815",
            10: "#31101d",
            12: "#361421",
            17: "#421f2c",
            20: "#4a2532",
            22: "#4f2936",
            24: "#542e3b",
            30: "#633b48",
            40: "#7e5260",
            50: "#996a79",
            60: "#b58392",
            70: "#d29dad",
            80: "#efb8c8",
            87: "#ffcddb",
            90: "#ffd9e3",
            92: "#ffe1e8",
            94: "#ffe8ed",
            95: "#ffecf0",
            96: "#fff0f2",
            98: "#fff8f8",
            99: "#fffbff",
            100: "#ffffff",
        },
        neutral: {
            0: "#000000",
            4: "#0f0e11",
            6: "#141316",
            10: "#1c1b1e",
            12: "#201f22",
            17: "#2b292d",
            20: "#313033",
            22: "#363438",
            24: "#3a383c",
            30: "#48464a",
            40: "#605d62",
            50: "#79767a",
            60: "#938f94",
            70: "#aeaaae",
            80: "#cac5ca",
            87: "#ddd8dd",
            90: "#e6e1e6",
            92: "#ece7eb",
            94: "#f2ecf1",
            95: "#f4eff4",
            96: "#f7f2f7",
            98: "#fdf8fd",
            99: "#fffbff",
            100: "#ffffff",
        },
        neutralVariant: {
            0: "#000000",
            4: "#0f0d14",
            6: "#14121a",
            10: "#1d1a22",
            12: "#211e26",
            17: "#2b2931",
            20: "#322f38",
            22: "#36333c",
            24: "#3b3840",
            30: "#49454e",
            40: "#615d66",
            50: "#7a757f",
            60: "#948f99",
            70: "#afa9b4",
            80: "#cac4cf",
            87: "#ded8e3",
            90: "#e7e0eb",
            92: "#ece6f1",
            94: "#f2ebf7",
            95: "#f5eefa",
            96: "#f8f1fd",
            98: "#fdf7ff",
            99: "#fffbff",
            100: "#ffffff",
        },
        error: {
            0: "#000000",
            4: "#280001",
            6: "#310001",
            10: "#410002",
            12: "#490002",
            17: "#5c0004",
            20: "#690005",
            22: "#710005",
            24: "#790006",
            30: "#93000a",
            40: "#ba1a1a",
            50: "#de3730",
            60: "#ff5449",
            70: "#ff897d",
            80: "#ffb4ab",
            87: "#ffcfc9",
            90: "#ffdad6",
            92: "#ffe2de",
            94: "#ffe9e6",
            95: "#ffedea",
            96: "#fff0ee",
            98: "#fff8f7",
            99: "#fffbff",
            100: "#ffffff",
        },
    },
    unstable_sxConfig: {
        border: {
            themeKey: "borders",
        },
        borderTop: {
            themeKey: "borders",
        },
        borderRight: {
            themeKey: "borders",
        },
        borderBottom: {
            themeKey: "borders",
        },
        borderLeft: {
            themeKey: "borders",
        },
        borderColor: {
            themeKey: "palette",
        },
        borderTopColor: {
            themeKey: "palette",
        },
        borderRightColor: {
            themeKey: "palette",
        },
        borderBottomColor: {
            themeKey: "palette",
        },
        borderLeftColor: {
            themeKey: "palette",
        },
        borderRadius: {
            themeKey: "shape.borderRadius",
        },
        color: {
            themeKey: "palette",
        },
        bgcolor: {
            themeKey: "palette",
            cssProperty: "backgroundColor",
        },
        backgroundColor: {
            themeKey: "palette",
        },
        p: {},
        pt: {},
        pr: {},
        pb: {},
        pl: {},
        px: {},
        py: {},
        padding: {},
        paddingTop: {},
        paddingRight: {},
        paddingBottom: {},
        paddingLeft: {},
        paddingX: {},
        paddingY: {},
        paddingInline: {},
        paddingInlineStart: {},
        paddingInlineEnd: {},
        paddingBlock: {},
        paddingBlockStart: {},
        paddingBlockEnd: {},
        m: {},
        mt: {},
        mr: {},
        mb: {},
        ml: {},
        mx: {},
        my: {},
        margin: {},
        marginTop: {},
        marginRight: {},
        marginBottom: {},
        marginLeft: {},
        marginX: {},
        marginY: {},
        marginInline: {},
        marginInlineStart: {},
        marginInlineEnd: {},
        marginBlock: {},
        marginBlockStart: {},
        marginBlockEnd: {},
        displayPrint: {
            cssProperty: false,
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: {},
        rowGap: {},
        columnGap: {},
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: {
            themeKey: "zIndex",
        },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: {
            themeKey: "shadows",
        },
        width: {},
        maxWidth: {},
        minWidth: {},
        height: {},
        maxHeight: {},
        minHeight: {},
        boxSizing: {},
        fontFamily: {
            themeKey: "typography",
        },
        fontSize: {
            themeKey: "typography",
        },
        fontStyle: {
            themeKey: "typography",
        },
        fontWeight: {
            themeKey: "typography",
        },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: {
            cssProperty: false,
            themeKey: "typography",
        },
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            "@media (min-width:0px)": {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            "@media (min-width:600px)": {
                minHeight: 64
            }
        }
    },
    shadows: [
        "none",
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
        "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
        "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
        "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 6px 26px 5px rgba(0, 0, 0, 0.12)",
        "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
        "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 8px 32px 6px rgba(0, 0, 0, 0.12)",
        "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 8px 34px 6px rgba(0, 0, 0, 0.12)",
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 9px 36px 7px rgba(0, 0, 0, 0.12)",
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 9px 38px 7px rgba(0, 0, 0, 0.12)",
        "0px 12px 16px -8px rgba(0, 0, 0, 0.2), 0px 20px 30px 2px rgba(0, 0, 0, 0.14), 0px 10px 40px 8px rgba(0, 0, 0, 0.12)",
        "0px 12px 16px -8px rgba(0, 0, 0, 0.2), 0px 21px 31px 3px rgba(0, 0, 0, 0.14), 0px 10px 42px 8px rgba(0, 0, 0, 0.12)",
        "0px 13px 17px -9px rgba(0, 0, 0, 0.2), 0px 22px 32px 3px rgba(0, 0, 0, 0.14), 0px 11px 44px 9px rgba(0, 0, 0, 0.12)",
        "0px 13px 17px -9px rgba(0, 0, 0, 0.2), 0px 23px 33px 3px rgba(0, 0, 0, 0.14), 0px 11px 46px 9px rgba(0, 0, 0, 0.12)",
    ],
    typography: {
        htmlFontSize: 16,
        fontFamily: electrolize.style.fontFamily,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        }
    },
    transitions: {
        easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
        }
    },
    zIndex: {
        mobileStepper: 1000,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    }
});