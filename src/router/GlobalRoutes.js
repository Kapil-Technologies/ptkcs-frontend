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
import DigitalTransformation from "../pages/website/Services/Otherservices/DigitalTransformation";
import Mpdv from "../pages/website/Solutions/Mpdv";
import EventDescription from "../sections/Joinus/Events/EventDescription";
import Staffing from "../pages/website/Services/Otherservices/Staffing";
import Testing from "../pages/website/Services/Otherservices/Testing";
import Training from "../pages/website/Services/Otherservices/Training";
import Odoo from "../pages/website/Solutions/Odoo";
import Finsta from '../pages/website/Solutions/Finsta'
import Hexabuild from '../pages/website/Solutions/Hexabuild'
import Ifca from '../pages/website/Solutions/Ifca'
import Oracle from "../pages/website/Services/Oracle";
import OdooConsulting from "../pages/website/Services/OdooConsulting";
import MBC from "../pages/website/Services/MBC";


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
                  path: "job-description/:jobid",
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
                  path: "events",
                  element: <Events />,
                },
                {
                  path: "events/:eventtype/:eventid",
                  element: <EventDescription />,
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
                {
                  path: "oracle-netsuite",
                  element: <Oracle />,
                },
                {
                  path: "odoo",
                  element: <OdooConsulting />,
                },
                {
                  path: "microsoft-dynamics-business-central",
                  element: <MBC />,
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
                {
                  path: "odoo",
                  element: <Odoo />,
                },
                {
                  path: "ifca",
                  element: <Ifca />,
                },
                {
                  path: "hexabuild",
                  element: <Hexabuild />,
                },
                {
                  path: "finsta",
                  element: <Finsta />,
                },
              ],
            },

            {
              path: "other-services",
              children: [
                {
                  path: "application-development",
                  element: <DigitalTransformation />,
                  index: true,
                },
                {
                  path: "other-services",
                  element: (
                    <Navigate
                      to="other-services/application-development"
                      exact
                      replace
                    />
                  ),
                },

                {
                  path: "it-staffing",
                  element: <Staffing />,
                  index: true,
                },
                {
                  path: "taas",
                  element: <Testing />,
                },
                {
                  path: "technology-training-services",
                  element: <Training />,
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
