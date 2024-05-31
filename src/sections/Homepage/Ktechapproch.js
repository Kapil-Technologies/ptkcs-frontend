import { Stack, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import React from "react";
import { ApprochData } from "../../mock/Homepage";

function Ktechapproch() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", background: "white", py: 2 }}
    >
      <Typography
        variant={Mobile || Tab ? "h4" : "h3"}
        sx={{ fontWeight: "bold", textAlign: "center" }}
        gutterBottom
      >
        Kapil Tech Approch
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "95%" }}
        component={Grid}
        container
        columnGap={2}
        rowGap={6}
      >
        {ApprochData.map((item) => (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            key={item.id}
            sx={{ position: "relative" }}
            component={Grid}
            item
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: Mobile || Tab ? "350px" : "250px",
                height: "80px",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
            >
              <Typography varinat="h5" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: Mobile || Tab ? "350px" : "250px",
                height: Mobile || Tab ? "350px" : "250px",
                border: "1px solid gray",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              {item.icon}
              <Typography variant="h6">{item.text}</Typography>
            </Box>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "80px",
                height: "80px",
                border: "3px solid white",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-40px",
                zIndex: 1,
                backgroundColor: "lightgray",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "30px" }}
              >
                {item.countnumber}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Ktechapproch;
