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

  // {
  //   id: 2,
  //   title: "About Us",
  //   openicon: <IconUpArrow />,
  //   closeicon: <IconDownArrow />,
  //   submenudata: 2,
  //   submenu: [
  //     {
  //       id: 1,
  //       title: "Company",
  //       path: "/about-us/company",
  //     },
  //     {
  //       id: 2,
  //       title: "Leadership",
  //       path: "/about-us/our-team",
  //     },
  //   ],
  // },

  {
    id: 3,
    title: "What we do",
    openicon: <IconUpArrow />,
    closeicon: <IconDownArrow />,
    submenudata: 3,
    submenu: [
      {
        id: 1,
        title: "Services",
        submenul3: 1,
        submenu: [
          {
            id: 1,
            title: "Infor Consulting Services ",
            path: "/services/infor-consulting",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "SAP Consulting Services",
            path: "/services/sap-consulting",
            icon: <FiArrowDownRight />,
          },
          {
            id: 3,
            title: "Oracle Netsuite",
            // path: "/services/oracle-netsuite",
            icon: <FiArrowDownRight />,
          },
          {
            id: 4,
            title: "Odoo Consulting Services",
            // path: "/services/odoo-consulting",
            icon: <FiArrowDownRight />,
          },
          {
            id: 5,
            title: "Microsoft Business Central",
            // path: "/services/microsoft-dynamics-business-central",
            icon: <FiArrowDownRight />,
          },
        ],
      },

      {
        id: 2,
        title: "Products",
        submenul3: 2,
        submenu: [
          // {
          //   id: 1,
          //   title: "MPDV",
          //   icon: <FiArrowDownRight />,
          //   path: "/products/mpdv",
          // },
          {
            id: 2,
            title: "Finsta",
            icon: <FiArrowDownRight />,
            // path: "/products/finsta",
            path: "https://finsta.in/",
            target: "blank",
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
            path: "/products/hexabuild",
            target: "blank",
          },
          {
            id: 5,
            title: "IFCA",
            icon: <FiArrowDownRight />,
            path: "https://www.ifcaindia.com/",
            target: "blank",
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
            // path: "/other-services/application-development",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "IT Staffing Services",
            icon: <FiArrowDownRight />,
            // path: "/other-services/it-staffing",
          },

          {
            id: 3,
            title:
              "Testing Services (IVV – Independent Verification & Validation)",
            icon: <FiArrowDownRight />,
            // path: "/other-services/taas",
          },
          {
            id: 4,
            title: "Technology Training Services",
            icon: <FiArrowDownRight />,
            // path: "/other-services/technology-training-services",
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
      // {
      //   id: 3,
      //   title: "Life @KTECH",
      //   path: "/join-us/life-@-ktech",
      // },
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
    title: "Services",
    submenul3: 1,
    submenu: [
      {
        id: 1,
        title: "Infor Consulting Services ",
        path: "/services/infor-consulting",
        icon: <FiArrowDownRight />,
      },
      {
        id: 2,
        title: "SAP Consulting Services",
        path: "/services/sap-consulting",
        icon: <FiArrowDownRight />,
      },
      {
        id: 3,
        title: "Oracle Netsuite",
        path: "/services/oracle-netsuite",
        icon: <FiArrowDownRight />,
      },
      {
        id: 4,
        title: "Odoo Consulting Services",
        // path: "/services/odoo-consulting",
        icon: <FiArrowDownRight />,
      },
      {
        id: 5,
        title: "Microsoft Business Central",
        // path: "/services/microsoft-dynamics-business-central",
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
        // path: "/products/mpdv",
      },
      {
        id: 2,
        title: "Finsta",
        icon: <FiArrowDownRight />,
        // path: "/products/finsta",
        path: "https://finsta.in/",
        target: "blank",
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
        target: "blank",
      },
      {
        id: 5,
        title: "IFCA",
        icon: <FiArrowDownRight />,
        path: "https://www.ifcaindia.com/",
        target: "blank",
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
        // path: "/other-services/application-development",
        icon: <FiArrowDownRight />,
      },
      {
        id: 2,
        title: "IT Staffing Services",
        icon: <FiArrowDownRight />,
        // path: "/other-services/it-staffing",
      },

      {
        id: 3,
        title:
          "Testing Services  (IVV – Independent Verification & Validation)",
        icon: <FiArrowDownRight />,
        // path: "/other-services/taas",
      },
      {
        id: 4,
        title: "Technology Training Services",
        icon: <FiArrowDownRight />,
        // path: "/other-services/technology-training-services",
      },
    ],
  },
];

export const SocialMediaLinks = [
  {
    id: 1,
    name: "Linkedin",
    icon: <IconLinkedin />,
    link: "https://www.linkedin.com/company/kapil-technologies-indonesia/",
  },
  {
    id: 2,
    name: "Youtube",
    icon: <IconYoutube />,
    link: "https://www.youtube.com/channel/UCMpzQtHi5EKhz0JErnmLTyg",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <IconInstagram />,
    link: "https://www.instagram.com/kapil_technologies_indonesia?igsh=MWtxNWFuOXJhYmJybw==",
  },

  {
    id: 4,
    name: "Facebook",
    icon: <IconFacebook />,
    link: "https://www.facebook.com/people/Kapil-Technologies-Indonesia/100087640681232/",
  },
];
