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

  let subtitle;

  let pagename;

  let navigate;

  switch (true) {
    case pathname === Paths.home:
      ctatext = "Book Your Complimentary Consultation Now.";
      subtitle =
        "Rapidly onboard teams and expedite new software product delivery.";
      pagename = "Home";
      navigate = "Yes";
      break;
    // About us
    case pathname === Paths.aboutus.company:
      ctatext = "Discover the Power of Infor Solutions Today! ";
      pagename = "company";
      break;

    case pathname === Paths.aboutus.leadership:
      ctatext = "Discover the Power of Infor Solutions Today! ";
      pagename = "leadership";
      break;

    // Services
    case pathname === Paths.consulting.inforconsulting:
      ctatext = "Discover the Power of Infor Solutions Today! ";
      pagename = "Infor Service";
      navigate = "Yes";
      break;
    case pathname === Paths.consulting.sapconsulting:
      ctatext = "Transform your business with SAP's innovative solutions.";
      pagename = "SAP Services";
      navigate = "Yes";
      break;
    case pathname === Paths.consulting.digitaltransformation:
      ctatext = "Embrace Digital Transformation for innovation";
      pagename = "Application Development Services";
      navigate = "Yes";
      break;
    case pathname === Paths.other.staffing:
      ctatext = "Embrace Digital Transformation for innovation";
      pagename = "Staffing Services";
      navigate = "Yes";
      break;
    case pathname === Paths.solutions.finsta:
      ctatext = "Embrace Digital Transformation for innovation";
      pagename = "Finsta Solution";
      navigate = "Yes";
      break;
    // Joinus
    case pathname === Paths.joinus.searchjobs:
      pagename = "Job Openings";
      break;
    case pathname === Paths.joinus.events:
      pagename = "Events";
      break;
    case pathname === Paths.joinus.webinar:
      pagename = "Webinars";
      break;
    case pathname === Paths.joinus.lifeatktech:
      pagename = "Life @ Ktech";
      break;
    // Contact us
    case pathname === Paths.contactus:
      ctatext = "Contact";
      pagename = "Contact us";
      navigate = "No";
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
        direction={Mobile || Tab  ? "column" : "row"}
        alignItems="center"
        justifyContent={Mobile || Tab ? "center" : "space-between"}
        sx={{ width: Mobile || Tab ? "100%" : "80%", p: "10px",height:Mobile || Tab ? "auto" :"80px" }}
        spacing={2}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{width:"inherit"}}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {ctatext}
          </Typography>

          {subtitle ? (
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
        <Button variant="contained" onClick={handleNavigate}>
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
}

export default CTA;
