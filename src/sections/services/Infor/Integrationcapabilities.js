import React from "react";
import { SectionContainer } from "../../../pages/website/Services/SAP";
import { useMediaQuery } from "@mui/material";

function Integrationcapabilities() {
    const Mobile = useMediaQuery((theme) =>
      theme.breakpoints.between("xs", "sm")
    );
    const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return <SectionContainer>Integrationcapabilities</SectionContainer>;
}

export default Integrationcapabilities;
