import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { styled, type SxProps, type Theme } from '@mui/material/styles';
import parseSx from '@/@dront/utils/parseSx';

interface PreviewWrapperProps {
  children: ReactNode;
  variantUpload: 'standard' | 'progress';
  sx?: SxProps<Theme>;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const PreviewWrapper = ({ children, variantUpload, sx, ...rest }: PreviewWrapperProps) => {
  const variantConfig: Record<'standard' | 'progress', { sx: SxProps<Theme> }> = {
    standard: {
      sx: {
        aspectRatio: '4 / 4',
        width: { xs: '160px', sm: '200px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    progress: {
      sx: {}
    }
  };

  const selectedVariant = variantConfig[variantUpload];

  return (
    <Box
      sx={[
        {
          border: ({ palette }) => `1px solid ${palette.grey[300]}`,
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          '& *': { border: '0px solid' }
        },
        ...parseSx(selectedVariant.sx),
        ...parseSx(sx)
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
};

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

interface DragWrapperProps {
  children: ReactNode;
  variantUpload: 'standard' | 'progress';
  sx?: SxProps<Theme>;
}

export const DragWrapper = ({ children, variantUpload, sx, ...rest }: DragWrapperProps) => {
  const variantConfig: Record<'standard' | 'progress', { sx: SxProps<Theme> }> = {
    standard: {
      sx: {
        aspectRatio: '4 / 4',
        width: { xs: '160px', sm: '200px' },
        backgroundColor: theme => theme.palette.grey[100],
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23A1BAC4' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`
      }
    },
    progress: {
      sx: {}
    }
  };

  const selectedVariant = variantConfig[variantUpload];

  return (
    <Box
      sx={[
        {
          borderCollapse: 'separate',
          minHeight: '90px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '16px'
        },
        ...parseSx(selectedVariant.sx),
        ...parseSx(sx)
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
};
