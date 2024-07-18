import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import { ViewCount } from "../api/Main";
import { useLocation, useParams } from "react-router-dom";
import { Paths } from "../../config";
import { useDispatch } from "react-redux";
import { domainname } from "../../redux/slices/Domain";
import { ViewCount } from "../../api/Main";

function Page({ name, description, keywords, pagename }) {
  const { pathname } = useLocation();
  const hostname = window.location.hostname;
  const dispatch = useDispatch();
  const { jobid, aid, wid } = useParams();

  // console.log(hostname); // This will log the hostname to the console

  // ----------------------------------------------------- Browser Details

  const Browser = navigator.userAgentData.brands[0];

  const BrowserName = `${Browser.brand}`;

  const BrowserVersion = `V - ${Browser.version}`;

  // console.log(BrowserData);

  // ----------------------------------------------------- Device Details

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const Desktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const Large = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));

  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  let devicesize;
  let deviceViewport;

  // ----------------------------------------------------------------- Pag
  let pagevisited;

  // const { jobid } = useParams()
  const jobdescription = `${Paths.joinus.jobdescription}${jobid}`;
  const eventregisration = ""

  console.log(jobdescription);

  switch (true) {
    case pathname === Paths.home:
      pagevisited = "Home";
      break;
    // About us
    case pathname === Paths.aboutus.company:
      pagevisited = "company";
      break;

    case pathname === Paths.aboutus.leadership:
      pagevisited = "leadership";
      break;

    // Services
    case pathname === Paths.consulting.inforconsulting:
      pagevisited = "Infor";
      break;
    case pathname === Paths.consulting.sapconsulting:
      pagevisited = "SAP";
      break;
    case pathname === Paths.consulting.digitaltransformation:
      pagevisited = "Digital Transformation";
      break;
    case pathname === Paths.other.staffing:
      pagevisited = "Staffing";
      break;
    case pathname === Paths.solutions.finsta:
      pagevisited = "Finsta";
      break;
    // Joinus
    case pathname === Paths.joinus.searchjobs:
      pagevisited = "Job Openings";
      break;
    case pathname === jobdescription:
      pagevisited = `Job Description - ${jobid}`;
      break;
    case pathname === Paths.joinus.events:
      pagevisited = "Events";
      break;
    case pathname === Paths.joinus.webinar:
      pagevisited = "Webinars";
      break;
    case pathname === Paths.joinus.lifeatktech:
      pagevisited = "Life @ Ktech";
      break;
    // Contact us
    case pathname === Paths.contactus:
      pagevisited = "Contact us";
      break;
  }

  // ----------------------------------------------------------------- Device

  if (Mobile) {
    devicesize = "Mobile";
    deviceViewport = "0-600px";
  } else if (Tab) {
    devicesize = "Tab";
    deviceViewport = "600px-900px";
  } else if (Desktop) {
    devicesize = "Desktop";
    deviceViewport = "900px-1200px";
  } else if (Large) {
    devicesize = "Large";
    deviceViewport = "1200px-1536px";
  } else if (XstraLarge) {
    devicesize = "TV";
    deviceViewport = ">= 1536px";
  } else {
    devicesize = "Devices More Than 1536px";
    deviceViewport = "1536px-more";
  }

  // ----------------------------------------------------------------- View Count

  useEffect(() => {
    dispatch(domainname(hostname));
    const SiteData = {
      browsername:
        BrowserName === "Not_A Brand" || BrowserName === "Not=A? Brand"
          ? "Unknown Brand"
          : BrowserName,
      browserversion: BrowserVersion,
      deviceSizeType: devicesize,
      deviceVP: deviceViewport,
      page: pagevisited,
    };
    // console.log(SiteData)

    ViewCount(SiteData)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <Helmet>
      <title>{`${name} | PT.KCS Technologies Indonesia  `}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charset="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="template" content={pagename} />
      <link rel="canonical" href={pathname} />
    </Helmet>
  );
}

export default Page;
