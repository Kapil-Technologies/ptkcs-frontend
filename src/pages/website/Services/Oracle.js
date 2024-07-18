import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
  useThemeProps,
  useMediaQuery,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";
import BannerComponent from "../../../components/common/BannerComponent";
import { offerings } from "../../../mock/OracleMock";
import WebPictureComponent from "../../../components/common/WebPictureComponent";
import MainTitle from "../../../components/common/MainTitle";

const InforCustomers = [
  {
    id: 1,
    logoname: "Customer Name 1",
    logo: "Customer Image 1",
  },
  {
    id: 2,
    logoname: "Customer Name 2",
    logo: "Customer Image 2",
  },
  {
    id: 3,
    logoname: "Customer Name 3",
    logo: "Customer Image 3",
  },
  {
    id: 4,
    logoname: "Customer Name 4",
    logo: "Customer Image 4",
  },
  {
    id: 5,
    logoname: "Customer Name 5",
    logo: "Customer Image 5",
  },
  {
    id: 6,
    logoname: "Customer Name 6",
    logo: "Customer Image 6",
  },
];

const TextGridItem = styled(Grid)(({ theme, backcolor, justify, tcolor }) => ({
  display: "flex",
  alignItems: justify,
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "350px",
  padding: "10px",
  width: "100%",
  backgroundColor: backcolor,
  gap: "10px",
  color: tcolor,
  // border: "1px solid blue",

  [theme.breakpoints.between("xs", "sm")]: {
    height: "auto",
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    // height: "350px",
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

function Oracle() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
      <Page name="Oracle" description=" " pagename="Oracle Page" />

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
            Oracle
          </Stack>
        }
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: Mobile || Tab ? "90%" : "80%", px: "20px", pt: "10px" }}
          spacing={2}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", px: 1, textAlign: "justify" }}
          >
            Why Us ?
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            Our organisation has established a strong reputation for providing
            cutting-edge Oracle Netsuite software solutions that streamline
            various business operations. Significant improvements have been
            observed in key performance indicators for businesses that form
            partnerships with us.
          </Typography>

          <Typography
            variant={Mobile || Tab ? "h5" : "h4"}
            sx={{ fontWeight: "bold" }}
          >
            WHAT DO WE OFFER ?
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
            {offerings.map((item) =>
              item.type === "image" ? (
                <WebPictureComponent
                  key={item.id}
                  reqheight="350px"
                  title={item.mtitle}
                />
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
                  <MainTitle title={item.text.mtitle} />

                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    {item.text.subtitle}
                  </Typography>
                </TextGridItem>
              )
            )}
          </Grid>
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Oracle;
