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
import MainHeading from "../../../components/common/MainHeading";

function Leadership() {
  const Icondata = useContext(Icons);
  const theme = useTheme();

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [Loading, setLoading] = useState(false);

  const [team, setTeam] = useState([]);

  useEffect(() => {
    getLeadership();
    setLoading(true)
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status === true) {
          setLoading(false);
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

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%", marginTop: "80px", py: "10px" }}
        spacing={2}
      >
        <MainHeading Heading="Our Leaders" />

        <Typography variant="h6" sx={{ width: "85%" }}>
          Each leader brings their own energy and expertise to Kapil
          Technologies that helps us achieve higher levels of success.
        </Typography>
        <Grid
          sx={{
            width: "90%",
            px: "15px",
            py: "10px",
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
                  border: "1px solid lightgray",
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
