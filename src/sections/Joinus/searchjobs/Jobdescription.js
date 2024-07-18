import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Layer, MainContainer } from "../../Banners/Home";
import Page from "../../../components/common/Page";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getPositions } from "../../../api/Careers";
import { useSnackbar } from "notistack";
import JobApplicationForm from '../../../components/Forms/JobApplicationForm'
import { useLoading } from "../../../components/common/LoadingComponent";

function Jobdescription() {
  const theme = useTheme();
  const { jobid } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [description, setDescription] = useState([]);

  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading()
    getPositions()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status) {
          const jobs = res.data.response;
          const filterdata = jobs.filter((item) => item.jobid === jobid);
          // console.log(filterdata);
          stopLoading()
          setDescription(filterdata);
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledate = (date) => {};

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="start"
      sx={{ width: "100%" }}
    >
      <Page name={`Job Details - ${jobid}`} />
      <MainContainer mainheight="300px">
        <Layer
          direction="column"
          alignItems="left"
          justifyContent="left"
          layercolor={theme.palette.terinary.main}
          sx={{ width: "inherit", height: "inherit" }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ p: 2, height: "inherit" }}
            component={motion.div}
            initial={{ y: "30px" }}
            animate={{ y: 0 }}
            exit={{ y: "30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* <Typography variant="h6">Job Details</Typography> */}
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Tomorrow's well-being is... Shaping a fresh reality.
            </Typography>
          </Stack>
        </Layer>
      </MainContainer>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        component={Grid}
        container
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="left"
          component={Grid}
          item
          xs={12}
          md={5.6}
          sx={{ px: 2, py: 2 }}
          spacing={1}
        >
          {description.map((item) => (
            <Fragment>
              <Typography
                variant={Mobile || Tab ? "h5" :"h4"}
                sx={{ fontWeight: "bold", width: "100%", color: "#cd2028" }}
              >
                {item.jobtitle}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Job Location
                </Typography>
                <Typography variant="body1">:</Typography>
                <Typography variant="body1">{item.location}</Typography>
              </Stack>
              <Stack
                direction={Mobile || Tab ? "column" : "row"}
                alignItems={Mobile || Tab ? "left" : "center"}
                justifyContent={Mobile || Tab ? "left" : "space-between"}
                sx={{ width: "100%" }}
                component={Grid}
                container
                columnGap={2}
                rowGap={2}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Job Id
                  </Typography>
                  <Typography variant="body1">:</Typography>
                  <Typography variant="body1">{item.jobid}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Category
                  </Typography>
                  <Typography variant="body1">:</Typography>
                  <Typography variant="body1">{item.category}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Posted On
                  </Typography>
                  <Typography variant="body1">:</Typography>
                  <Typography variant="body1">
                    {handledate(item.postedon)}
                  </Typography>
                </Stack>
              </Stack>

              {/* <Stack direction="column" alignItems="left" spacing={0.5}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Job Summary
                  </Typography>
                  <Typography variant="body1">:</Typography>
                </Stack>
              </Stack> */}

              <Stack direction="column" alignItems="left" spacing={0.5} sx={{width:"100%"}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Description
                  </Typography>
                  <Typography variant="body1">:</Typography>
                </Stack>

                {item.description.map((item) => (
                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <Stack direction="row" alignItems="center" spacing={0.2}>
                      <Typography variant="body1">{item.did}</Typography>
                      <Typography variant="body1">.</Typography>
                    </Stack>

                    <Typography variant="body1">{item.ddata}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Fragment>
          ))}
        </Stack>
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="start"
          component={Grid}
          item
          xs={12}
          md={5.5}
          sx={{ px: 2, py: 2 }}
          spacing={1}
        >
          <JobApplicationForm jobdata={description} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Jobdescription;
