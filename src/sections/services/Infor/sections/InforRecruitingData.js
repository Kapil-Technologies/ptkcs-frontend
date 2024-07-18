import { Box, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import MainHeading from '../../../../components/common/InforHeading';
import { Recruiting, whyUs } from '../../../../mock/Infor';
import { IconArrowRight } from '../../../../themes/Icons';

function InforRecruitingData() {
    const Mobile = useMediaQuery((theme) =>
      theme.breakpoints.between("xs", "sm")
    );

    const isTab = useMediaQuery((theme) =>
      theme.breakpoints.between("sm", "md")
    );
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: Mobile || isTab ? "100%" : "100%",
        width: Mobile || isTab ? "90%" : "75%",
        p: Mobile || isTab ? "10px" : "40px",
      }}
      id="grids"
      spacing={2}
    >
      {/* <MainHeading Heading="Why Us ?" /> */}

      <Stack
        direction="column"
        alignItems="center"
        spacing={1.5}
        justifyContent="center"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
         
          <Typography
            variant={Mobile || isTab ? "h5" : "h4"}
            sx={{ fontWeight: "bold", color: "#CB333B", textAlign: "center" }}
          >
            Why Us ?
          </Typography>
        </Stack>

        <Box
        sx={{
          width: "100px",
          height: "5px",
          borderRadius: 2,
          bgcolor: "primary.main",
        }}
      />
      </Stack>

      <Grid
        container
        columnGap={1}
        rowGap={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: Mobile || isTab ? "100%" : "90%",
        }}
      >
        {whyUs.map((item) => (
          <Card
            item
            key={item.id}
            component={Grid}
            xs={12}
            md={5.8}
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              height: Mobile || isTab ? "auto" : "160px",
              flexDirection: "column",
              p: "10px",
              width: "90%",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#CB333B" }}
            >
              {item.desc1}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {item.desc2}
            </Typography>
          </Card>
        ))}
      </Grid>
      <MainHeading Heading="Recruiting & Staffing" />
      <Typography variant="body1">
        Kapil Technologies Recruiting & Staffing services is one of the leading
        Infor related services in
      </Typography>

      <Card
        sx={{
          width: "80%",
          height: Mobile || isTab ? "auto" : "80px",
          p: "10px",
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#CB333B" }}>
          OUR SERVICES INCLUDE
        </Typography>
        <Stack
          direction={Mobile || isTab ? "column" : "row"}
          alignItems="center"
          justifyContent="left"
          spacing={2}
        >
          {Recruiting.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              alignItems="flex-start"
              justifyContent={Mobile || isTab ? "center" : null}
              sx={{ width: "100%" }}
              spacing={1}
            >
              <IconArrowRight
                color="#CD2028"
                sx={{
                  // mt: "5px",
                  pt: "4px",
                  width: "10%",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  width: Mobile || isTab ? "90%" : "75%",
                  textAlign: "justify",
                }}
              >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}

export default InforRecruitingData