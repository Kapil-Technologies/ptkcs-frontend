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
import React, { Fragment, useEffect, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowTop,
  IconLeftArrow,
} from "../../themes/Icons";
import { styled } from "@mui/material/styles";
import { getIndustries } from "../../api/GetRequests";
import { useLocation } from "react-router-dom";

export const MainAccordianContainer = styled(Card)(
  ({ theme, expand, isFirstItem }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "300px",
    width: expand || isFirstItem ? "100%" : "80px",
    color: "black",
    padding: "1.5px",
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
  })
);

export const TextContainer = styled(Stack)(({ theme, expand }) => ({
  position: expand ? "absolute" : "absolute",
  bottom: expand ? "30px" : "40px",
  left: expand ? "30px" : 0,
  right: 0,
  top: expand ? null : "50px",
  transform: !expand ? "rotate(270deg)" : null,
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

function Industries() {
  const { pathname } = useLocation();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (id) => () => {
    setExpanded(id);
  };

  const [industrydata, setIndustrydata] = useState([]);

  useEffect(() => {
    getIndustries()
      .then((res) => {
        console.log(res);
        const resdata = res.data.response;
        const filtereddata = resdata.filter((item) =>
          item.pagepath.includes(pathname)
        );
        console.log(filtereddata);
        setIndustrydata(filtereddata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {industrydata.length === 0 ? null : (
        <Stack
          direction={Mobile || Tab ? "column" : "row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: Mobile || Tab ? "98%" : "90%",
            height: Mobile || Tab ? "auto" : "300px",
            position: "relative",
            py: 1,
          }}
        >
          {industrydata.map((item, index) => (
            <MainAccordianContainer
              key={item.id}
              expand={expanded === item.id}
              onClick={handleChange(item.id)}
              isFirstItem={index === 0 && expanded === item.id}
            >
              {expanded === item.id || index === 0 ? (
                <img
                  src={`data:image/png;base64,${item.indusimage}`}
                  alt={item.industryname}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : null}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor:
                    expanded === item.id ||
                    (index === 0 && expanded === item.id)
                      ? "rgba(0,0,0,0.3)"
                      : item.colorname,
                  padding: "5px",
                  position: "absolute",
                }}
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
                    sx={{
                      color: "white",
                    }}
                  >
                    {expanded === item.id ? (
                      <IconArrowRight font="25px" />
                    ) : (
                      <IconArrowTop font="25px" />
                    )}
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", width: "100%", color: "white" }}
                  >
                    {item.industryname}
                  </Typography>
                </TextContainer>
              </Stack>
            </MainAccordianContainer>
          ))}
        </Stack>
      )}
    </Fragment>
  );
}

export default Industries;
