import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PreviewWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  '& *': { border: '0px solid' }
}));

export const ProcessCompress = styled(Box)(({ theme }) => ({
  height: '8px',
  background: theme.palette.grey[300],
  borderRadius: '16px',
  '& .MuiBox-root': {
    height: '100%',
    borderRadius: '16px',
    transition: theme.transitions.create(['width', 'background'], {
      duration: theme.transitions.duration.standard
    })
  }
}));

export const DragWrapper = styled(Box)(() => ({
  borderCollapse: 'separate',
  minHeight: '90px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '16px'
}));
