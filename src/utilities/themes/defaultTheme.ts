import {createTheme} from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#E1E2E1"
        },
        primary: {
            main: "#101D32",
            light: "#39445c",
            dark: "#00000b",
            contrastText: "#E1E2E1"
        },
        secondary: {
            main: "#b58d02",
            light: "#ebbd42",
            dark: "#816000",
            contrastText: "#000000",
        },
        info: {
            main: "#129bf5",
            light: "#129bf5"
        },
        success: {
            main: "#00B887",
            light: "#06E1A7",
            contrastText: "#0094F4"
        },
    },
    typography: {
        fontSize: 12,
        fontFamily: "Roboto",
        h4: {
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px"
        },
        body1: {
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "16px"
        }
    },
});
