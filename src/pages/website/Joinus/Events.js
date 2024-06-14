import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import BannerComponent from "../../../components/common/BannerComponent";
import { getEvents } from "../../../api/GetRequests";
import { useNavigate } from "react-router-dom";

function Events() {
  const theme = useTheme();
  const Navigate = useNavigate();

  const [eventlist, setEventlist] = useState([]);

  useEffect(() => {
    getEvents()
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status === true) {
          setEventlist(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNavigate = (item) => {
    Navigate(`/join-us/events/${item.eventtype}/${item.eventid}`);
  };
  return (
    <Fragment>
      <Page name="Events" pagename="Events Page" description="" />
      <BannerComponent
        mainheight="560px"
        layercolor="rgba(0,0,0,0.2)"
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
            Events
          </Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", p: 2 }}>
          Kapil Tech Events
        </Typography>
        <Grid
          container
          rowGap={2}
          columnGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "90%",
            padding: "10px",
          }}
        >
          {eventlist.map((item) => (
            <Card sx={{ width: "400px", height: "auto" }} key={item.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={`data:image/svg+xml;base64,${item.eventimage}`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.eventname}
                </Typography>
                <Typography variant="body1">{item.eventdescription}</Typography>
              </CardContent>
              <CardActions
                onClick={() => {
                  handleNavigate(item);
                }}
              >
                <Button variant="contained">Register</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Fragment>
  );
}

export default Events;
