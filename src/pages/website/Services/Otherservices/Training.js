import React, { Fragment, useContext } from "react";
import Page from "../../../../components/common/Page";
import BannerComponent from "../../../../components/common/BannerComponent";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import MainHeading from "../../../../components/common/MainHeading";
import {
  TApproach,
  TrainingDetails,
  Twhyus,
} from "../../../../mock/whatwedo/others/TrainingMock";
import { Icons, KtechLogos } from "../../../../App";
import { styled } from "@mui/material/styles";

function Training() {
  const theme = useTheme();
  const Icondata = useContext(Icons);
  const Logodata = useContext(KtechLogos);

  console.log(Logodata);

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
      <Page name="Training" pagename="Training Page" description="" />
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
            Training
          </Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{ width: "80%", p: "5px" }}
        >
          <MainHeading Heading="Our Approach" />

          <Grid
            container
            columnGap={1}
            rowGap={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              pb: "10px",
            }}
          >
            {TApproach.map((item) => (
              <Card
                key={item.id}
                component={Grid}
                item
                xs={12}
                md={3.8}
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  border: "1px solid lightgray",
                  height: Mobile || Tab ? "auto" : "260px",
                  p: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "50px", height: "50px" }}
                >
                  {Icondata.filter((i) => i.iconname === item.icon).map((i) => (
                    <img
                      key={i.iconname}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      alt={i.iconname}
                      src={`data:image/png;base64,${i.icon}`}
                    />
                  ))}
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography>{item.text}</Typography>
              </Card>
            ))}
          </Grid>

          <MainHeading Heading="Why Choose Us ?" />

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
            }}
          >
            {Twhyus.map((item) => (
              <Card
                key={item.id}
                component={Grid}
                item
                xs={12}
                md={3.8}
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  border: "1px solid lightgray",
                  height: Mobile || Tab ? "auto" : "250px",
                  p: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "80px", height: "80px" }}
                >
                  {Icondata.filter((i) => i.iconname === item.icon).map((i) => (
                    <img
                      key={i.iconname}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      alt={i.iconname}
                      src={`data:image/png;base64,${i.icon}`}
                    />
                  ))}
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography>{item.text}</Typography>
              </Card>
            ))}
          </Grid>

          <MainHeading Heading="Training" />

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
            }}
          >
            {TrainingDetails.map((item) => (
              <Card
                key={item.id}
                component={Grid}
                item
                xs={12}
                md={5.5}
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  border: "1px solid lightgray",
                  height: Mobile || Tab ? "auto" : "250px",
                  p: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "50px", height: "50px" }}
                >
                  {Logodata.filter((i) => i.logoname === item.logo).map((i) => (
                    <img
                      key={i.iconname}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      alt={i.iconname}
                      src={`data:image/png;base64,${i.logo}`}
                    />
                  ))}
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography>{item.text}</Typography>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Training;
