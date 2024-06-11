import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import { getLeadership } from "../../../api/GetRequests";
import { Icons } from "../../../App";
import { Link } from "react-router-dom";

function Leadership() {
  const Icondata = useContext(Icons);
  const theme = useTheme();

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [name1, setname1] = useState([]);
  const [name2, setname2] = useState("");

  const handleName = (name) => {
    const splitedName = name.split("-");
    console.log(splitedName);
    setname1(splitedName);
  };

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
      <MainContainer mainheight="300px">
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
            justifyContent: "center",
          }}
          container
          columnGap={2}
          rowGap={2}
        >
          {team.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: Mobile ? "100%" : "250px",
                  height: Mobile ? "auto" : "390px",
                  gap: "5px",
                  border: "1px solid gray",
                  boxShadow: 3,
                  p: 1,
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
                    textAlign: "center",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  {item.designation}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  {item.subtitle}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "30px", height: "30px" }}
                  component={Link}
                  to={item.linkedinurl}
                  target="_blank"
                >
                  {Icondata.filter((i) => i.iconname === "Linkedin").map(
                    (i) => (
                      <img
                        key={i.iconname}
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        alt={i.iconname}
                        src={`data:image/png;base64,${i.icon}`}
                      />
                    )
                  )}
                </Stack>
              </Card>
            );
          })}
        </Grid>
      </Stack>
    </Fragment>
  );
}

export default Leadership;
