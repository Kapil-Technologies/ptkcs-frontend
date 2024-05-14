import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { AboutZigzag } from "../../../mock/Zigzag";
import { useNavigate } from "react-router-dom";

// --------------------------------------------- StyledComponents



// --------------------------------------------- StyledComponents
const CardItem = styled(Card)(({ theme, menuid }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  width: "180px",
  height: "180px",
  padding: "10px",

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const ImageGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "500px",
  padding: "10px",
  // border: "1px solid blue",
  backgroundColor: theme.palette.terinary.main,

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const TextGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "space-around",
  flexDirection: "column",
  height: "500px",
  padding: "20px",
  backgroundColor: "#F3F2F5",
  // border: "1px solid blue",

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

// --------------------------------------------- StyledComponents

function Company() {
  const theme = useTheme();
  const Navigate = useNavigate();
 

  // -----------------------------------------------------------------------------

  const handleNavigate = (navi) => {
    Navigate(navi);
  };

  // --------------------------------------------------------------- Right to left Animation

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const element = ref.current;
      if (!isVisible && element) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.left < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isVisible]);
  return (
    <Fragment>
      <Page name="Company" pagename="Company Page" description="" />
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
            Company
          </Stack>
        </Layer>
      </MainContainer>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          component={Grid}
          container
          sx={{ width: "100%" }}
        >
          Vission Mission
        </Stack>
       

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          component={Grid}
          container
          sx={{ width: "100%" }}
        >
          {AboutZigzag.map((item) =>
            item.type === "image" ? (
              <ImageGridItem key={item.id} xs={12} md={6}>
                Image
              </ImageGridItem>
            ) : (
              <TextGridItem ref={ref} key={item.id} xs={12} md={6}>
                {item.text.minititle ? (
                  <Typography
                    component={motion.div}
                    // initial={{ x: "50%" }}
                    // animate={isVisible ? { x: 0 } : { x: "50%" }}
                    // transition={{ duration: 0.5, delay: 0.1 }}
                    variant="h6"
                    sx={{ textTransform: "uppercase", color: "blue" }}
                  >
                    {item.text.minititle}
                  </Typography>
                ) : null}
                {item.text.subtitle ? (
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    // component={motion.div}
                    // initial={{ x: "50%" }}
                    // animate={isVisible ? { x: 0 } : { x: "50%" }}
                    // transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {item.text.subtitle}
                  </Typography>
                ) : null}
                {item.text.text1 ? (
                  <Typography
                    variant="h6"
                    component={motion.div}
                    initial={{ x: "50%" }}
                    animate={isVisible ? { x: 0 } : { x: "50%" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {item.text.text1}
                  </Typography>
                ) : null}
                {item.text.text2 ? (
                  <Typography
                    variant="h6"
                    component={motion.div}
                    initial={{ x: "50%" }}
                    animate={isVisible ? { x: 0 } : { x: "50%" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {item.text.text2}
                  </Typography>
                ) : null}
                {item.id === 6 ? (
                  <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="left"
                    component={motion.div}
                    initial={{ x: "50%" }}
                    animate={isVisible ? { x: 0 } : { x: "50%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleNavigate(item.navigate)}
                    >
                      {item.buttondata}
                    </Button>
                  </Stack>
                ) : null}
              </TextGridItem>
            )
          )}
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Company;
