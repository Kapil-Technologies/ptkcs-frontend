import React, { Fragment } from "react";
import Home from "../../sections/Banners/Home";
import { Stack } from "@mui/material";
import Whatwedo from "../../sections/Homepage/Whatwedo";
import Industries from "../../sections/Homepage/Industries";
import CCTA from "../../components/common/CCTA";
import Page from "../../components/common/Page";

function MainHome() {
  return (
    <Fragment>
      <Page
        name="Home"
        description="Kapil Technologies, an esteemed Infor Alliance Partner, offers a wide array of services including Infor and SAP consulting, as well as custom application development, among others."
        pagename="Home Page"
      />
      <Home />
      
      
    </Fragment>
  );
}

export default MainHome;
