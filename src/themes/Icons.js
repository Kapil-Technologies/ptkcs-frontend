import {
  FiBarChart,
  FiUsers,
  FiPhoneIncoming,
  FiBriefcase,
  FiImage,
  FiUser,
  FiMail,
  FiSmartphone,
  FiPackage,
  FiEye,
  FiEyeOff,
  FiChevronRight,
  FiChevronLeft,
  FiChevronUp,
  FiChevronDown,
  FiHash,
  FiPlus,
  FiSend,
  FiX,
  FiTrash,
  FiEdit,
  FiMenu,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { styled } from "@mui/material/styles";
import { VscCircleFilled } from "react-icons/vsc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

// ------------------------------------------------------------  Navbar

export const IconAnalytics = styled(FiBarChart)(({ theme, color }) => ({
  marginRight: "15px",
  fontSize: "25px",
}));
export const IconVisitors = styled(FiUsers)(({ theme, color }) => ({
  marginRight: "15px",
  fontSize: "25px",
}));
export const IconEnquiries = styled(FiPhoneIncoming)(({ theme, color }) => ({
  marginRight: "15px",
  fontSize: "25px",
}));
export const IconCareers = styled(FiBriefcase)(({ theme, color }) => ({
  marginRight: "15px",
  fontSize: "25px",
}));
export const IconLAKCS = styled(FiImage)(({ theme, color }) => ({
  marginRight: "15px",
  fontSize: "25px",
}));

// ------------------------------------------------------------  Login & Register

export const IconPerson = styled(FiUser)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconID = styled(FiBriefcase)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconEmail = styled(FiMail)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconMobile = styled(FiSmartphone)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconDepartment = styled(FiPackage)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconPasswordShow = styled(FiEye)(({ theme, color }) => ({
  color: "black",
}));

export const IconPasswordClose = styled(FiEyeOff)(({ theme, color }) => ({
  color: "black",
}));

// ------------------------------------------------------------  Arrows

export const IconRightArrow = styled(FiChevronRight)(
  ({ theme, color, condition }) => ({
    fontSize: condition ? "25px" : "20px",
  })
);

export const IconLeftArrow = styled(FiChevronLeft)(({ theme, color }) => ({
  fontSize: "25px",
}));

export const IconUpArrow = styled(FiChevronUp)(
  ({ theme, color, condition }) => ({
    fontSize: condition ? "25px" : "20px",
  })
);

export const IconDownArrow = styled(FiChevronDown)(
  ({ theme, color, condition }) => ({
    fontSize: condition ? "25px" : "20px",
  })
);

export const IconHash = styled(FiHash)(({ theme, color }) => ({
  fontSize: "20px",
  marginRight: "15px",
}));

export const IconAdd = styled(FiPlus)(({ theme, color }) => ({}));

export const IconSend = styled(FiSend)(({ theme, color }) => ({
  marginRight: "15px",
}));

export const IconClose = styled(FiX)(({ theme, color }) => ({}));
export const IconMenu = styled(FiMenu)(({ theme, color }) => ({}));

export const IconDelete = styled(FiTrash)(({ theme, color }) => ({}));
export const IconEdit = styled(FiEdit)(({ theme, color }) => ({}));
// VscCircleFilled

export const IconDot = styled(VscCircleFilled)(({ theme, color }) => ({}));

// -----------------------------------------------------------------------------  Social Media

export const IconFacebook = styled(FiFacebook)(({ theme, color }) => ({}));

export const IconLinkedin = styled(FiLinkedin)(({ theme, color }) => ({}));

export const IconInstagram = styled(FiInstagram)(({ theme, color }) => ({}));

export const IconYoutube = styled(FiYoutube)(({ theme, color }) => ({}));

export const IconCopyright = styled(AiOutlineCopyrightCircle)(
  ({ theme, color }) => ({})
);
