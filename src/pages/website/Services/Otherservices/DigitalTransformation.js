import React, { Fragment } from "react";
import Page from "../../../../components/common/Page";
import { Layer, MainContainer } from "../../../../sections/Banners/Home";
import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { dtzigzag } from "../../../../mock/Zigzag";
import BannerComponent from "../../../../components/common/BannerComponent";

// ----------------------------------------------- Styled Components

export const ImageGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "400px",
  padding: "10px",
  // border: "1px solid blue",
  backgroundColor: theme.palette.terinary.main,

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

export const TextGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "center",
  flexDirection: "column",
  height: "400px",
  padding: "20px",
  backgroundColor: "#F3F2F5",
  gap: "20px",
  // border: "1px solid blue",

  [theme.breakpoints.between("xs", "md")]: {
    height: "auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

// ---------------------------------------------------------

function DigitalTransformation() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
      <Page
        name="Application Development"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Application Development Page"
      />
      <BannerComponent
        mainheight="500px"
        layercolor="rgba()"
        textdispaly={
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ textAlign: "center", height: "inherit" }}
          ></Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: Mobile || Tab ? "100%" : "80%" }}
          spacing={2}
        ></Stack>
      </Stack>
    </Fragment>
  );
}

export default DigitalTransformation;
