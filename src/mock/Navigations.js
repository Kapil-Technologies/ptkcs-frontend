import { FiArrowDownRight } from "react-icons/fi";
import {
  IconAnalytics,
  IconCareers,
  IconDownArrow,
  IconEnquiries,
  IconLAKCS,
  IconUpArrow,
  IconVisitors,
  IconHash,
  IconDot,
} from "../themes/Icons";

export const SidebarData = [
  {
    id: 1,
    icon: <IconAnalytics />,
    title: "Home",
    path: "/admin/home",
  },

  {
    id: 2,
    icon: <IconVisitors />,
    title: "Our Team",
    path: "/admin/team",
  },
  {
    id: 3,
    icon: <IconEnquiries />,
    title: "Enquiries",
    path: "/admin/enquiries",
  },

  {
    id: 4,
    icon: <IconCareers />,
    iconopen: <IconUpArrow />,
    iconclose: <IconDownArrow />,
    title: "Careers",
    submenuid: 4,
    submenu: [
      {
        id: 1,
        icon: <IconDot />,
        title: "Job Positions",
        subnavitemid: 41,
        path: "/admin/careers/job-positions",
      },
      {
        id: 2,
        icon: <IconDot />,
        subnavitemid: 42,
        title: "Applications",
        path: "/admin/careers/applications",
      },

      {
        id: 3,
        icon: <IconDot />,
        subnavitemid: 43,
        title: "Employees Reviews",
        path: "/admin/careers/employees-reviews",
      },
    ],
  },

  {
    id: 5,
    icon: <IconLAKCS />,
    title: "Life @ KTECH",
    path: "/admin/life-at-ktech",
  },

  {
    id: 6,
    icon: <IconLAKCS />,
    title: "Webinars",
    iconopen: <IconUpArrow />,
    iconclose: <IconDownArrow />,
    submenuid: 6,
    submenu: [
      {
        id: 1,
        icon: <IconDot />,
        subnavitemid: 61,
        title: "Webinars List",
        path: "/admin/webinars/list",
      },
      {
        id: 2,
        icon: <IconDot />,
        subnavitemid: 62,
        title: "Registrations",
        path: "/admin/webinars/registrations",
      },
    ],
  },

  {
    id: 7,
    icon: <IconCareers />,
    iconopen: <IconUpArrow />,
    iconclose: <IconDownArrow />,
    title: "Website",
    submenuid: 7,
    submenu: [
      {
        id: 1,
        icon: <IconDot />,
        subnavitemid: 71,
        title: "Banners",
        path: "/admin/website/banners",
      },
      {
        id: 2,
        icon: <IconDot />,
        subnavitemid: 72,
        title: "Web Pictures",
        path: "/admin/website/web-pictures",
      },

      {
        id: 3,
        icon: <IconDot />,
        subnavitemid: 73,
        title: "Logos",
        path: "/admin/website/logos",
      },
    ],
  },
  {
    id: 8,
    icon: <IconCareers />,
    iconopen: <IconUpArrow />,
    iconclose: <IconDownArrow />,
    title: "Feedbacks",
    submenuid: 8,
    submenu: [
      {
        id: 1,
        icon: <IconDot />,
        subnavitemid: 81,
        title: "Monthly Feedbacks",
        path: "/admin/feedbacks/monthly-feedbacks",
      },
      {
        id: 2,
        icon: <IconDot />,
        subnavitemid: 82,
        title: "Testimonials",
        path: "/admin/feedbacks/testimonials",
      },
    ],
  },
];

// ------------------------------------------------------------- Main Website

