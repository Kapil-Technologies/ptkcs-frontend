import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../config";
import { useDispatch } from "react-redux";
import { isNavigated, enquiryfrom } from "../../redux/slices/Enquiry";

function CTA() {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

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
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "60%", p: 3 }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {ctatext}
        </Typography>

        <Button
          variant="contained"
          sx={{ px: 2, py: 1 }}
          onClick={handleNavigate}
        >
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
}

export default CTA;
