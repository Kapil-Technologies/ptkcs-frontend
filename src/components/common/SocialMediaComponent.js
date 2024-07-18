import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getLogos } from "../../api/Main";
import { SocialMediaLinks } from "../../mock/Navigations";

function SocialMediaComponent({ title, size }) {
  const [LogoData, setLogodata] = useState([]);

  useEffect(() => {
    getLogos()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        setLogodata(respdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {LogoData.filter((i) => i.logoname === title).map((i) => {
        // console.log(i)
        return (
          <img
            key={i.logoname}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            alt={i.logoname}
            src={`data:image/png;base64,${i.logo}`}
          />
        );
      })}
    </Stack>
  );
}

export default SocialMediaComponent;
