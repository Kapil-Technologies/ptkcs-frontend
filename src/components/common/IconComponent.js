import React, { useEffect, useState } from "react";
import { getIcons } from "../../api/GetRequests";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

function IconComponent({ title, size }) {
  const { pathname } = useLocation();
  const [Iconsdata, setIcons] = useState([]);

  useEffect(() => {
    getIcons()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        const filtereddata = respdata.filter((item) =>
          item.pagepath.includes(pathname)
        );
        // console.log(filtereddata, "filterdata");
        setIcons(filtereddata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ------------------------------------------------------------- Icons
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="left"
      sx={{
        p: 1,
        fontWeight: "bold",
        width: size,
        height: size,
      }}
    >
      {Iconsdata.filter((i) => i.iconname === title).map((i) => (
        <img
          key={i.iconname}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={i.iconname}
          src={`data:image/png;base64,${i.icon}`}
        />
      ))}
    </Stack>
  );
}

export default IconComponent;
