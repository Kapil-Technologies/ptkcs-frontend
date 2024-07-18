import React from "react";
import { styled } from "@mui/material/styles";
import { Icon, Stack, Typography, useMediaQuery } from "@mui/material";
import CTA from "./CTA";
import { useLocation, Link, useParams } from "react-router-dom";
import { IconCopyright, IconEdit } from "../../themes/Icons";
import { SocialMediaLinks } from "../../mock/Navigations";
import SocialMediaComponent from "./SocialMediaComponent";

export const MainDiv = styled("footer")(({ theme, color }) => ({
  height: "auto",
  width: "100%",
  color: "black",
  marginTop: "auto",
  flexShrink: 0,
  backgroundColor: "black",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

export const SocialMedia = styled(Link)(({ theme, color }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  borderRadius: "50%",
  textDecoration: "none",
  fontSize: "26px",
  color: "black",
  // backgroundColor: "lightgray",
  // "&:hover": {
  //   backgroundColor: "gray",
  //   color: "white",
  // },

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

export const Line = styled("hr")(({ theme, color }) => ({
  width: "90%",
  color: "black",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));
export const MailLink = styled(Link)(({ theme, color }) => ({
  textDecoration: "none",
  padding: "5px",
  color: "white",
  fontSize: "20px",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

export const TextLink = styled(Link)(({ theme, color }) => ({
  textDecoration: "none",
  color: "white",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
    width: "90%",
    textAlign: "center",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

function Footer() {
  const { pathname } = useLocation();
  const { jobid } = useParams();

  // console.log(jobid)

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const condition =
    pathname === "/contact-us" ||
    pathname === "/join-us/job-openings" ||
    pathname.includes("/join-us/job-openings/");
  return (
    <MainDiv>
      {!condition ? <CTA /> : null}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "inherit",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{
            width: "100%",
            px: 1,
            py: 3,
            backgroundColor: "inherit ",
            color: "white",
          }}
        >
          {/* <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Kapil Technologies India
          </Typography> */}
          <Typography
            variant={Mobile || Tab ? "h6" : "h5"}
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            PT KCS Technologies Indonesia
          </Typography>

          <MailLink to="mailto:info@ptkcs-tech.com">info@ptkcs.com</MailLink>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            {SocialMediaLinks.map((item) => (
              <SocialMedia to={item.link} target="blank" key={item.id}>
                <SocialMediaComponent title={item.name} size="40px" />
              </SocialMedia>
            ))}
          </Stack>

          <Line />
          <Stack
            direction={Mobile || Tab ? "column" : "row"}
            alignItems="center"
            justifyContent={Mobile || Tab ? "center" : "space-between"}
            spacing={2}
            sx={{ p: 1, width: Mobile || Tab ? "95%" : "85%" }}
          >
            <TextLink to="/privacy-policy">Privacy Policy</TextLink>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ width: Mobile || Tab ? "100%" : null }}
            >
              <IconCopyright />
              <Typography
                variant={Mobile || Tab ? "body2" : "body1"}
                sx={{ color: "white" }}
              >
                Copyright 2024 | All Rights Reseved
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </MainDiv>
  );
}

export default Footer;
