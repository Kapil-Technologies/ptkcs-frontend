import {
  Card,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { CountriesList } from "../App";
import { getBranches, getCountries } from "../api/Main";
import { useSnackbar } from "notistack";
import { IconEmail } from "../themes/Icons";
import { Link } from "react-router-dom";

const MailLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontSize: "16px",

  "&:hover": {
    color: "red",
    textDecoration: "underline",
  },

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

// ---------------------------------------------------------------------------------------   Styled Components

function GlobalFootPrints() {
  const { enqueueSnackbar } = useSnackbar();

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  // const countries = useContext(CountriesList);

  const [branches, setBranches] = useState([]);
  const [countries, setcountries] = useState([]);

  const [branchname, setbranchname] = useState("");

  // console.log(branchname);

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

  useEffect(() => {
    getCountries()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          setcountries(res.data.response);
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
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        justifyContent={Mobile || Tab ? "center" : "space-between"}
        sx={{ width: Mobile || Tab ? "100%" : "80%" }}
        spacing={2}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
        >
          Our Global Offices
        </Typography>
        <TextField
          size="small"
          label="Search a Country"
          select
          sx={{ width: Mobile || Tab ? "100%" : "40%" }}
          value={branchname}
          onChange={(e) => setbranchname(e.target.value)}
        >
          {countries.map((item) =>
            item.branch === "Yes" ? (
              <MenuItem key={item.id} value={item.countryname}>
                {item.countryname}
              </MenuItem>
            ) : null
          )}
        </TextField>
      </Stack>

      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          direction: "row",
          alignItems: "left",
          justifyContent: "center",
          width: Mobile || Tab ? "100%" : "90%",
        }}
      >
        {branches
          .filter((item) => item.country.includes(branchname))
          .map((item) => (
            <Stack
              key={item.id}
              item
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                width: Mobile || Tab ? "100%" : "400px",
                height: "200px",
                border: "1px solid black",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#D6000D" }}
                >
                  {item.country}
                </Typography>
                {/* <img
                src={`data:image/svg+xml;base64,${item.flag}`}
                alt={item.countryname}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              /> */}
              </Stack>

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {item.companyname}
              </Typography>

              {item.subtype === "formerly" ? (
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "normal", fontStyle: "italic" }}
                >
                  ( {item.careof} )
                </Typography>
              ) : null}

              <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                {item.add1}
              </Typography>

              {item.add2 ? (
                <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                  {item.add2}
                </Typography>
              ) : null}

              <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                {item.city}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
                sx={{ width: "100%" }}
              >
                {item.state ? (
                  <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                    {item.state}
                  </Typography>
                ) : null}

                {item.state ? <Typography variant="body1">-</Typography> : null}

                <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                  {item.zipcode}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
                sx={{ width: "100%" }}
              >
                <IconEmail style={{ marginTop: "2px" }} />
                <Typography variant="body1">:</Typography>
                <MailLink to={`mailto: ${item.contactemail}`}>
                  {item.contactemail}
                </MailLink>
              </Stack>
            </Stack>
          ))}
      </Grid>
    </Stack>
  );
}

export default GlobalFootPrints;
