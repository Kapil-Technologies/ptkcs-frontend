import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CareersBanners from "../../sections/Banners/CareersBanners";
import EReviews from "../../sections/Joinus/EReviews";
import Filters from "../../sections/Joinus/Filters";
import Openings from "../../sections/Joinus/Openings";

function Careers() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "auto", position: "relative" }}
    >
      <CareersBanners />
      <Typography variant="h6" sx={{ fontWeight: "bold",p:2 }}>
       Current Openings
      </Typography>
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%", height: "500px", overflowY: "scroll", py: 2 }}
      >
        <Filters />
        <Openings />
      </Stack>
      <EReviews />
    </Stack>
  );
}

export default Careers;
