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
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Carousel from "../../../components/common/Carousel";

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
  return (
    <Fragment>
      <Page
        name="SAP"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="SAP Page"
      />

      <MainContainer mainheight="500px">
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
      </MainContainer>

      <SectionContainer>
        <Typography variant="h4" sx={{ fontWeight: "bold", pb: "40px" }}>
          Kapil Tech's SAP Application Maintenance Services
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            position: "relative",
          }}
        >
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              p: 2,
              width: "250px",
              height: "300px",
              border: "1px solid gray",
              borderTopLeftRadius: "20%",
              borderBottomRightRadius: "20%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid lightgray",
                width: "60px",
                height: "60px",
                borderRadius: "20px",
                position: "absolute",
                top: "-30px",
                background: "gray",
                transform: "rotate(45deg)",

                zIndex: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", transform: "rotate(-45deg)" }}
              >
                1
              </Typography>
            </Box>
          </Card>
        </Grid>
      </SectionContainer>

      <Carousel
        carouselname="Meet some of our SAP customers."
        carouselImages={SAPCustomers}
      />
    </Fragment>
  );
}

export default SAP;
