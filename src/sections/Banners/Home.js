import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

export const MainContainer = styled(Box)(({ theme,mainheight }) => ({
  height:mainheight,
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

export const Image = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const Layer = styled(Stack)(({ theme, layercolor }) => ({
  width: "inherit",
  height: "inherit",
  position: "absolute",
  top: 0,
  backgroundColor: layercolor,

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

function Home() {
  return (
    <MainContainer mainheight="500px" >
      Image
      <Layer layercolor="rgba(0,0,0,0.3)" />
    </MainContainer>
  );
}

export default Home;