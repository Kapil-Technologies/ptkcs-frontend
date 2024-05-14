import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

export const MainCircle = styled(Stack)(({ theme, color }) => ({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  border: "1px solid blue",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

export const InnerCircle = styled(Stack)(({ theme, color }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#E6E6E6",
  textAlign: "center",
  padding: "15px",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

function WhyKapilTech({ pointson }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "400px" }}
    >
      <MainCircle direction="row" alignItems="center" justifyContent="center">
        <InnerCircle
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Kapil Tech Infor Consulting
          </Typography>
        </InnerCircle>
      </MainCircle>
    </Stack>
  );
}

export default WhyKapilTech;
