import { Stack, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";

function Leadership() {
  const theme = useTheme();
  return (
    <Fragment>
      <Page name="Leadership" pagename="Leadership Page" description="" />
      <MainContainer mainheight="500px">
        <Layer
          direction="column"
          alignItems="center"
          justifyContent="center"
          layercolor={theme.palette.terinary.main}
        >
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
            sx={{ textAlign: "center" }}
          >
            LeaderShip
          </Stack>
        </Layer>
      </MainContainer>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "95%",
            px: "15px",
            py: "30px",
            border: "1px solid blue",
          }}
        >
          Data
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Leadership;
