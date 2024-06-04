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
import BannerComponent from "../../../components/common/BannerComponent";
import { offerings } from "../../../mock/whatwedo/consulting/OracleMock";
import {
  ImageGridItem,
  TextGridItem,
} from "./Otherservices/DigitalTransformation";

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
          sx={{ width:Mobile || Tab ?"100%" : "80%", pX: "20px" }}
          spacing={2}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            WHY US ?
          </Typography>
          <Typography variant="h6" sx={{textAlign: Mobile || Tab ? "center" :"justify"}}>
            Our organisation has established a strong reputation for providing
            cutting-edge Oracle Netsuite software solutions that streamline
            various business operations. Significant improvements have been
            observed in key performance indicators for businesses that form
            partnerships with us.
          </Typography>

          <Typography variant={ Mobile || Tab ? "h5" :"h4"} sx={{ fontWeight: "bold" }}>
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
                <ImageGridItem item xs={12} md={6}>
                  Image
                </ImageGridItem>
              ) : (
                <TextGridItem item xs={12} md={6} key={item.id}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" ,fontSize:'28px'}}>
                    {item.text.mtitle}
                  </Typography>
                  <Typography variant="body1" sx={{textAlign:'justify'}}>{item.text.subtitle}</Typography>
                 
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
