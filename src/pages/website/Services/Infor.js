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
import Carousel from "../../../components/common/Carousel";
import WhyKapilTech from "../../../components/common/WhyKapilTech";
import { Homepagelist } from "../../../mock/Homepage";
import { SectionContainer } from "./SAP";
import { styled } from "@mui/material/styles";
import { InforData, InforSyteline } from "../../../mock/Services";
import Integrationcapabilities from "../../../sections/services/Infor/Integrationcapabilities";
import LNInfor from "../../../sections/services/Infor/LNInfor";
import Inforsyteline from "../../../sections/services/Infor/Inforsyteline";

const InforCustomers = [
  {
    id: 1,
    name: "Customer Name 1",
    src: "Customer Image 1",
  },
  {
    id: 2,
    name: "Customer Name 2",
    src: "Customer Image 2",
  },
  {
    id: 3,
    name: "Customer Name 3",
    src: "Customer Image 3",
  },
  {
    id: 4,
    name: "Customer Name 4",
    src: "Customer Image 4",
  },
  {
    id: 5,
    name: "Customer Name 5",
    src: "Customer Image 5",
  },
  {
    id: 6,
    name: "Customer Name 6",
    src: "Customer Image 6",
  },
];

export const MainCircle = styled(Stack)(({ theme, layercolor }) => ({
  width: "250px",
  height: "250px",
  border: "3px dashed gray",
  borderRadius: "50%",
  position: "relative",
  // borderRight: " 2px dashed blue",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

// export const InnerCircle = styled(Stack)(({ theme, layercolor }) => ({
//   position: "absolute",
//   width: "230px",
//   height: "230px",
//   border: "2px dashed gray",
//   borderRadius: "50%",
//   margin:"auto",

//   [theme.breakpoints.between("xs", "md")]: {
//     //  mobile
//   },
// }));

export const InnerCircle = styled(Stack)(({ theme, layercolor }) => ({
  position: "absolute",
  width: "150px",
  height: "150px",
  border: "2px dotted gray",
  borderRadius: "50%",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const Line1 = styled(Stack)(({ theme, countid }) => ({
  position: "absolute",
  width: "60px",
  height: "2px",
  background: "gray",
  borderRadius: "5px",
  top: "24.5px",
  right: countid === 4 ? "50px" : "-60px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const Line2 = styled(Stack)(({ theme, countid }) => ({
  position: "absolute",
  width: "2px",
  height: "60px",
  background: "gray",
  borderRadius: "5px",
  top: countid === 3 ? "50px" : "-60px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const TextContainer1 = styled(Card)(({ theme, countid }) => ({
  width: "400px",
  height: "auto",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  position: "absolute",
  left: "-200px",
  top: countid === 1 ? "-100px" : "60px",
  border: "1px solid #d3e1ea",
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  padding: "10px",
}));

export const TextContainer2 = styled(Card)(({ theme, countid }) => ({
  width: "400px",
  height: "auto",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  position: "absolute",
  border: "1px solid #d3e1ea",
  top: "-60px",
  left: countid === 2 ? "50px" : countid === 4 ? "-420px" : 0,
  padding: "10px",
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const MiniCircles = styled(Stack)(
  ({
    theme,
    layercolor,
    positionTop,
    positionBottom,
    positionRight,
    positionLeft,
    textcolor,
    countid,
    r1,
    r2,
  }) => ({
    position: "absolute",
    width: "50px",
    height: "50px",
    border: "5px  solid white",
    borderRadius: "50%",
    backgroundColor: layercolor,
    color: textcolor,
    border: "1px solid gray",

    zIndex: 1,
    "&:nth-child(1)": {
      top: "-25px",
    },

    "&:nth-child(3)": {
      right: "-25px",
    },
    "&:nth-child(5)": {
      left: "-25px",
    },
    "&:nth-child(7)": {
      bottom: "-25px",
    },

    [theme.breakpoints.between("xs", "md")]: {
      //  mobile
    },
  })
);

function Infor() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
      <Page
        name="Infor"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Infor Page"
      />

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
            Image
          </Stack>
        </Layer>
      </MainContainer>

      <SectionContainer>
        {Mobile || Tab ? (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Infor Services Provided by Kapil Tech
            </Typography>
            {InforData.map((item) => (
              <Stack
                direction="column"
                alignItem="left"
                justifyContent="left"
                component={Card}
                sx={{
                  marginBottom: "10px",
                  border: "1px solid #d3e1ea",
                  textAlign: "left",
                  p: 1,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  width: "90%",
                  height: "auto",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="left"
                  spacing={2}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: "80px",
                      height: "80px",
                      border: "5px solid white",
                      borderTopRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderTopLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      background: item.bgcolor,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.text}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    alignItem="flex-start"
                    justifyContent="left"
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    {item.list.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                        key={item.id}
                      >
                        <Typography variant="body1">{item.id}</Typography>
                        <Typography variant="body1">.</Typography>
                        <Typography variant="body1">{item.title}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        ) : (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "auto" }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", p: 2 }}
            >
              Infor Services Provided by Kapil Tech
            </Typography>
            <Grid
              container
              columnGap={4}
              rowGap={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                p: 1,
              }}
            >
              {InforData.map((item) => (
                <Card
                  key={item.id}
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "250px",
                    height: "300px",
                    border: "1px solid gray",
                    p: 1,
                    position: "relative",

                    // borderTopLeftRadius: "100%",
                    // borderTopRightRadius: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: "80px",
                      height: "50px",
                      // border: "5px solid white",
                      background: item.bgcolor,
                      paddingTop: 0,
                      marginTop: -1,
                      mb: "50px",
                      position: "relative",
                    }}
                  >
                    <Typography variant='h5' sx={{fontWeight:'bold',position:"absolute",bottom:0}}>
                      {item.count}
                   </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "0",
                        height: "0",
                        borderLeft: "40px solid transparent",
                        borderRight: "40px solid transparent",
                        borderTop: "40px solid lightgray",
                        top:"50px"
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {item.title}
                  </Typography>
                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                    spacing={1}
                  >
                    {item.list.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="left"
                        spacing={0.5}
                        key={item.id}
                      >
                        <Typography variant="body1">{item.id}</Typography>
                        <Typography variant="body1">.</Typography>
                        <Typography variant="body1">{item.title}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        )}
      </SectionContainer>
      <LNInfor />
      <Inforsyteline />
      <Integrationcapabilities />

      {/* <Carousel
        carouselname="Meet some of our Infor customers."
        carouselImages={InforCustomers}
      /> */}
    </Fragment>
  );
}

export default Infor;
