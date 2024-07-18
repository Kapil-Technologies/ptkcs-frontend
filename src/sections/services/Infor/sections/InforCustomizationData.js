import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import InforCarousel from "./InforCarousel";
import { InforCustomizaton } from "../../../../mock/Infor";
import MainHeading from "../../../../components/common/InforHeading";

function InforCustomizationData() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: Mobile || isTab ? "auto" : "inherit",
        width: Mobile || isTab ? "90%" : "75%",
        p: Mobile || isTab ? "10px" : "20px",
      }}
      spacing={2}
    >
      <MainHeading Heading="Customizations" />

      <InforCarousel carouselImages={InforCustomizaton} />
    </Stack>
  );
}

export default InforCustomizationData;
