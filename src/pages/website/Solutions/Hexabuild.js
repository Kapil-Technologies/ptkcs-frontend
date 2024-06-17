import React, { Fragment, useContext } from "react";
import Page from "../../../components/common/Page";
import BannerComponent from "../../../components/common/BannerComponent";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import MainHeading from "../../../components/common/MainHeading";
import Industries from "../../../sections/Homepage/Industries";
import {
  HexabuildApproach,
  Hexabuildtask,
  StartArray,
} from "../../../mock/whatwedo/solutions/HexabuildMock";
import { Icons } from "../../../App";
import IconComponent from "../../../components/common/IconComponent";

function Hexabuild() {
  const theme = useTheme();
  const Icondata = useContext(Icons);
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
          ></Stack>
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
          sx={{ width: Mobile || Tab ? "90%" : "80%", p: "5px" }}
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

          <Grid
            container
            columnGap={1}
            rowGap={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: Mobile || Tab ? "auto" : "400px",
              mb: "10px",
            }}
          >
            {StartArray.map((item) => (
              <Grid
                key={item.id}
                item
                xs={11}
                md={3.8}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  height: "350px",
                  border: "1px solid lightgray",
                }}
                component={Card}
              >
                <IconComponent title={item.title} size="50px" />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: "justify",
                    width: "100%",
                  }}
                >
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

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

          <Grid
            container
            columnGap={1}
            rowGap={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: Mobile || Tab ? "auto" : "auto",
              mb: "10px",
            }}
          >
            {Hexabuildtask.map((item) => (
              <Grid
                key={item.id}
                item
                xs={11}
                md={3.8}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  height: "200px",
                  border: "1px solid lightgray",
                }}
                component={Card}
              >
                <IconComponent title={item.icon} size="60px" />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <MainHeading Heading="Our Approach" />

          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {HexabuildApproach.map((item) => (
              <Card
                key={item.id}
                component={Grid}
                xs={12}
                md={10}
                sx={{
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  p: 2,
                  height: "auto",
                  gap: "10px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    p: 1,
                    bgcolor: "primary.BlueSonki",
                    width: Mobile || Tab ? "30%" : "10%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {item.step}
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {item.text}
                </Typography>
              </Card>
            ))}
          </Grid>

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
