import React from 'react'
import { Stack, Typography } from "@mui/material";
const fedracategories = [
  {
    id: 1,
    titile: "Order Management",
    subtitle: "",
    width: "100%",
    bgcolor: "lightgray",
  },
  {
    id: 2,
    titile: "Resource Management",
    subtitle: "",
    width: "90%",
    bgcolor: "lightgray",
  },
  {
    id: 3,
    titile: "Material Management",
    subtitle: "",
    width: "80%",
    bgcolor: "lightgray",
  },
  {
    id: 4,
    titile: "Assembly Management",
    subtitle: "",
    width: "70%",
    bgcolor: "lightgray",
  },
  {
    id: 5,
    titile: "Quality Management",
    subtitle: "",
    width: "60%",
    bgcolor: "lightgray",
  },
  {
    id: 6,
    titile: "AI Suite Artificial Intelligance",
    subtitle: "",
    width: "50%",
    bgcolor: "lightgray",
  },
];


function Hydracategories() {
  return (
    <Stack
      direction="column"
      alignItems="right"
      justifyContent="right"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        
        sx={{ width: "100%", position: "relative" }}
        spacing={2}
      >
        <Stack  sx={{ width: "100%" }}>
          {fedracategories.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: item.width,
                border: "1px solid lightgray",
                p: 2,
                //   transform: "skew(10deg, 0deg)",
              }}
            >
              <Stack
                direction="column"
                alignItems="right"
                justifyContent="left"
                spacing={2}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.titile}
                </Typography>
                {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Subtitl2
            </Typography> */}
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{ width: "50px", height: "50px", bgcolor: "lightgray" }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {item.id}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            transform: "rotate(-270deg)",
            display: "inline-block",
            transformOrigin: "bottom center",
            // width: "100%",
            // border: "1px solid blue",
            height: "0",
            textAlign: "center",

            position: "absolute",

            right: "-200px",
            bottom: "200px",
          }}
        >
          Categories of HYDRA X
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Hydracategories