import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  IconButton,
  Card,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowTop,
  IconLeftArrow,
} from "../../themes/Icons";
import { styled } from "@mui/material/styles";
import { getIndustries } from "../../api/GetRequests";

const IndustryData = [
  {
    id: 1,
    industryname: "",
    industrytagline: "",
    induscolor: "",
    servicesprovidedfor: "",
    industryimage: "",
    displayimage: "Yes",
  },
  {
    id: 2,
    industryname: "",
    industrytagline: "",
    induscolor: "",
    servicesprovidedfor: "",
    industryimage: "",
  },
  {
    id: 3,
    industryname: "",
    industrytagline: "",
    induscolor: "",
    servicesprovidedfor: "",
    industryimage: "",
  },
  {
    id: 4,
    industryname: "",
    industrytagline: "",
    induscolor: "",
    servicesprovidedfor: "",
    industryimage: "",
  },
  {
    id: 5,
    industryname: "",
    industrytagline: "",
    induscolor: "",
    servicesprovidedfor: "",
    industryimage: "",
  },
];

export const MainAccordianContainer = styled(Card)(({ theme, expand }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "300px",
  width: expand ? "100%" : "80px",
  // width: "100%",
  color: "black",
  padding: "5px",
  cursor: "pointer",
  transition: "width 0.8s",
  position: "relative",
  border: "1px solid lightgray",

  [theme.breakpoints.between("xs", "md")]: {
    height: expand ? "200px" : "60px",
    width: "99%",
    transition: "height 0.8s",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

export const TextContainer = styled(Stack)(({ theme, expand }) => ({
  // p: 1,
  position: expand ? "absolute" : "absolute",
  bottom: expand ? "30px" : "40px",
  left: expand ? "30px" : 0,
  right: 0,
  top: expand ? null : "50px",
  transform: !expand ? "rotate(270deg)" : null,
  // border: "1px solid blue",
  width: expand ? null : "100%",
  height: expand ? null : null,

  [theme.breakpoints.between("xs", "md")]: {
    transform: !expand ? "rotate(0deg)" : null,
    position: expand ? "absolute" : "relative",
    bottom: expand ? "30px" : 0,
    left: expand ? "30px" : 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },
}));

// export const MainAccordianContainer = styled(Card)(({ theme, expand }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-evenly",
//   height: "300px",
//   width: expand ? "100%" : "80px",
//   color: "black",
//   padding: "5px",
//   cursor: "pointer",
//   transition: "width 0.8s",
//   position: "relative",
//   border: "1px solid lightgray",

//   [theme.breakpoints.between("xs", "md")]: {
//     height: expand ? "200px" : "60px",
//     width: "99%",
//     transition: "height 0.8s",
//   },

//   [theme.breakpoints.between("md", "lg")]: {
//     // Desktop
//   },
// }));

// export const TextContainer = styled(Stack)(({ theme, expand }) => ({
//   position: "absolute",
//   bottom: "30px",
//   left: expand ?"30px" : 0,
//   right: "0",
//   transform: !expand ? "rotate(270deg)" : null,
//   border: "1px solid blue",
//   width: "100%",
//   height: "auto",

//   [theme.breakpoints.between("xs", "md")]: {
//     transform: !expand ? "rotate(0deg)" : null,
//     position: "absolute",
//     bottom: "30px",
//     left: "0",
//     right: "0",
//   },

//   [theme.breakpoints.between("md", "lg")]: {
//     // Desktop
//   },
// }));

function Industries() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [expanded, setExpanded] = React.useState(1);
  const handleChange = (id) => () => {
    setExpanded(id);
  };


 

  return (
    <Stack
      direction={Mobile || Tab ? "column" : "row"}
      // direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: Mobile || Tab ? "98%" : "100%",
        height: Mobile || Tab ? "auto" : "300px",
        // border: "1px solid lightgray",
        position: "relative",
        py: 1,
      }}
    >
      {IndustryData.map((item, index) => (
        <MainAccordianContainer
          key={item.id}
          expand={expanded === item.id}
          onClick={handleChange(item.id)}
        >
          <TextContainer
            direction={expanded !== item.id ? "row" : "column"}
            alignItems={expanded !== item.id ? "center" : "left"}
            justifyContent={expanded !== item.id ? "flex-end" : "left"}
            spacing={expanded !== item.id ? 5 : 2}
            expand={expanded === item.id}
          >
            <Stack
              direction="column"
              alignItems="left"
              justifyContent="center"
              sx={
                {
                  // p: 1,
                  // border:'1px solid blue',
                }
              }
            >
              {expanded === item.id ? (
                <IconArrowRight font="25px" />
              ) : (
                <IconArrowTop font="25px" />
              )}
            </Stack>
            {expanded === item.id ? (
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", width: "100%" }}
              >
                Industry Name
              </Typography>
            ) : (
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", width: "100%" }}
              >
                Aerospace
              </Typography>
            )}
          </TextContainer>
        </MainAccordianContainer>
      ))}
    </Stack>
  );
}

export default Industries;
