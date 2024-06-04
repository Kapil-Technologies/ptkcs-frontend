import React, { Fragment, useRef } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import {
  Box,
  Card,
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
import BannerComponent from "../../../components/common/BannerComponent";
import { tasks } from "../../../mock/whatwedo/solutions/MPDVMock";

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
        name="MPDV"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Mpdv Page"
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
            MPDV
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
            pt: "10px",
            pb: "10px",
          }}
          spacing={2}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            An Overview of MPDV
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            A sophisticated manufacturing facility necessitates appropriate
            information technology (IT) that flexibly incorporates complex
            systems and functions. Full interoperability is critical for
            ensuring that everything operates seamlessly. The foundations for
            digitally networked production of the future are laid by MPDV's
            products and solutions.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Production is continuously monitored, controlled, and optimised with
            the substantial assistance of the Manufacturing Execution System
            (MES) HYDRA X. The implementation of HYDRA X enables the monitoring
            of all resources and facilitates the optimisation of manufacturing
            processes.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            A dynamic, realistic, and adaptable method for organising basic work
            processes and complex order scenarios while considering workforce
            requirements is provided by the Advanced Planning and Scheduling
            System (APS) FEDRA. Deep scheduling can be facilitated by AI when
            necessary.
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            MPDV permits the integration of manufacturing applications from
            various providers in order to meet specific needs, owing to the open
            platform principle of the Manufacturing Integration Platform (MIP).
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            The products of MPDV are well-known internationally and are utilised
            effectively in routine tasks such as
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
            {tasks.map((item) => (
              <Card
                key={item.id}
                component={Grid}
                item
                xs={12}
                md={3.8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  height: Mobile || Tab ? "auto" : "200px",
                  border: "1px solid lightgray",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography>{item.icon}</Typography>
                <Typography variant="h6"  sx={{fontWeight:'bold'}}>{item.title}</Typography>
              </Card>
            ))}
          </Grid>
        </Stack>
      </SectionContainer>
    </Fragment>
  );
}

export default Mpdv;
