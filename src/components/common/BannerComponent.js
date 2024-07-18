import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { getBanners } from "../../api/Main";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoading } from "./LoadingComponent";

export const MainContainer = styled(Box)(({ theme, mheight }) => ({
  height: mheight,
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
    height: "250px",
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
    height: "600px",
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
    height: "100%",
  },
}));

function BannerComponent({ mainheight, layercolor, textdispaly }) {
  const { pathname } = useLocation();

  const domain = useSelector((state) => state.domain.domain);

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const xxstralarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // const [banners, setBanners] = useState([]);

  let imagedata;

  let imagename;

  const condition = pathname === "/services/infor-consulting" || pathname === "/join-us/job-openings" || pathname === "/services/sap-consulting"

  const [banners, setBanners] = useState([]);

    const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    getBanners()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        const filtereddata = respdata
          ? respdata.filter((item) => item.pagepath === pathname) 
          : [];
        // console.log(filtereddata, "filterdata");
        stopLoading()
        setBanners(filtereddata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer mheight={mainheight}>
      {banners.map((item) =>
        item.pagepath === pathname || item.pagepath.includes(pathname) ? (
          <img
            key={item.pagename} // Assuming pagename is unique for each item
            src={`data:image/png;base64,${item.banner}`}
            alt={item.pagename}
            style={{
              width: "100%",
              height:
                Mobile || Tab ? "250px" : xxstralarge ? "600px" : mainheight,
            }}
          />
        ) : null
      )}
      <Layer
        direction="column"
        alignItems="center"
        justifyContent="start"
        lcolor={condition ? "rgba(0, 0, 0, 0.2)" : "rgba(0,0,0,0.4)"}
      >
        {textdispaly}
      </Layer>
    </MainContainer>
  );
}

export default BannerComponent;
