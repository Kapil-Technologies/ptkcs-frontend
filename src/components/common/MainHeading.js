import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function MainHeading({ Heading }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1.5}
      justifyContent="center"
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "primary.main" }}
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
