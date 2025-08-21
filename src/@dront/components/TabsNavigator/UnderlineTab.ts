'use client';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

const UnderlineTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  minHeight: 40,
  minWidth: 100,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`
  },
  '&:not(:first-of-type)': {
    borderLeft: 'none'
  },
  '&:first-of-type': {
    borderTopLeftRadius: theme.shape.borderRadius
  },
  '&:last-of-type': {
    borderTopRightRadius: theme.shape.borderRadius
  }
}));

export default UnderlineTab;
