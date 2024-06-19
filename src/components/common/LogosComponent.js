import React, { useEffect, useState } from "react";
import { getLogos } from "../../api/GetRequests";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

function LogosComponent({ title, size }) {
  const { pathname } = useLocation();
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    getLogos()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        
        setLogos(respdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: size, height: size }}
    >
      {/* {logos.length === 0
        ? null
        : logos
            .filter((i) => i.logoname === title)
            .map((i) =>
              i.pagepath.includes(pathname) ? (
                <img
                  key={i.logoname}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  alt={i.logoname}
                  src={`data:image/png;base64,${i.logo}`}
                />
              ) : null
            )} */}
    </Stack>
  );
}

export default LogosComponent;
