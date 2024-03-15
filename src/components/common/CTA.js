import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../config";
import { useDispatch } from "react-redux";
import { isNavigated, enquiryfrom } from "../../redux/slices/Enquiry";
// import useMediaQuery from "../../Hooks/MediaQueries";

function CTA() {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  let ctatext;

  let pagename;

  let navigate;

  switch (true) {
    case pathname === Paths.home:
      ctatext = "Ready to make to make your Idea Happen ?";
      pagename = "Home";
      navigate = "Yes";
      break;
    case pathname === Paths.Infor:
      ctatext = "Infor";
      break;
    case pathname === Paths.sap:
      ctatext = "SAP";
      break;
    case pathname === Paths.contactus:
      ctatext = "Contact";
      break;
    case pathname === Paths.jobopenings:
      ctatext = "Job Openings";
      break;
  }

  const handleNavigate = () => {
    // console.log(pagename, navigate);
    dispatch(enquiryfrom(pagename));
    dispatch(isNavigated(navigate));
    Navigate(Paths.contactus);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "lightgray",
      }}
    >
      <Stack
        direction={Mobile ? "column" : "row"}
        alignItems="center"
        justifyContent={Mobile ? "center" : "space-between"}
        sx={{ width: Mobile || Tab ? "100%" : "60%", p: 3 }}
        spacing={2}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {ctatext}
        </Typography>

        <Button variant="contained" onClick={handleNavigate}>
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
}

export default CTA;
