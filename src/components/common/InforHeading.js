import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import InforImage from '../../assets/infor1.png'

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
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px", height: '60px',
            
          }}
        >
          <img
            src={InforImage}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Box>
        <Typography
          variant={Mobile || Tab ? "h5" : "h4"}
          sx={{ fontWeight: "bold", color: "#CB333B", textAlign: "center" }}
        >
          {Heading}
        </Typography>
      </Stack>

      {/* <Box
        sx={{
          width: "100px",
          height: "5px",
          borderRadius: 2,
          bgcolor: "primary.main",
        }}
      /> */}
    </Stack>
  );
}

export default MainHeading;
