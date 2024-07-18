import React, { Fragment, useEffect, useRef, useState } from "react";
import Page from "../../../components/common/Page";
import BannerComponent from "../../../components/common/BannerComponent";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  isTabs,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
  styled,
} from "@mui/material";
import MainHeading from "../../../components/common/InforHeading";
import GridsData from "../../../sections/services/Infor/sections/GridsData";
import InforUpgradesData from "../../../sections/services/Infor/sections/InforUpgradesData";
// import InforUpgradesData from "../../../sections/services/Infor/sections/InforUpgradesData";
import InforMigrationData from "../../../sections/services/Infor/sections/InforMigrationData";
import InforTraining from "../../../sections/services/Infor/sections/InforTraining";
import InforCustomizationData from "../../../sections/services/Infor/sections/InforCustomizationData";
import InforMCData from "../../../sections/services/Infor/sections/InforMCData";
import InforRecruitingData from "../../../sections/services/Infor/sections/InforRecruitingData";




export const SectionContainer = styled("section")(({ theme, bcolor }) => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  backgroundColor: bcolor,
  // position: "absolute",
  // top:"75px",
  // marginTop: "105px",
  // border: "1px solid gray",
  // padding: "10px",
  // marginBottom: "10px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
    height: "auto",
    width: "100%",
    // marginTop: "10px",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // isTab
    // height: "400px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {
    // Desktop
    // width: "100%",
    // height: "600px", 
  },
}));

function Infor() {
  const [hover, setHover] = useState(false);

  const [menuid, setMenuid] = useState(0);
  const [scrollid, setscrollid] = useState(0);

  const handleMouseEnters = (id) => {
    setMenuid(id);
    setHover(true);
  };

  const handleMouseLeaves = () => {
    setHover(false);
  };

  const handleNavigate = (id) => {
    setscrollid(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  // const logodata = [
  //   {
  //     dept: "Infor",
  //     id: 79,
  //     logoname: "Flex",
  //     logotype: "Customer",
  //   },
  //   {
  //     dept: "Infor",
  //     id: 79,
  //     logoname: "Flex",
  //     logotype: "Customer",
  //   },
  //   {
  //     dept: "Infor",
  //     id: 79,
  //     logoname: "Flex",
  //     logotype: "Customer",
  //   },
  // ];

  return (
    <Fragment>
      <Page
        name="Infor"
        description="Kapil Technologies, offers a wide array of Infor Services with Staffing."
        pagename="Infor Page"
      />
      <BannerComponent
        mainheight="550px"
        
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", position: "relative" }}
      >
        <GridsData
          Hover={hover}
          Menuid={menuid}
          Navigate={handleNavigate}
          MouseEnters={handleMouseEnters}
          MouseLeaves={handleMouseLeaves}
        />

        <SectionContainer id={1} bcolor="#FFFFFF">
          <InforUpgradesData />
        </SectionContainer>
        <SectionContainer id={2} bcolor="#F1F7FD">
          <InforMigrationData />
        </SectionContainer>
        <SectionContainer id={3} bcolor="#FFFFFF">
          <InforCustomizationData />
        </SectionContainer>
        <SectionContainer id={4} bcolor="#F1F7FD">
          <InforMCData />
        </SectionContainer>
        <SectionContainer id={6} bcolor="#Ffffff">
          <InforTraining />
        </SectionContainer>
        <SectionContainer bcolor="#F1F7FD">
          <InforRecruitingData />
        </SectionContainer>

        {/* {logos ? (
          <CustomerCarousel
            carouselname="Our Customers"
            carouselImages={logos}
          />
        ) : null} */}
      </Stack>
    </Fragment>
  );
}

export default Infor;
