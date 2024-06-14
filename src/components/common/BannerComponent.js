import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { getBanners } from "../../api/GetRequests";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Banners } from "../../App";

export const MainContainer = styled(Box)(({ theme, mheight }) => ({
  height: mheight,
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom:"10px",

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
    height: "auto",
    width: "100%",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {
    // Desktop
    width: "100%",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const Layer = styled(Stack)(({ theme, lcolor }) => ({
  width: "inherit",
  height: "inherit",
  position: "absolute",
  top: 0,
  backgroundColor: lcolor,

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

function BannerComponent({ mainheight, layercolor, textdispaly }) {
  const { pathname } = useLocation();

  const domain = useSelector((state) => state.domain.domain);

  const [banners, setBanners] = useState([]);

  let imagedata;

  let imagename;

  const BannerData = useContext(Banners);

  console.log(BannerData);

  return (
    <MainContainer mheight={mainheight}>
      {BannerData.map((item) =>
        item.pagepath === pathname || item.pagepath.includes(pathname) ? (
          <img
            key={item.pagename} // Assuming pagename is unique for each item
            src={`data:image/png;base64,${item.banner}`}
            alt={item.pagename}
            style={{
              width: "100%",
              maxHeight: mainheight,
            }}
          />
        ) : null
      )}
      <Layer
        direction="column"
        alignItems="center"
        justifyContent="start"
        lcolor={layercolor}
      >
        {textdispaly}
      </Layer>
    </MainContainer>
  );
}

export default BannerComponent;
