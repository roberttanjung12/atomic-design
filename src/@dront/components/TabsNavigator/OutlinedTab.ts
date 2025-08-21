'use client';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

const OutlinedTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  minHeight: 40,
  minWidth: 100,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
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

export default OutlinedTab;
