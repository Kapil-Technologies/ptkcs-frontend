import React, { Fragment } from "react";
import Page from "../../../components/common/Page";
import BannerComponent from "../../../components/common/BannerComponent";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import MainHeading from "../../../components/common/MainHeading";
import Industries from "../../../sections/Homepage/Industries";

function Hexabuild() {
  const theme = useTheme();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  return (
    <Fragment>
      <Page name="Hexabuild" pagename="Hexabuild Page" description="" />
      <BannerComponent
        mainheight="500px"
        layercolor="rgba(0,0,0,0.3)"
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
            Hexabuild
          </Stack>
        }
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: Mobile || Tab ? "90%" : "80%", p: "10px" }}
        >
          <MainHeading Heading="Capabilities and Tech Stack" />
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Construction companies frequently encounter complex challenges
            pertaining to the management of their construction projects. Our
            Hexabuild solution facilitates the resolution of their operational
            obstacles through the provision of an exclusive software suite that
            enables them to meticulously oversee every phase of their projects.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            The specialised suite, developed by Kapil IT Solutions, provides
            assistance in various operational areas, including resource
            procurement, inventory management, financial administration, project
            management, monitoring construction progress without interruption
            and conducting corresponding work order and Bill of Quantities (BOQ)
            reviews, accounting, auditing, and MIS report generation to optimise
            the utilisation of analytics and streamline business processes. Our
            software solution assists the construction industry in achieving
            greater profitability and efficiency. Frontend and backend
            development- dotNet, and the database is Postgres.
          </Typography>

          <p>List</p>

          <Typography
            variant="body1"
            sx={{
              width: "90%",
              textAlign: Mobile || Tab ? "justify" : "center",
            }}
          >
            The product, Hexabuild, is well-known internationally and is
            utilised effectively in routine tasks such as
          </Typography>

          <p>List</p>

          <MainHeading Heading="Our Approach" />

          <p>List</p>

          <MainHeading Heading="Industry Focus" />

          <Typography
            variant="body1"
            sx={{
              width: "90%",
              textAlign: Mobile || Tab ? "justify" : "center",
            }}
          >
            By leveraging Hexabuild software, construction, and real estate,
            professionals can enhance project efficiency, improve collaboration,
            control costs, and ultimately deliver higher-quality projects on
            time and within budget.
          </Typography>

          <Industries />
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Hexabuild;
