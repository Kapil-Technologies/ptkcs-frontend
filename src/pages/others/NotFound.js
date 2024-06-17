import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NotFound() {
  const { pathname } = useLocation();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const Navigate = useNavigate();
  const handleNavigate = () => {
    if (pathname === "/admin/404") {
      Navigate("/admin/home");
    } else Navigate("/");
  };
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ width: "100%", height: "100vh", textAlign: "center" }}
    >
      <Typography
        variant={Mobile || Tab ? "h4" : "h1"}
        sx={{ fontWeight: "bold", textTransform: "uppercase", color: "red" }}
      >
        Error 404
      </Typography>
      <Typography variant="h4">
        The Page you are looking for is not found in our server !
      </Typography>
      <Button variant="contained" onClick={handleNavigate}>
        Go to Home Page
      </Button>
    </Stack>
  );
}

export default NotFound;
