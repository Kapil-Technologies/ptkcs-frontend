import React, { Fragment, useEffect, useState } from "react";
import Home from "../../sections/Banners/Home";
import { Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Whatwedo from "../../sections/Homepage/Whatwedo";
import Industries from "../../sections/Homepage/Industries";
import Page from "../../components/common/Page";
import Carousel from "../../components/common/Carousel";
// import { Homepagelist, countmock } from "../../mock/Homepage";
// import Whychoseus from "../../sections/Homepage/Whychoseus";
import Servicesweprovide from "../../sections/Homepage/Servicesweprovide";
import Ktechapproch from "../../sections/Homepage/Ktechapproch";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import BannerComponent from "../../components/common/BannerComponent";
import { HomeZigZag } from "../../mock/Zigzag";
import WebPictureComponent from "../../components/common/WebPictureComponent";

const CardItem = styled(Stack)(({ theme, menuid }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  width: "220px",
  height: "220px",
  padding: "10px",
  color: "white",
  textAlign: "center",

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const Partners = [
  {
    id: 1,
    logoname: "Global Partners Name 1",
    src: "Global Partners Image 1",
  },
  {
    id: 2,
    logoname: "Global Partners Name 2",
    src: "Global Partners Image 2",
  },
  {
    id: 3,
    logoname: "Global Partners Name 3",
    src: "Global Partners Image 3",
  },
  {
    id: 4,
    logoname: "Global Partners Name 4",
    src: "Global Partners Image 4",
  },
  {
    id: 5,
    logoname: "Global Partners Name 5",
    src: "Global Partners Image 5",
  },
];

const ComplemetryPatners = [
  {
    id: 1,
    logoname: "complementry Partners Name 1",
    src: "complementry Partners Image 1",
  },
  {
    id: 2,
    logoname: "complementry Partners Name 2",
    src: "complementry Partners Image 2",
  },
  {
    id: 3,
    logoname: "complementry Partners Name 3",
    src: "complementry Partners Image 3",
  },
  {
    id: 4,
    logoname: "complementry Partners Name 4",
    src: "complementry Partners Image 4",
  },
  {
    id: 5,
    logoname: "complementry Partners Name 5",
    src: "complementry Partners Image 5",
  },
];

const ImageGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "400px",
  padding: "10px",
  // border: "1px solid blue",
  backgroundColor: "transparent",

  [theme.breakpoints.between("xs", "md")]: {
    height: "auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const TextGridItem = styled(Grid)(({ theme, backcolor, justify, tcolor }) => ({
  display: "flex",
  alignItems: justify,
  justifyContent: "center",
  flexDirection: "column",
  height: "400px",
  padding: "20px",
  width: "100%",
  backgroundColor: backcolor,
  gap: "10px",
  color: tcolor,
  // border: "1px solid blue",

  [theme.breakpoints.between("xs", "sm")]: {
    height: "280px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "350px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

function MainHome() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const CountAnimation = ({ count }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentCount < count) {
          setCurrentCount((prevCount) => prevCount + 1);
        }
      }, 30); // Adjust the interval as needed for smoother animation

      return () => clearInterval(interval);
    }, [currentCount, count]);

    return `${currentCount} +`;
  };
  return (
    <Fragment>
      <Page
        name="Home"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Home Page"
      />
      <BannerComponent
        mainheight="550px"
        textdispaly={
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "100%",
              color: "white",
              height: "inherit",
              position: "relative",
            }}
          >
            <Typography
              variant={Mobile ? "body1" : Tab ? "h6" : "h2"}
              sx={{
                fontWeight: "bold",
                position: "absolute",

                left: "10px",
              }}
            >
              Transforming your <br />
              Digital Future
            </Typography>

            <Typography
              variant={Mobile ? "body2" : Tab ? "body1" : "h4"}
              sx={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                fontWeight: "bold",
              }}
            >
              Enabling High Performance
            </Typography>
          </Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h6"
          sx={{
            width: Mobile || Tab ? "95%" : "75%",
            textAlign: Mobile || Tab ? "justify" : "center",
            p: "3px",
          }}
        >
          We combine technology with innovation, creativity, and strategy to
          solve complex business problems and help you go beyond regular
          transactions and create memorable experiences.
        </Typography>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {HomeZigZag.map((item) =>
            item.type === "image" ? (
              <WebPictureComponent reqheight="400px" title={item.name} />
            ) : (
              <TextGridItem
                item
                xs={12}
                md={6}
                key={item.id}
                backcolor={item.bgcolor}
                justify={item.justify}
                tcolor={item.color}
              >
                <Typography
                  variant={Mobile || Tab ? "h5" : "h4"}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.text.t1}
                </Typography>
                <Typography
                  variant={Mobile || Tab ? "h6" : "h5"}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.text.t2}
                </Typography>
                <Typography
                  variant={Mobile || Tab ? "body1" : "h6"}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.text.t3}
                </Typography>
                <Typography
                  variant={Mobile || Tab ? "body2" : "body1"}
                  sx={{
                    fontWeight: "bold",
                    textAlign: item.textalign,
                    width: Mobile || Tab ? "100%" : "80%",
                  }}
                >
                  {item.text.t4}
                </Typography>
                <Typography
                  variant={Mobile || Tab ? "body1" : "h4"}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.text.t5}
                </Typography>
              </TextGridItem>
            )
          )}
        </Grid>
      </Stack>

      {/* <Carousel
        carouselname="Kapil Tech endorsed by "
        carouselImages={Partners}
      /> */}
      {/* <Servicesweprovide /> */}
      {/* <Industries /> */}
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: Mobile || Tab ? "auto" : "350px",
        }}
      >
        <Stack
          direction={Mobile || Tab ? "column" : "row"}
          alignItems="center"
          justifyContent="space-evenly"
          component={Grid}
          columnGap={2}
          rowGap={2}
          sx={{
            width: Mobile || Tab ? "80%" : "60%",
            height: Mobile || Tab ? "auto" : "250px",
            p: 2,
          }}
        >
          {countmock.map((item) => (
            <CardItem
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: item.id * 0.2 }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                <CountAnimation count={item.count} />
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                {item.title}
              </Typography>
            </CardItem>
          ))}
        </Stack>
      </Stack> */}

      {/* <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "auto", width: "100%", py: 2, textAlign: "center" }}
        spacing={1}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Revitalize Legacy Applications with Kapil Tech
        </Typography>
        <Typography variant="h6">
          We work closely with your team to create tailored solutions that
          enhance your competitive advantage.
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            width: "90%",
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          {Homepagelist.map((item) => (
            <Grid
              key={item.id}
              item
              md={3.8}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "left",
                justifyContent: "space-evenly",
                flexDirection: "column",
                height: "300px",
                border: "1px solid lightgray",
              }}
              component={Card}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                sx={{ p: 1, fontWeight: "bold" }}
              >
                Icons
              </Stack>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.subtitle}</Typography>
            </Grid>
          ))}
        </Grid>
      </Stack> */}
    </Fragment>
  );
}

export default MainHome;
