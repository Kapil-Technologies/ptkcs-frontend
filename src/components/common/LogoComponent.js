import { Stack, Typography } from "@mui/material";
import React from "react";

function LogoComponent({textcolor}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      sx={{ textTransform: "uppercase" }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          background: "#aa1944",
          color: "white",
          px: 0.5,
        }}
      >
        PT KCS
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold",color:textcolor }}>
        Technologies
      </Typography>
    </Stack>
  );
}

export default LogoComponent;
