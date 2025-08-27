import type { ReactNode } from 'react';
import type { TooltipProps as MUITooltipProps } from '@mui/material';

interface TooltipContentProps {
  title: string | ReactNode;
  content?: string | ReactNode;
}

interface TooltipProps extends TooltipContentProps {
  icon?: ReactNode;
  placement?: MUITooltipProps['placement'];
  children?: ReactNode;
}

export type { TooltipContentProps, TooltipProps };
