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
      main: "#cd2028",
      BlueSonki: "#4e8ecb", // additional primary color
      color3: "#fff", // additional primary color
    },
    secondary: {
      main: "#02A294",
      BlueSonki: "#4E8ECB", // additional secondary color
      MidnightViolet: "#6A75AC", // additional secondary color
      TreasuredLove: "#B51F6F", // additional secondary color
      Flamingo: "#E06550",
      OrneryTangerine: "#F48028",
      VibrantYellow: "#FFD526",
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



const commonSettings = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
  palette: {
    primary: {
      fireball: "#e86824",
      BlueSonki: "#4e8ecb", // additional primary color
      whitecolor: "#fff", // additional primary color
    },
    secondary: {
      Turquish: "#02A294",
      BlueSonki: "#4E8ECB", // additional secondary color
      MidnightViolet: "#6A75AC", // additional secondary color
      TreasuredLove: "#B51F6F", // additional secondary color
      Flamingo: "#E06550",
      OrneryTangerine: "#F48028",
      VibrantYellow: "#FFD526",
    },
  },
};

const lightPalette = {
  mode: "light",
  primary: {
    main: "#4357AD",
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
};

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#000000",
  },
  secondary: {
    main: "#e4dfda",
  },
  terinary: {
    main: "#d4b483",
  },
  regular: {
    color1: "#FFFFFF",
    color2: "#3E3E3E",
    color3: "#d3e1ea",
  },
  others: {
    c1: "#48A9A6",
    c2: "#C1666B",
  },
};

export const lightTheme = createTheme({
  ...commonSettings,
  palette: lightPalette,
});

export const darkTheme = createTheme({
  ...commonSettings,
  palette: darkPalette,
});

