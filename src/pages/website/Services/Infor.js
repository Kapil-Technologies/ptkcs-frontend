import React, { Fragment, useContext } from "react";
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
import { InforApproach, InforServices } from "../../../mock/whatwedo/consulting/InforMock";
import { Icons } from "../../../App";

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

function Infor() {
  const Icondata = useContext(Icons);
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
            Infor
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
          sx={{ width: "80%", px: "20px", pt: "10px", pb: "5px" }}
          spacing={2}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Why Choose Kapil Tech as your Infor Service Provider
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", width: "9 0%" }}
          >
            We are the preeminent and most trusted alliance partner of Infor,
            assisting you in transforming your business, increasing efficiency,
            and ensuring customer satisfaction. Our Infor specialists are
            dedicated to assisting clients in achieving their business goals
            through the provision of world-class solutions and services.
          </Typography>

          <Typography variant="body1">
            We collaborate with Infor to complement and provide services for the
            Infor portfolio of solutions:
          </Typography>

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {InforServices.map((item) => (
              <Card
                component={Grid}
                item
                xs={12}
                md={3.2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  height: Mobile || Tab ? "auto" : "300px",
                  border: "1px solid lightgray",
                  p: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="left"
                  sx={{
                    p: 1,
                    fontWeight: "bold",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  {Icondata.filter((i) => i.iconname.includes(item.icon)).map(
                    (i) => (
                      <img
                        key={i.iconname}
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        alt={i.iconname}
                        src={`data:image/png;base64,${i.icon}`}
                      />
                    )
                  )}
                </Stack>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.text}
                </Typography>
              </Card>
            ))}
          </Grid>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              width: "70%",
              py: 2,
            }}
          >
            BaaN ERP, Infor ERP LN & Cloud Suite, Infor ERP M3 and Infor ERP
            CSI/Syteline capabilities for Infor ERP and Infor OS, Infor Supplier
            Exchange, Infor Factory Track and Infor WMS capabilities for other
            Infor services.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", p: 1 }}>
            Our Approach
          </Typography>

          <Typography variant="h6" sx={{ width: "80%" }}>
            BaaN ERP, Infor ERP LN & Cloud Suite, Infor ERP M3 and Infor ERP
            CSI/Syteline capabilities for Infor ERP and Infor OS, Infor Supplier
            Exchange, Infor Factory Track and Infor WMS capabilities for other
            Infor services.
          </Typography>
          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {InforApproach.map((item) => (
              <Card
                component={Grid}
                item
                xs={12}
                md={3.2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  height: Mobile || Tab ? "auto" : "300px",
                  border: "1px solid lightgray",
                  p: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="left"
                  sx={{
                    p: 1,
                    fontWeight: "bold",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  {Icondata.filter((i) => i.iconname.includes(item.icon)).map(
                    (i) => (
                      <img
                        key={i.iconname}
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        alt={i.iconname}
                        src={`data:image/png;base64,${i.icon}`}
                      />
                    )
                  )}
                </Stack>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.text}
                </Typography>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Infor;
