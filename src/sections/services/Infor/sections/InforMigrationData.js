import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import MainHeading from '../../../../components/common/InforHeading';
import { InforMigrations } from '../../../../mock/Infor';
import { IconArrowRight } from '../../../../themes/Icons';

function InforMigrationData() {
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
        height: Mobile || isTab ? "auto" : "inherit",
        width: Mobile || isTab ? "90%" : "80%",
        p: Mobile || isTab ? "10px" : "20px",
      }}
      spacing={2}
    >
      <MainHeading Heading="Migrations" />
      <Typography
        variant="body1"
        textAlign={Mobile || isTab ? "justify" : "left"}
      >
        For successful data migration accuracy is vital, whether it is moving to
        the cloud or an on-premises solution. Most of the companies won't give
        much preference to the data migration.
      </Typography>
      <Typography
        variant="body1"
        textAlign={Mobile || isTab ? "justify" : "left"}
      >
        Well managed data migration team not only ensure on time delivery, but
        also offers better data management for future.
      </Typography>

      <Grid
        container
        columnGap={1}
        rowGap={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {InforMigrations.map((item) => (
          <Grid
            xs={12}
            sm={10}
            md={5.8}
            xl={5}
            key={item.id}
            sx={{
              display: "flex",
              alignItems: Mobile || isTab ? "center" : "left",
              justifyContent: "start",
              // border: "1px solid blue",
              flexDirection: "column",
              p: "5px",
              height: Mobile || isTab ? "auto" : "160px",
              gap: "10px",
            }}
          >
            <Stack
              direction="column"
              alignItems="left"
              justifyContent={Mobile || isTab ? "center" : "left"}
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#CD2028" }}
              >
                {item.title}
              </Typography>
            </Stack>
            <Stack
              direction="column"
              alignItems={Mobile || isTab ? "center" : "left"}
              justifyContent={Mobile || isTab ? "center" : "left"}
              spacing={1}
              sx={{ width: "100%" }}
            >
              {item.list.map((item) => (
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
                      width: "5%",
                      fontWeight: "bold",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      width: Mobile || isTab ? "90%" : "85%",
                      textAlign: "justify",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default InforMigrationData