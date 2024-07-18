import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Card,
  Grid,
  Stack,
  Tab,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  InforCategories,
  InforLevel,
  InforTProducts,
  InforTrainigBenefits,
  InforTrainingTabs1,
} from "../../../../mock/Infor";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MainHeading from "../../../../components/common/InforHeading";
import { IconArrowRight } from "../../../../themes/Icons";

function InforTraining() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  // -------------------------------------------------------------------------------

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // -------------------------------------------------------------------------------
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: Mobile || isTab ? "auto" : "inherit",
        width: Mobile || isTab ? "90%" : "75%",
        p: Mobile || isTab ? "10px" : "20px",
        // mt: "-10px",
      }}
      spacing={1}
    >
      <MainHeading Heading="Training" />

      <Typography variant="body1" textAlign="justify">
        Training is important component required to utilize the full value of
        investment and attain unparalleled advantages for business. Kapil Technologies Training is a critical component needed to utilize the full
        value of your investment and achieve unparalleled benefits for your
        business.
      </Typography>
      <Typography variant="body1" textAlign="left" sx={{ width: "100%" }}>
        Kapil Technologies provide Learning Solutions for each stage of product
        lifecycle including:
      </Typography>
      <TabContext value={value}>
        <Card
          sx={{
            border: "1px solid #d3e1ea",
            marginTop: "10px",
            width: "100%",
            height: Mobile || isTab ? "auto" : "260px",
          }}
        >
          <Card
            sx={{
              borderBottom: "1px solid #d3e1ea",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              indicatorColor="white"
              variant="scrollable"
              textColor="#CB333B"
              sx={{
                "& button": {
                  // borderRadius: 2,
                  fontSize: "18px",
                  margin: "5px",
                },
                "& button:hover": {
                  // background: "#CB333B",
                  borderBottom: "3px solid #CB333B",
                  // color: "white",
                },
                ".Mui-selected": {
                  color: "#CB333B",
                  // borderBottom: "3px solid #CB333B",
                  // borderRadius: 2,
                  fontSize: "18px",
                },
              }}
            >
              {InforTrainingTabs1.map((item) => (
                <Tab
                  key={item.id}
                  label={
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {/* <IconBase>{item.tabicon}</IconBase> */}
                      <Typography>{item.tabname}</Typography>
                    </Stack>
                  }
                  value={item.tabvalue}
                  sx={{
                    textTransform: "capitalize",
                  }}
                />
              ))}
            </TabList>
          </Card>
          <TabPanel value="1">
            <Grid
              container
              columnGap={1}
              rowGap={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifycontent: "left",
                p: 1,
                width: "100%",
                textAlign: "left",
              }}
            >
              {InforTProducts.map((item) => (
                <Stack
                  direction="row"
                  alignItems="start"
                  key={item.id}
                  spacing={1}
                  component={Grid}
                  item
                  xs={5.5}
                >
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Typography>{item.pname}</Typography>
                </Stack>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            {InforCategories.map((item) => (
              <Stack
                direction="column"
                alignItem="center"
                justifyContent="left"
              >
                <Stack direction="row" alignItems="start" spacing={1}>
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Stack direction="column" alignItems="left">
                    <Typography variant="body1">
                      <b>{item.desc1}</b>
                    </Typography>
                    <Typography variant="body1">{item.desc2}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </TabPanel>
          <TabPanel value="3">
            {InforLevel.map((item) => (
              <Stack
                direction="column"
                alignItem="center"
                justifyContent="left"
              >
                <Stack direction="row" alignItems="start" spacing={1}>
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Stack direction="column" alignItems="left">
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.desc1}
                    </Typography>
                    <Typography variant="body1">{item.desc2}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </TabPanel>
          <TabPanel value="4">
            <Stack direction="column" alignItems="left" justifyContent="left">
              {InforTrainigBenefits.map((item) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="left"
                  spacing={1}
                  key={item.id}
                >
                  <IconArrowRight
                    color="#CD2028"
                    sx={{
                      // mt: "5px",
                      pt: "2px",
                      width: "2%",
                      fontWeight: "bold",
                    }}
                  />
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Stack>
              ))}
            </Stack>
          </TabPanel>
        </Card>
      </TabContext>
    </Stack>
  );
}

export default InforTraining;
