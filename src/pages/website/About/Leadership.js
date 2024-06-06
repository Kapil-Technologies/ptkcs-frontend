import { Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import { getLeadership } from "../../../api/GetRequests";

function Leadership() {
  const theme = useTheme();

  const [team, setTeam] = useState([]);

  useEffect(() => {
    getLeadership()
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status === true) {
          setTeam(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        <Grid
          sx={{
            width: "95%",
            px: "15px",
            py: "30px",
            // border: "1px solid blue",
            direction: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          container
          columnGap={2}
          rowGap={2}
        >
          {team.map((item) => (
            <Card
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                flexDirection: "column",
                width: "250px",
                height: "350px",

                border: "1px solid gray",
                boxShadow: 3,
                p: 2,
              }}
              spacing={1}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{
                  height: "inherit",
                  width: "inherit",
                  // border: "1px solid blue",
                }}
              >
                <img
                  src={`data:image/${item.filetype};base64,${item.pic}`}
                  style={{
                    objectPosition: "center center",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Stack>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {item.designation}
              </Typography>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Fragment>
  );
}

export default Leadership;
