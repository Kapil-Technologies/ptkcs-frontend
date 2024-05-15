import {
  Card,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CountriesList } from "../App";
import { getBranches } from "../api/GetRequests";
import { useSnackbar } from "notistack";

function GlobalFootPrints() {
  const { enqueueSnackbar } = useSnackbar();
  const countriesdata = useContext(CountriesList);

  const [branches, setBranches] = useState([]);

  const [branchname, setbranchname] = useState("");

  useEffect(() => {
    getBranches()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          setBranches(res.data.response);
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, []);

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
        <TextField
          size="small"
          label="Search a Country"
          select
          sx={{ width: "40%" }}
          value={branchname}
          onChange={(e) => setbranchname(e.target.value)}
        >
          {countriesdata.map((item) =>
            item.branch === "Yes" ? (
              <MenuItem value={item.countrycode}>{item.countryname}</MenuItem>
            ) : null
          )}
        </TextField>
      </Stack>

      <Grid
        sx={{
          direction: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        <Card
          item
          sx={{
            direction: "row",
            alignItems: "center",
            justifyContent: "left",
            width: "300px",
            height: "300px",
            border: "1px solid lightgray",
          }}
        ></Card>
      </Grid>
    </Stack>
  );
}

export default GlobalFootPrints;