export const NavData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    submenudata: 1,
  },

  {
    id: 2,
    title: "About Us",
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenudata: 2,
    submenu: [
      {
        id: 1,
        title: "Company",
        path: "/about-us/company",
      },
      {
        id: 2,
        title: "Leadership",
        path: "/about-us/our-team",
      },
    ],
  },

  {
    id: 3,
    title: "Services",
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenudata: 3,
    submenu: [
      {
        id: 1,
        title: "Professional Services",
        submenul3: 1,
        submenu: [
          {
            id: 1,
            title: "SAP Consulting Services ",
            path: "/services/infor-consulting-services",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "Digital Transformation",
            // path: "/services/infor-consulting-services/ref2",
            icon: <FiArrowDownRight />,
          },
          {
            id: 3,
            title: "Data & Analytics",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref3",
          },
          {
            id: 4,
            title: "Enterprise Software Development",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref4",
          },
          {
            id: 5,
            title: "Automation",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref5",
          },
        ],
      },
      {
        id: 2,
        // title: "Managed Services",
        submenul3: 2,

        submenu: [
          {
            id: 1,
            title: "Managed Services",
            submenul3: 2,
            submenu: [
              {
                id: 1,
                title: "Managed Services for Infor",
                icon: <FiArrowDownRight />,
                path: "/services/managed-services-for-Infor",
              },
            ],
          },
          {
            id: 2,
            title: "Other Services",
            submenul3: 2,
            submenu: [
              {
                id: 1,
                title: "Staffing Services",
                icon: <FiArrowDownRight />,
                // path: "/services/infor-consulting-services",
              },
              {
                id: 2,
                title: "TaaS (Testing as a Service)",
                icon: <FiArrowDownRight />,
                // path: "/services/infor-consulting-services",
              },
            ],
          },
        ],
      },

      {
        id: 3,
        title: "Products",
        submenul3: 3,
        submenu: [
          {
            id: 1,
            title: " KT Finstaa",
            icon: <FiArrowDownRight />,
            // path: "",
          },
          {
            id: 2,
            title: "KT Fleet Management",
            icon: <FiArrowDownRight />,
            // path: "",
          },
          {
            id: 3,
            title: "KT Mobillor",
            icon: <FiArrowDownRight />,
            // path: "",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Join Us",
    // path: "/services",
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenudata: 4,
    submenu: [
      {
        id: 1,
        title: "Job Openings",
        path: "/join-us/job-openings",
      },
      {
        id: 2,
        title: "Events ",
        // path: "/join-us/events",
      },
      {
        id: 3,
        title: "Life @KTECH",
        // path: "/join-us/life-@-ktech",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us ",
    path: "/contact-us",
  },
];

export const Services = [
  {
    id: 1,
    title: "Professional ",
    submenul3: 1,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenu: [
      {
        id: 1,
        title: "SAP Consulting Services ",
        path: "/services/sap-consulting-services",
        icon: <FiArrowDownRight />,
      },
      {
        id: 2,
        title: "Digital Transformation",
        // path: "/services/infor-consulting-services/ref2",
        icon: <FiArrowDownRight />,
      },
      {
        id: 3,
        title: "Data & Analytics",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services/ref3",
      },
      {
        id: 4,
        title: "Enterprise Software Development",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services/ref4",
      },
      {
        id: 5,
        title: "Automation",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services/ref5",
      },
    ],
  },
  {
    id: 2,
    title: "Managed ",
    submenul3: 2,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenu: [
      {
        id: 1,
        title: "Managed Services for Infor",
        icon: <FiArrowDownRight />,
        path: "/services/managed-services-for-Infor",
      },
    ],
  },
  {
    id: 3,
    title: "Other Services",
    submenul3: 3,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenu: [
      {
        id: 1,
        title: "Staffing Services",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services",
      },
      {
        id: 2,
        title: "TaaS (Testing as a Service)",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services",
      },
    ],
  },
  {
    id: 4,
    title: "Products",
    submenul3: 4,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenu: [
      {
        id: 1,
        title: "KT Finstaa",
        icon: <FiArrowDownRight />,
        // path: "",
      },
      {
        id: 2,
        title: "KT Fleet Management",
        icon: <FiArrowDownRight />,
        // path: "",
      },
      {
        id: 3,
        title: "KT Mobillor",
        icon: <FiArrowDownRight />,
        // path: "",
      },
    ],
  },
];
