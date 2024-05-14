import React from 'react'
import { SectionContainer } from '../../../pages/website/Services/SAP'
import { useMediaQuery } from '@mui/material';

function Inforsyteline() {
    const Mobile = useMediaQuery((theme) =>
      theme.breakpoints.between("xs", "sm")
    );
    const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <SectionContainer>Inforsyteline</SectionContainer>
  )
}

export default Inforsyteline