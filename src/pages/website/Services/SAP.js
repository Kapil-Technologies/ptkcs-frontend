import React, { Fragment, useContext, useRef } from "react";
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
  SAPAMS,
  SAPofferings,
  WAOptimization,
  WhychooseSAP,
  explaination,
} from "../../../mock/whatwedo/consulting/SAPMock";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../../App";
import {
  ImageGridItem,
  TextGridItem,
} from "./Otherservices/DigitalTransformation";
import { IconDot } from "../../../themes/Icons";

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
  const Icondata = useContext(Icons);

  const Navigate = useNavigate();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const Ams = useRef(null);
  const Fiori = useRef(null);
  const Hana = useRef(null);

  const scrolltoSection = (item) => {
    console.log(item);
    if (item === "sapams") {
      Ams.current.scrollIntoView({ behavior: "smooth" });
    } else if (item === "saphana") {
      Hana.current.scrollIntoView({ behavior: "smooth" });
    } else if (item === "sapfiori") {
      Fiori.current.scrollIntoView({ behavior: "smooth" });
    } else return;
  };

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
            width: Mobile || Tab ? "90%" : "85%",
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
            columnGap={1}
            rowGap={1}
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
                md={3.9}
                sx={{
                  height: Mobile || Tab ? "auto" : "230px",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  p: "10px",
                  border: "1px solid #d3e1ea",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "primary.BlueSonki" }}
                >
                  {item.title}
                </Typography>

                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {item.description}
                </Typography>

                {item.knowmore ? (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", cursor: "pointer" }}
                    onClick={() => {
                      scrolltoSection(item.knowmore);
                    }}
                  >
                    Know More
                  </Typography>
                ) : null}
              </Card>
            ))}
          </Grid>

          <Stack
            // key={item.id}
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{
              width: "100%",
              height: "99vh",
              // border: "1px solid blue",
            }}
            ref={Ams}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: "10px" }}>
              SAP AMS
            </Typography>

            <Typography variant="body1" sx={{ width: "95%" }}>
              Aware of the importance of cost consciousness and value, we are
              capable of delivering services that optimise efficacy without
              requiring you to enter into problematic contracts. Our devoted
              team implements long-term solutions designed to advance your
              company.
            </Typography>
            <Typography variant="body1" sx={{ width: "95%" }}>
              Technologies are only as good as the people who use them. By
              choosing to work with an Application Management Services partner
              like us, you will ensure peak performance of your SAP systems by
              extending the capabilities of your team.
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "95%", fontWeight: "bold" }}
            >
              SAP AMS helps your business to:
            </Typography>

            <Grid
              container
              columnGap={1}
              rowGap={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              {SAPAMS.map((item) => (
                <Card
                  key={item.id}
                  component={Grid}
                  item
                  xs={12}
                  md={2.9}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    border: "1px solid lightgray",
                    height: "180px",
                    p: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "60px", height: "60px" }}
                  >
                    {Icondata.filter((i) => i.iconname === item.icon).map(
                      (i) => (
                        <img
                          key={i.iconname}
                          style={{ maxHeight: "100%", maxWidth: "100%" }}
                          alt={i.iconname}
                          src={`data:image/png;base64,${i.icon}`}
                        />
                      )
                    )}
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {item.title}
                  </Typography>
                </Card>
              ))}
            </Grid>
          </Stack>
          <Stack
            // key={item.id}
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            spacing={2}
            sx={{
              width: "100%",
              height: "99vh",
            }}
            ref={Hana}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: "10px" }}>
              SAP S/4 HANA
            </Typography>

            <Typography variant="body1" sx={{ width: "80%" }}>
              As the leading provider of SAP Consulting Services, we specialize
              in delivering efficient implementation, rollout, upgrade, and
              support. Our SAP S/4 HANA services are meticulously designed to
              transform your system into a powerhouse of exceptional ERP
              services. The best part? We do this without disrupting your
              standard business operations, ensuring a seamless transition to
              the future of digital ERP solutions.
            </Typography>

            <Typography variant="body1" sx={{ width: "80%" }}>
              We provide SAP S4 HANA Consulting Services that are seamless and
              optimised for SAP Business Suite processes:
            </Typography>
            
          </Stack>
          <Stack
            // key={item.id}
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
              width: "100%",
              height: Mobile || Tab ? "auto" : "99vh",
            }}
            ref={Fiori}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: "10px" }}>
              SAP Fiori
            </Typography>
          </Stack>
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
