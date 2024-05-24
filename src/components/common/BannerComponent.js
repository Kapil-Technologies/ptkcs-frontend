import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { getBanners } from "../../api/GetRequests";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const MainContainer = styled(Box)(({ theme, mheight }) => ({
  height: mheight,
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {
    // Desktop
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

  useEffect(() => {
    getBanners(pathname, domain)
      .then((res) => {
        console.log(res);
        setBanners(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer mheight={mainheight}>
      <Image src={imagedata} alt={imagename} />
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
