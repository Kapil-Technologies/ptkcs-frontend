import React, { Fragment, useRef } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { SectionContainer } from "../Services/SAP";
import { Link } from "react-router-dom";
import FedraBenefits from "../../../sections/solutions/FedraBenefits";
import HydraBenefits from "../../../sections/solutions/Hydra";
import FedraCategories from "../../../sections/solutions/FedraCategories";
import Hydracategories from "../../../sections/solutions/Hydracategories";

const mpdvoffering = [
  {
    id: 1,
    idname: "fedra",
    title: "FEDRA",
    text: " FEDRA is an APS that employs AI and Reinforcement Learning for innovative production planning. It provides quick, flexible planning for both simple operations and complex orders, optimizin the allocation of resources. This advanced system ensures efficient production processes.",
  },
  {
    id: 2,
    idname: "hydra",
    title: "HYDRA X",
    text: "  Enhance production with HYDRA X, using AI and Reinforcement Learning for efficient planning. Unlike traditional MES, HYDRA X supports intralogistics and complex assembly processes, ensuring quick, flexible planning and optimal resource allocation. Embrace digital transformation in production!",
  },
];

const Hydrabenefits = [
  "Boost productivity",
  "Shorten lead times",
  "Enhance quality",
  "Cut energy costs",
  "Lower scrap rates",
  "Decrease WIP stock",
  "Optimize labor utilization",
  "Ensure traceability",
];

const Fedrabenits = [
  "Boost productivity",
  "Shorten lead times",
  "Enhance quality",
  "Cut energy costs",
  "Lower scrap rates",
  "Decrease WIP stock",
  "Optimize labor utilization",
  "Ensure traceability",
];

function Mpdv() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  // Create a ref for the element you want to scroll to
  const fedraref = useRef(null);
  const hydraref = useRef(null);

  // Function to handle scrolling
  const scrollToElement = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <Page
        name="Infor"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Infor Page"
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
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-evenly"
          sx={{ width: Mobile || Tab ? "100%" : "90%", p: "5px" }}
          columnGap={1}
          rowGap={1}
          container
          component={Grid}
        >
          {mpdvoffering.map((item) => (
            <Stack
              item
              xs={12}
              md={5.5}
              component={Grid}
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              spacing={2}
              sx={{
                // border: "1px solid blue",
                p: "5px",

                height: "250px",

                position: "relative",
              }}
            >
              <Stack
                direction="column"
                alignItems="left"
                justifyContent="left"
                spacing={1}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    width: "100px",
                    height: "5px",
                    bgcolor: "black",
                    borderRadius: "5px",
                  }}
                />
              </Stack>

              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {item.text}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "black",

                  "&:hover": {
                    textdecoration: "underline",
                  },
                }}
                component={Link}
                onClick={() => {
                  scrollToElement(item.idname);
                }}
              >
                Know More
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="start"
          spacing={2}
          sx={{ width: "90%", padding: "20px" }}
        >
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            <b>MPDV Mikrolab GmbH</b> is a leading supplier of Manufacturing
            Execution Systems (MES), offering FEDRA and HYDRA X. FEDRA is an
            Advanced Planning and Scheduling System (APS) that allows for quick
            and flexible planning of both simple and complex production orders.
            It leverages cutting-edge technologies such as artificial
            intelligence (AI) to enhance production planning.
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            <b>FEDRA</b> utilizes Reinforcement Learning, an AI method, to
            efficiently allocate work processes in complex scenarios. On the
            other hand, <b>HYDRA X</b> enables continuous monitoring, control,
            and optimization of production processes, ensuring maximum
            efficiency. It goes beyond traditional MES capabilities by also
            supporting intralogistics and providing operator guidance in complex
            assembly processes.
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            With a highly qualified workforce, we operate in numerous locations
            and subsidiaries across Germany and globally in China, Malaysia,
            Singapore, Switzerland, and the USA. Additionally, we have a strong
            presence in other countries through our network of partners.
          </Typography>
        </Stack>
      </SectionContainer>

      <SectionContainer id="fedra">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          FEDRA
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "90%", py: "10px", px: "10px" }}
        >
          <FedraCategories />
          <FedraBenefits />
        </Stack>
      </SectionContainer>
      <SectionContainer id="hydra" >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          HYDRA X
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "90%", py: "10px", px: "10px" }}
        >
          <HydraBenefits />
          <Hydracategories />
        </Stack>
      </SectionContainer>
    </Fragment>
  );
}

export default Mpdv;
