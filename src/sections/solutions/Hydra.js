import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

// border: "10px solid #FF6188";
// borderTop: "10px solid #A9DC62";
// borderLeft:" 10px solid #78DCDC";
// borderRight: "10px solid #FFD862";

const sapAdvantages = [
  {
    id: 1,
    benefits: "Boost productivity",
  },
  {
    id: 2,
    benefits: "Shorten lead times",
  },
  {
    id: 3,
    benefits: "Enhance quality",
  },
  {
    id: 4,
    benefits: "Benefits of HYDRA X",
  },
  {
    id: 5,
    benefits: "Cut energy costs",
  },
  {
    id: 6,
    benefits: "Lower scrap rates",
  },
  {
    id: 7,
    benefits: "Decrease WIP stock",
  },
];

export const DataPies = styled(Grid)(
  ({ theme, seg1, seg2, seg3, seg5, seg6, seg7 }) => ({
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    position: "absolute",
    "&:nth-child(1)": {
      top: "0px",
        height: "150px",
      width: "150px",
      // borderTop: "10px solid #FF6188",
      border: "10px solid #A9DC62",
      // borderLeft: " 10px solid #78DCDC",
      // borderRight: "10px solid #FFD862",
    },
    "&:nth-child(2)": {
      left: "22px",
      top: "90px",
      height: "150px",
      width: "150px",
      // border: "10px solid #FF6188",
      // borderTop: "10px solid #A9DC62",
      border: " 10px solid #78DCDC",
      // borderLeft: "10px solid #FFD862",
    },

    "&:nth-child(3)": {
      right: "22px",
      top: "90px",
      height: "150px",
      width: "150px",
      // border: "10px solid #FF6188",
      // borderTop: "10px solid #A9DC62",
      // borderLeft: " 10px solid #78DCDC",
      border: "10px solid #FFD862",
    },
    "&:nth-child(5)": {
      left: "22px",
      bottom: "90px",
      height: "150px",
      width: "150px",
      // border: "10px solid #FF6188",
      // borderTop: "10px solid #A9DC62",
      border: " 10px solid #78DCDC",
      // borderLeft: "10px solid #FFD862",
    },

    "&:nth-child(6)": {
      right: "22px",
      bottom: "90px",
      height: "150px",
      width: "150px",
      // border: "10px solid #FF6188",
      // borderTop: "10px solid #A9DC62",
      // borderLeft: " 10px solid #78DCDC",
      border: "10px solid #FFD862",
    },

    "&:nth-child(7)": {
      bottom: "0px",
      height: "150px",
      width: "150px",
      border: "10px solid #FF6188",
      // borderTop: "10px solid #A9DC62",
      // borderLeft: " 10px solid #78DCDC",
      // borderRight: "10px solid #FFD862",
    },
    "&:nth-child(4)": {
      height: "200px",
      width: "200px",
      border: "10px solid #FF6188",
      borderTop: "10px solid #A9DC62",
      borderLeft: " 10px solid #78DCDC",
      borderRight: "10px solid #FFD862",
    },

    //  mobile
    [theme.breakpoints.between("xs", "md")]: {
      //  css
    },
  })
);

function HydraBenefits() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 2 }}
    >
      {/* <Outerpie>
        
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Advantages <br /> of <br /> SAP Services
          </Typography>
        
      </Outerpie> */}

      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "500px",
          height: "500px",
          //   border: "1px solid black",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        {sapAdvantages.map((item) => (
          <DataPies item key={item.id}>
            <Typography
              variant={item.id === 4 ? "h5" : "body1"}
              sx={{
                textAlign: "center",
                fontWeight: item.id === 4 ? "bold" : "normal",
                textTransform: item.id === 4 ? "uppercase" : "capitalize",
              }}
            >
              {item.benefits}
            </Typography>
          </DataPies>
        ))}
      </Grid>
    </Stack>
  );
}

export default HydraBenefits;
