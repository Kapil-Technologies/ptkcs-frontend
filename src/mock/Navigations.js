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
  IconLinkedin,
  IconYoutube,
  IconInstagram,
  IconFacebook,
  IconArrowRight,
} from "../themes/Icons";

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
    title: "What we do",
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenudata: 3,
    submenu: [
      {
        id: 1,
        title: "Consulting",
        submenul3: 1,
        submenu: [
          {
            id: 1,
            title: "SAP Consulting Services ",
            path: "/services/sap-consulting",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "Digital Transformation",
            path: "/services/digital-transformation",
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
            title: "ERP Software Development",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref4",
          },
          {
            id: 5,
            title: "Automation",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref5",
          },
          {
            id: 6,
            title: "Infor Consulting Services",
            icon: <FiArrowDownRight />,
            path: "/services/infor-consulting",
          },
        ],
      },

      {
        id: 2,
        title: "Other Services",
        submenul3: 3,
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
        id: 3,
        title: "Products",
        submenul3: 3,
        submenu: [
          {
            id: 1,
            title: " Finstaa",
            icon: <FiArrowDownRight />,
            // path: "",
          },
          {
            id: 2,
            title: "Fleet Management",
            icon: <FiArrowDownRight />,
            // path: "",
          },
          {
            id: 3,
            title: "Mobillor",
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
        path: "/join-us/search-jobs",
      },
      {
        id: 2,
        title: "Events ",
        path: "/join-us/events",
      },
      {
        id: 3,
        title: "Life @KTECH",
        path: "/join-us/life-@-ktech",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us ",
    path: "/contact-us",
  },
];

export const ServicesNew = [
  {
    id: 1,
    title: "Consulting",
    submenul3: 1,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    icon: <IconArrowRight />,
    submenu: [
      {
        id: 1,
        title: "SAP Consulting Services ",
        path: "/services/sap-consulting",
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
        title: "ERP Software Development",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services/ref4",
      },
      {
        id: 5,
        title: "Automation",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services/ref5",
      },
      {
        id: 5,
        title: "Infor Consulting Services",
        icon: <FiArrowDownRight />,
        path: "/services/infor-consulting",
      },
    ],
  },

  {
    id: 2,
    title: "Other Services",
    submenul3: 2,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    icon: <IconArrowRight />,
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
    id: 3,
    title: "Products",
    submenul3: 3,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    icon: <IconArrowRight />,
    submenu: [
      {
        id: 1,
        title: " Finstaa",
        icon: <FiArrowDownRight />,
        // path: "",
      },
      {
        id: 2,
        title: "Fleet Management",
        icon: <FiArrowDownRight />,
        // path: "",
      },
      {
        id: 3,
        title: "Mobillor",
        icon: <FiArrowDownRight />,
        // path: "",
      },
    ],
  },
];

export const SocialMediaLinks = [
  {
    id: 1,
    name: "Linkedin",
    icon: <IconLinkedin />,
    link: "",
  },
  {
    id: 2,
    name: "Youtube",
    icon: <IconYoutube />,
    link: "",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <IconInstagram />,
    link: "",
  },
  
  {
    id: 4,
    name: "Facebook",
    icon: <IconFacebook />,
    link: "",
  },
];
