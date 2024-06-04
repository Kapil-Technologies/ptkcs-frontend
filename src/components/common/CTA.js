import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../config";
import { useDispatch } from "react-redux";
import { isNavigated, enquiryfrom } from "../../redux/slices/Enquiry";
import ContactForm from "../Forms/ContactForm";
// import useMediaQuery from "../../Hooks/MediaQueries";

function CTA() {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(pathname)
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
      pagename = "Infor";
      navigate = "Yes";
      break;
    case pathname === Paths.consulting.sapconsulting:
      ctatext = "Transform your business with SAP's innovative solutions.";
      pagename = "SAP";
      navigate = "Yes";
      break;
    case pathname === Paths.consulting.sapconsulting:
      ctatext = "Transform your business with SAP's innovative solutions.";
      pagename = "SAP";
      navigate = "Yes";
      break;
    case pathname === Paths.consulting.oracleconsulting:
      ctatext =
        "Investigate the potential of Oracle Netsuite for your organisation. ";
      pagename = "Digital Transformation";
      navigate = "Yes";
      break;
    case pathname === Paths.other.staffing:
      ctatext = "Embrace Digital Transformation for innovation";
      pagename = "Staffing";
      navigate = "Yes";
      break;
    case pathname === Paths.solutions.finsta:
      ctatext = "Embrace Digital Transformation for innovation";
      pagename = "Finsta";
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
    // Products
    case pathname === Paths.solutions.mpdv:
      ctatext =
        "Transform production with FEDRA & HYDRA. Optimize planning, resources, efficiency.";
      pagename = "MPDV";
      break;

    // Contact us
    case pathname === Paths.contactus:
      ctatext = "Contact";
      pagename = "Contact us";
      navigate = "Yes";
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
      direction={Mobile || Tab ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: Mobile || Tab ? "auto" : "auto",
        backgroundColor: "lightgray",
        py: "15px",
      }}
      spacing={2}
    >
      {/* <Typography variant="h4" sx={{ pb: "20px", fontWeight: "bold" ,textAlign:'center' }}>
        Value Statement - Contact us
      </Typography>
      <Grid
        columnGap={2}
        rowGap={2}
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          item
          container
          columnGap={2}
          rowGap={2}
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid blue",
            height: Mobile || Tab ? "auto" : "calc(100vh - 180px)",
            padding: "10px",
          }}
        >
          <Grid
            item
            md="160px"
            sx={{
              width: "150px",
              bgcolor: "gray",
              border: "1px solid lightgray",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            data
          </Grid>
          <Grid
            item
            md="160px"
            sx={{
              width: "150px",
              bgcolor: "gray",
              border: "1px solid lightgray",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            data
          </Grid>
          <Grid
            item
            md="160px"
            sx={{
              width: "150px",
              bgcolor: "gray",
              border: "1px solid lightgray",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            data
          </Grid>
          <Grid
            item
            md="160px"
            sx={{
              width: "150px",
              bgcolor: "gray",
              border: "1px solid lightgray",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            data
          </Grid>
          <Grid
            item
            md="160px"
            sx={{
              width: "150px",
              bgcolor: "gray",
              border: "1px solid lightgray",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            data
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            // border: "1px solid blue",
            height: "auto",
            padding: "10px",
          }}
        >
          <ContactForm />
        </Grid>
      </Grid> */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          width: Mobile || Tab ? "100%" : "60%",
          textAlign: "center",
        }}
      >
        {ctatext}
      </Typography>
      <Button variant="contained" onClick={handleNavigate}>
        Connect With us!
      </Button>
    </Stack>
  );
}

export default CTA;
