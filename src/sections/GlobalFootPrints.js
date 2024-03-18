import { Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function GlobalFootPrints() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", p: 2, mb: 2 }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "80%" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Our Global Offices
        </Typography>
        {/* <TextField size="small" label="Search a Country">
                  
            </TextField> */}
      </Stack>

      <Grid sx={{direction:'row',alignItems:'center',justifyContent:'space-evenly',width:'80%'}}>
        <Card
          item
          sx={{
            direction: "row",
            alignItems: "center",
            justifyContent: "left",
            width: "300px",
              height: "300px",
            border:'1px solid lightgray'
          }}
        ></Card>
      </Grid>
    </Stack>
  );
}

export default GlobalFootPrints;
