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
                  path: "job-openings",
                  element: <Careers />,
                  index: true,
                },
                {
                  path: "join-us",
                  element: <Navigate to="join-us/job-openings" exact replace />,
                },
                {
                  path: "life-@-ptkcs",
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
                  element: (
                    <Navigate to="about-us/job-openings" exact replace />
                  ),
                },
                {
                  path: "our-team",
                  element: <Leadership />,
                },
              ],
            },

            {
              path: "services",
              children: [
                {
                  path: "sap-consulting-services",
                  element: <SAP />,
                  index: true,
                },
                {
                  path: "services",
                  element: (
                    <Navigate
                      to="services/sap-consulting-services"
                      exact
                      replace
                    />
                  ),
                },
                {
                  path: "managed-services-of-infor",
                  element: <Infor />,
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
