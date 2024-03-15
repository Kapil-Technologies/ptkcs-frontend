import React from "react";
import { Image, } from "./Home";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

const MainContainer = styled(Box)(({ theme }) => ({
  height: "500px",
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

const Layer = styled(Stack)(({ theme }) => ({
  width: "inherit",
  height: "inherit",
  position: "absolute",
  top: 0,
  backgroundColor: "rgba(0,0,0,0.3)",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

function CareersBanners() {
  return (
    <MainContainer>
      Image
      <Layer />
    </MainContainer>
  );
}

export default CareersBanners;
