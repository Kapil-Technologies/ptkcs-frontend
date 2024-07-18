import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import MainHeading from "../../../../components/common/InforHeading";
import InforCarousel from "./InforCarousel";
import { InforManagement } from "../../../../mock/Infor";

function InforMCData() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        height: Mobile || isTab ? "auto" : "inherit",
        width: Mobile || isTab ? "90%" : "75%",
        p: Mobile || isTab ? "10px" : "20px",
      }}
      spacing={2}
    >
      <MainHeading Heading="Management Consulting" />
      <InforCarousel carouselImages={InforManagement} bcolor="transperant" />
    </Stack>
  );
}

export default InforMCData;
