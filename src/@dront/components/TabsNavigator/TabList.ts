'use client';

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const TabList = styled(Tabs)({
  minHeight: 40,
  '& .MuiTabs-indicator': {
    display: 'none'
  }
});

export default TabList;
