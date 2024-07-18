import React, { useState, useEffect } from "react";
import { Box, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { IconLeftArrow, IconRightArrow } from "../../themes/Icons";

function Carousel({ carouselname, carouselImages, speed = 800 }) {
  // Responsive breakpoints
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isLarge = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // State for current carousel index
  const [index, setIndex] = useState(0);

  // Handlers for navigation
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

  // Auto play and scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const scrollPosition = scrollTop + clientHeight;
      const isAtBottom = scrollHeight - scrollPosition < 50;
      if (isAtBottom) {
        handleNext();
      }
    };

    const interval = setInterval(handleNext, speed);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [speed]);

  // Number of items to display based on screen size
  const itemsToDisplay = isMobile
    ? 1
    : isTablet
    ? 3
    : isDesktop
    ? 4
    : isLarge
    ? 5
    : carouselImages.length;

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
          {Array.from({ length: itemsToDisplay }).map((_, i) => {
            const itemIndex = (index + i) % carouselImages.length;
            const item = carouselImages[itemIndex];

            return (
              <Card
                key={item.id}
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
              >
                {item.id}
                {console.log(item.logoname)}
                {item.src}
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
