import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import {
  Stack,
  useTheme,
  useThemeProps,
  Typography,
  Card,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Carousel from "../../../components/common/Carousel";
import BannerComponent from "../../../components/common/BannerComponent";
import {
  SAPofferings,
  WhychooseSAP,
} from "../../../mock/whatwedo/consulting/SAPMock";

const SAPCustomers = [
  {
    id: 1,
    logoname: "SAP Customer 1",
    logo: "SAP Customer Image 1",
  },
  {
    id: 2,
    logoname: "SAP Customer 2",
    logo: "SAP Customer Image 2",
  },
  {
    id: 3,
    logoname: "SAP Customer 3",
    logo: "SAP Customer Image 3",
  },
  {
    id: 4,
    logoname: "SAP Customer 4",
    logo: "SAP Customer Image 4",
  },
  {
    id: 5,
    logoname: "SAP Customer 5",
    logo: "SAP Customer Image 5",
  },
  {
    id: 6,
    logoname: "SAP Customer 6",
    logo: "SAP Customer Image 6",
  },
];

export const SectionContainer = styled("section")(({ theme, layercolor }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

function SAP() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
      <Page
        name="SAP"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="SAP Page"
      />

      <BannerComponent
        mainheight="500px"
        layercolor={theme.palette.terinary.main}
        textdispaly={
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ textAlign: "center", height: "inherit" }}
          >
            SAP
          </Stack>
        }
      />

      <SectionContainer>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: Mobile || Tab ? "90%" : "80%",
            px: "20px",
            pt: "20px",
            pb: "5px",
          }}
          spacing={2}
        >
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            In the digital age, it is critical that organisations implement
            consistent and dependable solutions. An SAP consulting firm can
            assist you in meeting the challenge and modernising your
            organisation with the most recent tools in such a circumstance. We
            utilise software to address the evolving needs of your organisation
            and enable you to provide the current necessity of providing
            enduring customer experiences. We are well-versed in SAP consulting
            services and can provide assistance in implementing, optimising, and
            transforming your enterprise-enhancing applications.
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", px: 1, textAlign: "center" }}
          >
            Why Choose Kapil Tech as your SAP Service Provider
          </Typography>

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {WhychooseSAP.map((item) => (
              <Card
                component={Grid}
                item
                xs={12}
                md={12}
                xl={10}
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  border: "1px solid lightgray",
                  height: Mobile || Tab ? "auto" : "200px",
                  px: "10px",
                  textAlign: "left",
                  position: "relative",
                  gap: Mobile || Tab ? "10px" : null,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="left"
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      bgcolor: "primary.BlueSonki",
                      color: "primary.color3",
                      borderRadius: "3px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.id}
                  </Box>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {item.description}
                </Typography>
              </Card>
            ))}
          </Grid>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", px: 1, textAlign: "center" }}
          >
            Kapil Tech SAP Offerings
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            We constantly employ best practices to manage critical technologies
            that improve business performance through the efficient application
            of big data services. This strategy has been repeatedly demonstrated
            to increase the client's return on investment. Our experts possess
            an ideal blend of technical expertise, business acumen, management,
            and project knowledge, which empowers them to effectively guide the
            client throughout the entirety of the workflow development
            lifecycle. We have experience managing entire projects and
            integrating organisations for customers of all sizes.
          </Typography>

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {SAPofferings.map((item) => (
              <Card
                component={Grid}
                item
                xs={12}
                md={3.8}
                sx={{
                  height: Mobile || Tab ? "auto" : "250px",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  p: "10px",
                  border: "1px solid #d3e1ea",
                }}
              >
                {item.icon}
                <Typography variant="h5" sx={{fontWeight:'bold',color:"primary.BlueSonki"}}> 
                  {item.title}
                </Typography>

                <Typography variant="body1">
                  {item.description}
                </Typography>
              </Card>
            ))}
          </Grid>
        </Stack>
      </SectionContainer>

      {/* <Carousel
        carouselname="Meet some of our SAP customers."
        carouselImages={SAPCustomers}
      /> */}
    </Fragment>
  );
}

export default SAP;
