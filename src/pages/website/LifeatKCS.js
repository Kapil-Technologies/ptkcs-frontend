import React, { Fragment } from "react";
import Page from "../../components/common/Page";
import { Layer, MainContainer } from "../../sections/Banners/Home";
import { useTheme } from "@emotion/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { IconDownArrow } from "../../themes/Icons";
import { styled } from "@mui/material/styles";

const LAK = [
  {
    id: 1,
    eventname: "event name 1",
    domain: "kapiltech.com",
    image: "",
    showimage: "Yes",
    foldername: "event name 1",
  },
  {
    id: 2,
    eventname: "event name 2",
    domain: "kapiltech.com",
    image: "",
    showimage: "Yes",
    foldername: "event name 2",
  },
  {
    id: 3,
    eventname: "event name 3",
    domain: "kapiltech.com",
    image: "",
    showimage: "Yes",
    foldername: "event name 3",
  },
];

export const Line = styled("hr")(({ theme, layercolor }) => ({
  width: "100%",
  color: "black",
}));

function LifeatKCS() {
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Page
        name="Life @ PT KCS"
        description="PT KCS Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
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
            sx={{ height: "inherit", textAlign: "left" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Life @ PT KCS
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
        {LAK.map((item) => (
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
                px: 2,
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {item.foldername}
            </Typography>
            <Line />
            <IconDownArrow />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default LifeatKCS;
