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
import MainTitle from "../../../components/common/MainTitle";
import WebPictureComponent from "../../../components/common/WebPictureComponent";
import { SAPofferings, TailoredList } from "../../../mock/SAPMock";
import IconComponent from "../../../components/common/IconComponent";

const SAPCustomers = [
  {
    id: 1,
    name: "SAP Customer Name 1",
    src: "SAP Customer Image 1",
  },
  {
    id: 2,
    name: "SAP Customer Name 2",
    src: "SAP Customer Image 2",
  },
  {
    id: 3,
    name: "SAP Customer Name 3",
    src: "SAP Customer Image 3",
  },
  {
    id: 4,
    name: "SAP Customer Name 4",
    src: "SAP Customer Image 4",
  },
  {
    id: 5,
    name: "SAP Customer Name 5",
    src: "SAP Customer Image 5",
  },
  {
    id: 6,
    name: "SAP Customer Name 6",
    src: "SAP Customer Image 6",
  },
];

export const SectionContainer = styled("section")(({ theme, layercolor }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "10px",
  marginBottom: "10px",
  gap: "10px",

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

      {/* <MainContainer mainheight="500px">
        <Layer
          direction="column"
          alignItems="center"
          justifyContent="center"
          layercolor={theme.palette.terinary.main}
        >
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
            sx={{ textAlign: "center" }}
          >
            Image
          </Stack>
        </Layer>

      </MainContainer> */}

      <BannerComponent mainheight="550px" />

      <SectionContainer>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          justifyContent="center"
          sx={{ width: "90%", p: "5px" }}
        >
          <Typography variant="body1" textAlign="justify">
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

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <WebPictureComponent title="SAP" reqheight="500px" />
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center ",
                justifyContent: "space-evenly",
                flexDirection: "column",
                // border: "1px solid blue",
                height: Mobile || Tab ? "auto" : "500px",
              }}
            >
              <Stack
                direction="column"
                alignItems="left"
                spacing={1.5}
                justifyContent="left"
                sx={{ p: "10px", width: "100%" }}
              >
                <Typography
                  variant={Mobile || Tab ? "h6" : "h4"}
                  sx={{
                    fontWeight: "bold",
                    color: "#CB333B",
                    textAlign: "left",
                  }}
                >
                  Tailored SAP Consulting Services for Improved Efficiency
                </Typography>

                <Box
                  sx={{
                    width: "100px",
                    height: "5px",
                    borderRadius: 2,
                    bgcolor: "primary.main",
                  }}
                />
              </Stack>

              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                At Kapil Tech, we offer tailored SAP consulting services to
                improve efficiency and streamline operations in your
                manufacturing business. Our experts will work closely with you
                to optimize your SAP system, ensuring maximum efficiency and
                meeting your specific needs.
              </Typography>

              <Stack
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%", height: "200px" }}
              >
                {TailoredList.map((item) => (
                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="space-evenly"
                    key={item.id}
                    sx={{
                      width: "100%",
                      position: "relative",
                      top: "5px",
                      height: "inherit",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#CB333B" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <MainTitle title="Kapil Tech SAP Offerings" />
          <Grid
            container
            columnGap={3}
            rowGap={3}
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              width: "100%",
              // p: "5px",
            }}
          >
            {SAPofferings.map((item) => (
              <Stack
                direction="column"
                alignItems="left"
                justifyContent="space-evenly"
                component={motion.div}
                initial={{ y: 0 }}
                whileHover={{ y: "-10px" }}
                transition={{ duration: 0.5 }}
                // sx={{ textAlign: "center" }}
                sx={{
                  width: "260px",
                  height: "350px",
                  p: "10px",
                  textAlign: "justify",
                  border: "1px solid #d3e1ea",
                  "&:hover": {
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  },
                  position: "relative",
                  wordSpacing:"3px"
                }}
              >
                <IconComponent title={item.title} size="100px" />

                <Stack
                  direction="column"
                  alignItems="left"
                  spacing={1}
                  justifyContent="center"
                  sx={{ p: "6px", width: "100%" }}
                >
                  <Typography
                    variant={Mobile || Tab ? "h5" : "h5"}
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>

                 
                </Stack>

                <Typography variant="body1">{item.description}</Typography>
              </Stack>
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
