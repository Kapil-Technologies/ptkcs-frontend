import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import BannerComponent from "../../../components/common/BannerComponent";
import { Stack, styled, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./SAP";

const MainContainer = styled("header")(({ theme, hover, toggle }) => ({
  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
    backgroundColor: toggle ? theme.palette.primary.main : "transparent",
  },

  [theme.breakpoints.up("xl")]: {},
}));

function Staffing() {
  const theme = useTheme();
  const Navigate = useNavigate();
  return (
    <Fragment>
      <Page name="Events" pagename="Events Page" description="" />
      <BannerComponent
        mainheight="500px"
        layercolor={theme.palette.terinary.main}
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
          >
            Staffing
          </Stack>
        }
      />
      <SectionContainer></SectionContainer>
    </Fragment>
  );
}

export default Staffing;
