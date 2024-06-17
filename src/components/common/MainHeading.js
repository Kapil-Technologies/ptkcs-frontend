import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function MainHeading({ Heading }) {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const large = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const xtralarge = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );

  const xxtralarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1.5}
      justifyContent="center"
    >
      <Typography
        variant={
          Mobile
            ? "h6"
              ? Tab
                ? "h5"
                : large
                ? "h4"
                : xtralarge
                ? "h3"
                : xxtralarge
              : "h2"
            : "h4"
        }
        sx={{ fontWeight: "bold", color: "primary.main", width: "100%" }}
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
