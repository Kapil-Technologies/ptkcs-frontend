import { Stack } from "@mui/material";
import React from "react";
import { IconDownArrow, IconUpArrow } from "../../themes/Icons";

function GlobalScrolltotop() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scroll animation
    });
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "40px",
        height: "40px",
        position: "fixed",
        bottom: "100px",
        right: "100px",
        backgroundColor: "lightgray",
        borderRadius: "50%",
        p: 1,
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "inset 0 0 10px lightgray",
        border: "1px solid lightgray",
      }}
      onClick={handleScroll}
    >
      <IconUpArrow size="30px" />
    </Stack>
  );
}

export default GlobalScrolltotop;
