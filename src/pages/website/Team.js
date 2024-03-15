import React from "react";
import Page from "../../components/common/Page";
import { Stack } from "@mui/material";

function Team() {
  return (
    <Stack
      direction="column"
      alignItems="left"
      sx={{ width: "100%", height: "inherit", bgcolor: "terinary.main" }}
    >
      <Page title="Our Team" />
    </Stack>
  );
}

export default Team;
