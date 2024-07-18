import { Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWebPicture } from "../../api/Main";
import { useLocation } from "react-router-dom";

const ImageGridItem = styled(Grid)(({ theme, aheight, path }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: aheight,
  width: "100%",
  // padding: "10px",
  // border: "1px solid blue",
  backgroundColor: "transparent",

  [theme.breakpoints.between("xs", "sm")]: {
    height: "280px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "350px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

function WebPictureComponent({ reqheight, title }) {
  const { pathname } = useLocation();
  const [WebPicture, setWebPicture] = useState([]);

  useEffect(() => {
    getWebPicture()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        const filterdata = respdata.filter(
          (item) => item.pagepath === pathname
        );
        // console.log(filterdata);
        setWebPicture(filterdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const path = pathname === "/services/oracle-netsuite";

  const homepath = pathname === "/home"
  return (
    <ImageGridItem aheight={reqheight} xs={12} md={homepath ? 6 : 5}>
      {WebPicture.filter((i) => i.name === title).map((i) => {
        // console.log(i);
        return (
          <img
            key={i.name}
            style={{
              height: path ? "100%" : "100% ",
              width: path ? null : "100%  ",
              maxWidth: !path ? null : "100%",
              // maxHeight:!path? null: "100%",
            }}
            alt={i.name}
            src={`data:image/png;base64,${i.image}`}
          />
        );
      })}
    </ImageGridItem>
  );
}

export default WebPictureComponent;
