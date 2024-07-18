import { Stack, Typography } from "@mui/material";
import React from "react";
import NewLogo from "../../assets/Ktechlogo1.png";

function LogoComponent({ textcolor }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      sx={{
        textTransform: "uppercase",
        width: "100%",
        height: "90px",
        bgcolor: "white",
        transform: "rotate(0deg)",
        borderBottomRightRadius:"25px",
      }}
    >
      <img
        src={NewLogo}
        alt="Kapil Technologies"
        style={{ maxWidth: "100%", maxHeight: "80%", padding: "5px" }}
      />
      {/* <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          background: "#aa1944",
          color: "white",
          px: 0.5,
        }}
      >
        KAPIL
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: textcolor }}>
        Technologies
      </Typography> */}
    </Stack>
  );
}

export default LogoComponent;
