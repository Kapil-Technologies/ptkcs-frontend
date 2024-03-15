import React from "react";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import CTA from "./CTA";
import { useLocation } from "react-router-dom";

export const MainDiv = styled("footer")(({ theme, color }) => ({
  height: "auto",
  width: "100%",
  color: "black",
  marginTop: "auto",
  flexShrink: 0,

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

function Footer() {
  const { pathname } = useLocation();

  const condition =
    pathname === "/contact-us" || pathname === "/join-us/search-jobs";
  return (
    <MainDiv>
      {!condition ? <CTA /> : null}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "inherit",
          py: 2,
        }}
      >
        Footer
      </Stack>
    </MainDiv>
  );
}

export default Footer;
