import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "../pages/others/NotFound";
import LifeatKCS from "../pages/website/Joinus/LifeatKCS";
import MainHome from "../pages/website/MainHome";
import Careers from "../pages/website/Joinus/Careers";
import Company from "../pages/website/About/Company";
import SAP from "../pages/website/Services/SAP";
import Infor from "../pages/website/Services/Infor";
import Contactus from "../pages/website/Contactus";
import Events from "../pages/website/Joinus/Events";
import Leadership from "../pages/website/About/Leadership";
import Jobdescription from "../sections/Joinus/searchjobs/Jobdescription";
import ApplicantStatus from "../sections/Joinus/searchjobs/ApplicantStatus";
import DigitalTransformation from "../pages/website/Services/DigitalTransformation";
import Mpdv from "../pages/website/Solutions/Mpdv";

// ------------------------------------------------------

// Dashboard Pages

// const Analytics = lazy(() => import("../pages/dashboards/Analytics"));
// const OpenPositions = lazy(() =>
//   import("../pages/dashboards/CareersPages/OpenPositions")
// );

// const Applicants = lazy(() =>
//   import("../pages/dashboards/CareersPages/Applications")
// );
// const Visitors = lazy(() => import("../pages/dashboards/Visitors"));
// const Enquiries = lazy(() => import("../pages/dashboards/Enquiries"));
// const LifeatKCS = lazy(() => import("../pages/dashboards/LifeatKcs"));

// // Other Pages

// const NotFound = lazy(() => import("../pages/others/NotFound"));

// // Auth Pages

// const Login = lazy(() => import("../pages/auth/Login"));
// const Register = lazy(() => import("../pages/auth/Register"));
// const OTP = lazy(() => import("../pages/auth/OTP"));
// const Login = lazy(() => import("../pages/auth/Login"));
// const Login = lazy(() => import("../pages/auth/Login"));
// const Login = lazy(() => import("../pages/auth/Login"));

// -----------------------------------------------------

function GlobalRoutes() {
  return useRoutes([
    {
      path: "/",
      children: [
        //   Page After Load (Indexed Page)

        {
          path: "/",

          element: <Navigate to="/home" exact replace />,
        },

        {
          path: "/404",
          element: <NotFound />,
        },

        {
          path: "*",
          element: <Navigate to="/404" />,
        },

        {
          path: "",
          children: [
            {
              path: "home",
              element: <MainHome />,
            },
            {
              path: "contact-us",
              element: <Contactus />,
            },
            {
              path: "join-us",
              children: [
                {
                  path: "search-jobs",
                  element: <Careers />,
                  index: true,
                },
                {
                  path: "join-us",
                  element: <Navigate to="join-us/search-jobs" exact replace />,
                },
                {
                  path: "job-openings/:jobid",
                  element: <Jobdescription />,
                },
                {
                  path: "applications/:apid",
                  element: <ApplicantStatus />,
                },
                {
                  path: "life-@-ktech",
                  element: <LifeatKCS />,
                },
                {
                  path: "Events",
                  element: <Events />,
                },
              ],
            },
            {
              path: "about-us",
              children: [
                {
                  path: "company",
                  element: <Company />,
                  index: true,
                },
                {
                  path: "about-us",
                  element: <Navigate to="about-us/company" exact replace />,
                },
                {
                  path: "our-team",
                  element: <Leadership />,
                },
              ],
            },

            {
              path: "consulting",
              children: [
                {
                  path: "sap",
                  element: <SAP />,
                  index: true,
                },
                {
                  path: "consulting",
                  element: <Navigate to="consulting/sap" exact replace />,
                },
                {
                  path: "infor",
                  element: <Infor />,
                },
              ],
            },

            {
              path: "products",
              children: [
                {
                  path: "mpdv",
                  element: <Mpdv />,
                  index: true,
                },
                {
                  path: "products",
                  element: <Navigate to="products/mpdv" exact replace />,
                },
              ],
            },

            {
              path: "other-services",
              children: [
                {
                  path: "digital-transformation",
                  element: <DigitalTransformation />,
                  index: true,
                },
                {
                  path: "other-services",
                  element: (
                    <Navigate
                      to="other-services/digital-transformation"
                      exact
                      replace
                    />
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
}

export default GlobalRoutes;
