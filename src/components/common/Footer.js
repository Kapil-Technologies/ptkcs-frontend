import React from "react";
import { styled } from "@mui/material/styles";
import { Icon, Stack, Typography, useMediaQuery } from "@mui/material";
import CTA from "./CTA";
import { useLocation, Link } from "react-router-dom";
import { IconCopyright, IconEdit } from "../../themes/Icons";
import { SocialMediaLinks } from "../../mock/Navigations";

export const MainDiv = styled("footer")(({ theme, color }) => ({
  height: "auto",
  width: "100%",
  color: "black",
  marginTop: "auto",
  flexShrink: 0,

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
  padding: "15px",
  borderRadius: "50%",
  textDecoration: "none",
  fontSize: "26px",
  color: "black",
  // backgroundColor: "lightgray",
  "&:hover": {
    backgroundColor: "gray",
    color: "white",
  },

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
  color: "black",
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
  color: "black",

  [theme.breakpoints.between("xs", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

function Footer() {
  const { pathname } = useLocation();

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const condition =
    pathname === "/contact-us" || pathname === "/join-us/search-jobs";
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
          sx={{ width: "100%", px: 1, py: 3, backgroundColor: "lightgray" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Kapil Technologies Pvt Ltd
          </Typography>

          <MailLink to="mailto:info@ptkcs.com">info@ptkcs.com</MailLink>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {SocialMediaLinks.map((item) => (
              <SocialMedia to={item.link} target="blank" key={item.id}>
                {item.icon}
              </SocialMedia>
            ))}
          </Stack>

          <Line />
          <Stack
            direction={Mobile || Tab ? "column" : "row"}
            alignItems="center"
            justifyContent={Mobile || Tab ? "center" : "space-between"}
            spacing={2}
            sx={{ p: 1, width: "85%" }}
          >
            <TextLink to="/privacy-policy">Privacy Policy</TextLink>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconCopyright />
              <Typography variant="body1">
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
