import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import BannerComponent from "../../../components/common/BannerComponent";
import { Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

function Ifca() {
  const theme = useTheme();
  return (
    <Fragment>
      <Page name="Ifca" pagename="Ifca Page" description="" />
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
            
          </Stack>
        }
      />
    </Fragment>
  );
}

export default Ifca;
