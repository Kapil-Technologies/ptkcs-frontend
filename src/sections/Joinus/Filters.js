import { Button, Checkbox, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Filters() {
  return (
    <Grid
      direction="column"
      alignItems="left"
      justifyContent="left"
      sx={{ width: "30%", p: 2 }}
      spacing={2}
      columnGap={2}
      rowGap={2}
      container
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Filtered by
        </Typography>
        <Button variant="outlined" size="small">
          Reset
        </Button>
      </Stack>
      <Stack direction="column" alignItems="start" justifyContent="left">
        <Typography variant="h6">
          Category
        </Typography>
        <Checkbox label="Infor" />
     </Stack>
    </Grid>
  );
}

export default Filters;
