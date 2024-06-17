import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function MainHeading({ Heading }) {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1.5}
      justifyContent="center"
    >
      <Typography
        variant={Mobile || Tab ?"h5" : "h4"}
        sx={{ fontWeight: "bold", color: "primary.main",textAlign:"center" }}
      >
        {Heading}
      </Typography>

      <Box
        sx={{
          width: "100px",
          height: "5px",
          borderRadius: 2,
          bgcolor: "primary.BlueSonki",
        }}
      />
    </Stack>
  );
}

export default MainHeading;
