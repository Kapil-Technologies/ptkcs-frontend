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

function Carousel({ carouselname, carouselImages, speed }) {
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
    }, speed); // Auto play every 3 seconds

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
      <Typography variant="h4" sx={{ fontWeight: "bold", pt: 2 }}>
        {carouselname}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "90%", height: "200px" }}
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
              ? 3
              : Desktop
              ? 4
              : Large
              ? 5
              : carouselImages.length,
          }).map((_, i, index) => {
            const itemIndex = (index + i) % carouselImages.length;
            const item = carouselImages[itemIndex];
            
            return (
              <Card
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "180px",
                  height: "180px",
                  border: "1px solid lightgray",
                  textAlign: "center",
                }}
                component={motion.div}
                item
              >
                {/* <img
                  src={`data:image/png;base64,${}`}
                  style={{
                    objectPosition: "center center",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                /> */}
               {item.name}
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

export default Carousel;
