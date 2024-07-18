import React, { useState, useEffect } from "react";
import { Box, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconLeftArrow,
  IconRightArrow,
} from "../../../../themes/Icons";
import { getWebPicture } from "../../../../api/Main";

function InforCarousel({ bcolor, carouselImages, speed }) {
  // Responsive breakpoints
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isLarge = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isXtraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

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

    
     const [WebPicture, setWebPicture] = useState([]);

     useEffect(() => {
       getWebPicture()
         .then((res) => {
           // console.log(res);
           const respdata = res.data.response;
           setWebPicture(respdata);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight } = document.documentElement;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const scrollPosition = scrollTop + clientHeight;
  //     const isAtBottom = scrollHeight - scrollPosition < 50;

  //     if (isAtBottom) {
  //       handleNext();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 3 }}
      spacing={2}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "90%", height: "auto" }}
        spacing={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ width: "100%", overflow: "hidden" }}
          spacing={2}
        >
          {Array.from({
            length:
              isMobile || isTab || isDesktop || isLarge || isXtraLarge
                ? 1
                : carouselImages.length,
          }).map((_, i) => {
            const itemIndex = (index + i) % carouselImages.length;
            const item = carouselImages[itemIndex];

            return (
              <Card
                key={itemIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  // height: isMobile || isTab ? "auto" : "380px",
                  // border: "1px solid lightgray",
                  textAlign: "center",
                  bgcolor: "transparent",
                  flexDirection: isMobile || isTab ? "column" : "row",
                }}
                spacing={2}
                component={motion.div}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "400px", height: "300px" }}
                >
                  {WebPicture.filter((i) => i.name === item.image).map((i) => {
                    // console.log(i)
                    return (
                      <img
                        key={i.name}
                        style={{ height: "100%", width: "100%" }}
                        alt={i.name}
                        src={`data:image/png;base64,${i.image}`}
                      />
                    );
                  })}
                </Stack>
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  sx={{
                    height: isMobile || isTab ? "auto" : "300px",
                    py: "10px",
                    width: isMobile || isTab ? "100%" : "45%",
                    px: "10px",
                  }}
                  spacing={2}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#CD2028",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {item.type === "text" ? (
                    <Stack
                      direction="column"
                      alignItems="left"
                      justifyContent="left"
                      sx={{ width: "100%" }}
                      spacing={2}
                    >
                      <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        {item.text1}
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        {item.text2 ? item.text2 : null}
                      </Typography>
                    </Stack>
                  ) : item.type === "list" ? (
                    item.list.map((item) => (
                      <Stack
                        key={item.id}
                        direction="row"
                        alignItems="flex-start"
                        justifyContent={isMobile || isTab ? "center" : null}
                        sx={{ width: "100%" }}
                        spacing={1}
                      >
                        <IconArrowRight
                          color="#CD2028"
                          sx={{
                            // mt: "5px",
                            pt: "4px",
                            width: "5%",
                            fontWeight: "bold",
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            width: isMobile || isTab ? "90%" : "85%",
                            textAlign: "left",
                          }}
                        >
                          {item.li}
                        </Typography>
                      </Stack>
                    ))
                  ) : null}
                </Stack>
              </Card>
            );
          })}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Box
            onClick={handlePrev}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              cursor: "pointer",
              bgcolor: "#CD2028",
              color: "white",
            }}
          >
            <IconLeftArrow fontSize="30px" />
          </Box>
          <Box
            onClick={handleNext}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              cursor: "pointer",
              bgcolor: "#CD2028",
              color: "white",
            }}
          >
            <IconRightArrow fontSize="30px" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InforCarousel;
