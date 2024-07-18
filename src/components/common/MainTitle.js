import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function MainTitle({ title }) {
     const Mobile = useMediaQuery((theme) =>
       theme.breakpoints.between("xs", "sm")
     );
     const Tab = useMediaQuery((theme) =>
       theme.breakpoints.between("sm", "md")
     );
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1.5}
      justifyContent="center"
      sx={{p:"10px"}}
    >
      <Typography
        variant={Mobile || Tab ? "h6" : "h4"}
        sx={{ fontWeight: "bold", color: "#CB333B", textAlign: "left" }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: "100px",
          height: "5px",
          borderRadius: 2,
          bgcolor: "primary.main",
        }}
      />
    </Stack>
  );
}

export default MainTitle;
