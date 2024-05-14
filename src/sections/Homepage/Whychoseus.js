import { Card, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ychooseus } from "../../mock/Homepage";
import { motion } from "framer-motion";

function Whychoseus() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ width: "100%", py: 2 }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Why Opt for Kapil Tech for ERP Solutions and Software Engineering
      </Typography>

      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "98%",
        }}
      >
        {ychooseus.map((item) => (
          <Grid
            key={item.id}
            item
            md={2.8}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "left",
              justifyContent: "space-evenly",
              flexDirection: "column",
              height: "300px",
              border: "1px solid lightgray",
            }}
            // component={Card}

            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="left"
              sx={{ p: 1, fontWeight: "bold", textAlign: "left" }}
            >
              Icons
            </Stack>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Whychoseus;
