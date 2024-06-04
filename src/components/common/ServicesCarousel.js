import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { IconLeftArrow, IconRightArrow } from "../../themes/Icons";
import { Link } from "react-router-dom";

function ServicesCarousel({ carouselname, carouselImages, speed }) {
  // --------------------------------------------------   Responsive

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const Desktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const Large = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));

  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // --------------------------------------------------   Responsive

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const scrollHeight = document.documentElement.scrollHeight;

      const scrollPosition = scrollTop + clientHeight;
      const isAtBottom = scrollHeight - scrollPosition < 50;

      if (isAtBottom) {
        handleNext();
      }
    };

    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto play every 3 seconds

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 3 }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", height: Mobile || Tab ? "auto" : "200px" }}
      >
        <Box
          onClick={handlePrev}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            cursor: "pointer",
          }}
        >
          <IconLeftArrow font="30px" />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ width: "85%", overflow: "hidden" }}
          spacing={2}
        >
          {Array.from({
            length: Mobile
              ? 1
              : Tab
              ? 2
              : Desktop
              ? 3
              : Large
              ? 3
              : carouselImages.length,
          }).map((_, i) => {
            const itemIndex = (index + i) % carouselImages.length;
            const item = carouselImages[itemIndex];

            return (
              <Card
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  width:
                    Mobile || Tab ? "100%" : XstraLarge ? "250px" : "230px",
                  height: "300px",
                  textAlign: "left",
                  px: 1,
                  py: 3,
                  border: "1px solid lightgray",
                  position: "relative",
                  gap:"20px"
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: "50%",
                    p: 1,
                    bgcolor: "secondary.OrneryTangerine",
                    position: "absolute",
                    right: 0,
                    top: "10px",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius:"20px"
                    
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "primary.color3",
                    }}
                  >
                    {item.count}
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  alignItems="left"
                  justifyContent="left"
                  spacing={1}
                >
                  <Typography variant="h5">{item.title}</Typography>
                  <Box
                    sx={{
                      width: "100px",
                      height: "5px",
                      background: "gray",
                      borderRadius: 2,
                    }}
                  />
                </Stack>
                <Typography variant="body1">{item.textline}</Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textDecoration: "none" }}
                  component={Link}
                  to={item.linkname}
                >
                  Dive Deep
                </Typography>
              </Card>
            );
          })}
        </Stack>

        <Box
          onClick={handleNext}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            cursor: "pointer",
          }}
        >
          <IconRightArrow font="30px" />
        </Box>
      </Stack>
    </Stack>
  );
}

export default ServicesCarousel;
