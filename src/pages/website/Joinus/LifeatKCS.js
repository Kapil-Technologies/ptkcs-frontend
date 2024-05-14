import React, { Fragment, useState, useEffect } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { useTheme } from "@emotion/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { IconDownArrow, IconUpArrow } from "../../../themes/Icons";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { getLAKTECH } from "../../../api/GetRequests";
import { useSnackbar } from "notistack";

const LAK = [
  {
    id: 1,
    domain: ["kapiltech.com", "kcs-tech.com", "ptkcs.com"],
    month: "January",
    year: 2023,
    images: [
      {
        id: 11,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 1",
        showimage: "yes",
      },
      {
        id: 12,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 2",
        showimage: "yes",
      },
      {
        id: 13,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 3",
        showimage: "yes",
      },
    ],
  },
  {
    id: 2,
    domain: ["kapiltech.com", "kcs-tech.com", "ptkcs.com"],
    month: "Febraury",
    year: 2023,
    images: [
      {
        id: 21,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 1",
        showimage: "yes",
      },
      {
        id: 22,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 2",
        showimage: "yes",
      },
      {
        id: 23,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 3",
        showimage: "yes",
      },
    ],
  },
  {
    id: 3,
    domain: ["kapiltech.com", "kcs-tech.com", "ptkcs.com"],
    month: "March",
    year: 2023,
    images: [
      {
        id: 31,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 1",
        showimage: "yes",
      },
      {
        id: 32,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 2",
        showimage: "yes",
      },
      {
        id: 33,
        imageUrl: "https://example.com/image3.jpg",
        imagetext: "Image 3",
        showimage: "yes",
      },
    ],
  },
];

export const Line = styled("hr")(({ theme, layercolor }) => ({
  width: "100%",
  color: "black",
}));

function LifeatKCS() {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  // const domain = useSelector((state) => state.domain.domain);
  const domain = "kapiltech.com";
  // console.log(domain);

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [expand, setExpand] = useState(false);
  const [imgid, setimgid] = useState(0);
  const [Limgid, setLimgid] = useState([]);

  const handleOpenEvent = (id) => {
    setimgid(id);
    setExpand(true);
  };

  useEffect(() => {
    // Automatically expand the accordion for "event name 1" on component mount
    handleOpenEvent(1);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    getLAKTECH()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          setLimgid(res.data.response);
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, []);

  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Page
        name="Life @ KTECH"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Life @ KTECH Page"
      />
      <MainContainer mainheight="400px">
        <Layer
          direction="column"
          alignItems="center"
          justifyContent="start"
          layercolor={theme.palette.terinary.main}
        >
          <Stack
            direction="column"
            alignItems="left"
            justifyContent="center"
            spacing={2}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ height: "inherit", textAlign: "left", p: 2 }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Life @ KTECH
            </Typography>

            <Typography variant="body1">
              Ability is your capacity for action. Motivation is the drive that
              leads you to explore and expand your abilities. Attitude is the
              mindset that sustains your motivation.
            </Typography>
          </Stack>
        </Layer>
      </MainContainer>

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "80%", p: 2, mt: 2 }}
        component={motion.div}
        initial={{ y: "50px" }}
        animate={{ y: 0 }}
        exit={{ y: "50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        spacing={3}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ width: "100%", p: 1 }}
          // key={item.id}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            component={Grid}
            container
            sx={{
              width: "500px",
              height: "250px",
              border: "1px solid lightgray",
            }}
            // spacing={2}
          >
            <Grid item>Image</Grid>
          </Stack>
        </Stack>
        {/* {LAK.map((item) =>
          item.domain.includes(domain) ? (
            <Stack
              key={item.id}
              sx={{ width: "100%", position: "relative" }}
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Stack
                sx={{ width: "100%", position: "relative" }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    backgroundColor: "white",
                    px: 1,
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  {item.month} {item.year}
                </Typography>
                <Line />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ px: 1, cursor: "pointer" }}
                  onClick={() => handleOpenEvent(item.id)}
                >
                  {expand && imgid === item.id ? (
                    <IconUpArrow font="20px" />
                  ) : (
                    <IconDownArrow font="20px" />
                  )}
                </Stack>
              </Stack>
              <Stack
                direction={Mobile || Tab ? "column" : "row"}
                alignItems="center"
                justifyContent={Mobile || Tab ? "center" : "space-evenly"}
                sx={{
                  width: "90%",
                  height: expand ? "auto" : 0,
                  // border: "1px solid #d3e1ea",
                  p: expand && imgid === item.id ? 1 : 0,
                }}
              >
                {expand && imgid === item.id
                  ? item.images.map((item) => (
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="space-evenly"
                        sx={{ width: "100%", p: 1 }}
                        key={item.id}
                      >
                        {item.showimage === "yes" ? (
                          <Stack
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            component={Grid}
                            container
                            sx={{
                              width: "100%",
                              height: "200px",
                              border: "1px solid #d3e1ea",
                            }}
                            // spacing={2}
                          >
                            <Grid item>{item.imagetext}</Grid>
                          </Stack>
                        ) : null}
                      </Stack>
                    ))
                  : null}
              </Stack>
            </Stack>
          ) : null
        )} */}
      </Stack>
    </Stack>
  );
}

export default LifeatKCS;
