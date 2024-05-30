import {
  Stack,
  Typography,
  getGrid2UtilityClass,
  Grid,
  Card,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { IconUpArrow } from "../../themes/Icons";
import { Link } from "react-router-dom";
import { ServicesProviding } from "../../mock/Homepage";
import ServicesCarousel from "../../components/common/ServicesCarousel";

function Servicesweprovide() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  return (
    <Stack
      direction={Mobile || Tab ? "column" :"row"}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        background: "white",
        py: 2,
        textAlign: "center",
        position: "relative",
      }}
      component={Grid}
      container
    >
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        component={Grid}
        item
        sx={{
          height: "420px",
          width:Mobile || Tab ? "90%" : "60%",
          background: "lightgray",
          ml:Mobile || Tab ? 0:  "20px",
          p: 1,
          textAlign: "left",
        }}
        spacing={4}
      >
        <Typography variant="h6">Securing Everything</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          At Kapil Tech, We Provide...
        </Typography>

        <Typography variant="body1">
          At Kapil Tech, we provide cutting-edge solutions, <br /> Empowering
          businesses with innovation and execution.
        </Typography>
      </Stack>

      <Grid
        item
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          position: Mobile || Tab ? null : "absolute",
          width: Mobile || Tab ? "100%" : "65%",
          // border: "1px solid blue",
          right: "0",
          height: "100%",
        }}
      >
        <ServicesCarousel carouselImages={ServicesProviding} />
        {/* {ServicesProviding.map((item) => (
          <Card
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "space-evenly",
              flexDirection: "column",
              width: XstraLarge ? "250px" : "230px",
              height: "300px",
              textAlign: "left",
              px: 1,
              py: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "25px" }}
            >
              {item.count}
            </Typography>
            <Typography variant="h5">{item.title}</Typography>
            <Box
              sx={{
                width: "100px",
                height: "5px",
                background: "gray",
                borderRadius: 2,
              }}
            />
            <Typography variant="body1">{item.textline}</Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textDecoration: "none" }}
              component={Link}
            >
              Dive Deep
            </Typography>
          </Card>
        ))} */}
      </Grid>
    </Stack>
  );
}

export default Servicesweprovide;
