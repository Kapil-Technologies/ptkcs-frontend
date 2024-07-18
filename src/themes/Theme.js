import { createTheme } from "@mui/material/styles";

export const CustomTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#4e8ecb",
    },
    secondary: {
      main: "#e4dfda",
    },
    terinary: {
      main: "#d4b483",
    },
    regular: {
      color1: "#3E3E3E",
      color2: "#FFFFFF",
      color3: "#d3e1ea",
    },
    others: {
      c1: "#48A9A6",
      c2: "#C1666B",
    },
  },
  typography: {
    fontFamily: ["Work Sans", " sans-serif"].join(","),

    // fontFamily: [ 'Noto Sans Mono', "monospace"].join(","),
    // font-family: 'Noto Sans Mono', monospace;
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1500,
  },
});
