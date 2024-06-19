import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import { getLeadership } from "../../../api/GetRequests";
import { Icons } from "../../../App";
import { Link } from "react-router-dom";
import MainHeading from "../../../components/common/MainHeading";
import IconComponent from "../../../components/common/IconComponent";

function Leadership() {
  const Icondata = useContext(Icons);
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getLeadership()
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          setTeam(res.data.response);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Page name="Leadership" pagename="Leadership Page" description="" />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{
          width: "100%",
          marginTop: isMobile || isTablet ? null : "75px",
          py: "10px",
        }}
        spacing={2}
      >
        <MainHeading Heading="Our Leaders" />

        <Typography
          variant="h6"
          sx={{
            width: "85%",
            textAlign: isMobile || isTablet ? " justify" : "center",
          }}
        >
          Each leader brings their own energy and expertise to Kapil
          Technologies that helps us achieve higher levels of success.
        </Typography>
        <Grid
          container
          sx={{
            width: "90%",
            px: "15px",
            py: "10px",
            direction: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnGap={2}
          rowGap={2}
        >
          {team.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: isMobile ? "100%" : "250px",
                height: isMobile ? "auto" : "390px",
                gap: "5px",
                border: "1px solid lightgray",
                boxShadow: 3,
                p: 1,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: "inherit",
                  width: "inherit",
                  textAlign: "center",
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
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "normal", textAlign: "center" }}
              >
                {item.designation}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "normal", textAlign: "center" }}
              >
                {item.subtitle}
              </Typography>

              <Link to={item.linkedinurl}>
                <IconComponent title="Linkedin" size="30px" />
              </Link>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Fragment>
  );
}

export default Leadership;
