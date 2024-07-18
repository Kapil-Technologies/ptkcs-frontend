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
// import { ServicesProviding } from "../../mock/Homepage";

function Servicesweprovide() {
  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  return (
    <Stack
      direction="row"
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
          width: "60%",
          background: "lightgray",
          ml: "50px",
          p: 2,
          textAlign: "left",
        }}
        spacing={4}
      >
        <Typography variant="h6">Securing Everything</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
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
          justifyContent: "left",
          position: "absolute",
          width: "60%",
          // border: "1px solid blue",
          right: "0",
          height: "100%",
        }}
      >
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
                px: 2,
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
