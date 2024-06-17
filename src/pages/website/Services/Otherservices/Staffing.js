import React, { Fragment, useContext, useRef } from "react";
import Page from "../../../../components/common/Page";
import BannerComponent from "../../../../components/common/BannerComponent";
import {
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Capabilities,
  CapabilitiesElobaration,
  StaffingApporach,
  TechnologyStack,
  whyus,
} from "../../../../mock/whatwedo/others/StaffingMock";
import { IconDot } from "../../../../themes/Icons";
import { Icons } from "../../../../App";
import { enquiryfrom, isNavigated } from "../../../../redux/slices/Enquiry";
import { Paths } from "../../../../config";
import { useDispatch } from "react-redux";

const SectionContainer = styled("section")(({ theme }) => ({
  width: "90%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",

  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
  },

  [theme.breakpoints.up("xl")]: {},
}));

const ImageGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "500px",
  padding: "10px",
  // border: "1px solid blue",
  backgroundColor: theme.palette.terinary.main,

  [theme.breakpoints.between("xs", "md")]: {},

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const TextGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "500px",
  padding: "20px",
  backgroundColor: "#F3F2F5",
  // border: "1px solid blue",

  [theme.breakpoints.between("xs", "md")]: {
    height: "auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

function Staffing() {
  const Icondata = useContext(Icons);
  const theme = useTheme();
    const dispatch = useDispatch();
  const Navigate = useNavigate();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const Workforce = useRef(null);
  const Directhire = useRef(null);
  const Contract = useRef(null);

  const handleNavigate = () => {
    // console.log(pagename, navigate);
    dispatch(enquiryfrom("Staffing"));
    dispatch(isNavigated("Yes"));
    Navigate(Paths.contactus);
  };

  const scrolltoSection = (item) => {
    console.log(item);
    if (item === "workforce") {
      Workforce.current.scrollIntoView({ behavior: "smooth" });
    } else if (item === "directhire") {
      Directhire.current.scrollIntoView({ behavior: "smooth" });
    } else if (item === "contract") {
      Contract.current.scrollIntoView({ behavior: "smooth" });
    } else return;
  };

  return (
    <Fragment>
      <Page name="IT Staffing" pagename="Staffing Page" description="" />
      <BannerComponent
        mainheight="500px"
        layercolor="rgba(0,0,0,0.2)"
        textdispaly={
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={1}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ textAlign: "left", height: "inherit", padding: "20px" }}
          >
            <Typography
              variant={Mobile || Tab ? "body2" : "h4"}
              sx={{
                fontWeight: "bold",
                width: Mobile || Tab ? "60%" : "50%",

                color: "primary.main",
              }}
            >
              Redefine workforce consulting with Talent acquisition and
              Management strategies that boost efficiency.
            </Typography>

            <Button
              variant="contained"
              sx={{ bgcolor: "primary.BlueSonki" }}
              onClick={handleNavigate}
            >
              Contact us
            </Button>
          </Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        spacing={3}
      >
        <SectionContainer sx={{ py: "5px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", p: 1, textAlign: "center" }}
          >
            Our 360-degree strategy ensures seamless integration, fostering
            excellence, and unmatched client value
          </Typography>
          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              height: Mobile || Tab ? "auto" : "280px",
              mb: "10px",
            }}
          >
            {Capabilities.map((item) => (
              <Grid
                key={item.id}
                item
                xs={11}
                md={3.3}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  height: "230px",
                  border: "1px solid lightgray",
                }}
                component={Card}
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
                  {Icondata.filter((i) => i.iconname.includes(item.title)).map(
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
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => {
                    scrolltoSection(item.knowmore);
                  }}
                >
                  Know More
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction="column"
            alignContent="center"
            justifyContent="center"
            spacing={2}
            sx={{ width: Mobile || Tab ? "90%" : "80%" }}
          >
            {CapabilitiesElobaration.map((item) => (
              <Stack
                key={item.id}
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{
                  width: "100%",
                  height: Mobile || Tab ? "auto" : "99vh",
                  // border: "1px solid blue",
                  py: 1,
                }}
                ref={
                  item.title === "Workforce Consulting"
                    ? Workforce
                    : item.title === "Direct-hire Recruiting"
                    ? Directhire
                    : item.title === "Contract Staffing"
                    ? Contract
                    : null
                }
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    width: Mobile || Tab ? "100%" : "90%",
                    textAlign: Mobile || Tab ? "justify" : "center",
                  }}
                >
                  {item.text1}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    width: Mobile || Tab ? "100%" : "80%",
                  }}
                >
                  {item.text}
                </Typography>

                <Grid
                  container
                  columnGap={2}
                  rowGap={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  {item.list.map((item) => (
                    <Card
                      key={item.id}
                      component={Grid}
                      item
                      xs={12}
                      md={3.5}
                      sx={{
                        display: "flex",
                        alignItems: "left",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        border: "1px solid lightgray",
                        height: "180px",
                        p: "10px",
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: "40px", height: "40px" }}
                      >
                        {Icondata.filter((i) => i.iconname === item.title).map(
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
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {item.title}
                      </Typography>
                      <Typography>{item.text}</Typography>
                    </Card>
                  ))}
                </Grid>
              </Stack>
            ))}
          </Stack>
          {/*         
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            component={Grid}
            container
            sx={{ width: "100%" }}
          >
            {CapabilitiesElobaration.map((item) =>
              item.type === "image" ? (
                <ImageGridItem key={item.id} xs={12} md={6}>
                  Image
                </ImageGridItem>
              ) : (
                <TextGridItem key={item.id} xs={12} md={6}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>{" "}
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    {item.text1}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    {item.text}
                  </Typography>
                  {item.list.map((item) => (
                    <Stack direction="row" alignItems="flex-start" spacing={1}>
                      <IconDot style={{ marginTop: "3px", fontSize: "20px" }} />

                      <Typography variant="body1">{item.text}</Typography>
                    </Stack>
                  ))}
                </TextGridItem>
              )
            )}
          </Stack> */}
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            spacing={2}
            sx={{ width: "100%", mb: "-5px", py: "10px" }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", px: 1, textAlign: "center" }}
            >
              Why Choose Kapil Tech as your IT Staffing Services Company
            </Typography>

            <Typography variant="body1" sx={{ px: 1, textAlign: "justify" }}>
              We harness the power of people to create a workforce that
              perfectly aligns with your organisation’s needs!
            </Typography>

            <Stack
              direction={Mobile || Tab ? "column" : "row"}
              alignItems="center"
              justifyContent={Mobile || Tab ? "center" : "space-evenly"}
              sx={{ width: "80%", p: 2 }}
              spacing={2}
            >
              {whyus.map((item) => (
                <Card
                  sx={{
                    width: Mobile || Tab ? "100%" : "300px",
                    p: "10px",
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "space-between",
                    height: Mobile || Tab ? "auto" : "230px",
                    flexDirection: "column",
                    border: "1px solid lightgray",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "50px", height: "50px" }}
                  >
                    {Icondata.filter((i) => i.iconname === item.title).map(
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
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {item.text}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            sx={{ width: "100%", mb: "-5px", py: "10px" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Technology Stack
            </Typography>

            <Typography
              variant="body1"
              sx={{ width: "80%", textAlign: "justify", p: 1 }}
            >
              We specialise in providing complete full-stack app development
              solutions that are tailored to the specific demands of businesses
              from various industries. We strive to design and develop
              exceptional tech stack applications that help businesses expand,
              improve user experiences, and provide tangible value to clients.
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
              {TechnologyStack.map((item) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "80px", height: "80px" }}
                  >
                    {Icondata.filter((i) =>
                      i.iconname.includes(item.techname)
                    ).map((i) => (
                      <img
                        key={i.iconname}
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        alt={i.iconname}
                        src={`data:image/png;base64,${i.icon}`}
                      />
                    ))}
                  </Stack>
                  <Typography variant="h6">{item.techname}</Typography>
                </Grid>
              ))}
            </Grid>
            <br />
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            spacing={2}
            sx={{ width: "100%", py: "10px" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Kapil Tech Staffing Approach
            </Typography>
            <Typography
              variant="body1"
              sx={{
                width: Mobile || Tab ? "80%" : "70%",
                p: 1,
                textAlign: "justify",
              }}
            >
              Through the implementation of a 360-degree strategy, we guarantee
              that all the facets are harmonised in an effort to attain
              excellence, foster innovation, and provide clients with unmatched
              value. By implementing this all-encompassing approach, not only
              are operational efficiencies improved, but a resilient and
              progressive organisation is also shaped.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: Mobile || Tab ? "center" : "left",
                width: Mobile || Tab ? "100%" : "70%",
              }}
            >
              The 360-degree scorecard approach:
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
              {StaffingApporach.map((item) => (
                <Grid
                  item
                  xs={10}
                  md={8}
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    flexDirection: "column",
                    gap: "10px",
                    border: "1px solid lightgray",
                    p: "10px",
                  }}
                  component={Card}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "50px", height: "50px" }}
                  >
                    {Icondata.filter((i) => i.iconname === item.title).map(
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

                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body1">{item.text}</Typography>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </SectionContainer>
      </Stack>
    </Fragment>
  );
}

export default Staffing;
