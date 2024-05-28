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
            title: "Infor Consulting Services ",
            path: "/consulting/infor",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "SAP Consulting Services",
            path: "/consulting/sap",
            icon: <FiArrowDownRight />,
          },
          {
            id: 3,
            title: "Oracle Netsuite",
            // path: "/consulting/oracle-netsuite",
            icon: <FiArrowDownRight />,
          },
          {
            id: 4,
            title: "Odoo Consulting Services",
            // path: "/consulting/odoo",
            icon: <FiArrowDownRight />,
          },
          {
            id: 5,
            title: "Microsoft Dynamics Consulting",
            // path: "/consulting/microsoft-dynamics",
            icon: <FiArrowDownRight />,
          },
        ],
      },

      {
        id: 2,
        title: "Products",
        submenul3: 2,
        submenu: [
          {
            id: 1,
            title: "MPDV",
            icon: <FiArrowDownRight />,
            path: "/products/mpdv",
          },
          {
            id: 2,
            title: "Finsta",
            icon: <FiArrowDownRight />,
            // path: "/products/finstaa",
          },
          {
            id: 3,
            title: "Odoo",
            icon: <FiArrowDownRight />,
            // path: "/products/odoo",
          },
          {
            id: 4,
            title: "Hexabuild",
            icon: <FiArrowDownRight />,
            // path: "/products/hexabuild",
          },
          {
            id: 5,
            title: "IFCA",
            icon: <FiArrowDownRight />,
            // path: "/products/ifca",
          },
        ],
      },

      {
        id: 3,
        title: "Other Services",
        submenul3: 3,
        submenu: [
          {
            id: 1,
            title: "Application Development",
            path: "/other-services/application-development",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "IT Staffing Services",
            icon: <FiArrowDownRight />,
            path: "/other-services/it-staffing",
          },
          {
            id: 3,
            title: "Applications Managed Services",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services",
          },
          {
            id: 4,
            title:
              "Testing Services  (IVV – Independent Verification & Validation)",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services",
          },
          {
            id: 5,
            title: "Technology Training Services",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services",
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
        title: "Infor Consulting Services ",
        path: "/consulting/infor",
        icon: <FiArrowDownRight />,
      },
      {
        id: 2,
        title: "SAP Consulting Services",
        path: "/consulting/sap",
        icon: <FiArrowDownRight />,
      },
      {
        id: 3,
        title: "Oracle Netsuite",
        path: "/consulting/oracle-netsuite",
        icon: <FiArrowDownRight />,
      },
      {
        id: 4,
        title: "Odoo Consulting Services",
        path: "/consulting/odoo",
        icon: <FiArrowDownRight />,
      },
      {
        id: 5,
        title: "Microsoft Dynamics Consulting",
        path: "/consulting/microsoft-dynamics",
        icon: <FiArrowDownRight />,
      },
    ],
  },

  {
    id: 2,
    title: "Products",
    submenul3: 2,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    icon: <IconArrowRight />,
    submenu: [
      {
        id: 1,
        title: "MPDV",
        icon: <FiArrowDownRight />,
        path: "/products/mpdv",
      },
      {
        id: 2,
        title: "Finsta",
        icon: <FiArrowDownRight />,
        // path: "/solutions/finstaa",
      },
      {
        id: 3,
        title: "Odoo",
        icon: <FiArrowDownRight />,
        // path: "/solutions/odoo",
      },
      {
        id: 4,
        title: "Hexabuild",
        icon: <FiArrowDownRight />,
        // path: "/solutions/hexabuild",
      },
      {
        id: 5,
        title: "IFCA",
        icon: <FiArrowDownRight />,
        // path: "/solutions/ifca",
      },
    ],
  },

  {
    id: 3,
    title: "Other Services",
    submenul3: 3,
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    icon: <IconArrowRight />,
    submenu: [
      {
        id: 1,
        title: "Application Development",
        path: "/other-services/application-development",
        icon: <FiArrowDownRight />,
      },
      {
        id: 2,
        title: "IT Staffing Services",
        icon: <FiArrowDownRight />,
        path: "/other-services/it-staffing",
      },
      {
        id: 3,
        title: "Applications Managed Services",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services",
      },
      {
        id: 4,
        title:
          "Testing Services  (IVV – Independent Verification & Validation)",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services",
      },
      {
        id: 5,
        title: "Technology Training Services",
        icon: <FiArrowDownRight />,
        // path: "/services/infor-consulting-services",
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
