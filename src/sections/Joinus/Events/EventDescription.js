import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerComponent from "../../../components/common/BannerComponent";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { getEvents } from "../../../api/GetRequests";
import EventRegistration from "../../../components/Forms/EventRegistration";
import Page from "../../../components/common/Page";

function EventDescription() {
  const { eventid, eventtype } = useParams();

  const [eventdata, setEventdata] = useState([]);

  useEffect(() => {
    getEvents()
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status === true) {
          const maindata = res.data.response;
          const filterdata = maindata.filter(
            (item) => item.eventid === eventid
          );
          // console.log(filterdata)
          setEventdata(filterdata[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const EventType = <p>
    ev
  </p>
  return (
    <Fragment>
      <Page
        name={`${eventtype} - Description`}
        pagename={`${eventtype} - Description Page`}
        description=""
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "auto",
            position: "relative",
          }}
        >
          <img
            src={`data:image/svg+xml;base64,${eventdata.eventimage}`}
            style={{
              width: "100%",
              height: "inherit",
              // objectPosition: 'center',
              objectFit: "cover",
            }}
            alt={eventdata.eventid}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "inherit",
              position: "absolute",
              top: 0,
              bgcolor: "rgba(0,0,0,0.3)",
            }}
          />
        </Box>
        <Grid
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            height: "auto",
          }}
          container
          columnGap={2}
          rowGap={2}
        >
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "start",
              // border: "1px solid blue",
              p: 1,
              flexDirection: "column",
              position: "relative",
              height: "inherit",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", p: 1, color: "primary.main" }}
            >
              {eventdata.eventname}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "normal", p: 1, color: "black" }}
            >
              {eventdata.eventdescription}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
               // sx={{ position: "absolute", bottom: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              >
                d
              </Box>
              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Name
                </Typography>
                <Typography>designation</Typography>
              </Stack>
            </Stack>
          </Grid>
          <EventRegistration eventobject={eventdata} />
        </Grid>
      </Stack>
    </Fragment>
  );
}

export default EventDescription;
