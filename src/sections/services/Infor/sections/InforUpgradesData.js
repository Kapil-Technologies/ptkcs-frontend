import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import MainHeading from "../../../../components/common/InforHeading";
import { InforUpgrades } from '../../../../mock/Infor';
import { IconArrowRight } from "../../../../themes/Icons";

function InforUpgradesData() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        height: Mobile || isTab ? "auto" : "inherit",
        width: Mobile || isTab ? "90%" : "80%",
        p: Mobile || isTab ? "10px" : "20px",
      }}
    >
      <MainHeading Heading="Upgrades" />
      <Typography
        variant="body1"
        textAlign={Mobile || isTab ? "justify" : "left"}
      >
        Kapil Technologies Infor upgrade services aids business to gain the
        efficiency and flexibility by keeping employees focused on customers and
        core business. We help in mitigate risks and save on costs correlated
        with the upgrade.
      </Typography>
      <Typography
        variant="body1"
        textAlign={Mobile || isTab ? "justify" : "left"}
      >
        We can help in upgrading Infor applications, freeing up valuable IT
        resources in process so that employees can focus on organization’s core
        business.
      </Typography>
      <Grid
        container
        columnGap={1}
        rowGap={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {InforUpgrades.map((item) => (
          <Grid
            xs={12}
            sm={10}
            md={3.8}
            xl={5}
            key={item.id}
            sx={{
              display: "flex",
              alignItems: Mobile || isTab ? "center" : "left",
              justifyContent: "start",
              // border: "1px solid blue",
              flexDirection: "column",
              p: "5px",
              height: Mobile || isTab ? "auto" : "300px",
              gap: "10px",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
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

            {item.type === "paragraph" ? (
              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {item.text1}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {item.text2}
                </Typography>
              </Stack>
            ) : item.type === "points" ? (
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
            ) : null}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default InforUpgradesData