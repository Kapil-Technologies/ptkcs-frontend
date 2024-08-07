import React, { Fragment } from "react";
import Page from "../../components/common/Page";
import { Layer, MainContainer } from "../../sections/Banners/Home";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactForm from "../../components/Forms/ContactForm";
import { IconBase } from "react-icons";
import { IconEmail, IconMobile, IconWhatsapp } from "../../themes/Icons";
import { Link } from "react-router-dom";
import GlobalFootPrints from "../../sections/GlobalFootPrints";
import { motion } from "framer-motion";
import BannerComponent from "../../components/common/BannerComponent";

function Contactus() {
  const theme = useTheme();

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  // -----------------------------------------------  Form Components

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", position: "relative" }}
    >
      <Page name="Contact Us" description="" pagename="Contact us Page" />
      <BannerComponent
        mainheight="550px"
        textdispaly={
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="start"
            spacing={2}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant={Mobile || Tab ? "h5" : "h3"}
              sx={{
                fontWeight: "bold",
                pt: Mobile || Tab ? "80px" : "150px",
                color: "white",
              }}
            >
              Get in Touch with us !
            </Typography>
          </Stack>
        }
      />
      {/* <MainContainer mainheight="500px">
        <Layer
          direction="column"
          alignItems="center"
          justifyContent="start"
          layercolor={theme.palette.terinary.main}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="start"
            spacing={2}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", pt: "120px" }}>
              Get in Touch with us !
            </Typography>

            <Typography variant="body1">Get in Touch with us !</Typography>
          </Stack>
        </Layer>
      </MainContainer> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
        component={motion.div}
        initial={{ y: "50px" }}
        animate={{ y: 0 }}
        exit={{ y: "50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card
          component={Grid}
          container
          sx={{
            width: Mobile || Tab ? "90%" : "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: Mobile || Tab ? "auto" : "500px",
            position: "relative",
            marginTop: Mobile || Tab ? "-100px" : "-300px",
            borderRadius: "20px",
            border: "1px solid #d3e1ea",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "column",
              // border: "1px solid blue",
              height: Mobile || Tab ? "400px" : "inherit",
              position: "relative",
              backgroundColor: theme.palette.primary.main,
              color: "white",
              borderRadius: "20px",
              p: 2.5,
            }}
            xs={12}
            md={4}
          >
            {/* <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Contact Information
          </Typography> */}
            <Stack
              direction="column"
              alignItems="left"
              justifyContent="left"
              sx={{ width: "100%", padding: "10px", zIndex: 4444 }}
              spacing={3}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Contact Information
              </Typography>

              <Typography variant="body1" gutterBottom>
                To ensure we meet your needs effectively, we value any specific
                details you can share about your unique requirements or
                challenges.
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                component={Link}
                to="mailto:info@ptkcs.com"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ml: "10px",
                  fontSize: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <IconEmail />
                <Typography variant="body1">info@ptkcs.com</Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                component={Link}
                to="tel:+62 852 1808 4208"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ml: "10px",
                  fontSize: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <IconMobile />
                <Typography variant="body1">+62 852 1808 4208</Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                component={Link}
                to="tel: +1 6099345788"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ml: "10px",
                  fontSize: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <IconMobile />
                <Typography variant="body1">+1 6099345788 </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                component={Link}
                to="tel: +91 88899 92186"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ml: "10px",
                  fontSize: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <IconMobile />
                <Typography variant="body1">+91 88899 92186 </Typography>
              </Stack>

              {/* <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                component={Link}
                target="blank"
                to="https://wa.me/+918889992186"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ml: "10px",
                  fontSize: "20px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <IconWhatsapp />
                <Typography variant="body1">+91 88899 92186</Typography>
              </Stack> */}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "150px",
                height: "150px",
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "rgba(255,255,255,0.6)",
                // borderRadius: "50%",
                color: "rgba(255,255,255,0.6)",
                borderTopRightRadius: "0%",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "0%",
                borderTopLeftRadius: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              // border: "1px solid blue",
              height: "inherit",
              // p: 2,
              px: 3,
            }}
            xs={12}
            md={8}
          >
            <ContactForm />
          </Grid>
        </Card>
      </Stack>

      <Stack
        component={Grid}
        direction="row"
        alignItems="center"
        justifyContent="center"
        container
        columnGap={2}
        rowGap={2}
        sx={{ mt: "10px" }}
      >
        <GlobalFootPrints />
      </Stack>
    </Stack>
  );
}

export default Contactus;
