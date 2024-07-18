import React from "react";
import MainHeading from "../../../../components/common/InforHeading";
import { Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { ERPDataInfor } from "../../../../mock/Infor";
import { FaRightLong } from "react-icons/fa6";

function GridsData({ MouseEnters, Navigate, MouseLeaves, Hover, Menuid }) {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        py: "5px",
        position: "relative",
        height: "auto",
        bgcolor: "#FDFDFF",
      }}
    >
      <MainHeading Heading="Services" />

      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: Mobile || isTab ?"90%": "100%",
          py: Mobile || isTab ? "5px" : "10px",
          mt:"10px"
        }}
      >
        {ERPDataInfor.map((item) => (
          <Grid
            xs={12}
            sm={10}
            md={5}
            lg={3.2}
            xl={5.5}
            component={Card}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: Mobile || isTab ? "450px" : "450px",
              flexDirection: "column",
              borderBottom: `3px solid ${
                Hover && item.id === Menuid ? item.color : item.color
              }`,
              p: "10px",
              bgcolor: Hover && item.id === Menuid ? item.color : null,
              color: Hover && item.id === Menuid ? item.text : "black",
              borderRadius: "10px",

              // cursor: "pointer",
            }}
            onMouseEnter={() => MouseEnters(item.id)}
            onMouseLeave={MouseLeaves}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "80px",
                height: "80px",
                color: item.color,
                bgcolor: Hover && item.id === Menuid ? "white" : item.iconback,
                borderRadius: "5px",
                fontSize: "30px",
              }}
            >
              {item.icon}
            </Stack>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: Hover && item.id === Menuid ? item.text : item.color,
              }}
            >
              {item.mtitle}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {item.desc}
            </Typography>
            {item.desc1 ? (
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {item.desc1}
              </Typography>
            ) : null}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                color: Hover && item.id === Menuid ? item.text : item.color,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => Navigate(item.gridid)}
              >
                Read More
              </Typography>
              <FaRightLong style={{ marginTop: "2px" }} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default GridsData;
